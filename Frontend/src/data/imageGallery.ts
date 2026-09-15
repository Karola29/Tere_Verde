export const imageGallery: Record<string, any> = {
  "trilha-suspensa": require("../../assets/images/trilha-suspensa.jpg"),
  "estrada-barragem": require("../../assets/images/estrada-barragem.jpg"),
  "trilha-cartao-postal": require("../../assets/images/trilha-cartao-postal.jpg"),
  "pedra-alpina": require("../../assets/images/pedra-alpina.jpg"),
  "pedra-sino": require("../../assets/images/pedra-sino.jpg"),
};

export function resolveImage(key: string) {
  return imageGallery[key] ?? imageGallery["trilha-suspensa"];
}

export const imageGalleryKeys = Object.keys(imageGallery);
