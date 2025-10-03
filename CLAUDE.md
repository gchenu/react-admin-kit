# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React Admin Kit is a React 19 + TypeScript + Vite application configured with Tailwind CSS v4 and shadcn/ui components. It serves as a foundation for building admin dashboards and enterprise applications.

## Development Commands

- `npm run dev` - Start development server with HMR
- `npm run build` - Type-check with `tsc -b` then build for production
- `npm run lint` - Run ESLint on all TypeScript files
- `npm run preview` - Preview production build locally

## Architecture

### Build System
- **Vite 7.x**: Build tool with React Fast Refresh via `@vitejs/plugin-react`
- **TypeScript 5.9**: Strict mode enabled with project references (`tsconfig.app.json`, `tsconfig.node.json`)
- **Path Aliases**: `@/*` maps to `./src/*` (configured in both Vite and tsconfig)

### Styling
- **Tailwind CSS v4**: Using the new Vite plugin (`@tailwindcss/vite`)
- **CSS Variables**: Enabled for theming (see `components.json`)
- **Utility Helpers**:
  - `cn()` function in `src/lib/utils.ts` merges Tailwind classes using `clsx` + `tailwind-merge`

### Component Library
- **shadcn/ui**: Configured with "new-york" style, `lucide-react` icons
- **Component Aliases** (from `components.json`):
  - `@/components` - Component directory
  - `@/ui` - UI components (shadcn)
  - `@/lib` - Utility libraries
  - `@/hooks` - React hooks

### Routing & Forms
- **react-router-dom v7.x**: Client-side routing
- **react-hook-form v7.x**: Form state management

## Code Standards

### TypeScript Configuration
- Bundler module resolution with `verbatimModuleSyntax`
- Strict linting: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
- `noEmit: true` (Vite handles transpilation)

### ESLint Setup
- TypeScript ESLint with recommended rules
- React Hooks rules (recommended-latest)
- React Refresh plugin for Vite HMR
- Ignores `dist/` directory

## Import Conventions
Use the `@/` path alias for all internal imports:
```typescript
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```
