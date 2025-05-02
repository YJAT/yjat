# 臺灣青年法律人協會網站

青法協網站初稿，使用 Ｎotion 作為文章管理後台，建構中。

## tech-stack

- Next.js + Typescript
- Tailwind CSS 4

## 安裝指南

### 1. Clone

```bash
git clone https://github.com/meo2326cc/yjat.git
cd yjat
```

### 2. 安裝相關套件

```bash
npm install
```

### 3. 設置 Notion Integration

#### 創建 Notion Integration

1. 前往 [Notion 開發者網站](https://www.notion.so/my-integrations)
2. 點選 "New integration"
3. 填寫整合名稱，例如 "My Blog"
4. 選擇關聯的工作空間
5. 點擊 "Submit" 創建集成
6. 複製顯示的 "Internal Integration Token"（此為專案的 `NOTION_API_KEY`）

#### 創建 Notion Database

1. 在 Notion 中創建一個新的資料庫頁面
2. 新增以下屬性欄位：
   - `Title`（標題）- 標題屬性
   - `Published`（發布日期）- 日期屬性
   - `Status`（狀態）- 選項屬性，須包含 "Published"（公開文章至網站）
   - `Excerpt`（摘要）- 文字屬性
3. 在資料庫頁面中，點擊右上角的 `Share` 按鈕
4. 點擊 `Invite` 標籤
5. 在搜尋欄中，找到並選擇您剛剛創建的集成
6. 點擊 `Invite` 賦予集成連接權限

#### 取得資料庫 ID

1. 在瀏覽器中打開您的 Notion Database
2. 檢視 URL，它應該看起來像這樣：`https://www.notion.so/workspace-name/abcdef123456789...?v=...`
3. 複製 URL 中 `?v=` 前面的部分（`abcdef123456789...`）
4. 此為專案的 `NOTION_DATABASE_ID`

### 4. 環境變數

1. 在項目根目錄中新建 `.env.local` 檔案
2. 新增以下內容：

```
NOTION_API_KEY= <your_notion_integration_token>
NOTION_DATABASE_ID= <your_notion_database_id>
```

### 5. 執行專案

```bash
npm run dev
```

現在，您可以在瀏覽器中檢視網站 [http://localhost:3000](http://localhost:3000)。

### 6. 新增文章

1. 在您的 Notion 資料庫中新增頁面
2. 設定標題、發布日期和摘要
3. 將狀態設為 `Published`
4. 在頁面新增內容
5. 可以新增封面圖片（可選）
6. 保存頁面，您的網站將自動更新內容

## 測試

```bash
# typescript 檢查
tsc --noEmit

# lint 檢查
npm run lint
```

## 生產部署

這個網站可以部署到 Vercel、Netlify 或其他支援 Next.js 的平台（目前採用 Zeabur）。

### Vercel 部署

1. push 至 GitHub repo
2. 在 Vercel 中導入項目
3. 在環境變數中新增 `NOTION_API_KEY` 和 `NOTION_DATABASE_ID`
4. 部署

### Zeabur
1. push 至 GitHub repo
2. 在 Zeabur 專案中選擇 `建立服務` -> `GitHub`
3. 在環境變數中新增 `NOTION_API_KEY` 和 `NOTION_DATABASE_ID`
4. 部署

## 參考資源

- [Next.js 文件](https://nextjs.org/docs)
- [Notion API 文件](https://developers.notion.com/)
- [Tailwind CSS 文件](https://tailwindcss.com/docs)

