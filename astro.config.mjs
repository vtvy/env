// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	site: 'https://vtvy.github.io',
	base: '/prompt-list',
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
			title: 'Prompt List',
			description:
				'Copy-paste prompts for AI coding agents, with links to the original docs.',
			plugins: [
				starlightLlmsTxt({
					projectName: 'Prompt List',
					description:
						'A prompts dictionary for AI coding agents. Each entry is a copy-paste prompt for a common dev setup task, with a link to the official upstream documentation.',
					details:
						'Use these prompts with Cursor, Claude Code, Copilot, or similar agents instead of following manual install guides.',
				}),
			],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/vtvy/prompt-list',
				},
			],
			sidebar: [{ label: 'Install mise', link: './#install-mise' }],
		}),
	],
});
