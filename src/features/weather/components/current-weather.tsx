import { extractHourlyWeatherArray, useCurrentData, useCurrentUnits, useHourlyData, useHourlyUnits } from "../stores/WeatherStore"
import { useEffect, useRef, useMemo } from "react";
import { animate, createScope } from "animejs";
import dayjs from "dayjs";

import { Howl } from 'howler';

interface CurrentWeatherProps {
    baseDelay: number; // Optional prop to control the delay before starting the animation
}

export const CurrentWeather = (props: CurrentWeatherProps) => {
    const { baseDelay } = props;

    const currentData = useCurrentData();
    const currentUnits = useCurrentUnits();

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

    const playPulses = async (delay: number) => {
        await new Promise(resolve => setTimeout(resolve, delay)); // Delay before starting the animation

        new Howl({
            src: ['/assets/bar-pulse-01.wav'],
            volume: 0.4
        }).play();

        new Howl({
            src: ['/assets/bar-pulse-02.wav'],
            volume: 0.4
        }).play();
        new Howl({
            src: ['/assets/bar-pulse-03.wav'],
            volume: 0.4
        }).play();
    }

    useEffect(() => {
        if (!currentData || !hourlyWeatherArray.length) return;

        const scopedAnimationFunction = async () => {
            await new Promise(resolve => setTimeout(resolve, baseDelay * 1000));
            
            animate('.current-weather-inner', {
                opacity: 1,
                duration: 1000,
                delay: 500,
            })
            
            animate('.hum-bar-value', {
                width: `${currentData.relative_humidity_2m}%`,
                opacity: 1,
                duration: 3000, // animejs uses milliseconds
                ease: 'inOut(3)',
                begin: () => {
                    playPulses(700);
                }
            });

            animate('.precip-chance-bar-value', {
                width: `${hourlyWeatherArray[0]?.precipitation_probability || 0}%`,
                opacity: 1,
                duration: 3000,
                ease: 'inOut(3)',
            });

            let currentUV = hourlyWeatherArray[0]?.uv_index || 0;
            if (currentUV > 12) currentUV = 12;

            animate('.uv-index-bar-value', {
                width: `${(currentUV / 12) * 100}%`,
                opacity: 1,
                duration: 3000,
                ease: 'inOut(3)',
            });
        }

        scope.current = createScope({ root }).add(() => {
            scopedAnimationFunction();
        });

        return () => {
            if (scope.current) {
                scope.current.revert();
            }
        };

    }, [currentData, hourlyWeatherArray]);

    if (!currentData) {
        return <></>
    }

    return (
        <div ref={root} className="current-weather">
            <div className="current-weather-inner">
            <div className="current-temp">{currentData.temperature_2m}°F</div>

            <div className="current-weather-bars">
                <div className="hum-information bar-information">
                    <div className="hum-label bar-label">Humidity — {currentData.relative_humidity_2m}{currentUnits.relative_humidity_2m}</div>
                    <div className="hum-bar-wrapper bar-wrapper">
                        <div className="hum-bar bar">
                            <div className="hum-bar-value bar-value"></div>
                        </div>
                    </div>
                </div>

                <div className="precip-chance-information bar-information">
                    <div className="precip-chance-label bar-label">Precipitation Chance — {hourlyWeatherArray[0].precipitation_probability}{hourlyUnits.precipitation_probability}</div>
                    <div className="precip-chance-bar-wrapper bar-wrapper">
                        <div className="precip-chance-bar bar">
                            <div className="precip-chance-bar-value bar-value"></div>
                        </div>
                    </div>
                </div>

                <div className="uv-index-information bar-information">
                    <div className="bar-label">UV Index - {hourlyWeatherArray[0].uv_index}</div>
                    <div className="bar-wrapper">
                        <div className="bar">
                            <div className="uv-index-bar-value bar-value"></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}