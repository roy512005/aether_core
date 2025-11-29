import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/my-admin/',
        },
        sitemap: 'https://cybertech-solutions.vercel.app/sitemap.xml',
    };
}
