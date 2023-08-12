import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import 'normalize.css';
import './global.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
