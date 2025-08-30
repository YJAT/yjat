import { getPosts, getPostById } from '../lib/notion'; // 調整路徑以符合您的專案結構

// Mock 外部依賴
jest.mock('@notionhq/client', () => ({
  Client: jest.fn(),
}));

jest.mock('notion-client', () => ({
  NotionAPI: jest.fn(),
}));

const mockClient = {
  databases: {
    query: jest.fn(),
  },
  pages: {
    retrieve: jest.fn(),
  },
};

const mockNotionX = {
  getPage: jest.fn(),
};

// 在每個測試前設定 mock
const { Client } = require('@notionhq/client');
const { NotionAPI } = require('notion-client');

Client.mockImplementation(() => mockClient);
NotionAPI.mockImplementation(() => mockNotionX);

describe('Notion API Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // 清除 console.error 的 mock
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('getPosts', () => {
    const mockPosts = [
      {
        id: 'post-1',
        properties: {
          Title: { title: [{ plain_text: '測試文章 1' }] },
          Status: { status: { name: 'Published' } },
          Category: { select: { name: '技術' } },
        },
      },
      {
        id: 'post-2',
        properties: {
          Title: { title: [{ plain_text: '測試文章 2' }] },
          Status: { status: { name: 'Published' } },
          Category: { select: { name: '生活' } },
        },
      },
    ];

    it('應該成功獲取所有已發布的文章（沒有分類過濾）', async () => {
      mockClient.databases.query.mockResolvedValue({
        results: mockPosts,
      });

      const result = await getPosts();

      expect(mockClient.databases.query).toHaveBeenCalledWith({
        database_id: 'test-database-id',
        sorts: [
          {
            property: 'Published',
            direction: 'descending',
          },
        ],
        filter: {
          and: [
            {
              property: 'Status',
              status: {
                equals: 'Published',
              },
            },
            {
              property: 'Category',
              select: {
                equals: '',
              },
            },
          ],
        },
      });

      expect(result).toEqual(mockPosts);
    });

    it('應該成功獲取特定分類的文章', async () => {
      const categoryQuery = '技術';
      mockClient.databases.query.mockResolvedValue({
        results: mockPosts.filter((post) => post.properties.Category.select.name === categoryQuery),
      });

      const result = await getPosts(categoryQuery);

      expect(mockClient.databases.query).toHaveBeenCalledWith({
        database_id: 'test-database-id',
        sorts: [
          {
            property: 'Published',
            direction: 'descending',
          },
        ],
        filter: {
          and: [
            {
              property: 'Status',
              status: {
                equals: 'Published',
              },
            },
            {
              property: 'Category',
              select: {
                equals: categoryQuery,
              },
            },
          ],
        },
      });

      expect(result).toHaveLength(1);
    });

    it('當 API 發生錯誤時應該返回空陣列並記錄錯誤', async () => {
      const mockError = new Error('API 錯誤');
      mockClient.databases.query.mockRejectedValue(mockError);

      const result = await getPosts();

      expect(console.error).toHaveBeenCalledWith('Error fetching posts:', mockError);
      expect(result).toEqual([]);
    });

    it('當沒有找到文章時應該返回空陣列', async () => {
      mockClient.databases.query.mockResolvedValue({
        results: [],
      });

      const result = await getPosts();

      expect(result).toEqual([]);
    });
  });

  describe('getPostById', () => {
    const mockPageId = 'test-page-id';
    const mockPage = {
      id: mockPageId,
      properties: {
        Title: { title: [{ plain_text: '測試文章詳情' }] },
        Status: { status: { name: 'Published' } },
      },
    };
    const mockRecordMap = {
      block: {
        [mockPageId]: {
          value: {
            id: mockPageId,
            type: 'page',
            properties: {
              title: [['測試文章詳情']],
            },
          },
        },
      },
    };

    it('應該成功獲取文章詳情', async () => {
      mockClient.pages.retrieve.mockResolvedValue(mockPage);
      mockNotionX.getPage.mockResolvedValue(mockRecordMap);

      const result = await getPostById(mockPageId);

      expect(mockClient.pages.retrieve).toHaveBeenCalledWith({
        page_id: mockPageId,
      });
      expect(mockNotionX.getPage).toHaveBeenCalledWith(mockPageId);
      expect(result).toEqual({
        page: mockPage,
        recordMap: mockRecordMap,
      });
    });

    it('當官方 API 發生錯誤時應該返回 null 並記錄錯誤', async () => {
      const mockError = new Error('頁面不存在');
      mockClient.pages.retrieve.mockRejectedValue(mockError);

      const result = await getPostById(mockPageId);

      expect(console.error).toHaveBeenCalledWith(`Error fetching post ${mockPageId}:`, mockError);
      expect(result).toBeNull();
    });

    it('當非官方 API 發生錯誤時應該返回 null 並記錄錯誤', async () => {
      const mockError = new Error('無法獲取頁面內容');
      mockClient.pages.retrieve.mockResolvedValue(mockPage);
      mockNotionX.getPage.mockRejectedValue(mockError);

      const result = await getPostById(mockPageId);

      expect(console.error).toHaveBeenCalledWith(`Error fetching post ${mockPageId}:`, mockError);
      expect(result).toBeNull();
    });

    it('應該正確處理空的頁面 ID', async () => {
      const emptyPageId = '';
      const mockError = new Error('無效的頁面 ID');
      mockClient.pages.retrieve.mockRejectedValue(mockError);

      const result = await getPostById(emptyPageId);

      expect(mockClient.pages.retrieve).toHaveBeenCalledWith({
        page_id: emptyPageId,
      });
      expect(console.error).toHaveBeenCalledWith(`Error fetching post ${emptyPageId}:`, mockError);
      expect(result).toBeNull();
    });
  });

  describe('環境變數測試', () => {
    it('應該使用正確的環境變數', () => {
      expect(process.env.NOTION_API_KEY).toBe('test-api-key');
      expect(process.env.NOTION_DATABASE_ID).toBe('test-database-id');
    });
  });
});

// 額外的整合測試範例
describe('Notion API Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('應該能夠處理完整的文章獲取流程', async () => {
    const mockPosts = [
      { id: 'post-1', properties: { Title: { title: [{ plain_text: '文章1' }] } } },
    ];

    const mockPage = { id: 'post-1', properties: {} };
    const mockRecordMap = { block: {} };

    mockClient.databases.query.mockResolvedValue({ results: mockPosts });
    mockClient.pages.retrieve.mockResolvedValue(mockPage);
    mockNotionX.getPage.mockResolvedValue(mockRecordMap);

    // 先獲取文章列表
    const posts = await getPosts();
    expect(posts).toHaveLength(1);

    // 再獲取第一篇文章的詳情
    const postDetail = await getPostById(posts[0].id);
    expect(postDetail).toEqual({
      page: mockPage,
      recordMap: mockRecordMap,
    });
  });
});
