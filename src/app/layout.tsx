import "./globals.css";

export const metadata = {
  title: "E-GROW - Transforma tu contenido con videos virales",
  description:
    "Obtén acceso a recursos exclusivos para crear videos que capturan miradas, despiertan interés y viralizan tu mensaje.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body      >
        {children}
      </body>
    </html>
  );
}
