import React from "react";
import "./styles.css";
import Header from "@/components/Header/Header";

import { Space_Grotesk } from "next/font/google";
import Footer from "@/components/footer/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  description: "En filmklubb-Filmen er slutt. Samtalen begynner",
  title: "Rulletekst",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="no">
      <body className={spaceGrotesk.variable}>
        <div className="app-container">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
