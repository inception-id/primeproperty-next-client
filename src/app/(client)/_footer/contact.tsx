export const FooterContact = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold">Kontak</div>

      <div className="text-sm flex flex-col gap-2 text-muted-foreground">
        <p>Email: primeproagent@gmail.com</p>
        <p>Telp: 0821-1616-2995</p>
        <span className="flex gap-1">
          <p>Alamat:</p>
          <span className="flex flex-col gap-1">
            <p>Kemang Icon Jakarta</p>
            <p>Kemang Raya No 1, Jakarta Selatan</p>
            <p>12730</p>
          </span>
        </span>
      </div>
    </div>
  );
};
