import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EnROOT PDF Generator',
  description: 'Create your Memories!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-text antialiased">{children}</body>
    </html>
  );
}
