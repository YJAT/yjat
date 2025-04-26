import { getPosts } from '@/lib/notion';
import PostCard from '@/components/PostCard';

export const revalidate = 3600; // 每小時重新生成頁面

export default async function Home() {
  const posts = await getPosts();
  
  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">臺灣青年法律人協會</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          這裡是我的個人空間，分享我的想法、經驗和創作。
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">最新文章</h2>
        
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
