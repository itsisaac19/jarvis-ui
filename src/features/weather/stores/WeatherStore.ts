// WeatherStore.ts
import { create } from 'zustand';
import { OpenMeteoWeatherResponse } from '../types/open-meteo-types';
import { getHardCodedData } from './example-data';

const OpenMeteoURL = `https://api.open-meteo.com/v1/forecast?latitude=45.0791&longitude=-93.1472&hourly=temperature_2m,precipitation_probability,apparent_temperature,relative_humidity_2m,uv_index,weather_code,precipitation,wind_speed_10m,wind_direction_10m,cloud_cover&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,is_day,showers,snowfall,weather_code,wind_speed_10m,wind_direction_10m,cloud_cover&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`;
const useHardcodedData = true; // Set to false to disable caching

interface WeatherState {
    // State
    data: OpenMeteoWeatherResponse | null;
    isLoading: boolean;
    error: string | null;
    lastUpdated: Date | null;

    // Actions
    fetchWeather: () => Promise<void>;
    clearError: () => void;
    reset: () => void;
}

export const useWeatherStore = create<WeatherState>((set, get) => ({
    // Initial state
    data: null,
    isLoading: false,
    error: null,
    lastUpdated: null,

    // Actions
    fetchWeather: async () => {
        set({ isLoading: true, error: null });

        try {
            const response = await fetch(OpenMeteoURL);
            if (!response.ok) {
                throw new Error(`Failed to fetch weather data: ${response.status}`);
            }

            const data = useHardcodedData ? getHardCodedData() : await response.json();
            console.log(`Fetched ${useHardcodedData ? 'cached' : 'new'} weather data`);

            set({
                data,
                isLoading: false,
                lastUpdated: new Date(),
                error: null
            });
        } catch (error) {
            set({
                isLoading: false,
                error: error instanceof Error ? error.message : 'Unknown error',
                data: null
            });
        }
    },

    clearError: () => set({ error: null }),

    reset: () => set({
        data: null,
        isLoading: false,
        error: null,
        lastUpdated: null
    }),
}));

// Commonly used derived state
export const useWeatherLoading = () => {
    return useWeatherStore(state => state.isLoading);
};

export const useCurrentData = () => {
    return useWeatherStore(state => state.data?.current ?? null);
}
export const useCurrentUnits = () => {
    return useWeatherStore(state => state.data?.current_units ?? null);
}
export const useCurrentTemperature = () => {
    return useWeatherStore(state => state.data?.current?.temperature_2m ?? null);
};

export const useHourlyData = () => {
    return useWeatherStore(state => state.data?.hourly ?? null);
}

export const useHourlyUnits = () => {
    return useWeatherStore(state => state.data?.hourly_units ?? null);
}

// Define the shape of a single hourly data point
export type HourlyDataPoint = {
    time: string;
    temperature_2m: number;
    precipitation_probability: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    uv_index: number;
    weather_code: number;
    precipitation: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    cloud_cover: number;
};

// Utilities
export const extractHourlyWeatherArray = (data: OpenMeteoWeatherResponse['hourly']): HourlyDataPoint[] | null => {
    if (!data || !data.time.length) return null;

    const length = data.time.length;

    // Type-safe dynamic extraction
    return Array.from({ length }, (_, i) => {
        const result: Partial<HourlyDataPoint> = {};
        
        // Use satisfies to ensure type safety while being dynamic
        (Object.keys(data) as Array<keyof typeof data>).forEach(key => {
            const values = data[key];
            if (Array.isArray(values)) {
                (result as any)[key] = values[i];
            }
        });
        
        return result as HourlyDataPoint;
    });
};
