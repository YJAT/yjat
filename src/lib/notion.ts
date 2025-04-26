import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';

// 這裡需要填入您的 Notion 集成密鑰
export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// 使用非官方 API 來獲取完整的頁面內容（包括圖片、格式等）
export const notionX = new NotionAPI();

// 您的 Notion 數據庫 ID（稍後需要填入）
export const databaseId = process.env.NOTION_DATABASE_ID;

// 取得部落格文章列表
export async function getPosts() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId as string,
      sorts: [
        {
          property: 'Published',
          direction: 'descending',
        },
      ],
      // 您可以根據需要添加過濾條件
      filter: {
        property: 'Status',
        status: {
          equals: 'Published',
        },
      },
    });

    return response.results;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// 根據 ID 獲取單篇文章
export async function getPostById(pageId: string) {
  try {
    // 使用官方 API 獲取頁面屬性
    const page = await notion.pages.retrieve({ page_id: pageId });
    
    // 使用非官方 API 獲取完整內容
    const recordMap = await notionX.getPage(pageId);
    
    return { page, recordMap };
  } catch (error) {
    console.error(`Error fetching post ${pageId}:`, error);
    return null;
  }
}
