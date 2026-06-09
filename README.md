# Portfolio 2026 — React + Vite + Tailwind + Framer + Supabase

Modern responsive developer portfolio scaffold with dark futuristic theme.

Quick start

1. Copy `.env.example` to `.env` and fill `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
2. Install dependencies:

```bash
npm install
```

3. Run dev server:

```bash
npm run dev
```

Build

```bash
npm run build
```

Deploy

- Configure the Vercel project to use the same `VITE_SUPABASE_*` environment variables.
- Build command: `npm run build` and output directory `dist`.

Supabase

- Use `SUPABASE_SCHEMA.sql` to create `projects`, `certificates`, `comments`, and `contacts` tables.
- Authentication uses Supabase email/password for admin login (see `src/Pages/Login.jsx`).

Project structure

See `src/` for components and pages; key files:
- `src/main.jsx`, `src/App.jsx`, `src/supabase.js`, `src/index.css`
- Components in `src/components/`
- Pages in `src/Pages/`

Notes & next steps

- Replace placeholder images in `Asset/` and add real project entries in Supabase.
- Implement full auth state handling and protected routes.
- Polish animations and add meta tags for SEO improvements.
