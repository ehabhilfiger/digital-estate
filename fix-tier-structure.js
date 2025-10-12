/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

const homepagePath = 'c:/Users/defco/digital-estate/app/page.tsx';
let content = fs.readFileSync(homepagePath, 'utf8');

// Fix Tier 2 - Move closing content div before Link close
content = content.replace(
  /(<\/div>)\r?\n                <\/Link>\r?\n                  <\/div>\r?\n\r?\n                \{\/\* Tier 3 - CLICKABLE \*\//,
  '$1\n                  </div>\n                </Link>\n\n                {/* Tier 3 - CLICKABLE */'
);

// Fix Tier 3 - find the pattern and fix it
content = content.replace(
  /(<div className="mt-6 text-amber-500 group-hover:text-purple-400[^>]*>\s*Learn More <ArrowRight[^>]*\/>\s*<\/div>)\r?\n                <\/Link>\r?\n(                  <\/div>)/,
  '$1\n                  </div>\n                </Link>\n'
);

fs.writeFileSync(homepagePath, content);
console.log('✓ Fixed tier card structure');
