import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "@/components/Navigation";


export const metadata: Metadata = {
  title: "Studio Ahga",
  description: "Aqui vem uma descrição depois",
};

const aisling = localFont({
  src: "./fonts/aisling.otf",
  variable: "--font-aisling",
});

const centuryGothic = localFont({
  src: "./fonts/century-gothic.ttf",
  variable: "--font-century-gothic",
});

const centuryGothicBold = localFont({
  src: "./fonts/century-gothic-bold.ttf",
  variable: "--font-century-gothic-bold",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${aisling.variable} ${centuryGothic.variable} ${centuryGothicBold.variable} antialiased bg-[#fdfbfb] min-h-screen`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}


