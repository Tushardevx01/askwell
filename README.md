# Askwell

Askwell is an AI support chat widget for any website. Businesses add their product information (text or documents), embed a single `<script>` tag, and provide visitors with an AI assistant that answers questions accurately based on that knowledge.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router), React, TypeScript, Tailwind CSS
- **Database & Storage**: [Supabase](https://supabase.com/) (PostgreSQL + `pgvector` + Storage)
- **Authentication & Payments**: [Clerk](https://clerk.com/) & Clerk Billing
- **AI**: [OpenAI](https://openai.com/) (`text-embedding-3-small` + chat models)
- **Security & Protection**: [Arcjet](https://arcjet.com/) (rate limiting & prompt injection defense)
- **Analytics**: [PostHog](https://posthog.com/) (events, session replay, AI tracing)
- **Deployment**: [Vercel](https://vercel.com/)

## Repository Structure

```
askwell/
├── apps/
│   ├── web/            # Next.js app: landing, dashboard, /embed, /api
│   └── widget/         # Vanilla TypeScript loader script (<5kb bundle)
├── packages/
│   ├── shared/         # Shared contracts: types, zod schemas, plan limits
│   └── db/             # Supabase generated types and pglite test helpers
├── supabase/
│   └── migrations/     # SQL migrations
├── docs/
│   ├── project.md      # Specification: features, data model, APIs, security, design
│   └── plan.md         # Phased implementation plan
└── CLAUDE.md           # Engineering guidelines, conventions, and rules
```

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm (v10+ recommended)

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables in `.env`:
   ```bash
   # .env has been initialized with required variable keys
   ```

3. Run the development environment:
   ```bash
   npm run dev
   ```

## Development Commands

| Command | Action |
|---|---|
| `npm run dev` | Run web application locally |
| `npm run build` | Build widget bundle and web application |
| `npm test` | Run test suite with Vitest |
| `npm run lint` | Run ESLint across web app |
| `npm run typecheck` | Run TypeScript type checks across all packages |
| `npm run db:types` | Regenerate Supabase types in `packages/db` |

## Documentation

- [CLAUDE.md](CLAUDE.md) - Team workflow, database rules, and code conventions
- [docs/project.md](docs/project.md) - Full specification and source of truth
- [docs/plan.md](docs/plan.md) - Phased implementation plan
