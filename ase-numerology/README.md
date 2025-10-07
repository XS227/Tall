# Åse Numerology Intake (Angular)

This project rebuilds Åse Stensland's numerology intake page using Angular standalone components and modern styling. It
also ships with an in-app admin area to coordinate the migration from the current WordPress installation.

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
sending the new build. The Angular source includes [`src/.htaccess`](src/.htaccess) so Apache hosts disable directory
listing and rewrite unknown URLs back to `index.html`; if you maintain additional server rules, merge them into this
file before deploying.
