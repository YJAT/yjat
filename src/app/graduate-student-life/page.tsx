import CategoryContent from '@/components/categoryContent'

export const revalidate = 3600;

export default async function Page(){

  return (
    <div className='container mx-auto px-4 py-8 mb-4'>
      <h1 className='text-4xl font-bold my-4'>研究生日常</h1>
	    <CategoryContent category='研究生日常'/>
    </div>
  )
}