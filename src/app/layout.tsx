import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Oxanium } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
const inter = Oxanium({ subsets: ["latin"] });

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900"
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900"
// });

export const metadata: Metadata = {
  title: "Minimal",
  description: "All your notes. Organized. Effortless.",
  openGraph: {
    images: [
      {
        url: "https://t4.ftcdn.net/jpg/03/75/38/73/360_F_375387396_wSJM4Zm0kIRoG7Ej8rmkXot9gN69H4u4.jpg"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-4 pt-8 antialiased md:px-20`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
