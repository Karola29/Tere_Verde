import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Evento } from "../../data/trilhas";

interface EventosEditorProps {
  value: Evento[];
  onChange: (eventos: Evento[]) => void;
}

const EVENTO_VAZIO = {
  titulo: "",
  data: "",
  horario: "",
  duracaoHoras: "",
  descricao: "",
};

export default function EventosEditor({ value, onChange }: EventosEditorProps) {
  const [editando, setEditando] = useState<string | null>(null);
  const [form, setForm] = useState(EVENTO_VAZIO);

  function iniciarNovo() {
    setForm(EVENTO_VAZIO);
    setEditando("novo");
  }

  function iniciarEdicao(evento: Evento) {
    setForm({
      titulo: evento.titulo,
      data: evento.data,
      horario: evento.horario,
      duracaoHoras: String(evento.duracaoHoras ?? ""),
      descricao: evento.descricao ?? "",
    });
    setEditando(evento.id);
  }

  function salvar() {
    if (!form.titulo.trim() || !form.data.trim() || !form.horario.trim())
      return;

    const dados: Evento = {
      id: editando === "novo" ? String(Date.now()) : editando!,
      titulo: form.titulo.trim(),
      data: form.data.trim(),
      horario: form.horario.trim(),
      duracaoHoras: form.duracaoHoras ? Number(form.duracaoHoras) : undefined,
      descricao: form.descricao.trim() || undefined,
    };

    if (editando === "novo") {
      onChange([...value, dados]);
    } else {
      onChange(value.map((e) => (e.id === editando ? dados : e)));
    }

    setEditando(null);
    setForm(EVENTO_VAZIO);
  }

  function remover(id: string) {
    onChange(value.filter((e) => e.id !== id));
  }

  return (
    <View>
      <Text style={styles.label}>Eventos</Text>

      {value.map((evento) => (
        <View key={evento.id} style={styles.eventoCard}>
          <View>
            <Text style={styles.eventoTitulo}>{evento.titulo}</Text>
            <Text style={styles.eventoInfo}>
              {evento.data} · {evento.horario}
            </Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => iniciarEdicao(evento)}
            >
              <Ionicons name="pencil" size={16} color="#555" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => remover(evento.id)}
            >
              <Ionicons name="trash" size={16} color="#C62828" />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {editando ? (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Título do evento"
            value={form.titulo}
            onChangeText={(v) => setForm({ ...form, titulo: v })}
          />
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput, { marginRight: 8 }]}
              placeholder="AAAA-MM-DD"
              value={form.data}
              onChangeText={(v) => setForm({ ...form, data: v })}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="HH:MM"
              value={form.horario}
              onChangeText={(v) => setForm({ ...form, horario: v })}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Duração em horas (opcional)"
            keyboardType="numeric"
            value={form.duracaoHoras}
            onChangeText={(v) => setForm({ ...form, duracaoHoras: v })}
          />
          <TextInput
            style={styles.input}
            placeholder="Descrição (opcional)"
            multiline
            value={form.descricao}
            onChangeText={(v) => setForm({ ...form, descricao: v })}
          />
          <View style={styles.formActions}>
            <TouchableOpacity onPress={() => setEditando(null)}>
              <Text style={[styles.formButtonText, { color: "#999" }]}>
                Cancelar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.formButton} onPress={salvar}>
              <Text style={styles.formButtonText}>Salvar evento</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity style={styles.addLink} onPress={iniciarNovo}>
          <Ionicons name="add-circle-outline" size={18} color="#2E7D32" />
          <Text style={styles.addLinkText}>Adicionar evento</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
