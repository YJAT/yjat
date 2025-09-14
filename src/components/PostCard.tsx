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
  const coverImage =
    post.cover?.external?.url || post.cover?.file?.url
      ? `/images/${post.properties?.Slug.rich_text[0]?.plain_text}.webp`
      : '/images/logo.jpg';

  const author = post.properties.Author?.rich_text[0]?.plain_text || '不具名';

  const tag = post.properties.Category.select?.name || '無分類';

  const postSlug = post.properties?.Slug.rich_text[0]?.plain_text;

  return (
    <div className='relative bg-white shadow-md dark:bg-zinc-700'>
      {showTag && (
        <div className='absolute -top-2 -left-2 inline-block bg-slate-700 px-4 font-semibold text-white'>
          {tag}
        </div>
      )}
      <div className='hidden h-48 overflow-hidden md:block'>
        <img src={coverImage} alt={title} className='h-full w-full object-cover' />
      </div>
      <div className='px-4 py-6'>
        <div className='hidden items-center justify-between md:flex'>
          <p className='mb-2 text-sm text-gray-500 dark:text-white'>{author}</p>
          <p className='mb-2 text-sm text-gray-500 dark:text-white'>{publishedDate}</p>
        </div>
        <h3 className='relative mb-2 line-clamp-1 text-xl font-semibold text-gray-800 dark:text-white'>
          <Link href={`/posts/${postSlug || 'content_' + post.id}`} className='hover:underline'>
            {title}
          </Link>
        </h3>
        <p className='line-clamp-3 h-18 text-gray-600 dark:text-white'>{excerpt}</p>
        <div className='mt-4'>
          <Link
            href={`/posts/${postSlug || 'content_' + post.id}`}
            className='font-bold hover:underline'
          >
            閱讀更多 →
          </Link>
        </div>
      </div>
    </div>
  );
}
