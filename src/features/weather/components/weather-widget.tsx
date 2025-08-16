import { useEffect } from 'react';
import { useWeatherStore, useCurrentTemperature } from '../stores/WeatherStore';
import { HourlyWeather } from './hourly-weather';
import { CurrentWeather } from './current-weather';

export const WeatherWidget = () => {
    const { data, isLoading, error, fetchWeather } = useWeatherStore();
    const currentTemp = useCurrentTemperature();

    useEffect(() => {
        fetchWeather();
    }, []);

    // Add debugging
    useEffect(() => {
        /* console.log('Weather data:', data);
        console.log('Current temp:', currentTemp);
        console.log('Is loading:', isLoading);
        console.log('Error:', error); */
    }, [data, currentTemp, isLoading, error]);

    // Rest of your component...
    return (
        <div className="weather-widget">
            <CurrentWeather baseDelay={2} />
            <HourlyWeather baseDelay={2} />
        </div>
    );
}