// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL ?? 'https://sannekool.pages.dev';

export default defineConfig({
	site,
	trailingSlash: 'always',
	integrations: [sitemap()],
	devToolbar: { enabled: false },
	redirects: {
		'/foto-s/': '/projects/fotos/',
		'/vrij-werk/': '/vrijwerk/',
		'/proefexamen/': '/projects/cd-examen/',
		'/freebee/': '/projects/freebee/',
		'/foodblog/': '/projects/foodblog/',
		'/examen/': '/projects/examen/',
		'/media/': '/stages/media/',
		'/event/': '/stages/event/',
		'/stage/': '/projects/wulterkens/',
		'/general-1/': '/projects/smeeing-mobility/',
		'/projects-1/': '/projects/smeeing-plattegronden/',
		'/oranje-rugby-festijn/': '/projects/oranje-rugby-festijn/',
		'/rugbyclub-spakenburf/': '/projects/rugbyclub-spakenburg/',
		'/kreijne-brandstoffen/': '/projects/kreijne-brandstoffen/',
		'/general-9/': '/projects/basic-and-full-color/',
	},
});
