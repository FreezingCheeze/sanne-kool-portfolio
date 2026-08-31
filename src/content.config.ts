import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			slug: z.string(),
			category: z.enum(['opleiding', 'stages', 'vrijwerk']),
			year: z.number().int().optional(),
			summary: z.string(),
			coverImage: image(),
			coverAlt: z.string(),
			listed: z.boolean().default(true),
			featured: z.boolean().default(false),
			order: z.number(),
			client: z.string().optional(),
			tools: z.array(z.string()).default([]),
			externalUrl: z.string().optional(),
			instagramUrl: z.string().optional(),
			facebookUrl: z.string().optional(),
			parent: z.string().optional(),
			relatedLabel: z.string().optional(),
			relatedHref: z.string().optional(),
			cards: z
				.array(
					z.object({
						title: z.string(),
						summary: z.string(),
						image: image(),
						imageAlt: z.string(),
						href: z.string().optional(),
					}),
				)
				.default([]),
			videos: z
				.array(
					z.object({
						title: z.string().optional(),
						src: z.string(),
						alt: z.string(),
					}),
				)
				.default([]),
			galleries: z
				.array(
					z.object({
						title: z.string().optional(),
						layout: z.enum(['carousel', 'titled', 'stack']).default('carousel'),
						imageScale: z.number().positive().default(1),
						uniform: z.boolean().default(false),
						images: z.array(
							z.object({
								src: image(),
								alt: z.string(),
								title: z.string().optional(),
								text: z.string().optional(),
							}),
						),
					}),
				)
				.default([]),
		}),
});

export const collections = { projects };
