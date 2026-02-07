import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const newFont = localFont({
  src: [
    {
      path: '../public/fonts/GowunBatang-Regular.ttf',
      weight: '400',
    },
    {
      path: '../public/fonts/GowunBatang-Bold.ttf',
      weight: '700',
    },
  ],
})

export const metadata: Metadata = {
  title: "coming soon - bachyyy",
  description: "Bạch Quốc Anh, known professionally as Bachyyy, is a Vietnamese Music Producer and Songwriter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={newFont.className}
      >
        {children}
      </body>
    </html>
  );
}
