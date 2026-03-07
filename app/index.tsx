import WeatherCard from "@/components/WeatherCard";
import useWeather from "@/hooks/useWeather";
import { getWeatherTheme } from "@/utils/weatherTheme";
import { ImageBackground } from "expo-image";
import { Text, View } from "react-native";
import tw from "twrnc";

export default function Index() {
  const { weather, loading, error } = useWeather();

  if (loading) {
    return (
      <View style={tw`flex bg-white items-center justify-center`}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={tw`flex bg-white items-center justify-center`}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (!weather) {
    return (
      <View style={tw`flex bg-white items-center justify-center`}>
        <Text>No weather data</Text>
      </View>
    );
  }

  const condition = weather.weather[0].main;
  const temperature = Math.round(weather.main.temp).toString();
  const hour = new Date().toLocaleTimeString("en", {
    hour: "numeric",
    hour12: true,
  });

  const theme = getWeatherTheme(condition);

  return (
    <View style={tw`flex bg-white items-center justify-center`}>
      <ImageBackground source={theme.back}>
        <WeatherCard
          condition={condition}
          hour={hour}
          message={theme.message}
          icon={theme.icon}
          temperature={temperature}
        />
      </ImageBackground>
    </View>
  );
}
