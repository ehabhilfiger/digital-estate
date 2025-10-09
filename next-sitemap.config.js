/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://backupestate.vercel.app',
  generateRobotsTxt: false, // We manage robots.txt manually
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/secret/*'],
}
