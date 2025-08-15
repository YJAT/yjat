import Image from 'next/image';
import links from '@/lib/links';
import Link from 'next/link';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import {
  Footer as FooterComponent,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from 'flowbite-react';

export default function FooterStatic() {
  return (
    <FooterComponent container className='mx-auto rounded-none bg-gray-200 pt-10 shadow-none'>
      <div className='container mx-auto w-full'>
        <div className='w-full flex-wrap justify-between gap-4 sm:flex sm:items-start sm:justify-between'>
          <div className='mb-4 flex gap-x-4 md:mb-0'>
            <Image src='/images/logo.jpg' alt='YJAT logo' width={60} height={60} />
            <div>
              <h4 className='text-2xl font-semibold text-gray-800'>臺灣青年法律人協會</h4>
              <h5 className='mt-2 text-left text-sm text-gray-600'>
                扎根法界，深化參與，守護臺灣。
              </h5>
            </div>
          </div>
          <div>
            <FooterLinkGroup>
              {links.slice(1, links.length).map((item, index) => (
                <FooterLink key={index} href={item.link}>
                  {item.name}
                </FooterLink>
              ))}
            </FooterLinkGroup>
            <div className='mt-4 flex gap-x-6 lg:justify-end'>
              <Link className='text-[#6B7280]' href='https://www.facebook.com/YJAT2017'>
                <BsFacebook className='h-6 w-6' />
              </Link>
              <Link className='text-[#6B7280]' href='https://www.instagram.com/yjat_since2017'>
                <BsInstagram className='h-6 w-6' />
              </Link>
            </div>
          </div>
        </div>
        <FooterDivider className='border-gray-400 lg:my-0 lg:mt-10 lg:mb-6' />
        <FooterCopyright
          href='#'
          by='臺灣青年法律人協會™'
          year={new Date().getFullYear()}
          className='text-left sm:text-left'
        />
      </div>
    </FooterComponent>
  );
}
