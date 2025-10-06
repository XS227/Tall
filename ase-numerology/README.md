# Åse Numerology Intake (Angular)

This project rebuilds Åse Stensland's numerology intake page using Angular standalone components and modern styling. It
also ships with an in-app admin area to coordinate the migration from the current WordPress installation.
This project rebuilds Åse Stensland's numerology intake page using Angular standalone components and modern styling.

## Getting started

```bash
npm install
npm start
```

The development server runs on [http://localhost:4200](http://localhost:4200). The layout is fully responsive, includes a
light/night mode toggle and now exposes an **Admin area** tab for content operations.

## WordPress → Angular migration

The easiest path keeps WordPress as the authoring tool while exporting structured JSON for the Angular app to consume.

1. Set the WordPress base URL via `WP_BASE_URL` or pass `--baseUrl=https://yoursite.com` directly.
2. Run the export script:

   ```bash
   npm run export:wordpress -- --baseUrl=https://tall.setaei.com
   ```

   The script stores JSON snapshots in `src/assets/wordpress` (pages, posts, media and taxonomies) plus a `meta.json`
   manifest.
3. Review the new admin tab inside the UI for mapping guidance and follow-up tasks (wiring HttpClient, scheduling
   automation, etc.).

You can schedule the same command in CI/CD to keep the Angular build synchronized with editors who remain in WordPress.
The development server runs on [http://localhost:4200](http://localhost:4200). The layout is fully responsive and includes a light/night mode toggle.
