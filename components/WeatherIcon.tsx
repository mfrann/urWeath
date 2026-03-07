import { text } from "@/constants/colors";
import { Feather } from "@expo/vector-icons";

type FeatherIconName = React.ComponentProps<typeof Feather>["name"];
interface WeatherIconProps {
  name: FeatherIconName;
  size?: number;
  color?: string;
}

export const WeatherIcon = ({
  name,
  size = 100,
  color = text.dark,
}: WeatherIconProps) => {
  const safeIcon = name || "cloud-outline";

  return <Feather name={safeIcon} size={size} color={color} />;
};
