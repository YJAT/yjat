import Link from 'next/link';
import { format } from 'date-fns';
import { zhTW } from 'date-fns/locale';
import Image from 'next/image';
import { PostCardProps } from '@/types/notion';
export default function PostCard({ post, showTag = false }: PostCardProps) {
  // 從 Notion 頁面獲取標題
  const title = post.properties.Title.title.map((text) => text.plain_text).join('');
  // 從 Notion 頁面獲取摘要
  const excerpt = post.properties.Excerpt?.rich_text
    ? post.properties.Excerpt.rich_text.map((text: any) => text.plain_text).join('')
    : '無摘要';
  
  // 從 Notion 頁面獲取發布日期
  const publishedDate = post.properties.Published?.date?.start
    ? format(new Date(post.properties.Published.date.start), 'yyyy年MM月dd日', { locale: zhTW })
    : '--';
  
  // 從 Notion 頁面獲取封面圖片
  const coverImage = post.cover?.external?.url || post.cover?.file?.url || '/images/logo.jpg';

  const author = post.properties.Author?.rich_text[0]?.plain_text || '不具名';

  const tag = post.properties.Category.select?.name || '無分類';


  return (
    <div className="relative bg-white dark:bg-zinc-700 shadow-md">
      { showTag && <div className='absolute -top-2 -left-2 inline-block text-white bg-slate-700 px-4 font-semibold'>{tag}</div> }
      <div className="h-48 overflow-hidden hidden md:block">
        <Image
          width={500}
          height={500}
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="py-6 px-4">
        <div className='hidden md:flex items-center justify-between'>
          <p className="text-sm text-gray-500 dark:text-white mb-2">{author}</p>
          <p className="text-sm text-gray-500 dark:text-white mb-2">{publishedDate}</p>
        </div>
        <h3 className="relative text-xl font-semibold mb-2 text-gray-800 dark:text-white line-clamp-1">
          <Link href={`/posts/${post.id}`} className="hover:underline">
            {title}
          </Link>
        </h3>
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
