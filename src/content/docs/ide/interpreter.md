---
title: IDE interpreter selection
description: Tell your IDE which Python/Node/Java/JDK to use, and why.
---

Even if you have `mise` and your terminal works perfectly, your IDE has its own opinion. Every major IDE has a setting that overrides everything else.

## VS Code

- **Python**: `Cmd/Ctrl+Shift+P` → "Python: Select Interpreter" → pick `.venv` or a mise shim
- **Node**: VS Code uses whatever's first on `PATH` for terminal. For debug configs, set `runtimeExecutable` in `launch.json`.
- **Java**: Java extension reads `java.configuration.runtimes` in settings.json.

## IntelliJ / WebStorm / PyCharm / Rider

- `File → Project Structure → SDKs` — declares which SDKs JetBrains knows about
- `File → Project Structure → Project` — declares which SDK this project uses
- For Node: `Settings → Languages & Frameworks → Node.js`

## Pointing IntelliJ at a mise-managed JDK

mise installs JDKs at `~/.local/share/mise/installs/java/<version>/`. In IntelliJ:

`File → Project Structure → SDKs → +` → point to that folder. Now IntelliJ uses the same JDK as your terminal.

## Why the IDE doesn't pick this up automatically

The IDE was launched from your OS (Spotlight, Start menu, dock) — not from your shell. So it never sourced `~/.zshrc`, never ran `mise activate`, never saw mise's `PATH` munging. You have to tell it explicitly.

This is also why running the IDE *from a terminal* (e.g. `code .`) sometimes makes the problem go away — that launch path inherits the shell's env.
