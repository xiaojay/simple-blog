# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple Chinese-language blog application built with Next.js 14+ App Router, designed as a learning project for beginners. The blog uses static data (in-memory array) rather than a database or CMS.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Note: This project has no linting, testing, or formatting scripts configured.

## Architecture

### Data Management

All blog posts are stored as static data in `app/lib/posts.ts`:
- Posts are defined as an in-memory array of `Post` objects
- Each post contains: id, title, date, author, excerpt, content, tags
- Content is stored as plain text with markdown-like formatting (not parsed)
- Three utility functions exported: `getAllPosts()`, `getPostById()`, `getAllTags()`

**To add new posts**: Edit the `posts` array in `app/lib/posts.ts` directly

### Routing Structure

Using Next.js App Router with file-based routing:
- `app/page.tsx` - Homepage (displays post list)
- `app/posts/[id]/page.tsx` - Dynamic route for individual post pages
- `app/layout.tsx` - Root layout with navigation and footer
- `app/not-found.tsx` - 404 page

### Static Generation

The app uses static site generation (SSG):
- `generateStaticParams()` in `app/posts/[id]/page.tsx` pre-renders all post pages at build time
- All pages are server components by default (no client-side state)

### Styling

- Uses Tailwind CSS (v4.x) for all styling
- Global styles in `app/globals.css`
- Tailwind configured in `tailwind.config.js` to scan `app/**/*.{js,ts,jsx,tsx,mdx}`
- Uses path alias `@/*` mapped to root directory (configured in `tsconfig.json`)

### TypeScript Configuration

- Strict mode enabled
- Path alias: `@/*` points to project root
- Target: ES2017
- Module resolution: bundler

## Key Technical Details

- All text content is in Chinese (Simplified)
- No authentication, database, or API routes
- No markdown parsing - content is displayed as plain text with `whitespace-pre-wrap`
- Posts sorted by date (newest first) on homepage
- Uses Next.js `<Link>` for client-side navigation
- Uses `notFound()` from `next/navigation` for 404 handling
