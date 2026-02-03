import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <title>Bailando Music & Dance Bar | Latin Club Mersin</title>
        <meta
          name="description"
          content="Mersin Yenişehir'de Latin dans, canlı müzik ve gece eğlencesi. Bailando Music & Dance Bar."
        />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
