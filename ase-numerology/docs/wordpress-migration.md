# WordPress migration guide

This document outlines the lightweight path for moving Åse's existing WordPress content into the Angular project
without losing the familiar editorial workflow.

## Overview

- Keep WordPress as the source of truth for copy, articles, and media.
- Export structured JSON via the included Node script.
- Import the JSON into Angular's assets folder and commit it.
- Iterate on the Angular UI using the exported content.

## Prerequisites

- Node 18+
- Access to the live WordPress site (`https://tall.setaei.com`)
- API credentials if the site requires authentication for REST endpoints

## Export steps

1. Configure the base URL:
   - Set `WP_BASE_URL` in your environment, **or**
   - Pass `--baseUrl=https://tall.setaei.com` when running the script.
2. Run the export command:

   ```bash
   npm run export:wordpress -- --baseUrl=https://tall.setaei.com
   ```

3. Inspect the generated files in `src/assets/wordpress`:
   - `pages.json`
   - `posts.json`
   - `media.json`
   - `taxonomies.json`
   - `meta.json`
4. Commit the updated JSON alongside any Angular code changes.

## Wiring the data

- The Angular components already consume the JSON snapshots for hero copy, article teasers, and admin dashboards.
- If you introduce new sections, import the JSON via `import data from 'src/assets/wordpress/posts.json';` and map it to your component state.
- Use interfaces in `src/app/assets` as a reference when creating new data models.

## Scheduling exports

- Add the export command to your CI (e.g., GitHub Actions) to refresh content on deploys.
- Alternatively, run the script manually after publishing new WordPress posts and commit the changes.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| 403 errors | Ensure the WordPress REST API is accessible publicly or provide authentication headers. |
| Missing media URLs | Verify `media.json` was generated and that the WordPress Media Library exposes correct `source_url` values. |
| Stale content | Re-run the export script and reload the Angular admin dashboard. |

For deeper debugging, open `tools/export-wordpress-content.mjs` and log the REST responses.
