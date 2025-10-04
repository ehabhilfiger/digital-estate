const fs = require('fs');
const data = JSON.parse(fs.readFileSync('lighthouse-final.json', 'utf8'));

console.log('\n=== LIGHTHOUSE SCORES ===');
console.log('Performance:', Math.round(data.categories.performance.score * 100));
console.log('Accessibility:', Math.round(data.categories.accessibility.score * 100));
console.log('Best Practices:', Math.round(data.categories['best-practices'].score * 100));
console.log('SEO:', Math.round(data.categories.seo.score * 100));
console.log('\n');
