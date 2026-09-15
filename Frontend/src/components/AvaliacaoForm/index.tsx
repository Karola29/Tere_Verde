import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import StarRating from "../StarRating";

interface AvaliacaoFormProps {
  onSubmit: (nota: number, comentario: string) => void;
  loading?: boolean;
}

export default function AvaliacaoForm({
  onSubmit,
  loading = false,
}: AvaliacaoFormProps) {
  const [nota, setNota] = useState(0);
  const [comentario, setComentario] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit() {
    if (nota === 0 || comentario.trim().length === 0) {
      setErro("Selecione uma nota e escreva um comentário.");
      return;
    }

    setErro("");
    onSubmit(nota, comentario.trim());
    setNota(0);
    setComentario("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Deixe sua avaliação</Text>
        <StarRating value={nota} onChange={setNota} size={18} />
      </View>

      <TextInput
        style={styles.textArea}
        placeholder="Escreva um comentário..."
        placeholderTextColor="#999"
        multiline
        value={comentario}
        onChangeText={setComentario}
      />

      {erro.length > 0 && <Text style={styles.errorText}>{erro}</Text>}

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleSubmit} disabled={loading}>
          <Text style={{ fontSize: 13, fontWeight: "600", color: "#2E7D32" }}>
            {loading ? "Enviando..." : "Enviar"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
