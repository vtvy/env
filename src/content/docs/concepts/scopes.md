---
title: Environment scopes
description: System env, user env, process env, IDE env, project env — what each one is and how they layer.
---

Every environment variable lives in exactly one of these scopes. Knowing which scope owns a variable tells you where to set it, who can read it, and what wins in a conflict.

## The five scopes

| Scope | Set by | Who sees it | Persists? |
| --- | --- | --- | --- |
| **System** | Admin / installer | Everyone on the machine | Yes |
| **User** | The user | Only that user | Yes |
| **Process** | A program when it launches a child | Only that child process | No — dies with the process |
| **IDE** | IDE settings / launch config | Only what the IDE spawns | Yes (per IDE config) |
| **Project** | `.env`, `mise.toml`, `.envrc` | Only when you're "in" the project | Yes (committed to repo) |

## How they layer

When a process starts, its environment is **inherited from its parent**, with later layers overriding earlier ones:

```
System env
  └─► User env (overrides system)
        └─► Shell session (your terminal inherits user env)
              └─► Project env (mise/direnv adds on top when you cd in)
                    └─► Process env (the program you ran sees all of the above)
```

The IDE is a sibling of "shell session" — it inherits from user env directly, **not from your terminal**. This is the root cause of "works in terminal, broken in IDE."

## Quick test

Open a terminal, run `echo $PATH` (or `echo $env:PATH` on PowerShell). Now open your IDE's built-in terminal and run the same. If they differ, your IDE didn't inherit your shell config — see [Terminal vs IDE](/env/concepts/terminal-vs-ide/).
