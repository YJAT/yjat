import CategoryContent from '@/components/categoryContent'

export default async function Post(){

  return (
    <>
      <h1 className='text-4xl font-bold my-4'>全部文章</h1>
      <CategoryContent category={null}/>
    </>
  )
}