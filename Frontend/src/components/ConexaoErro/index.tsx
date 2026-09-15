import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

interface ConexaoErroProps {
  mensagem: string;
  onTentarNovamente: () => void;
}

export default function ConexaoErro({
  mensagem,
  onTentarNovamente,
}: ConexaoErroProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="cloud-offline-outline" size={32} color="#C62828" />
      <Text style={styles.title}>Sem conexão com o servidor</Text>
      <Text style={styles.mensagem}>{mensagem}</Text>

      <TouchableOpacity style={styles.botao} onPress={onTentarNovamente}>
        <Ionicons name="refresh" size={14} color="#fff" />
        <Text style={styles.botaoTexto}>Tentar novamente</Text>
      </TouchableOpacity>
    </View>
  );
}
