import { useEffect, useRef, useMemo } from "react";
import { GridItem } from "../../grid/components/grid-item";
import { GridContainer } from "../../grid/components/grid-container";
import { useHourlyData, useHourlyUnits, extractHourlyWeatherArray } from "../stores/WeatherStore";
import dayjs from "dayjs";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

import { Howl } from 'howler';
import { animate, utils, createScope } from "animejs";

interface HourlyWeatherProps {
    baseDelay: number; // Optional prop to control the delay before starting the animation
}

export const HourlyWeather = (props: HourlyWeatherProps) => {
    const { baseDelay } = props;

    const hourlyData = useHourlyData();
    const hourlyUnits = useHourlyUnits();

    const root = useRef<HTMLDivElement>(null);
    const scope = useRef<ReturnType<typeof createScope>>(null);
    
    const hourlyWeatherArray = useMemo(() => {
        if (!hourlyData) return [];
        
        const presentIndex = hourlyData.time.findIndex(timeStr => {
            const now = dayjs();
            const time = dayjs(timeStr);
            return time.isAfter(now, 'hour') || time.isSame(now, 'hour');
        });
        
        return extractHourlyWeatherArray(hourlyData)?.slice(presentIndex, presentIndex + 24) || [];
    }, [hourlyData]);

    const hourlyWeatherGridWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!hourlyData || !hourlyWeatherArray.length) return;

        const scopedAnimationFunction = async () => {
            await new Promise(resolve => setTimeout(resolve, baseDelay * 1000)); // Convert seconds to milliseconds

            const container = hourlyWeatherGridWrapper.current;
            container.addEventListener('wheel', (e) => {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            });

            container.scrollLeft = container.scrollWidth

            gsap.to(container, { opacity: 1, duration: 0.5 }).delay(0.5); // Fade in the container
            animate('.hourly-weather-grid-wrapper', { 
                scrollLeft: 0, 
                duration: 3000, 
                ease: 'inOut(3)',
                delay: 1000
            });

            const items = container.querySelectorAll('.hourly-weather-item');
            const reversedItems = Array.from(items).reverse(); // Reverse the order for animation

            /* eslint-disable @typescript-eslint/no-unused-vars */
            reversedItems.forEach((item, index) => {
                const normalizedIndex = index / reversedItems.length; // 0 to 1
                
                // Sine wave for smooth acceleration/deceleration
                const sineDelay = 1 + Math.sin(normalizedIndex * Math.PI / 2) * 2;
        
                // Quadratic curve (accelerating)
                const quadraticDelay = 1 + normalizedIndex * normalizedIndex * 3;
                
                // Or cubic curve (more dramatic acceleration)
                const cubicDelay = 1 + Math.pow(normalizedIndex, 3) * 4;
                
                // Or inverse quadratic (decelerating)
                const inverseQuadDelay = 1 + (1 - Math.pow(1 - normalizedIndex, 2)) * 3;

                const initialPositionAnimation = animate(item, { 
                    transform: 'translateY(-100px)',
                    duration: 0
                });

                animate(item, {
                    duration: 1500,
                    transform: 'translateY(0px)',
                    delay: (quadraticDelay) * 1000, // Convert to milliseconds
                    ease: 'out(1)',
                    onComplete: (self) => {
                        utils.cleanInlineStyles(self);
                        utils.cleanInlineStyles(initialPositionAnimation);

                        setTimeout(() => {
                            item.classList.remove('hidden');
                        }, 50);

                        const computedVolume = (normalizedIndex) * 0.09;

                        const dropSound = new Howl({
                            src: ['/assets/panel-clack.wav'],
                            volume: computedVolume,
                        });
                        dropSound.play();
                    }
                });
            })
            /* eslint-enable @typescript-eslint/no-unused-vars */
        }

        scope.current = createScope({ root }).add(() => {
            scopedAnimationFunction();
        });
        
        return () => {
            if (scope.current) {
                scope.current.revert();
            }
        };

    }, [hourlyData, hourlyWeatherArray]);

    if (!hourlyData || !hourlyUnits) {
        return <></>;
    }

    return (
        <div ref={root} className="hourly-weather-wrapper">
            <div className="hourly-title">Hourly Weather</div>
            <div ref={hourlyWeatherGridWrapper} className="hourly-weather-grid-wrapper">
                <GridContainer className="hourly-weather-grid">
                    {hourlyWeatherArray.map((dataPoint, index) => (
                        <GridItem key={index} className={`hourly-weather-item hidden ${index === 0 ? 'present' : ''}`}>
                            <div className="time-wrapper">
                                <div className="time">{dayjs(dataPoint.time).format('h A')}</div>
                            </div>
                            <div className="temperature">{dataPoint.temperature_2m}{hourlyUnits.temperature_2m}</div>
                        </GridItem>
                    ))}
                </GridContainer>
            </div>
        </div>
    );
}