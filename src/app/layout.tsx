import type { Metadata } from "next";
import { Header, Footer, styles } from "./components/MainImports";
import { Inter, Raleway } from "next/font/google";
import { Providers } from "../../lib/providers";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Providers>
          <section className={styles.container}>
            <Header />
            <main className={styles.main}>
              {children}
            </main>
          </section>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
