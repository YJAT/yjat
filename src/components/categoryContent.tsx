import { getPosts } from '@/lib/notion';
import PostCard from './PostCard';

export default async function CategoryContent({category, dataLength, showTag= false}: {category?: string, dataLength?: number, showTag?: boolean }){
    const posts = await getPosts(category);
    const postsArray = posts.slice(0, dataLength || posts.length );
  
    return (
      <div>
        {postsArray.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 dark:bg-zinc-700">
            <p className="text-gray-600 dark:text-zinc-200">這個分類目前還沒有文章。</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {postsArray.map((post) => (
              <PostCard key={post.id} post={post} showTag={showTag} />
            ))}
          </div>
        )}
      </div>
    );
  }