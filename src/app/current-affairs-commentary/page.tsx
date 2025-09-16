import CategoryContent from '@/components/categoryContent';
import { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: '時事評論｜臺灣青年法律人協會',
  description: '「臺灣青年法律人協會」將繼續關注考選改革相關動態，並以青年法律人視角參與公共事務，希望能打造一個青年法律人公共參與平台及發聲管道，持續爭取青年世代權益。',
  openGraph: {
    title: '時事評論｜臺灣青年法律人協會',
    description: '「臺灣青年法律人協會」將繼續關注考選改革相關動態，並以青年法律人視角參與公共事務，希望能打造一個青年法律人公共參與平台及發聲管道，持續爭取青年世代權益。',
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
      <h1 className='my-4 text-4xl font-bold'>時事評論</h1>
      <CategoryContent category='時事評論' />
    </div>
  );
}
