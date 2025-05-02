import { getPosts } from "@/lib/notion"
import PostCard from "./PostCard"

export default async function CategoryContent({category}: {category: string | null}){
    const posts = await getPosts(category)
  
    return (
      <div>
        {posts.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">這個分類目前還沒有文章。</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    )
  }