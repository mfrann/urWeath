// Mapeo de condición climática → gradiente, mensaje e ícono
// Usa los valores exactos que devuelve OpenWeatherMap API

import gradients from "../constants/colors"; //Importar los colores del gradiente

export const getWeatherTheme = (condition: string, isNight = false) => {
  switch (condition) {
    case "Clear":
      return isNight
        ? {
            gradient: gradients.night,
            message: "Noche tranquila",
            icon: "moon",
          }
        : {
            gradient: gradients.sun,
            message: "¡Día soleado!",
            icon: "sun",
          };
    case "Clouds":
      return {
        gradient: gradients.cloudy,
        message: "Nublado",
        icon: "cloud",
      };
    case "Rain":
      return {
        gradient: gradients.rain,
        message: "Día de lluvia",
        icon: "cloud-rain",
      };
    case "Thunderstorm":
      return {
        gradient: gradients.storm,
        message: "Tormenta eléctrica",
        icon: "cloud-lightning",
      };
    case "Snow":
      return {
        gradient: gradients.snow,
        message: "Día nevado",
        icon: "cloud-snow",
      };
    case "Mist":
    case "Haze":
      return {
        gradient: gradients.cloudy,
        message: "Neblinoso",
        icon: "cloud",
      };
    default:
      return {
        gradient: gradients.cloudy,
        message: "Clima variable",
        icon: "cloud",
      };
  }
};

export default getWeatherTheme;
