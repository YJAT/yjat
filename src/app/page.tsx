import CategoryContent from '@/components/categoryContent';
import Link from 'next/link';
import links from '@/lib/links';

export const revalidate = 3600; // 每小時重新生成頁面

interface homepageSections {
  sectionTitle?: string, 
  category?: string, 
  link: string
}

export default async function Home() {

  const sectionPosts = links.slice(1, (links.length-1))

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <section className="mb-12">
            <h1 className="text-5xl md:text-8xl font-bold text-gray-800 dark:text-white mb-4">臺灣青年<br/>法律人協會</h1>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-2xl">
              扎根法界，深化參與，守護臺灣。
            </p>
          </section>
          <HomepageSections link='/posts' sectionTitle='最新文章'/>
        </div>
      </div>
      <div className=' bg-gray-100 dark:bg-zinc-800'>
        <section className='container mx-auto px-4 py-8'>
          {sectionPosts.map((item, index)=>
            <HomepageSections sectionTitle={item.name} category={item.name} link={item.link} key={index}/>  
          )}
        </section>
      </div>
    </>
  );
}

async function HomepageSections({sectionTitle, category, link}: homepageSections ){

  return(
    <div className='mb-8 last:mb-0'>
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">{sectionTitle}</h2>
        <CategoryContent category={category} dataLength={4} />
      </section>
      <div className='md:ml-auto md:w-fit bg-gray-300 dark:bg-zinc-600 px-4 py-2 mt-4'>
        <Link href={link} className="font-bold hover:underline" >更多{sectionTitle}</Link>
      </div>
    </div>
  )

}