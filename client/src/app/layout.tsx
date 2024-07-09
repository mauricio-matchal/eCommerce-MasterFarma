import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";


const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MasterFarma",
  description: "Farmácia",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={montserrat.className}>
        
        <div className="components">
          <header>
            <Cabecalho />
          </header>

          <main className="children">{children}</main>

          <footer>
            <Rodape />
          </footer>

        </div>

      </body>
    </html>
  );
}
