import CategoryContent from '@/components/categoryContent';
import Link from 'next/link';
import links from '@/lib/links';
import Image from 'next/image';

export const revalidate = 3600; // 每小時重新生成頁面

interface homepageSections {
  sectionTitle?: string;
  category?: string;
  link: string;
  showTag?: boolean;
}

export default async function Home() {
  const sectionPosts = links.slice(1, links.length - 1);

  return (
    <>
      <div className='relative'>
        <div className='container mx-auto px-4 py-8'>
          <div className='space-y-8'>
            <section className='mb-12'>
              <h1 className='text-border mb-4 text-5xl font-bold text-gray-100 md:text-8xl'>
                臺灣青年
                <span className='block'>法律人協會</span>
              </h1>
              <p className='text-border max-w-2xl text-lg font-semibold text-gray-100 md:text-2xl'>
                扎根法界，深化參與，守護臺灣。
              </p>
            </section>
            <HomepageSections showTag={true} link='/posts' sectionTitle='最新文章' />
          </div>
        </div>
        <Image
          src='/images/cover.png'
          fill={true}
          alt='臺灣青年法律人協會'
          className='absolute top-0 right-0 bottom-0 left-0 -z-[10] object-cover blur-lg'
        />
      </div>
      <div className='bg-gray-100 dark:bg-zinc-800'>
        <section className='container mx-auto px-4 py-8'>
          {sectionPosts.map((item, index) => (
            <HomepageSections
              sectionTitle={item.name}
              category={item.name}
              link={item.link}
              key={index}
            />
          ))}
        </section>
      </div>
    </>
  );
}

async function HomepageSections({
  sectionTitle,
  category,
  link,
  showTag = false,
}: homepageSections) {
  return (
    <div className='mb-8 last:mb-0'>
      <section>
        <div className='relative z-[0] w-fit'>
          <h2 className='section-title text-border'>{sectionTitle}</h2>
        </div>
        <CategoryContent showTag={showTag} category={category} dataLength={4} />
        <div className='mt-4 bg-gray-300 px-4 py-2 md:ml-auto md:w-fit dark:bg-zinc-600'>
          <Link href={link} className='font-bold hover:underline'>
            更多{sectionTitle}
          </Link>
        </div>
      </section>
    </div>
  );
}
