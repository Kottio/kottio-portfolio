import type { Metadata } from "next";
import { Nunito, Bebas_Neue } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
});
const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "KOTTIO Portofiolio",
  description: "Thomas Cottiaux's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased`}      >
        {children}
      </body>
    </html>
  );
}
