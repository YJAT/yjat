import CategoryContent from '@/components/categoryContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '研究生日常｜臺灣青年法律人協會',
  description:
    '青法協研究生日常，法律研究生分享學術生活、論文研究歷程與法律研究所申請心得，為有志深造的法律人提供參考。',
  openGraph: {
    title: '研究生日常｜臺灣青年法律人協會',
    description:
      '青法協研究生日常，法律研究生分享學術生活、論文研究歷程與法律研究所申請心得，為有志深造的法律人提供參考。',
    images: [
      {
        url: '/images/cover.png',
      },
    ],
  },
};

export const revalidate = 3600;

export default async function Page() {
  return (
    <div className='container mx-auto mb-4 px-4 py-8'>
      <h1 className='my-4 text-4xl font-bold'>研究生日常</h1>
      <CategoryContent category='研究生日常' />
    </div>
  );
}
