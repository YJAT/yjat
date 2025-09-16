import Link from 'next/link';
import { Metadata } from 'next';
import { HomepageSections } from '../page';

export const metadata: Metadata = {
  title: '最新消息｜臺灣青年法律人協會',
  description:
    '「臺灣青年法律人協會」將繼續關注考選改革相關動態，並以青年法律人視角參與公共事務，希望能打造一個青年法律人公共參與平台及發聲管道，持續爭取青年世代權益。',
  openGraph: {
    title: '最新消息｜臺灣青年法律人協會',
    description:
      '「臺灣青年法律人協會」將繼續關注考選改革相關動態，並以青年法律人視角參與公共事務，希望能打造一個青年法律人公共參與平台及發聲管道，持續爭取青年世代權益。',
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
