import CategoryContent from '@/components/categoryContent';
import { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: '律師雜談｜臺灣青年法律人協會',
  description:
    '青法協律師雜談，執業律師分享法律實務心得、職涯經驗與法律人日常，適合法律系學生及考生閱讀。',
  openGraph: {
    title: '律師雜談｜臺灣青年法律人協會',
    description:
      '青法協律師雜談，執業律師分享法律實務心得、職涯經驗與法律人日常，適合法律系學生及考生閱讀。',
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
      <h1 className='my-4 text-4xl font-bold'>律師雜談</h1>
      <CategoryContent category='律師雜談' />
    </div>
  );
}
