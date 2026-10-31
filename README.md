# Askwell

Askwell is a high-performance AI support chat widget designed for any website. Website owners upload product documentation (PDF, Markdown, or plain text), embed a single `<script>` tag, and immediately provide visitors with an AI assistant that delivers accurate answers grounded strictly in that knowledge.

---

## Key Features

- **Instant Embed**: A vanilla TypeScript loader under 5 KB runs inside a Shadow DOM, shielding it from host page stylesheet conflicts.
- **Strictly Grounded RAG**: Answers are generated solely from uploaded documentation using OpenAI embeddings (`text-embedding-3-small`) and vector search (`pgvector`). Unknown queries respond with *"I don't know"*.
- **Direct-to-Storage Ingestion**: Files up to 10 MB are uploaded straight to private Supabase Storage via signed single-use URLs, bypassing serverless payload caps.
- **Enterprise-Grade Security**: Arcjet protects public chat endpoints with IP-based rate limiting (20 req/min) and pre-LLM prompt injection inspection.
- **Multi-Tenant Data Isolation**: Database-level PostgreSQL Row-Level Security (RLS) ensures owners access only their own projects and chat transcripts.
- **Built-in Monetization**: Free and Pro tiers integrated through Clerk Billing (test mode enabled) with automatic feature gating.
- **Telemetry & Tracing**: PostHog tracks product funnels, user sessions, error monitoring, and LLM token/cost traces.

---

## Tech Stack

| Layer | Technology | Details |
|---|---|---|
| **Web App** | Next.js 15 (App Router), React 18, Tailwind CSS | Powers the marketing landing page, owner dashboard, `/embed` iframe, and API routes |
| **Widget Loader** | Vanilla TypeScript, tsup | Bundles to a single 1.04 KB file (`dist/widget.js`) with isolated Shadow DOM |
| **Database & Vector** | Supabase PostgreSQL + `pgvector` | Relational tables, HNSW vector indices, and Postgres RPC functions |
| **File Storage** | Supabase Storage | Private `knowledge` bucket with signed single-use upload URLs |
| **Auth & Billing** | Clerk + Clerk Billing | User management, session verification, and Stripe-free subscription portal |
| **AI & Embeddings** | OpenAI | `text-embedding-3-small` (1536 dims) for retrieval + Chat completions |
| **Edge Security** | Arcjet | Rate limiting (20 req/min/IP) + visitor prompt injection detection |
| **Analytics & Tracing** | PostHog | Product analytics, session replays, and LLM execution tracing |
| **Deployment** | Vercel | Monorepo deployment with automated preview environments |

---

## Repository Structure

```
askwell/
├── apps/
│   ├── web/             # Next.js app: landing (/), dashboard (/dashboard), widget panel (/embed), APIs (/api/*)
│   └── widget/          # Vanilla TypeScript loader script bundled into dist/widget.js (<5 KB)
├── packages/
│   ├── shared/          # Shared contract: types, Zod schemas, PLAN_LIMITS, APP_NAME
│   └── db/              # Database types, Supabase client factories, pglite local testing harness
├── supabase/
│   └── migrations/      # Additive SQL migrations with RLS policies and grants
├── docs/
│   ├── architecture.md  # Detailed architecture, sequence diagrams, and security topology
│   ├── project.md       # Product requirements and source of truth
│   └── plan.md          # Phased build order and milestone definitions
├── architecture.md      # Root mirror of the system architecture specification
├── CLAUDE.md            # Team guidelines, coding rules, and database policies
└── .env.example         # Template for required environment variables
```

---

## Plans & Limits

Limits are enforced strictly on the server and in Postgres RPC functions:

| Feature | Free Plan | Pro Plan ($29/mo) |
|---|---|---|
| **Projects** | 1 | 5 |
| **Messages / month (per project)** | 100 | 2,000 |
| **Knowledge Sources (per project)** | 3 | 25 |
| **Button Custom Color** | Default (#000000) | Any Hex Color |
| **Button Position** | Bottom Right | Any Corner |
| **Custom Label** | Default ("Chat") | Custom Text |
| **Open Animation** | Fade | Fade, Slide, Scale |
| **"Powered by" Badge** | Required | Removable |

---

## Quickstart

### Prerequisites

- Node.js (v20+ recommended)
- npm (v10+ recommended)

### 1. Installation

Install all workspace dependencies with npm:

```bash
npm install
```

### 2. Environment Configuration

All environment variables live in `.env` (gitignored). Copy the example template to get started:

```bash
cp .env.example .env
```

Fill in your service keys:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_pub_...
SUPABASE_SECRET_KEY=sb_sec_...

# Clerk Auth & Billing
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
CLERK_WEBHOOK_SIGNING_SECRET=whsec_...

# OpenAI
OPENAI_API_KEY=sk-proj-...

# Arcjet Security
ARCJET_KEY=ajkey_...

# PostHog Analytics
NEXT_PUBLIC_POSTHOG_KEY=phc_...
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com

# App URL & Widget Key
NEXT_PUBLIC_APP_URL=http://localhost:3000
LANDING_WIDGET_KEY=pk_...

# Vercel Deployment Protection
VERCEL_AUTOMATION_BYPASS_SECRET=...
```

### 3. Development

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the landing page and [http://localhost:3000/dashboard](http://localhost:3000/dashboard) to view the dashboard.

---

## Development Commands

All checks must pass before opening a Pull Request:

| Command | Action |
|---|---|
| `npm run dev` | Launch the Next.js development server locally |
| `npm run build` | Bundle `dist/widget.js` with tsup and build Next.js production output |
| `npm test` | Run Vitest test suites across all packages and apps |
| `npm run lint` | Run Next.js ESLint checks |
| `npm run typecheck` | Run TypeScript type checks across all workspaces |
| `npm run db:types` | Regenerate TypeScript schema definitions in `packages/db` |

---

## Security Model

- **Zero-Trust Client**: Client tokens or headers never dictate plan privileges; all quotas and gating are verified server-side.
- **Isolated Tenant Storage**: Documents and vector embeddings are partitioned by project ID and protected via Postgres RLS.
- **XSS Immunity**: Inbound visitor queries and LLM responses are rendered strictly as text nodes, never raw HTML.
- **Clickjacking Protection**: Only the `/embed` path allows external iframe embedding; all other routes enforce `frame-ancestors 'self'`.
- **No Secrets in Bundles**: Secret keys (`SUPABASE_SECRET_KEY`, `CLERK_SECRET_KEY`, `OPENAI_API_KEY`, etc.) are imported only in server-side modules (`server-only`).

---

## Documentation

- [CLAUDE.md](CLAUDE.md) — Team coding standards, database migrations, and PR conventions.
- [architecture.md](architecture.md) — Complete architectural diagrams, sequence flows, and component specs.
- [docs/project.md](docs/project.md) — Canonical specification for features, schemas, and routes.
- [docs/plan.md](docs/plan.md) — Phased rollout roadmap (Phase 0 through Phase 6).
