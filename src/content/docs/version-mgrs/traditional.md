---
title: Traditional tools (nvm, pyenv, sdkman, .venv)
description: The fragmented landscape mise replaces — and when traditional tools still make sense.
---

Before mise/asdf, each language had its own version manager. They still work, and you'll see them everywhere.

| Tool | Language | Platforms | Notes |
| --- | --- | --- | --- |
| `nvm` | Node | Unix only | The original. macOS/Linux. |
| `nvm-windows` | Node | Windows | Different project, similar interface. |
| `pyenv` | Python | Unix only | |
| `pyenv-win` | Python | Windows | |
| `sdkman` | JVM (Java, Kotlin, Gradle...) | Unix (WSL on Windows) | |
| `rbenv` / `rvm` | Ruby | Unix | |
| `.venv` | Python (per-project) | All | Created by `python -m venv`. Activated per shell. |
| `IDE interpreter` | Anything | All | IDE-managed, doesn't affect terminal. |

## Problems with the traditional stack

1. **N tools to install, configure, update** — onboarding is hours, not minutes.
2. **Each one hooks your shell startup** — `nvm.sh` alone adds 100–500ms to every shell launch.
3. **PATH order conflicts** — `nvm`, `pyenv`, and `sdkman` all prepend shims. If they fight, you get the wrong version.
4. **Global pollution** — Python's `pip install -g`, npm's `-g`, gem's user install. Three years in, you don't know what's installed or why.
5. **"Works on my machine"** — your `.bashrc` is a snowflake.

## When traditional tools still make sense

- **`.venv`** — always. Even with mise, `.venv` is how Python isolates *packages* (mise handles the interpreter version). They're complementary.
- **`nvm`** — if your team standardized on it, switching is a fight you don't need.
- **`sdkman`** — gradle/maven/kotlin version pinning is genuinely good. mise covers JDK well but the JVM ecosystem tooling around sdkman is mature.
- **IDE interpreter** — always set this, regardless of what else you use. It's how your IDE knows what to lint/format/run against.
