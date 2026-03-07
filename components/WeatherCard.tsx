import { Feather } from "@expo/vector-icons";
import { Dimensions, Text, View } from "react-native";
import tw from "twrnc";
import { WeatherIcon } from "./WeatherIcon";

type FeatherIconName = React.ComponentProps<typeof Feather>["name"];

interface WeatherCardProps {
  condition: string;
  hour: string;
  message: string;
  icon: FeatherIconName;
  temperature: string;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const BASE_WIDTH = 375;
const SCALE = SCREEN_WIDTH / BASE_WIDTH;

const responsiveFontSize = (size: number) => Math.round(size * SCALE);
const responsiveSize = (size: number) => Math.round(size * SCALE);

export default function WeatherCard({
  condition,
  hour,
  message,
  icon,
  temperature,
}: WeatherCardProps) {
  return (
    <View style={tw`flex h-full justify-around px-6`}>
      {/* Seccion 1: el header - Icono y temperatura */}
      <View style={tw`flex flex-row w-full justify-between items-center pt-4`}>
        <WeatherIcon name={icon} />
        <Text
          style={[
            tw`font-bold text-[#000]`,
            { fontSize: responsiveFontSize(56) },
          ]}
        >
          {temperature}°C
        </Text>
      </View>

      {/* Seccion 2: El texto grande */}
      <View style={tw`flex justify-between h-75 text-justify`}>
        <Text
          style={[
            tw`font-semibold h-full`,
            {
              fontSize: responsiveFontSize(65),
              width: responsiveSize(270),
              lineHeight: responsiveFontSize(80),
            },
          ]}
        >
          {message}
        </Text>
        <Text style={[tw`text-gray-700`, { fontSize: responsiveFontSize(14) }]}>
          You can look outside for more information.
        </Text>
      </View>

      {/* SECCION 3: El footer */}
      <View
        style={tw`flex flex-row justify-around items-center text-center border-t pt-3`}
      >
        <Text
          style={[
            tw`text-gray-700`,
            { fontSize: responsiveFontSize(14), width: responsiveSize(140) },
          ]}
        >
          Be prepared for the weather
        </Text>
        <View
          style={[tw`bg-[#000] mx-6`, { width: 1, height: responsiveSize(60) }]}
        />
        <Text
          style={[
            tw`font-semibold `,
            {
              fontSize: responsiveFontSize(54),
            },
          ]}
        >
          {hour}
        </Text>
      </View>
    </View>
  );
}
