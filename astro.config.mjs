// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	site: 'https://vtvy.github.io',
	base: '/env',
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: '_blank',
					rel: ['noopener', 'noreferrer'],
				},
			],
		],
	},
	integrations: [
		starlight({
			title: 'Dev Env Guide',
			description:
				'A practical guide to setting up multi-language developer environments on Windows, macOS, and Linux.',
			plugins: [
				starlightLlmsTxt({
					projectName: 'Dev Env Guide',
					description:
						'A practical guide to setting up multi-language developer environments (Node, Python, Java, etc.) on Windows, macOS, and Linux. Covers env scopes, PATH, version managers (mise, nvm, pyenv), shell setup (PowerShell + oh-my-posh, zsh + oh-my-zsh), and IDE interpreter selection.',
					details:
						'Topic-first structure with per-OS tabs. Use this guide to understand *why* env setup breaks, not just the commands.',
				}),
			],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/vtvy/env',
				},
			],
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'Introduction', slug: 'start/introduction' },
						{ label: 'Pick your OS', slug: 'start/pick-your-os' },
					],
				},
				{
					label: 'Concepts',
					items: [
						{ label: 'Environment scopes', slug: 'concepts/scopes' },
						{ label: 'How PATH works', slug: 'concepts/path' },
						{ label: 'Terminal vs IDE', slug: 'concepts/terminal-vs-ide' },
					],
				},
				{
					label: 'Install package managers',
					items: [{ label: 'Overview', slug: 'install/overview' }],
				},
				{
					label: 'Version managers',
					items: [
						{ label: 'mise (recommended)', slug: 'version-mgrs/mise' },
						{ label: 'Traditional tools', slug: 'version-mgrs/traditional' },
					],
				},
				{
					label: 'Shell setup',
					items: [
						{ label: 'PowerShell + oh-my-posh', slug: 'shell/powershell' },
						{ label: 'zsh + oh-my-zsh', slug: 'shell/zsh' },
					],
				},
				{
					label: 'IDE',
					items: [{ label: 'Interpreter selection', slug: 'ide/interpreter' }],
				},
				{
					label: 'Recipes',
					items: [{ label: 'Overview', slug: 'recipes/overview' }],
				},
				{
					label: 'AI prompts',
					items: [{ label: 'Overview', slug: 'ai-prompts/overview' }],
				},
			],
		}),
	],
});
