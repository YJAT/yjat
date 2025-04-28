import Link from 'next/link';
import { format } from 'date-fns';
import { zhTW } from 'date-fns/locale';

type PostCardProps = {
  post: any; // 從 Notion API 獲取的文章數據
};

export default function PostCard({ post }: PostCardProps) {
  // 從 Notion 頁面獲取標題
  const title = post.properties.Title.title.map((text: any) => text.plain_text).join('');
  
  // 從 Notion 頁面獲取摘要
  const excerpt = post.properties.Excerpt?.rich_text
    ? post.properties.Excerpt.rich_text.map((text: any) => text.plain_text).join('')
    : '無摘要';
  
  // 從 Notion 頁面獲取發布日期
  const publishedDate = post.properties.Published?.date?.start
    ? format(new Date(post.properties.Published.date.start), 'yyyy年MM月dd日', { locale: zhTW })
    : '--';
  
  // 從 Notion 頁面獲取封面圖片
  const coverImage = post.cover?.external?.url || post.cover?.file?.url || '/images/default-cover.png';

  const author = post.properties.Author?.rich_text[0]?.plain_text || "不具名";

  return (
    <div className="bg-white dark:bg-[#211f29] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-6">
        <div className='flex items-center justify-between'>
          <p className="text-sm text-gray-500 dark:text-white mb-2">{author}</p>
          <p className="text-sm text-gray-500 dark:text-white mb-2">{publishedDate}</p>
        </div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
          <Link href={`/posts/${post.id}`} className="hover:underline">
            {title}
          </Link>
        </h2>
        <p className="text-gray-600 dark:text-white line-clamp-3 h-18">{excerpt}</p>
        <div className="mt-4">
          <Link href={`/posts/${post.id}`} className="font-bold hover:underline">
            閱讀更多 →
          </Link>
        </div>
      </div>
    </div>
  );
}
