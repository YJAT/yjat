import Link from 'next/link';
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-x-2 text-lg md:text-2xl font-bold text-gray-800 hover:text-gray-600">
            <Image src="/images/logo.jpg" alt="臺灣青年法律人協會" width={40} height={40} />
            臺灣青年法律人協會
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  首頁
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  關於
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
