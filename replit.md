# Buddhist Agents Documentation Platform

## Overview

This is a full-stack web application for documenting and showcasing Buddhist AI agents. The platform provides comprehensive documentation pages including agent models, pricing information, quick start guides, and an overview of the Buddhist AI system. It combines spiritual wisdom with modern AI technology, presenting specialized Buddhist agents organized by traditional vehicle levels (Tiểu Thừa, Trung Thừa, Đại Thừa, Phật Thừa).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript, using Vite as the build tool and development server.

**Routing**: Implemented using Wouter, a lightweight routing library. The application has a single-page architecture with client-side routing between documentation pages (`/docs/overview`, `/docs/models`, `/docs/quick-start`, `/docs/pricing`).

**UI Component Library**: Shadcn/ui with Radix UI primitives. The application follows the "new-york" style variant with extensive customization through CSS variables. Components are located in `client/src/components/ui/`.

**State Management**: React Query (TanStack Query) for server state management, with local state handled via React hooks.

**Styling System**: 
- Tailwind CSS with custom configuration
- HSL-based color system with CSS custom properties for theming
- Custom design tokens for spacing (2, 4, 8, 12, 16 units)
- Serif fonts for spiritual content, monospace for technical details, sans-serif for UI elements
- Hybrid design approach combining technical documentation clarity with Buddhist spiritual aesthetics

**Key Design Patterns**:
- Component composition with shared props interfaces
- Custom utility classes for elevation effects (`hover-elevate`, `active-elevate-2`)
- Responsive grid layouts (2-column for cards, 3-4 columns for technical specs)
- Accent color system per Buddhist agent with HSL alpha transparency

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**API Structure**: RESTful API design with routes prefixed under `/api`. The routes are registered through a modular system in `server/routes.ts`.

**Session Management**: Uses `connect-pg-simple` for PostgreSQL-backed session storage.

**Development Setup**: Custom Vite integration for HMR (Hot Module Replacement) in development mode, with middleware mode enabled for seamless frontend/backend integration.

**Build Process**: 
- Frontend: Vite builds React application to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Production server serves static files from the Vite build output

### Data Storage Solutions

**Database**: PostgreSQL configured through Drizzle ORM.

**ORM Configuration**: 
- Schema definition in `shared/schema.ts`
- Migrations directory: `./migrations`
- Database connection via `DATABASE_URL` environment variable
- Neon serverless PostgreSQL driver for edge deployment compatibility

**Schema Design**: Currently includes a basic users table with UUID primary keys, username/password authentication fields.

**Storage Interface**: Abstracted through `IStorage` interface in `server/storage.ts`, currently implemented with in-memory storage (`MemStorage`) for development, with PostgreSQL implementation planned.

### Authentication and Authorization

**Current State**: Basic user schema exists with username/password fields. No active authentication middleware is implemented yet.

**Planned Approach**: Session-based authentication using PostgreSQL session store via `connect-pg-simple`.

### External Dependencies

**Neon Serverless PostgreSQL**: Cloud-native PostgreSQL database with serverless driver (`@neondatabase/serverless`).

**OpenAI API Integration**: The Buddhist agents are designed to work with OpenAI's language models (GPT-4o and GPT-5), though the actual API integration is not yet implemented in the codebase. System prompts and model configurations are defined in `shared/buddhistAgents.ts`.

**UI Component Libraries**:
- Radix UI primitives for accessible, unstyled component foundation
- Embla Carousel for carousel functionality
- Lucide React for iconography
- React Hook Form with Zod for form validation

**Development Tools**:
- Replit-specific plugins for runtime error overlay, cartographer, and dev banner
- TypeScript with strict mode enabled
- Date-fns for date manipulation

**Build Dependencies**:
- Vite for frontend bundling and development server
- esbuild for backend bundling
- PostCSS with Tailwind CSS and Autoprefixer

### Agent System Design

**Agent Data Model**: Each Buddhist agent is defined with:
- Unique identifier and display name
- Tagline for quick purpose identification
- OpenAI model selection (gpt-4o or gpt-5)
- Accent color for visual identity
- Purpose description and capability list
- Complete system prompt for AI behavior
- Vehicle level classification (Tiểu Thừa through Phật Thừa)
- Optional monastery affiliation

**Pricing Model**: Token-based pricing structure aligned with OpenAI's pricing tiers, configured in `shared/buddhistAgents.ts` with separate input/output token costs per model.

**Documentation Structure**: 
- Overview page introducing the concept and system
- Agent Models page with filtering by vehicle level and search functionality
- Quick Start guide with code examples for API integration
- Token Pricing page displaying transparent cost breakdown