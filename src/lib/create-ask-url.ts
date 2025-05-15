export const createAskUrl = (url?: string) => {
  const whatsappUrl = new URL("https://api.whatsapp.com/send");
  whatsappUrl.searchParams.append("phone", "6282116162995");
  const text = `Hai, saya ingin bertanya-tanya tentang daftar properti di : \n${url ? url : window.location.href}\nMohon informasinya terkait hal tersebut.`;
  whatsappUrl.searchParams.append("text", text);
  return whatsappUrl;
};
