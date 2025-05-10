import type { Metadata } from "next";
import "./globals.css";
import { WebSite, WithContext } from "schema-dts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://schema.org'),
  title: "臺灣青年法律人協會",
  description: "扎根法界，深化參與，守護臺灣",
  openGraph: {
    title: "臺灣青年法律人協會",
    description: "扎根法界，深化參與，守護臺灣",
    images: [{
      url: '/images/cover.png',
    }],
  }
};

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://bera2017.org",
  "author": "臺灣青年法律人協會",
  "abstract": "扎根法界，深化參與，守護臺灣",
  "description": "扎根法界，深化參與，守護臺灣"
}

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </html>
  );
}
