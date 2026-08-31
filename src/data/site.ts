export const site = {
	name: 'Sanne Kool',
	brand: 'SANNE KOOL | VORMGEVER',
	title: 'Sanne Kool | Vormgever',
	description:
		'Portfolio van Sanne Kool, grafisch vormgever. Afgestudeerd aan het ROC Midden Nederland, nu Eventmanager in opleiding aan de Hogeschool Utrecht.',
	lang: 'nl',
	locale: 'nl_NL',
	cvPath: '/cv/sanne-kool-cv.pdf',
	socials: {
		instagram: {
			label: 'Instagram',
			href: 'https://www.instagram.com/design_sanne_/',
		},
		linkedin: {
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/sanne-kool-6912b2257',
		},
	},
} as const;

export const navigation = [
	{ label: 'Home', href: '/' },
	{ label: 'Opleiding Mediavormgeving', href: '/opleiding-mediavormgeving/' },
	{ label: 'Stages', href: '/stages/' },
	{ label: 'Vrijwerk', href: '/vrijwerk/' },
] as const;

export type NavItem = (typeof navigation)[number];
