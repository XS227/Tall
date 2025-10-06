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

1. Set the WordPress base URL via `WP_BASE_URL` or pass `--baseUrl=https://yoursite.com` directly. If no value is
   provided the tooling falls back to `https://tall.setaei.com`.
2. Run the export script:

   ```bash
   npm run export:wordpress
   ```

   The script stores JSON snapshots in `src/assets/wordpress` (pages, posts, media and taxonomies) plus a `meta.json`
   manifest. Pass a different `--baseUrl=` if you need to export from staging or localhost.
3. Review the new admin tab inside the UI for mapping guidance and follow-up tasks (wiring HttpClient, scheduling
   automation, etc.).

You can schedule the same command in CI/CD to keep the Angular build synchronized with editors who remain in WordPress.

## Deployment domain and admin entry points

- **Live Angular bundle:** [https://tall.setaei.com](https://tall.setaei.com)
- **WordPress admin:** [https://tall.setaei.com/wp-admin](https://tall.setaei.com/wp-admin)
- **In-app admin area:** switch to the “Admin area” tab in the top navigation once the Angular app loads.

Use the WordPress admin for publishing content, then run the export script to sync JSON into the Angular app. Once the content snapshots land in `src/assets/wordpress`, the admin tab inside the Angular UI walks through the remaining migration tasks.
