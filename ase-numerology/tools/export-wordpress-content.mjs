import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

function parseArgs(argv) {
  return argv.reduce((acc, arg) => {
    if (!arg.startsWith('--')) {
      return acc;
    }
    const [key, value = ''] = arg.substring(2).split('=');
    acc[key] = value || true;
    return acc;
  }, {});
}

const args = parseArgs(process.argv.slice(2));
const DEFAULT_BASE_URL = 'https://tall.setaei.com';
const baseUrl = args.baseUrl || process.env.WP_BASE_URL || DEFAULT_BASE_URL;

if (!args.baseUrl && !process.env.WP_BASE_URL) {
  console.info(`ℹ️  Using default WordPress base URL: ${DEFAULT_BASE_URL}`);
}

const outputDir = resolve(process.cwd(), args.outDir || 'src/assets/wordpress');
const endpoints = [
  { slug: 'pages', path: '/wp-json/wp/v2/pages?per_page=100&_embed' },
  { slug: 'posts', path: '/wp-json/wp/v2/posts?per_page=100&_embed' },
  { slug: 'media', path: '/wp-json/wp/v2/media?per_page=100' },
  { slug: 'taxonomies', path: '/wp-json/wp/v2/taxonomies' }
];

async function fetchEndpoint(url) {
  const response = await fetch(url, {
    headers: { 'User-Agent': 'Åse Angular Exporter/1.0 (+https://tall.setaei.com/)' }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function exportWordPress() {
  await mkdir(outputDir, { recursive: true });
  const timestamp = new Date().toISOString();

  for (const endpoint of endpoints) {
    const url = new URL(endpoint.path, baseUrl).href;
    console.log(`⬇️  Fetching ${url}`);
    try {
      const data = await fetchEndpoint(url);
      const filePath = resolve(outputDir, `${endpoint.slug}.json`);
      await writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`✅  Saved ${endpoint.slug} to ${filePath}`);
    } catch (error) {
      console.error(`❌  ${error.message}`);
      if (!args.force) {
        process.exitCode = 1;
      }
    }
  }

  const metaPath = resolve(outputDir, 'meta.json');
  const meta = {
    source: baseUrl,
    generatedAt: timestamp,
    endpoints: endpoints.map(endpoint => endpoint.path)
  };
  await writeFile(metaPath, JSON.stringify(meta, null, 2), 'utf8');
  console.log(`📝  Wrote run metadata to ${metaPath}`);
}

exportWordPress().catch(error => {
  console.error(`❌  Unexpected error: ${error.message}`);
  process.exit(1);
});
