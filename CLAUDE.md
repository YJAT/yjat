# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Taiwan Young Lawyers Association (YJAT) website - a Next.js blog application that uses Notion as a headless CMS. The site displays articles organized by categories and features a responsive design with Tailwind CSS.

## Core Architecture

### Content Management
- **Notion Integration**: Uses both official (@notionhq/client) and unofficial (notion-client) APIs
- **Content Flow**: Notion Database → API → Next.js pages → Static generation
- **Content Types**: Blog posts with categories (collaborative-column, current-affairs-commentary, graduate-student-life, lawyers-chat, news, weekly-review)

### Key Files
- `src/lib/notion.ts`: Core Notion API integration with getPosts() and getPostById() functions
- `src/app/layout.tsx`: Root layout with Google Analytics, structured data, and SEO metadata
- `src/components/notion/NotionPage.tsx`: Renders Notion content using react-notion-x
- `src/lib/links.ts`: Navigation and category link definitions

### Data Structure
Notion database requires these properties:
- `Title` (title property)
- `Published` (date property) 
- `Status` (select property with "Published" option)
- `Excerpt` (text property)
- `Category` (select property for categorization)

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Linting
npm run lint

# TypeScript checking
tsc --noEmit
```

## Environment Setup

Required environment variables in `.env.local`:
```
NOTION_API_KEY=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
```

## Tech Stack Integration

- **Next.js 14**: App Router architecture with TypeScript
- **Tailwind CSS 4**: Styling with typography plugin
- **Flowbite React**: UI components (requires postinstall patch)
- **react-notion-x**: Renders rich Notion content with full formatting
- **Google Analytics**: Integrated via @next/third-parties
- **Schema.org**: Structured data for SEO

## Deployment Notes

- Currently deployed on Zeabur
- Supports Vercel deployment
- Image optimization configured for Notion CDN domains
- WebP format optimization enabled