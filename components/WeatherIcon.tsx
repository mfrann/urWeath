import { Ionicons } from "@expo/vector-icons";
import { text } from "@/constants/colors";

interface WeatherIconProps {
  icon: string;
  size?: number;
  color?: string;
}

export const WeatherIcon = ({
  icon,
  size = 40,
  color = text.light,
}: WeatherIconProps) => {
  const safeIcon = icon || "cloud-outline";

  return <Ionicons icon={safeIcon} size={size} color={color} />;
};
