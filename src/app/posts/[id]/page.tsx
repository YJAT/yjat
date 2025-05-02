import { getPostById, getPosts } from '@/lib/notion';
import { format } from 'date-fns';
import { zhTW } from 'date-fns/locale';
import NotionPage from '@/components/notion/NotionPage';
import Image from 'next/image';

export const revalidate = 3600; // 每小時重新生成頁面

// 生成靜態路徑
export async function generateStaticParams() {
  const posts = await getPosts(null);
  
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const postData : any = await getPostById(id);
  
  
  const { page, recordMap } = postData;
  
  const notionPage = page as any;
  
  const title = notionPage.properties.Title.title.map((text: any) => text.plain_text).join('');
  
  const publishedDate = notionPage.properties.Published?.date?.start ? format(new Date(notionPage.properties.Published.date.start), 'yyyy年MM月dd日', { locale: zhTW }) : '--';
  
  const coverImage = notionPage.cover?.external?.url || notionPage.cover?.file?.url || null;
  
  const author = notionPage.properties.Author?.rich_text[0]?.plain_text || "不具名";
  
  if (!postData) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">文章未找到</h1>
        <p className="text-gray-600 dark:text-white">
          抱歉，我們找不到文章。
        </p>
      </div>
    );
  }else{
    return (
      <article className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white px-4 mb-4 border-l-4 border-l-emerald-500">{title}</h1>
          <div className="text-gray-600 dark:text-gray-200 text-sm">發布於 {publishedDate}</div>
          <div className='text-gray-600 dark:text-gray-200 text-sm mt-2'>作者：{author}</div>
        </div>
  
        {coverImage && (
          <div className="mb-8">
            <Image
              width={1000}
              height={1000}
              src={coverImage}
              alt={title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}
        
        <NotionPage recordMap={recordMap} />
      </article>
    );
  }
}
