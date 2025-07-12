import CategoryContent from '@/components/categoryContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '全部文章｜臺灣青年法律人協會',
  description: '扎根法界，深化參與，守護臺灣',
  openGraph: {
    title: '全部文章｜臺灣青年法律人協會',
    description: '扎根法界，深化參與，守護臺灣',
    images: [{
      url: '/images/cover.png',
    }],
  }
};

export const revalidate = 3600;

export default async function Post(){

  return (
    <div className='container mx-auto px-4 py-8 mb-4'>
      <h1 className='text-4xl font-bold my-4'>全部文章</h1>
      <CategoryContent showTag={true}/>
    </div>
  );
}