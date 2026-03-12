import CategoryContent from '@/components/categoryContent';
import { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: '合作專欄｜臺灣青年法律人協會',
  description:
    '青法協合作專欄，與各界法律專業人士及公民團體共同撰文，多元觀點探討法律與社會公義議題。',
  openGraph: {
    title: '合作專欄｜臺灣青年法律人協會',
    description:
      '青法協合作專欄，與各界法律專業人士及公民團體共同撰文，多元觀點探討法律與社會公義議題。',
    images: [
      {
        url: '/images/cover.png',
      },
    ],
  },
};

export default async function Page() {
  return (
    <div className='container mx-auto mb-4 px-4 py-8'>
      <h1 className='my-4 text-4xl font-bold'>合作專欄</h1>
      <CategoryContent category='合作專欄' />
    </div>
  );
}
