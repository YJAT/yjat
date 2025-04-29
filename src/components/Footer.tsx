"use client"
import { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

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
    <footer className="bg-gray-100 mt-12" ref={footerRef}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} 臺灣青年法律人協會 保留所有權利。
          </p>
        </div>
      </div>
    </footer>
  );
}
