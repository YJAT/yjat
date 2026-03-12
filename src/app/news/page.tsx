import Link from 'next/link';
import { Metadata } from 'next';
import HomepageSections from '@/components/homepageSections';

export const metadata: Metadata = {
  title: '最新消息｜臺灣青年法律人協會',
  description: '臺灣青年法律人協會最新消息，包含活動公告、聲明稿及協會近況報導。',
  openGraph: {
    title: '最新消息｜臺灣青年法律人協會',
    description: '臺灣青年法律人協會最新消息，包含活動公告、聲明稿及協會近況報導。',
    images: [
      {
        url: '/images/cover.png',
      },
    ],
  },
};

export default function News() {
  return (
    <div className='container mx-auto px-4 py-20'>
      <div className='bg-gray-50 py-12 dark:bg-zinc-700'>
        <h1 className='mb-4 text-center text-2xl font-bold text-gray-600 dark:text-zinc-200'>
          目前還沒有最新消息
        </h1>
        <Link
          href='/'
          className='m-auto block w-fit text-center text-gray-600 hover:underline dark:text-zinc-200'
        >
          回首頁
        </Link>
      </div>
      <div className='mt-10'>
        <HomepageSections showTag={true} link='/posts' sectionTitle='檢視最新文章' />
      </div>
    </div>
  );
}
