/**
 * Mapea las condiciones del clima de OpenWeatherMap a íconos de Feather Icons
 * @see https://openweathermap.org/weather-conditions
 * @see https://icons.expo.fyi/IconDriver/demos/Feather
 */
export const getWeatherIcon = (condition: string): string => {
  const iconMap: Record<string, string> = {
    Clear: 'sun',
    Clouds: 'cloud',
    Rain: 'cloud-rain',
    Drizzle: 'cloud-drizzle',
    Thunderstorm: 'cloud-lightning',
    Snow: 'cloud-snow',
    Mist: 'cloud',
    Smoke: 'cloud',
    Haze: 'sun',
    Dust: 'wind',
    Fog: 'cloud',
    Sand: 'wind',
    Ash: 'cloud',
    Squall: 'cloud-rain',
    Tornado: 'alert-triangle',
  };

  return iconMap[condition] || iconMap.Clouds;
};
