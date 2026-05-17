---
title: Why `java -version` differs in terminal vs IDE
description: The classic "works in my terminal but not in IntelliJ" puzzle, explained.
---

You run `java -version` in your terminal — Java 21. You hit Run in IntelliJ — Java 11. What happened?

## Short answer

Your terminal and your IDE are **siblings**, not parent/child. They each inherit from the user environment, but each one can layer its own config on top — and they usually do.

## The chain in detail

```
                User environment (Windows registry / ~/.zshenv)
                 ├──► Terminal (zsh)
                 │     └─► reads ~/.zshrc, runs `mise activate`, prepends mise shims
                 │           └─► java → /Users/you/.mise/shims/java → Java 21
                 │
                 └──► IntelliJ
                       └─► uses its own "Project SDK" setting → Java 11
```

The terminal layer (`~/.zshrc`, mise activation) **never runs** for the IDE. The IDE has its own equivalent — Project SDK, interpreter selector, launch configuration.

## Common causes by IDE

- **IntelliJ / WebStorm / PyCharm**: Project Structure → SDK is set explicitly. Override at `File → Project Structure → SDKs`.
- **VS Code**: Picks Python via the "Python: Select Interpreter" command. For Java, see the Java extension's project view.
- **Eclipse**: "Installed JREs" + per-project "JRE System Library".

## How to make them agree

Three strategies, in order of preference:

1. **Project-level config that both read** — `mise.toml` or `.tool-versions` or `pyproject.toml`. Then point your IDE at the mise/asdf shims. This is the path this guide recommends.
2. **One JDK on PATH, and the IDE inherits it** — simple, but breaks for multi-project setups.
3. **Configure the IDE to launch your shell** — VS Code's `terminal.integrated.defaultProfile` + `inheritEnv: true`. Helps for terminal-in-IDE, not for Run/Debug.

## Quick diagnostic

Run this in both your terminal and the IDE's built-in terminal:

```sh
which java && java -version
echo $PATH | tr ':' '\n' | head -5
```

If the paths differ, you've found your culprit.
