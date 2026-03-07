// Mapeo de condición climática → gradiente, mensaje e ícono
// Usa los valores exactos que devuelve OpenWeatherMap API

import { Feather } from "@expo/vector-icons";

type FeatherIconName = React.ComponentProps<typeof Feather>["name"];

interface WeatherTheme {
  back: any;
  message: string;
  icon: FeatherIconName;
}

export const getWeatherTheme = (
  condition: string,
  isNight = false,
): WeatherTheme => {
  switch (condition) {
    case "Clear":
      return isNight
        ? {
            back: require("@/assets/backs/night.png"),
            message: "It's a calm night. finally.",
            icon: "moon",
          }
        : {
            back: require("@/assets/backs/sun.png"),
            message: "Fuck, it's sunny. I hate it.",
            icon: "sun",
          };
    case "Clouds":
      return {
        back: require("@/assets/backs/cloudy.png"),
        message: "It's cloudy. what a surprise.",
        icon: "cloud",
      };
    case "Rain":
      return {
        back: require("@/assets/backs/rain.png"),
        message: "It's fucking raining. now.",
        icon: "cloud-rain",
      };
    case "Thunderstorm":
      return {
        back: require("@/assets/backs/storm.png"),
        message: "It's storming. stay inside.",
        icon: "cloud-lightning",
      };
    case "Snow":
      return {
        back: require("@/assets/backs/snow.png"),
        message: "It's snowing. don't go out.",
        icon: "cloud-snow",
      };
    case "Drizzle":
      return {
        back: require("@/assets/backs/rain.png"),
        message: "It's drizzling. great.",
        icon: "cloud-drizzle",
      };
    case "Fog":
      return {
        back: require("@/assets/backs/cloudy.png"),
        message: "It's foggy. don't go out.",
        icon: "cloud",
      };
    case "Smoke":
    case "Dust":
    case "Sand":
    case "Ash":
      return {
        back: require("@/assets/backs/cloudy.png"),
        message: "The air is fucked right now.",
        icon: "wind",
      };
    case "Squall":
    case "Tornado":
      return {
        back: require("@/assets/backs/storm.png"),
        message: "WTF is happening outside?",
        icon: "alert-triangle",
      };
    case "Mist":
    case "Haze":
      return {
        back: require("@/assets/backs/cloudy.png"),
        message: "It's foggy. don't go out.",
        icon: "cloud",
      };
    default:
      return {
        back: require("@/assets/backs/cloudy.png"),
        message: "Who knows. check outside.",
        icon: "cloud",
      };
  }
};
