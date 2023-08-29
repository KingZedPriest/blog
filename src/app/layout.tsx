import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vbtechgist Blog",
  description: "Vbtechgist Blog Create With Next App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#ffffff]`}>
        <section>
        <Header />
        </section>
        <section>{children}</section>
        <section>
          <Footer />
        </section>
      </body>
    </html>
  );
}
