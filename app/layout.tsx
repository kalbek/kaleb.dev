import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Themes from "@/components/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description:
    "Kaleb is a passionate software developer with years of experience, specializing with React.js, Next.js, Tailwind CSS, and Bootstrap.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-magical`}>
        {children}
        <Themes />
      </body>
    </html>
  );
}
