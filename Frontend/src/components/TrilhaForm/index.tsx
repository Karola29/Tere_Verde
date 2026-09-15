import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import ImageGalleryPicker from "../ImageGalleryPicker";
import EventosEditor from "../EventosEditor";
import { Trilha, Dificuldade } from "../../data/trilhas";

const DIFICULDADES: Dificuldade[] = ["Fácil", "Moderada", "Difícil"];

export type TrilhaFormData = Omit<Trilha, "id" | "avaliacoes">;

interface TrilhaFormProps {
  initialData?: Trilha;
  onSubmit: (dados: TrilhaFormData) => void;
  onDelete?: () => void;
  loading?: boolean;
}

interface Erros {
  nome?: string;
  localizacao?: string;
  distanciaKm?: string;
  duracaoMin?: string;
}

export default function TrilhaForm({
  initialData,
  onSubmit,
  onDelete,
  loading,
}: TrilhaFormProps) {
  const [nome, setNome] = useState(initialData?.nome ?? "");
  const [localizacao, setLocalizacao] = useState(
    initialData?.localizacao ?? "",
  );
  const [imagem, setImagem] = useState(
    initialData?.imagem ?? "trilha-suspensa",
  );
  const [dificuldade, setDificuldade] = useState<Dificuldade>(
    initialData?.dificuldade ?? "Fácil",
  );
  const [distanciaKm, setDistanciaKm] = useState(
    String(initialData?.distanciaKm ?? ""),
  );
  const [duracaoMin, setDuracaoMin] = useState(
    String(initialData?.duracaoMin ?? ""),
  );
  const [descricao, setDescricao] = useState(initialData?.descricao ?? "");
  const [tipoTerreno, setTipoTerreno] = useState(
    initialData?.tipoTerreno ?? "",
  );
  const [melhorHorario, setMelhorHorario] = useState(
    initialData?.melhorHorario ?? "",
  );
  const [eventos, setEventos] = useState(initialData?.eventos ?? []);
  const [erros, setErros] = useState<Erros>({});

  function validar(): Erros {
    const novosErros: Erros = {};

    if (!nome.trim()) {
      novosErros.nome = "Preencha o nome da trilha.";
    }
    if (!localizacao.trim()) {
      novosErros.localizacao = "Preencha a localização.";
    }

    const distanciaNumero = Number(distanciaKm.replace(",", "."));
    if (!distanciaKm.trim() || isNaN(distanciaNumero) || distanciaNumero <= 0) {
      novosErros.distanciaKm = "Informe uma distância válida.";
    }

    const duracaoNumero = Number(duracaoMin);
    if (!duracaoMin.trim() || isNaN(duracaoNumero) || duracaoNumero <= 0) {
      novosErros.duracaoMin = "Informe uma duração válida.";
    }

    return novosErros;
  }

  function handleSubmit() {
    const novosErros = validar();
    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) {
      Alert.alert(
        "Campos obrigatórios",
        "Preencha corretamente os campos destacados antes de continuar.",
      );
      return;
    }

    onSubmit({
      nome: nome.trim(),
      localizacao: localizacao.trim(),
      imagem,
      dificuldade,
      distanciaKm: Number(distanciaKm.replace(",", ".")),
      duracaoMin: Number(duracaoMin),
      descricao: descricao.trim() || undefined,
      tipoTerreno: tipoTerreno.trim() || undefined,
      melhorHorario: melhorHorario.trim() || undefined,
      eventos,
    });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <ImageGalleryPicker value={imagem} onChange={setImagem} />
      </View>

      <View style={styles.section}>
        <Input
          label="Nome da trilha"
          value={nome}
          onChangeText={setNome}
          placeholder="Ex: Trilha do Mirante"
          error={erros.nome}
        />
      </View>

      <View style={styles.section}>
        <Input
          label="Localização"
          value={localizacao}
          onChangeText={setLocalizacao}
          placeholder="Ex: PARNASO - Sede"
          error={erros.localizacao}
        />
      </View>

      <View style={styles.section}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: "#333",
            marginBottom: 8,
          }}
        >
          Dificuldade
        </Text>
        <View style={styles.dificuldadeRow}>
          {DIFICULDADES.map((d) => (
            <TouchableOpacity
              key={d}
              style={[
                styles.dificuldadeChip,
                dificuldade === d && styles.dificuldadeChipAtivo,
              ]}
              onPress={() => setDificuldade(d)}
            >
              <Text
                style={[
                  styles.dificuldadeText,
                  dificuldade === d && styles.dificuldadeTextAtivo,
                ]}
              >
                {d}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={[styles.section, styles.row]}>
        <View style={styles.half}>
          <Input
            label="Distância (km)"
            type="number"
            value={distanciaKm}
            onChangeText={setDistanciaKm}
            placeholder="Ex: 2.3"
            error={erros.distanciaKm}
          />
        </View>
        <View style={styles.spacer} />
        <View style={styles.half}>
          <Input
            label="Duração (min)"
            type="number"
            value={duracaoMin}
            onChangeText={setDuracaoMin}
            placeholder="Ex: 60"
            error={erros.duracaoMin}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Input
          label="Descrição"
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Descreva a trilha..."
          multiline
        />
      </View>

      <View style={styles.section}>
        <Input
          label="Tipo de terreno"
          value={tipoTerreno}
          onChangeText={setTipoTerreno}
          placeholder="Ex: Piso de madeira"
        />
      </View>

      <View style={styles.section}>
        <Input
          label="Melhor horário"
          value={melhorHorario}
          onChangeText={setMelhorHorario}
          placeholder="Ex: Manhã"
        />
      </View>

      <View style={styles.section}>
        <EventosEditor value={eventos} onChange={setEventos} />
      </View>

      <Button
        title={initialData ? "Salvar alterações" : "Criar trilha"}
        onPress={handleSubmit}
        loading={loading}
      />

      {onDelete && (
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.deleteButtonText}>Excluir trilha</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}
