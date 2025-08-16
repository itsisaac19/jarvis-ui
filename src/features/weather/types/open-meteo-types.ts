export interface OpenMeteoWeatherResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    
    current_units: {
        time: string;
        interval: string;
        temperature_2m: string;
        relative_humidity_2m: string;
        apparent_temperature: string;
        precipitation: string;
        rain: string;
        is_day: string;
        showers: string;
        snowfall: string;
        weather_code: string;
        wind_speed_10m: string;
        wind_direction_10m: string;
        cloud_cover: string;
    };
    
    current: {
        time: string;
        interval: number;
        temperature_2m: number;
        relative_humidity_2m: number;
        apparent_temperature: number;
        precipitation: number;
        rain: number;
        is_day: number;
        showers: number;
        snowfall: number;
        weather_code: number;
        wind_speed_10m: number;
        wind_direction_10m: number;
        cloud_cover: number;
    };
    
    hourly_units: {
        time: string;
        temperature_2m: string;
        precipitation_probability: string;
        apparent_temperature: string;
        relative_humidity_2m: string;
        uv_index: string;
        weather_code: string;
        precipitation: string;
        wind_speed_10m: string;
        wind_direction_10m: string;
        cloud_cover: string;
    };
    
    hourly: {
        time: string[];
        temperature_2m: number[];
        precipitation_probability: number[];
        apparent_temperature: number[];
        relative_humidity_2m: number[];
        uv_index: number[];
        weather_code: number[];
        precipitation: number[];
        wind_speed_10m: number[];
        wind_direction_10m: number[];
        cloud_cover: number[];
    };
}