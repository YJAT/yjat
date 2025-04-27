import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '關於 - YJAT 部落格',
  description: '了解更多關於 YJAT 部落格的信息',
};

export default function AboutPage() {
  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold mb-8">關於 YJAT 部落格</h1>
      
      <div className="space-y-6">
        <p>
          歡迎來到 YJAT 部落格！這個網站是使用 Next.js 和 Notion API 創建的，
          旨在提供一個簡單、高效的寫作和發布平台。
        </p>
        
        <p>
          我使用 Notion 作為內容管理系統，這讓我可以輕鬆地編寫、編輯和組織所有內容。
          通過 Notion API，內容會自動同步到這個網站上。
        </p>
        
        <p>
          這種架構的優點是：
        </p>
        
        <ul>
          <li>使用 Notion 的強大編輯功能</li>
          <li>無需管理複雜的 CMS 後台</li>
          <li>靜態生成頁面，確保快速加載</li>
          <li>自動同步內容更新</li>
        </ul>
        
        <p>
          如果您對這個網站的技術實現感興趣，或者想要創建類似的網站，
          歡迎與我聯繫交流！
        </p>
      </div>
    </div>
  );
}
