import { getPosts } from '@/lib/notion'
import PostCard from '@/components/PostCard'
import { useRef, useEffect } from 'react'

export default async function Post(){
  const posts = await getPosts()

  return (
    <div>
      <h2 className='text-4xl font-bold my-4'>文章列表</h2>
      <div>
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
      </div>
    </div>
  )
}