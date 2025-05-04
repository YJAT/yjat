import CategoryContent from '@/components/categoryContent'

export const revalidate = 3600;

export default async function Page(){

  return (
    <div className='container mx-auto px-4 py-8 mb-4'>
      <h1 className='text-4xl font-bold my-4'>每週評論</h1>
	    <CategoryContent category='每週評論'/>
    </div>
  )
}