import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Restaurante Micaxu',
  description: 'Buffet por Kg, porções e bebidas em Boituva/SP.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
