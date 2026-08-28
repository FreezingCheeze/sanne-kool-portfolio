import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export async function getProjects(): Promise<Project[]> {
	const projects = await getCollection('projects');
	return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getListedProjects(category?: Project['data']['category']) {
	const projects = await getProjects();
	return projects.filter((project) => {
		if (!project.data.listed) return false;
		if (category && project.data.category !== category) return false;
		return true;
	});
}

export function projectHref(project: Project): string {
	return `/projects/${project.data.slug}/`;
}

function paragraphsFromMarkdown(text: string): string[] {
	return text
		.replace(/\r\n/g, '\n')
		.split(/\n{2,}/)
		.map((paragraph) => paragraph.replace(/\s*\n\s*/g, ' ').trim())
		.filter(Boolean);
}

export function splitProjectBody(body: string): {
	intro: string[];
	afterTitle?: string;
	afterParagraphs: string[];
} {
	const normalized = body.replace(/\r\n/g, '\n');
	const match = /^##\s+(.+)\s*$/m.exec(normalized);
	if (!match || match.index === undefined) {
		return { intro: paragraphsFromMarkdown(normalized.trim()), afterParagraphs: [] };
	}

	const intro = paragraphsFromMarkdown(normalized.slice(0, match.index).trim());
	const afterTitle = match[1].trim();
	const afterParagraphs = paragraphsFromMarkdown(normalized.slice(match.index + match[0].length).trim());
	return { intro, afterTitle, afterParagraphs };
}
