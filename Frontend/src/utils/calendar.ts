import { Evento } from "../data/trilhas";

function formatarData(data: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    data.getFullYear() +
    pad(data.getMonth() + 1) +
    pad(data.getDate()) +
    "T" +
    pad(data.getHours()) +
    pad(data.getMinutes()) +
    "00"
  );
}

export function montarLinkCalendario(evento: Evento, localizacao: string) {
  const inicio = new Date(`${evento.data}T${evento.horario}:00`);
  const fim = new Date(inicio);
  fim.setHours(fim.getHours() + (evento.duracaoHoras ?? 3));

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: evento.titulo,
    dates: `${formatarData(inicio)}/${formatarData(fim)}`,
    details: evento.descricao ?? "",
    location: localizacao,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
