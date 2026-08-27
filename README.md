# prompt-list — AI Prompts Dictionary

Copy-paste prompts for AI coding agents, with links to the original docs.

Live site: <https://vtvy.github.io/prompt-list>

Built with [Astro Starlight](https://starlight.astro.build) and deployed to GitHub Pages.

## Local development

```sh
npm install
npm run dev      # local server at http://localhost:4321/prompt-list
npm run build    # static build to ./dist
npm run preview  # preview the production build
```

## Project structure

```
src/content/docs/
└── index.mdx       Home page — one section per prompt
```

Add a new prompt as a `##` section in `index.mdx`, then add a sidebar link in `astro.config.mjs`.

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml` which builds with [withastro/action](https://github.com/withastro/action) and publishes to GitHub Pages.

## Contributing

PRs welcome. Each prompt should include: when to use it, the full prompt text, and a link to the official upstream docs.
