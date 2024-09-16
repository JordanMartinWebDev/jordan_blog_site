import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import BracketWrapper from "@/components/BracketWrapper/BracketWrapper";
import { makeClassName } from "@/utils/utils";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jordan Martin Web Dev",
  description: "Jordan Martin's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={makeClassName(`${inter.className}`)}>
        <Navbar />
        <main className={makeClassName("container", "mx-auto")}>
          <BracketWrapper size="5xl">{children}</BracketWrapper>
        </main>
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
