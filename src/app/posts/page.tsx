import CategoryContent from '@/components/categoryContent'

export default async function Post(){

  return (
    <div className='container mx-auto px-4 py-8 mb-4'>
      <h1 className='text-4xl font-bold my-4'>全部文章</h1>
      <CategoryContent showTag={true}/>
    </div>
  )
}