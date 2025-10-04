/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://digital-estate-orcin.vercel.app',
  generateRobotsTxt: false, // We created a custom robots.txt
  generateIndexSitemap: false,
  exclude: ['/api/*'],
}
