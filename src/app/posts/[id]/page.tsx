import { getPostById, getPostBySlug, getPosts } from '@/lib/notion';
import { format } from 'date-fns';
import { zhTW } from 'date-fns/locale';
import NotionPage from '@/components/notion/NotionPage';
import Image from 'next/image';
import { cache } from 'react';
import { Metadata } from 'next';
import { NewsArticle, WithContext } from 'schema-dts';
import { NotionPost } from '@/types/notion';

const getPostWithCache = cache(async (id: string) => {
  return await getPostById(id);
});

const getPostSlugWithCache = cache(async (id: string) => {
  return await getPostBySlug(id);
});

async function getPostHandler(id: string) {
  if (id.startsWith('content_')) {
    const postId = id.split('content_')[1];
    return await getPostWithCache(postId);
  } else {
    return await getPostSlugWithCache(id);
  }
}

export const revalidate = 3600; // 每小時重新生成頁面

// 生成靜態路徑
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    id: post.properties.Slug.rich_text[0]?.plain_text || 'content_' + post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const postData = await getPostHandler(id);

  if (postData) {
    const { page } = postData;
    const notionPage: NotionPost = page as any;

    const title = notionPage.properties.Title.title.map((text: any) => text.plain_text).join('');
    const description = notionPage.properties.Excerpt?.rich_text
      ? notionPage.properties.Excerpt.rich_text.map((text: any) => text.plain_text).join('')
      : '無摘要';
    const author = notionPage.properties.Author?.rich_text[0]?.plain_text || '臺灣青年法律人協會';

    return {
      title: `${title} | 臺灣青年法律人協會`,
      description,
      authors: [{ name: author }],
      openGraph: {
        title,
        description,
        type: 'article',
        publishedTime: notionPage.properties.Published?.date?.start || undefined,
        images:
          notionPage.cover?.external?.url ||
          `/images/${notionPage.properties?.Slug.rich_text[0]?.plain_text}.webp` ||
          '/images/logo.jpg',
      },
    };
  } else {
    return {
      title: '找不到文章 | 臺灣青年法律人協會',
    };
  }
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postData = await getPostHandler(id);

  if (!postData) {
    return (
      <div className='container mx-auto px-4 py-20 text-center'>
        <h1 className='mb-4 text-2xl font-bold text-gray-800 dark:text-white'>找不到文章</h1>
        <p className='text-gray-600 dark:text-white'>抱歉，我們找不到文章。</p>
      </div>
    );
  }

  const { page, recordMap } = postData;

  const notionPage: NotionPost = page as any;

  const title = notionPage.properties.Title.title.map((text: any) => text.plain_text).join('');

  const publishedDate = notionPage.properties.Published?.date?.start
    ? format(new Date(notionPage.properties.Published.date.start), 'yyyy年MM月dd日', {
        locale: zhTW,
      })
    : '--';

  const coverImage = notionPage.cover?.external?.url || notionPage.cover?.file?.url || null;

  const author = notionPage.properties.Author?.rich_text[0]?.plain_text || '不具名';

  const excerpt = notionPage.properties.Excerpt?.rich_text
  ? notionPage.properties.Excerpt.rich_text.map((text: any) => text.plain_text).join('')
  : '無摘要';

  const jsonLd: WithContext<NewsArticle> = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: title,
    description: excerpt,
    image: [
      coverImage
        ? `/images/${notionPage.properties?.Slug.rich_text[0]?.plain_text}.webp`
        : '/images/logo.jpg',
    ],
    datePublished: notionPage.properties.Published?.date?.start,
    author: [
      {
        '@type': 'Person',
        name: author,
      },
    ],
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <article className='mx-auto max-w-2xl'>
        <div className='mb-6'>
          <h1 className='mb-4 border-l-4 border-l-emerald-500 px-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white'>
            {title}
          </h1>
          <div className='text-sm text-gray-600 dark:text-gray-200'>發布於 {publishedDate}</div>
          <div className='mt-2 text-sm text-gray-600 dark:text-gray-200'>作者：{author}</div>
        </div>

        {coverImage && (
          <div className='mb-8'>
            <Image
              width={1000}
              height={1000}
              src={`/images/${notionPage.properties?.Slug.rich_text[0]?.plain_text}.webp`}
              alt={title}
              className='h-auto w-full rounded-lg shadow-md'
            />
          </div>
        )}

        <NotionPage recordMap={recordMap} />
      </article>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
