import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthVerify from "./components/AuthVerify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projeto Mowgly",
  description:
    "Projeto Login-Logout e Estrutura Dashboard Simples para um site de jogo RPG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <AuthVerify />
        {children}
      </body>
    </html>
  );
}
