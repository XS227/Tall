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

## Documentation

Additional guides live in the [`docs/`](docs/README.md) folder:

- [Admin playbook](docs/admin-playbook.md)
- [WordPress migration guide](docs/wordpress-migration.md)
- [Content model overview](docs/content-model.md)
- [Deployment pipeline](docs/deployment.md)

Keep the documentation up to date with every feature so GitHub always hosts the latest instructions for Åse and the
team.

## Continuous deployment

The repository ships with a GitHub Actions workflow that builds the Angular project and deploys the generated `dist`
folder to the FTPS target configured in repository secrets. The pipeline runs automatically for pushes to `main` and
can also be triggered manually from the Actions tab.

Before enabling the workflow:

1. Open **Settings → Secrets and variables → Actions** in GitHub.
2. Add the required credentials as repository secrets:
   - `FTP_SERVER`
   - `FTP_USERNAME`
   - `FTP_PASSWORD`
   - `FTP_PORT` (typically `21`)
   - `FTP_REMOTE_DIR` (the target path on the host)
3. If you deploy from another branch, change the `branches` array in
   [`.github/workflows/build-and-deploy.yml`](.github/workflows/build-and-deploy.yml).
4. Commit your changes and push to trigger the build-and-deploy job.

The workflow uses `npm ci` for reproducible installs and `npx ng build --configuration production` to generate the
production bundle. Artifacts are uploaded via `SamKirkland/FTP-Deploy-Action`, which wipes the remote directory before
sending the new build—keep `.htaccess` or other protected files outside of that directory if they should persist.
## Deployment domain and admin entry points

- **Live Angular bundle:** [https://tall.setaei.com](https://tall.setaei.com)
- **WordPress admin:** [https://tall.setaei.com/wp-admin](https://tall.setaei.com/wp-admin)
- **In-app admin area:** switch to the “Admin area” tab in the top navigation once the Angular app loads.

Use the WordPress admin for publishing content, then run the export script to sync JSON into the Angular app. Once the content snapshots land in `src/assets/wordpress`, the admin tab inside the Angular UI walks through the remaining migration tasks.
