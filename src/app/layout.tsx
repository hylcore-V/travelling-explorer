import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AppContext from "@/context/AppContext";

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mountain Slider",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppContext>
      <html lang="en">
        <body className={montserrat.className}>
          <main className="flex flex-col min-h-screen bg-mainBcg">
            {children}
          </main>
        </body>
      </html>
    </AppContext>
  );
}
