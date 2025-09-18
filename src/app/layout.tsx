import type { Metadata } from 'next';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Organization, WebSite, WithContext } from 'schema-dts';
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

const jsonLdOrg: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  telephone: '+886-920-103-608',
  logo: 'https://bera2017.org/images/logo.jpg',
  name: '臺灣青年法律人協會',
  legalName: '社團法人臺灣青年法律人協會',
  alternateName: '青法協',
  description:
    '臺灣青年法律人協會（青法協），前「律師考試改革陣線」，2017年由一群大專校院法律系學生共同發起，反對當年考試院及考選部聯手推動的律師考試規則修惡，強行增加四百分門檻，造成許多考生反覆落榜的不良後果。2020年11月正式立案為「律師考試改革協會」。而為了持續扎根法界、深化公共參與並守護臺灣民主，號召更多青年律師及法律人改組為「臺灣青年法律人協會」。我們將繼續關注考選改革相關動態，並以青年法律人視角參與公共事務，希望能打造一個青年法律人公共參與平台及發聲管道，持續爭取青年世代權益。',
  url: 'https://bera2017.org',
  sameAs: [
    'https://www.facebook.com/YJAT2017/?locale=zh_TW',
    'https://www.instagram.com/yjat_since2017/',
    'https://www.threads.com/@yjat_since2017?hl=zh-tw',
  ],
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
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </body>
    </html>
  );
}
