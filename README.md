# env — Dev Environment Guide

A practical guide to setting up multi-language developer environments on **Windows, macOS, and Linux**.

Live site: <https://vtvy.github.io/env>

Built with [Astro Starlight](https://starlight.astro.build) and deployed to GitHub Pages.

## Local development

```sh
npm install
npm run dev      # local server at http://localhost:4321/env
npm run build    # static build to ./dist
npm run preview  # preview the production build
```

## Project structure

```
src/content/docs/
├── start/          Introduction, OS picker
├── concepts/       Env scopes, PATH, terminal vs IDE
├── install/        Package managers per OS
├── version-mgrs/   mise, nvm, pyenv, sdkman, .venv
├── shell/          PowerShell + oh-my-posh, zsh + oh-my-zsh
├── ide/            Interpreter selection
├── recipes/        End-to-end stack walkthroughs
└── ai-prompts/     Copy-paste prompts for AI coding agents
```

Add a new page by dropping a `.md` or `.mdx` file in `src/content/docs/<section>/`, then wire it into the sidebar in `astro.config.mjs`.

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml` which builds with [withastro/action](https://github.com/withastro/action) and publishes to GitHub Pages.

## Contributing

PRs welcome. Topics that need filling in are marked in the relevant section's overview page.
