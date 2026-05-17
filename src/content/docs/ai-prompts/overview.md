---
title: AI prompts
description: Copy-paste prompts for AI coding agents to handle env setup for you.
---

If you have an AI coding agent (Claude Code, Cursor, Copilot Workspace, Cline), you can outsource most of this setup. Paste one of the prompts below and the agent will run the right commands for your OS.

These will eventually be component-based with one-click copy and "Send to Claude" deep links. For now, copy/paste manually.

## Prompt: bootstrap a new machine

```
You are setting up a fresh developer machine. The user's OS is {{OS}}.

Do the following:
1. Detect or install a package manager (scoop on Windows, brew on macOS, the distro's manager on Linux).
2. Install mise (https://mise.jdx.dev). Activate it in the user's shell config.
3. Install PowerShell 7 + oh-my-posh (Windows) or zsh + oh-my-zsh + zsh-autosuggestions + zsh-syntax-highlighting (macOS/Linux).
4. Install a Nerd Font (Meslo).
5. Set the terminal default profile/font appropriately.
6. Print a final summary of what was installed and what the user should restart.

Before running anything destructive, show the user the plan and wait for confirmation.
```

## Prompt: onboard onto an existing project

```
The user just cloned a repo and wants to start working. The repo is at {{CWD}}.

1. Look for project-level env config: mise.toml, .tool-versions, .nvmrc, .python-version, pyproject.toml, package.json, build.gradle.
2. If mise.toml or .tool-versions exists, run `mise install`.
3. If pyproject.toml exists, create a .venv and install deps with uv or pip.
4. If package.json exists, run the appropriate install (npm/pnpm/yarn — check the lockfile).
5. Print a quickstart: how to run dev, test, build.
```

More prompts coming: "fix my PATH", "diagnose terminal-vs-IDE mismatch", "migrate from nvm to mise".
