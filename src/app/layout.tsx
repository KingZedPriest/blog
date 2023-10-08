import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vbtechgist Blog",
  description:
    "Explore the latest in technology innovations, business strategies, and insightful political analysis on VBTechGist Blog. Stay informed with in-depth articles and stay ahead in the dynamic world of tech, business, and politics.",
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
