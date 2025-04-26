import { getPostById, getPosts } from '@/lib/notion';
import { format } from 'date-fns';
import { zhTW } from 'date-fns/locale';
import NotionPage from '@/components/notion/NotionPage';

export const revalidate = 3600; // 每小時重新生成頁面

// 生成靜態路徑
export async function generateStaticParams() {
  const posts = await getPosts();
  
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const postData = await getPostById(id);
  
  if (!postData) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">文章未找到</h1>
        <p className="text-gray-600">
          抱歉，我們找不到您請求的文章。它可能已被刪除或移動。
        </p>
      </div>
    );
  }

  const { page, recordMap } = postData;
  
  // 從 Notion 頁面獲取標題
  const title = page.properties.Title.title
    .map((text: any) => text.plain_text)
    .join('');
  
  // 從 Notion 頁面獲取發布日期
  const publishedDate = page.properties.Published?.date?.start
    ? format(new Date(page.properties.Published.date.start), 'yyyy年MM月dd日', { locale: zhTW })
    : '未發布';
  
  // 從 Notion 頁面獲取封面圖片
  const coverImage = page.cover?.external?.url || page.cover?.file?.url || null;

  return (
    <article className="max-w-4xl mx-auto">
      {/* 文章標題和元信息 */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <div className="text-gray-600">發布於 {publishedDate}</div>
      </div>
      
      {/* 封面圖片 */}
      {coverImage && (
        <div className="mb-8">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )}
      
      {/* 使用客戶端 NotionPage 組件來渲染 Notion 內容 */}
      <NotionPage recordMap={recordMap} />
    </article>
  );
}
