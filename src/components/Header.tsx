import Link from 'next/link';
import Image from 'next/image'
import links from '@/lib/links';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, ThemeConfig } from "flowbite-react";


export default function Component() {
  return (
    <>
    <ThemeConfig dark={false}/>
      <Navbar className='sticky top-0 z-[1] bg-white shadow-md'>
        <NavbarBrand className='text-black' as={Link} href="/">
          <Image src="/images/logo.jpg" alt="臺灣青年法律人協會" width={40} height={40} />
          臺灣青年法律人協會
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          {links.map((item, index) => {
            return (
              <NavbarLink href={item.link} key={index} className={`text-gray-600 md:hover:text-gray-900 md:hover:underline ${(index + 1 ) === links.length ? '' : '-mr-2' }`}>
              {item.name}
            </NavbarLink>
            )}
           )}
        </NavbarCollapse>
      </Navbar>
    </>
  );
}