import CategoryContent from '@/components/categoryContent';
import Link from 'next/link';

interface homepageSections {
  sectionTitle?: string;
  category?: string;
  link: string;
  showTag?: boolean;
}

export default async function HomepageSections({
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
