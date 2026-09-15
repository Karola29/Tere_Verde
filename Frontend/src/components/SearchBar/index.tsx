import { View, TextInput, TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

interface SearchBarProps extends Omit<TextInputProps, "style"> {
  onSubmit?: () => void;
}

export default function SearchBar({ onSubmit, ...rest }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={18} color="#777" />
      <TextInput
        style={styles.input}
        placeholder="Buscar trilha ou localização"
        placeholderTextColor="#999"
        returnKeyType="search"
        onSubmitEditing={onSubmit}
        {...rest}
      />
    </View>
  );
}
