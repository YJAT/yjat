import type { Metadata } from 'next';
import Image from 'next/image';
import about1 from '../../../public/images/about1.jpg'

export const metadata: Metadata = {
  title: '關於',
  description: '關於台灣青年法律人協會',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 mb-4">
      <h1 className="text-3xl font-bold mb-8">關於台灣青年法律人協會</h1>
      
      <div className="grid grid-cols-2 gap-x-4">
        <Image src={about1} alt='about1'/>
        <div>
          <h2 className='text-3xl font-bold mb-8'>理事長的話</h2>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nihil, ipsam commodi culpa debitis aliquam expedita voluptatibus nostrum. Placeat illo accusantium omnis excepturi qui facere beatae error! Dignissimos, hic quia?
          </p>
        </div>
      </div>
    </div>
  );
}
