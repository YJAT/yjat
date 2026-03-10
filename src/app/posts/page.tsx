import CategoryContent from '@/components/categoryContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '全部文章｜臺灣青年法律人協會',
  description:
    '瀏覽臺灣青年法律人協會所有文章，涵蓋時事評論、每週評論、律師雜談、合作專欄、研究生日常等多元法律議題。',
  openGraph: {
    title: '全部文章｜臺灣青年法律人協會',
    description:
      '瀏覽臺灣青年法律人協會所有文章，涵蓋時事評論、每週評論、律師雜談、合作專欄、研究生日常等多元法律議題。',
    images: [
      {
        url: '/images/cover.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const revalidate = 3600;

export default async function Post() {
  return (
    <div className='container mx-auto mb-4 px-4 py-8'>
      <h1 className='my-4 text-4xl font-bold'>全部文章</h1>
      <CategoryContent showTag={true} />
    </div>
  );
}
