import CategoryContent from '@/components/categoryContent'

export default async function Page(){

  return (
    <div className='container mx-auto px-4 py-8 mb-4'>
      <h1 className='text-4xl font-bold my-4'>時事評論</h1>
	    <CategoryContent category='時事評論'/>
    </div>
  )
}