import { View, Text, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Evento } from "../../data/trilhas";
import { montarLinkCalendario } from "../../utils/calendar";

const MESES = [
  "JAN",
  "FEV",
  "MAR",
  "ABR",
  "MAI",
  "JUN",
  "JUL",
  "AGO",
  "SET",
  "OUT",
  "NOV",
  "DEZ",
];

interface EventoCardProps {
  evento: Evento;
  localizacao: string;
}

export default function EventoCard({ evento, localizacao }: EventoCardProps) {
  const data = new Date(`${evento.data}T00:00:00`);

  function handleAdicionarCalendario() {
    const url = montarLinkCalendario(evento, localizacao);
    Linking.openURL(url);
  }

  return (
    <View style={styles.card}>
      <View style={styles.dataBox}>
        <Text style={styles.dia}>{data.getDate()}</Text>
        <Text style={styles.mes}>{MESES[data.getMonth()]}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.titulo}>{evento.titulo}</Text>
        <Text style={styles.horario}>
          {evento.horario} · {localizacao}
        </Text>

        {evento.descricao && (
          <Text style={styles.descricao}>{evento.descricao}</Text>
        )}

        <TouchableOpacity
          style={styles.botao}
          onPress={handleAdicionarCalendario}
        >
          <Ionicons name="calendar-outline" size={14} color="#2E7D32" />
          <Text style={styles.botaoTexto}>Adicionar ao calendário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
