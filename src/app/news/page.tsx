import Link from 'next/link';
import { HomepageSections } from '../page';

export default function News() {
  return (
    <div className='container mx-auto px-4 py-20'>
      <div className='bg-gray-50 dark:bg-zinc-700 py-12'>
        <h1 className='mb-4 text-2xl font-bold text-gray-600 dark:text-zinc-200 text-center'>目前還沒有最新消息</h1>
        <Link href="/" className='text-gray-600 dark:text-zinc-200 hover:underline text-center block w-fit m-auto'>回首頁</Link>
      </div>
      <div className="mt-10">
        <HomepageSections
          showTag={true}
          link='/posts'
          sectionTitle='檢視最新文章'
          />
      </div>
  </div>
  );
}
