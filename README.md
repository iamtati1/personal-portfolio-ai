# Tatiana Barmer — Personal Portfolio

An AI-powered personal portfolio built with Next.js 16, Tailwind CSS v4, and Claude.

## Features

- Dreamy pastel dark/light theme with smooth toggle
- Scroll-reveal animations throughout
- Interactive reaction time mini-game
- macOS-style terminal showcasing background & skills
- Floating AI chat widget powered by Claude (streaming responses)
- Fully responsive across all screen sizes

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **AI:** Anthropic Claude via `@anthropic-ai/sdk`

## Getting Started

```bash
npm install
```

Create a `.env.local` file:

```
ANTHROPIC_API_KEY=your_key_here
```

Then run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Deployment

Deploy to [Vercel](https://vercel.com) — add `ANTHROPIC_API_KEY` as an environment variable and it works out of the box.
