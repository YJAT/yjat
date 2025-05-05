import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '關於｜臺灣青年法律人協會',
  description: '過去幾年，青法協持續與所有法律人站在一起，我們關心國會運作危機，我們站上街頭捍衛憲政法制，我們也不間斷撰文推廣民主自由的核心理念。',
  authors: [{ name: '理事長劉家杭' }],
  openGraph: {
    title: "關於｜臺灣青年法律人協會",
    description: "過去幾年，青法協持續與所有法律人站在一起，我們關心國會運作危機，我們站上街頭捍衛憲政法制，我們也不間斷撰文推廣民主自由的核心理念。",
    type: 'article',
    images: '/images/logo.jpg',
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 mb-4">
      <h1 className="text-3xl font-bold mb-8">關於臺灣青年法律人協會</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <Image src='/images/about1.jpg' alt='about1' className='w-full h-full object-cover' width={500} height={500}/>
        </div>
        <div>
          <h2 className='text-3xl font-bold mb-4'>
            理事長的話
          </h2>
          <p className='mb-4'>
            致 所有青法之友們：
          </p>
          <p className='mb-4'>
            過去幾年，青法協持續與所有法律人站在一起，我們關心國會運作危機，我們站上街頭捍衛憲政法制，我們也不間斷撰文推廣民主自由的核心理念。
          </p>
          <p className='mb-4'>
            我們從一群法律系學生，畢業後到各自的崗位上努力，但無論是作為學生、執業律師、考生或任何身分，我們都仍然秉持公共參與的熱情，也邀請各位能與我們一起扎根法界、深化參與、守護臺灣。          
          </p>
          <p className='mb-4'>
            未來將會是充滿挑戰與變動的時代，公民社會亦將扮演非常重要的角色，我們將堅守自由民主憲政秩序的價值，關注臺灣主體性的立場，積極參與每一場公民行動。
          </p>
          <p className='mb-8'>
            除此之外，法律普及、時事評析、考生輔導及青年法律人交流活動，也是我們的會務重心，我們將持續為需要的青年夥伴提供支援，同時也會分享自身作為法律實務工作者的經驗，抑或是介紹法律系學生在不同領域的發展可能，讓各位能夠以法律人的身分在各自的位置上發光發熱。
          </p>
          <p className='text-right'>
            臺灣青年法律人協會 理事長 劉家杭 敬上
          </p>
        </div>
      </div>
    </div>
  );
}
