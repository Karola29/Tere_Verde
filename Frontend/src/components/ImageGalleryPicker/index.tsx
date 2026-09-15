import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { imageGallery, imageGalleryKeys } from "../../data/imageGallery";

interface ImageGalleryPickerProps {
  value: string;
  onChange: (key: string) => void;
}

export default function ImageGalleryPicker({
  value,
  onChange,
}: ImageGalleryPickerProps) {
  return (
    <View>
      <Text style={styles.label}>Imagem da trilha</Text>
      <View style={styles.grid}>
        {imageGalleryKeys.map((key) => (
          <TouchableOpacity
            key={key}
            style={[styles.thumb, value === key && styles.thumbSelected]}
            onPress={() => onChange(key)}
          >
            <Image
              source={imageGallery[key]}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
