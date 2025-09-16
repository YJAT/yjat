import type { Metadata } from 'next';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { WebSite, WithContext } from 'schema-dts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FooterStatic from '@/components/FooterStatic';

export const metadata: Metadata = {
  metadataBase: new URL('https://bera2017.org'),
  title: '臺灣青年法律人協會',
  description:
    '臺灣青年法律人協會（青法協），前身為律師考試改革協會，青法協將繼續關注考選改革相關動態，並以青年法律人視角參與公共事務，希望能打造一個青年法律人公共參與平台及發聲管道，持續爭取青年世代權益。',
  robots: 'index,follow',
  openGraph: {
    title: '臺灣青年法律人協會',
    description:
      '臺灣青年法律人協會（青法協），前身為律師考試改革協會，青法協將繼續關注考選改革相關動態，並以青年法律人視角參與公共事務，希望能打造一個青年法律人公共參與平台及發聲管道，持續爭取青年世代權益。',
    images: [
      {
        url: '/images/cover.png',
      },
    ],
  },
};

const jsonLd: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://bera2017.org',
  author: '臺灣青年法律人協會',
  abstract: '扎根法界，深化參與，守護臺灣',
  description:
    '臺灣青年法律人協會（青法協），前身為律師考試改革協會，青法協將繼續關注考選改革相關動態，並以青年法律人視角參與公共事務，希望能打造一個青年法律人公共參與平台及發聲管道，持續爭取青年世代權益。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='zh-TW'>
      <body>
        <Header />
        <main>{children}</main>
        <Footer>
          <FooterStatic />
        </Footer>
        <GoogleAnalytics gaId='G-SKHSK96QYN' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
