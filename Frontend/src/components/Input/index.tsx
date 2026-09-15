import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

type InputType = "text" | "email" | "password" | "number";

interface InputProps extends Omit<TextInputProps, "secureTextEntry"> {
  label: string;
  type?: InputType;
  error?: string;
}

export function Input({ label, type = "text", error, ...rest }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const keyboardType =
    type === "email"
      ? "email-address"
      : type === "number"
        ? "numeric"
        : "default";

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={[styles.inputWrapper, error && styles.inputWrapperErro]}>
        <TextInput
          style={styles.input}
          secureTextEntry={isPassword && !showPassword}
          keyboardType={keyboardType}
          autoCapitalize={type === "email" ? "none" : "sentences"}
          placeholderTextColor="#999"
          {...rest}
        />

        {isPassword && (
          <TouchableOpacity
            onPress={() => setShowPassword((prev) => !prev)}
            style={styles.icon}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
