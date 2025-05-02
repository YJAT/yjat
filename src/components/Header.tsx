import Link from 'next/link';
import Image from 'next/image'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, ThemeConfig } from "flowbite-react";


export default function Component() {
  return (
    <>
    <ThemeConfig dark={false}/>
      <Navbar className='sticky top-0 bg-white shadow-md'>
        <NavbarBrand className='text-black' as={Link} href="/">
          <Image src="/images/logo.jpg" alt="臺灣青年法律人協會" width={40} height={40} />
          臺灣青年法律人協會
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/news" className="text-gray-600 md:hover:text-gray-900 md:hover:underline -mr-2">
            最新消息
          </NavbarLink>
          <NavbarLink href="/lawyers-chat" className="text-gray-600 md:hover:text-gray-900 md:hover:underline -mr-2">
            律師雜談
          </NavbarLink>
          <NavbarLink href="/graduate-student-life" className="text-gray-600 md:hover:text-gray-900 md:hover:underline -mr-2">
            研究生日常
          </NavbarLink>
          <NavbarLink href="/weekly-review" className="text-gray-600 md:hover:text-gray-900 md:hover:underline -mr-2">
            每週評論
          </NavbarLink>
          <NavbarLink href="/current-affairs-commentary" className="text-gray-600 md:hover:text-gray-900 md:hover:underline -mr-2">
            時事評論
          </NavbarLink>
          <NavbarLink href="/collaborative-column" className="text-gray-600 md:hover:text-gray-900 md:hover:underline -mr-2">
            合作專欄
          </NavbarLink>
          <NavbarLink href="/about" className="text-gray-600 md:hover:text-gray-900">
            關於
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}