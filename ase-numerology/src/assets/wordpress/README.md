# WordPress export snapshots

This folder is populated by `npm run export:wordpress`. Each file mirrors a WordPress REST endpoint
so the Angular app can hydrate content without calling the live CMS at runtime.

- `pages.json` — hero copy, welcome text and evergreen sections
- `posts.json` — long-form teachings and stories for the knowledge base
- `media.json` — illustration references and featured images
- `taxonomies.json` — categories/tags for filtering in the admin area
- `meta.json` — metadata about the export run (source URL, timestamp, endpoints)

Feel free to commit the generated JSON or host it on a CDN/headless CMS if you prefer dynamic updates.
