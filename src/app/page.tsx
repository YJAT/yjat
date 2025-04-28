import { getPosts } from '@/lib/notion';
import PostCard from '@/components/PostCard';

export const revalidate = 3600; // 每小時重新生成頁面

export default async function Home() {
  const posts = await getPosts();
  
  return (
    <div className="space-y-8">
      <section className="mb-12">
        <h1 className="text-5xl md:text-8xl font-bold text-gray-800 dark:text-white mb-4">臺灣青年<br/>法律人協會</h1>
        <p className="text-xl text-gray-600 dark:text-gray-100 max-w-2xl">
          扎根法界，深化參與，守護臺灣
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">最新文章</h2>
        
        {posts.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">目前還沒有文章。請先在 Notion 中添加內容。</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
