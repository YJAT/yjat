"use client"
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Footer as FooterComponent, FooterIcon, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import links from '@/lib/links';
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Footer() {

  const pathname = usePathname();
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      const bodyHeight = document.body.offsetHeight;
      if (bodyHeight < window.innerHeight) {
        footerRef.current.classList.add('fixed', 'bottom-0', 'w-full');
      } else {
        footerRef.current.classList.remove('fixed', 'bottom-0', 'w-full');
      }
    }
  }, [pathname]);

  return (
    <FooterComponent ref={footerRef} container className='bg-gray-200 shadow-none mx-auto rounded-none pt-10'>
      <div className="w-full container mx-auto">
        <div className="w-full justify-between sm:flex sm:items-start sm:justify-between flex-wrap gap-4">
          <div className='flex gap-x-4 mb-4 md:mb-0'>
            <Image src='/images/logo.jpg' alt='YJAT logo' width={60} height={60}/>
            <div>
              <h4 className='text-2xl text-gray-800 font-semibold'>臺灣青年法律人協會</h4>
              <h5 className='text-sm text-gray-600 text-left mt-2'>扎根法界，深化參與，守護臺灣。</h5>
            </div>
          </div>
          <div>
          <FooterLinkGroup>
            {links.slice(1, links.length).map((item, index) => <FooterLink key={index} href={item.link}>{item.name}</FooterLink> )}
          </FooterLinkGroup>
          <div className='flex gap-x-4 lg:justify-end mt-4'>
            <FooterIcon href="https://www.facebook.com/YJAT2017" icon={BsFacebook} />
            <FooterIcon href="https://www.instagram.com/yjat_since2017" icon={BsInstagram} />
          </div>
          </div>
        </div>
        <FooterDivider className='lg:my-0 lg:mt-10 lg:mb-6 border-gray-400' />
        <FooterCopyright href="#" by="臺灣青年法律人協會™" year={new Date().getFullYear()} className='sm:text-left text-left' />
      </div>
    </FooterComponent>
  );
}

