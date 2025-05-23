# Claude Project Rules

## Project Overview
This is a modern landing page built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## Development Guidelines

### Code Style
- Use TypeScript for all new components
- Follow React best practices and hooks patterns
- Use Tailwind CSS for styling (avoid inline styles)
- Prefer shadcn/ui components over custom implementations
- Keep components small and focused on a single responsibility

### File Structure
- Components go in `/components` directory
- UI components from shadcn go in `/components/ui`
- Utility functions go in `/lib/utils.ts`
- All pages use App Router (`/app` directory)

### Git Commit Convention
- Use conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
- Keep commits atomic and descriptive
- Example: `feat: add contact form section`

### Testing & Quality
- Run `npm run lint` before committing
- Ensure responsive design works on mobile, tablet, and desktop
- Test in multiple browsers (Chrome, Safari, Firefox)

### Performance
- Optimize images using Next.js Image component
- Use dynamic imports for heavy components
- Keep bundle size minimal
- Ensure Lighthouse score > 90

### Deployment
- Main branch auto-deploys to Vercel
- Test locally with `npm run dev` before pushing
- Build locally with `npm run build` to catch errors

## Project-Specific Rules

### Color Scheme
- Primary: Purple/Violet gradient (#8B5CF6 to #7C3AED)
- Background: White to gray gradient
- Text: Gray-900 for headings, Gray-600 for body
- Always maintain high contrast for accessibility

### Component Patterns
```tsx
// Always use this pattern for new components
import { cn } from "@/lib/utils"

interface ComponentProps {
  className?: string
  children?: React.ReactNode
}

export function Component({ className, children }: ComponentProps) {
  return (
    <div className={cn("base-classes", className)}>
      {children}
    </div>
  )
}
```

### SEO Requirements
- Every page must have unique meta title and description
- Use semantic HTML (header, nav, main, section, footer)
- Include Open Graph tags for social sharing
- Implement structured data where applicable

### Accessibility
- All interactive elements must be keyboard accessible
- Use proper ARIA labels
- Ensure color contrast ratio meets WCAG AA standards
- Test with screen readers

## Commands Reference
```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Deployment
vercel               # Deploy to Vercel
git push origin main # Push to GitHub (auto-deploys)
```

## Important Links
- Production: https://homepage-434zusahr-robs-projects-542c89cf.vercel.app
- GitHub: https://github.com/efww/landingpage_test_250524
- Vercel Dashboard: https://vercel.com/robs-projects-542c89cf/home_page

## Notes for Claude
- When modifying this project, always follow the shadcn/ui design system
- Prefer modifying existing components over creating new ones
- Keep the landing page fast and lightweight
- Maintain the modern, professional aesthetic
- Test all changes locally before suggesting commits