# 臺灣青年法律人協會網站
      
青法協網站初稿，使用 Ｎotion 作為文章管理後台，建構中。

## 功能

- 從 Notion 數據庫獲取文章列表
- 動態渲染 Notion 文章內容
- 響應式設計
- 基於文件系統的路由
- SEO 友好
- 支持 Notion 的豐富內容格式

## 技術棧

- **框架**: Next.js 14.2
- **樣式**: Tailwind CSS 4
- **CMS**: Notion API
- **語言**: TypeScript

## 設置指南

### 1. 克隆倉庫

```bash
git clone <repo-url>
cd yjat
```

### 2. 安裝依賴

```bash
npm install
```

### 3. 設置 Notion 集成

#### 創建 Notion 集成

1. 前往 [Notion 開發者網站](https://www.notion.so/my-integrations)
2. 點擊 "New integration"
3. 填寫集成名稱，例如 "My Blog"
4. 選擇關聯的工作空間
5. 點擊 "Submit" 創建集成
6. 複製顯示的 "Internal Integration Token"（這將是您的 `NOTION_API_KEY`）

#### 創建 Notion 數據庫

1. 在 Notion 中創建一個新的數據庫頁面
2. 添加以下屬性列：
   - `Title`（標題）- 標題類型
   - `Published`（發布日期）- 日期類型
   - `Status`（狀態）- 選項類型，包括 "Published"（已發布）選項
   - `Excerpt`（摘要）- 富文本類型
3. 在數據庫頁面中，點擊右上角的 "Share" 按鈕
4. 點擊 "Invite" 標籤
5. 在搜索欄中，找到並選擇您剛剛創建的集成
6. 點擊 "Invite" 授予集成訪問權限

#### 獲取數據庫 ID

1. 在瀏覽器中打開您的 Notion 數據庫
2. 查看 URL，它應該看起來像這樣：`https://www.notion.so/workspace-name/abcdef123456789...?v=...`
3. 複製 URL 中 `?v=` 前面的部分，通常是 32 個字符的字符串（`abcdef123456789...`）
4. 這就是您的 `NOTION_DATABASE_ID`

### 4. 配置環境變量

1. 在項目根目錄中創建一個 `.env.local` 文件
2. 添加以下內容：

```
NOTION_API_KEY=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
```

### 5. 運行開發服務器

```bash
npm run dev
```

現在，您可以在瀏覽器中訪問 [http://localhost:3000](http://localhost:3000) 來查看您的網站。

### 6. 添加文章

1. 在您的 Notion 數據庫中創建新頁面
2. 設置標題、發布日期和摘要
3. 將狀態設為 "Published"
4. 在頁面正文中添加內容
5. 可以添加封面圖片（可選）
6. 保存頁面，您的網站將自動更新內容

## 項目結構

```
/src
  /app                  # Next.js App Router 目錄
    /page.tsx           # 主頁
    /about              # 關於頁面
    /posts/[id]         # 動態文章頁面
  /components           # 共享組件
    /Header.tsx         # 頁頭
    /Footer.tsx         # 頁腳
    /PostCard.tsx       # 文章卡片
  /lib                  # 工具函數
    /notion.ts          # Notion API 相關功能
```

## 自定義

### 修改樣式

本項目使用 Tailwind CSS 進行樣式設計。您可以透過修改 Tailwind 配置文件或直接在組件中更改類名來自定義外觀。

### 添加新頁面

利用 Next.js 的文件系統路由，您可以在 `src/app` 目錄下創建新的目錄或文件來添加新頁面。

### 擴展 Notion 集成

如果需要添加更多的 Notion 功能，您可以在 `src/lib/notion.ts` 中擴展現有的功能。

## 生產部署

這個網站可以輕鬆部署到 Vercel、Netlify 或其他支持 Next.js 的平台。

### Vercel 部署

1. 推送代碼到 GitHub 倉庫
2. 在 Vercel 中導入項目
3. 在環境變量設置中添加 `NOTION_API_KEY` 和 `NOTION_DATABASE_ID`
4. 部署

## 故障排除

### 無法獲取 Notion 數據

- 確認您的 API 密鑰和數據庫 ID 是否正確
- 確認您已經將集成添加到數據庫中
- 檢查數據庫屬性是否按照要求設置

## 參考資源

- [Next.js 文檔](https://nextjs.org/docs)
- [Notion API 文檔](https://developers.notion.com/)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)

