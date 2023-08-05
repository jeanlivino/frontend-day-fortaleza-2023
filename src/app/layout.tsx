import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'normalize.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FrontEnd Day - Fortaleza 2023',
  description: 'Um dia inteiro para você ampliar suas conexões',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
