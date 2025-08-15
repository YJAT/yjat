import CategoryContent from '@/components/categoryContent';
import { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: '每週評論｜臺灣青年法律人協會',
  description: '扎根法界，深化參與，守護臺灣',
  openGraph: {
    title: '每週評論｜臺灣青年法律人協會',
    description: '扎根法界，深化參與，守護臺灣',
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
      <h1 className='my-4 text-4xl font-bold'>每週評論</h1>
      <CategoryContent category='每週評論' />
    </div>
  );
}
