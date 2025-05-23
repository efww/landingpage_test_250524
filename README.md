# Beautiful Landing Page

A modern, responsive landing page built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 Beautiful, modern design with gradient backgrounds
- 📱 Fully responsive layout
- 🌙 Dark mode ready
- ⚡ Lightning fast performance
- 🎯 SEO optimized
- 🧩 Modular component structure
- 🎭 Smooth animations and transitions

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## Project Structure

```
home_page/
├── app/
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Landing page
├── components/
│   └── ui/            # shadcn/ui components
├── lib/
│   └── utils.ts       # Utility functions
└── public/            # Static assets
```

## Customization

You can easily customize the landing page by:

- Modifying color scheme in `app/globals.css`
- Updating content in `app/page.tsx`
- Adding new sections or components
- Changing fonts in `app/layout.tsx`