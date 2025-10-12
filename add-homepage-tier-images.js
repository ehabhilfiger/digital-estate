/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

const homepagePath = 'c:/Users/defco/digital-estate/app/page.tsx';
let content = fs.readFileSync(homepagePath, 'utf8');

// Update Tier 1 - Foundation
content = content.replace(
  '<Link href="/packages/foundation" className="group rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300 cursor-pointer">',
  `<Link href="/packages/foundation" className="group rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/images/foundation.png"
                      alt="Foundation Tier"
                      fill
                      className="object-cover opacity-10 group-hover:opacity-15 transition-opacity"
                    />
                  </div>
                  {/* Content */}
                  <div className="relative z-10">`
);

// Close Tier 1 content wrapper
content = content.replace(
  /(<div className="mt-6 text-amber-500 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">\s*Learn More <ArrowRight className="h-4 w-4" \/>\s*<\/div>\s*<\/Link>)(\s*\{\/\* Tier 2)/,
  '$1\n                  </div>$2'
);

// Update Tier 2 - Estate
content = content.replace(
  '<Link href="/packages/estate" className="group rounded-2xl border-2 border-amber-500 bg-amber-500/5 p-8 relative hover:border-amber-400 hover:bg-amber-500/10 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer">',
  `<Link href="/packages/estate" className="group rounded-2xl border-2 border-amber-500 bg-amber-500/5 p-8 relative hover:border-amber-400 hover:bg-amber-500/10 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/images/25k.webp"
                      alt="Estate Tier"
                      fill
                      className="object-cover opacity-10 group-hover:opacity-15 transition-opacity"
                    />
                  </div>
                  {/* Content Wrapper */}
                  <div className="relative z-10">`
);

// Close Tier 2 content wrapper (find the second occurrence)
let tier2Match = content.match(/(<div className="mt-6 text-amber-500 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">\s*Learn More <ArrowRight className="h-4 w-4" \/>\s*<\/div>\s*<\/Link>)(\s*\{\/\* Tier 3)/);
if (tier2Match) {
  content = content.replace(tier2Match[0], tier2Match[1] + '\n                  </div>' + tier2Match[2]);
}

// Update Tier 3 - Architect
content = content.replace(
  '<Link href="/packages/architect" className="group rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-300 cursor-pointer">',
  `<Link href="/packages/architect" className="group rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/images/architect.png"
                      alt="Architect Tier"
                      fill
                      className="object-cover opacity-10 group-hover:opacity-15 transition-opacity"
                    />
                  </div>
                  {/* Content */}
                  <div className="relative z-10">`
);

// Close Tier 3 content wrapper (find the third occurrence, before the closing of the grid section)
let tier3Match = content.match(/(<div className="mt-6 text-purple-500 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">\s*Learn More <ArrowRight className="h-4 w-4" \/>\s*<\/div>\s*<\/Link>\s*<\/div>)/);
if (tier3Match) {
  content = content.replace(tier3Match[0], tier3Match[0].replace('</Link>', '</div>\n                </Link>'));
}

fs.writeFileSync(homepagePath, content);
console.log('✓ Added background images to all homepage tier cards');
