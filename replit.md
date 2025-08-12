# Overview

This project is a full-stack web application built with React, Express, and TypeScript, designed as a company profile and product showcase platform. The application features a modern e-commerce-style interface for Siraj Sheet Manufacturing Co Pvt Ltd, allowing users to browse company information, view product catalogs, and submit quote requests. The architecture follows a monorepo structure with clear separation between client, server, and shared components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using React with TypeScript and follows a modern component-based architecture. The application uses Vite as the build tool and development server, providing fast hot module replacement and optimized builds. The UI is built with shadcn/ui components based on Radix UI primitives, styled with Tailwind CSS for consistent design and responsive layouts.

**Component Structure:**
- Page-level components in `client/src/pages/`
- Reusable UI components in `client/src/components/`
- Shared UI primitives in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`

**State Management:**
The application uses TanStack Query (React Query) for server state management, providing caching, background updates, and optimistic updates. Local component state is managed with React's built-in useState and useContext hooks.

**Routing:**
Client-side routing is handled by Wouter, a lightweight routing library that provides declarative route definitions and navigation.

## Backend Architecture
The backend is built with Express.js and TypeScript, following a RESTful API design pattern. The server uses middleware for request logging, JSON parsing, and error handling.

**API Structure:**
- Routes defined in `server/routes.ts`
- Storage abstraction in `server/storage.ts`
- Development utilities in `server/vite.ts`

**Storage Layer:**
The application currently uses an in-memory storage implementation (`MemStorage`) that implements the `IStorage` interface, making it easy to swap out for database persistence later.

## Data Storage Solutions
The project is configured for PostgreSQL database integration using Drizzle ORM, though it currently runs with in-memory storage for development simplicity.

**Database Schema:**
- Companies table with comprehensive business information
- Products table linked to companies
- Quotes table for customer inquiries
- Schema definitions in `shared/schema.ts` using Drizzle ORM

**ORM Configuration:**
Drizzle ORM is configured with PostgreSQL dialect and includes schema validation using Zod for type-safe database operations.

## Shared Architecture
The `shared/` directory contains TypeScript schema definitions and types that are used by both client and server, ensuring type safety across the full stack.

**Type Safety:**
- Database schemas defined with Drizzle ORM
- Zod validation schemas for API requests
- Shared TypeScript types between client and server

## Development Environment
The application uses modern development tools including:
- TypeScript for static typing
- ESLint and Prettier for code quality
- Vite for fast development builds
- PostCSS and Tailwind CSS for styling
- Node.js with ES modules

# External Dependencies

## Database Integration
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL database driver
- **connect-pg-simple**: PostgreSQL session store for Express

## Frontend Dependencies
- **React**: Core UI library with hooks and modern patterns
- **TanStack Query**: Powerful data synchronization for React
- **Radix UI**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Wouter**: Minimalist routing library for React
- **shadcn/ui**: Pre-built component library based on Radix UI

## Backend Dependencies
- **Express.js**: Web application framework for Node.js
- **TypeScript**: Static type checking for JavaScript
- **Zod**: Schema validation library
- **date-fns**: Modern JavaScript date utility library

## Development Tools
- **Vite**: Next-generation frontend build tool
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing tool with plugin ecosystem
- **React Hook Form**: Performant forms with easy validation

## UI and Styling
- **Lucide React**: Beautiful and consistent icon library
- **Class Variance Authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for constructing className strings conditionally
- **Tailwind Merge**: Utility for merging Tailwind CSS classes