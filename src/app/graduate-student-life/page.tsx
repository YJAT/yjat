import CategoryContent from '@/components/categoryContent'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "研究生日常｜臺灣青年法律人協會",
  description: "扎根法界，深化參與，守護臺灣",
  openGraph: {
    title: "研究生日常｜臺灣青年法律人協會",
    description: "扎根法界，深化參與，守護臺灣",
    images: [{
      url: '/images/cover.png',
    }],
  }
};

export const revalidate = 3600;

export default async function Page(){

  return (
    <div className='container mx-auto px-4 py-8 mb-4'>
      <h1 className='text-4xl font-bold my-4'>研究生日常</h1>
	    <CategoryContent category='研究生日常'/>
    </div>
  )
}