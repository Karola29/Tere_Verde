import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { styles } from "./styles";

interface BannerProps {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  buttonLabel: string;
  onPress: () => void;
}

export default function Banner({
  image,
  title,
  subtitle,
  buttonLabel,
  onPress,
}: BannerProps) {
  return (
    <ImageBackground
      source={image}
      style={styles.background}
      imageStyle={styles.image}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>{buttonLabel}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
