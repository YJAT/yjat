import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "臺灣青年法律人協會",
  description: "扎根法界，深化參與，守護臺灣",
  robots: "noindex,nofollow",
  openGraph: {
    title: "臺灣青年法律人協會",
    description: "扎根法界，深化參與，守護臺灣",
    images: [{
      url: '/images/cover.png',
    }],
  }
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="zh-TW">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
