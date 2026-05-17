---
title: PowerShell 7 + oh-my-posh
description: A productive Windows shell — modern PowerShell, prompt with git branch, autosuggestions.
---

Default Windows PowerShell (5.1) is fine, but PowerShell 7+ is the modern, cross-platform, much faster version. Combined with `oh-my-posh` and a few modules, you get a shell that rivals zsh.

## Install PowerShell 7

```powershell
winget install Microsoft.PowerShell
```

Or via scoop:

```powershell
scoop install pwsh
```

Then set your terminal (Windows Terminal) to use `pwsh` as the default profile.

## The `$PROFILE` file

Your config lives at `$PROFILE` — run that in PowerShell to see the path. Typically:

```
C:\Users\<you>\Documents\PowerShell\Microsoft.PowerShell_profile.ps1
```

If the file doesn't exist:

```powershell
if (-not (Test-Path $PROFILE)) { New-Item -ItemType File -Path $PROFILE -Force }
```

## Install oh-my-posh

```powershell
winget install JanDeDobbeleer.OhMyPosh
```

Then add to `$PROFILE`:

```powershell
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\jandedobbeleer.omp.json" | Invoke-Expression
```

Pick any theme — `Get-PoshThemes` lists them. Save your favorite's path.

## Install a Nerd Font

oh-my-posh prompts use icons that need a Nerd Font. Easiest:

```powershell
oh-my-posh font install Meslo
```

Then set Windows Terminal font to `MesloLGM Nerd Font`.

## Autosuggestions + better history

```powershell
Install-Module PSReadLine -Force
```

Add to `$PROFILE`:

```powershell
Set-PSReadLineOption -PredictionSource HistoryAndPlugin
Set-PSReadLineOption -PredictionViewStyle ListView
Set-PSReadLineKeyHandler -Key Tab -Function MenuComplete
```

## What you end up with

- Git branch and dirty status in your prompt
- Fish-style autosuggestion from history (ghost text, `→` to accept)
- Tab completion as a menu, not a single guess
- Multi-line edit support
