export function isCurrentPath(href: string, path: string) {
	if (href === '/') return path === '/';
	return path === href || path.startsWith(href);
}
