# Crazy 8 Grappling Club

Marketing site for a grappling club in San Marcos, Texas. The app is built with React, TypeScript, Vite, Tailwind, and React Router.

## Local development

```bash
pnpm install
pnpm dev
```

The local dev server runs on `http://127.0.0.1:5173` by default.

## Contact form configuration

The contact page submits through Web3Forms when the environment is configured.

1. Copy `.env.example` to `.env`
2. Set `VITE_WEB3FORMS_ACCESS_KEY` to your Web3Forms access key
3. Restart the dev server after changing env values

If the env variable is missing, the contact page falls back to manual contact details instead of attempting a broken submission.

## Useful commands

```bash
pnpm dev
pnpm build
pnpm lint
```

## Project notes

- Shared discipline metadata lives in `src/data/disciplines.ts`
- Shared club facts and schedule details live in `src/data/site.ts`
- Contact form submission logic lives in `src/lib/contact.ts`
