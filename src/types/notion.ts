import {
  DatePropertyItemObjectResponse,
  SelectPropertyItemObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

// Rich Text 項目的基礎型別
export interface RichTextItem {
  type: 'text';
  text: {
    content: string;
    link: { url: string } | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string | null;
}

// 實際的 Notion Title 屬性型別
export interface ActualTitleProperty {
  id: string;
  type: 'title';
  title: RichTextItem[];
}

// 實際的 Notion Rich Text 屬性型別
export interface ActualRichTextProperty {
  id: string;
  type: 'rich_text';
  rich_text: RichTextItem[];
}

// Notion Page 的封面圖片型別 - 符合實際 API 回應
type ExternalPageCoverResponse = {
  type: 'external';
  external: { url: string };
  file?: { [key: string]: string | undefined };
};

// 完整的 Notion Post 型別
export interface NotionPost {
  id: string;
  cover?: ExternalPageCoverResponse;
  properties: {
    Title: ActualTitleProperty;
    Published: DatePropertyItemObjectResponse;
    Author: ActualRichTextProperty;
    Category: SelectPropertyItemObjectResponse;
    Excerpt: ActualRichTextProperty;
    Status?: SelectPropertyItemObjectResponse;
  };
}

// PostCard 組件的 Props 型別
export interface PostCardProps {
  post: NotionPost;
  showTag?: boolean;
}
