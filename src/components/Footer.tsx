export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} 臺灣青年法律人協會 保留所有權利。
          </p>
          <p className="text-gray-500 text-xs mt-2">
            使用 Next.js 與 Notion API 建構
          </p>
        </div>
      </div>
    </footer>
  );
}
