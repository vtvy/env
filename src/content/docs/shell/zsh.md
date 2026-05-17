---
title: zsh + oh-my-zsh
description: The macOS/Linux productive shell setup — zsh, oh-my-zsh, autosuggestions, syntax highlighting.
---

macOS ships zsh as default. On Linux, install it:

```sh
# Debian/Ubuntu
sudo apt install zsh
# Fedora
sudo dnf install zsh
# Arch
sudo pacman -S zsh
```

Make it your login shell:

```sh
chsh -s $(which zsh)
```

## Install oh-my-zsh

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Config lives in `~/.zshrc`.

## Plugins that pay for themselves

```sh
# Inside ~/.zsh/custom/plugins (oh-my-zsh manages this)
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

In `~/.zshrc`:

```sh
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

## A prompt worth using

Two options:

1. **Powerlevel10k** — fastest, most featured zsh theme. `git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k`, then `ZSH_THEME="powerlevel10k/powerlevel10k"`.
2. **oh-my-posh** — same prompt engine as the Windows guide, lets you share a single config across machines.

## The dotfile layout

```
~/.zshenv  ← always sourced (login + non-login). Put PATH here.
~/.zprofile ← login shells only. Put one-shot login tasks here.
~/.zshrc    ← interactive shells. Plugins, aliases, prompt.
~/.zlogin   ← runs after .zshrc on login shells. Rarely needed.
```

Most people put everything in `.zshrc`, which works but is wrong for `PATH` — non-interactive scripts won't see it.
