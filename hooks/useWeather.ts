//maneja toda la logica de ubicacion y API
//Retorna los datos listos para usar.

import * as Location from "expo-location";
import { useEffect, useState } from "react";

export interface WeatherData {
  weather: { main: string; description: string; icon: string }[];
  main: { temp: number; feels_like: number; humidity: number };
  dt: number;
  name: string;
}

const useWeather = () => {
  //estados
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //cuando aparece por primera vez, ejecuta la funcion una sola vez.
  useEffect(() => {
    //el async ejecuta funcion que va a tomar tiempo
    const fetchWeather = async () => {
      try {
        //codigo que puede fallar
        //1. Pedir permisos
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setError("Permission to access location was denied");
          setLoading(false);
          return;
        }
        //2.Obtener ubicacion
        const location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords;

        //3. fetch a la api
        const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);

        //4.setWeather con los datos
        console.log(data);
      } catch (err: any) {
        //si algo falla, guarda el error
        setError(err.message);
      } finally {
        //pas elo que pase deja de cargar
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return { weather, loading, error };
};

export default useWeather;
