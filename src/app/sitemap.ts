import { notion, databaseId } from '@/lib/notion';
import { NotionPost } from '@/types/notion';
import { MetadataRoute } from 'next';

const BASE_URL = 'https://bera2017.org';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts: NotionPost[] = [];

  try {
    const response = await notion.databases.query({
      database_id: databaseId as string,
      filter: {
        property: 'Status',
        status: { equals: 'Published' },
      },
      sorts: [{ property: 'Published', direction: 'descending' }],
    });
    posts = response.results as unknown as NotionPost[];
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error);
  }

  const postRoutes: MetadataRoute.Sitemap = posts.map((post: NotionPost) => {
    const slug = post.properties.Slug?.rich_text[0]?.plain_text;
    const url = slug ? `${BASE_URL}/posts/${slug}` : `${BASE_URL}/posts/content_${post.id}`;
    const lastmod = post.properties.Published?.date?.start
      ? new Date(post.properties.Published.date.start)
      : new Date();

    return {
      url,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.6,
    };
  });

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/posts`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/news`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    {
      url: `${BASE_URL}/weekly-review`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/current-affairs-commentary`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/collaborative-column`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/lawyers-chat`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/graduate-student-life`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  return [...staticRoutes, ...postRoutes];
}
