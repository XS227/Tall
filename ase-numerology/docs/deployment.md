# Deployment pipeline

This guide explains how Åse's Angular build reaches production using GitHub Actions and FTPS.

## Workflow overview

The repository includes [`.github/workflows/build-and-deploy.yml`](../.github/workflows/build-and-deploy.yml), which:

1. Checks out the repository on `ubuntu-latest`.
2. Sets up Node.js 20 with npm caching.
3. Installs dependencies via `npm ci`.
4. Runs the Angular production build with `npx ng build --configuration production --base-href "/"`.
5. Publishes the `dist/<project>/browser` output to the configured FTPS host via `SamKirkland/FTP-Deploy-Action`.

## Required secrets

Add the following **repository secrets** under **Settings → Secrets and variables → Actions** before enabling the
workflow:

| Secret | Description |
| --- | --- |
| `FTP_SERVER` | Hostname or IP address of the FTPS server. |
| `FTP_USERNAME` | Username with write access to the target directory. |
| `FTP_PASSWORD` | Password or app token for the FTP user. |
| `FTP_PORT` | FTPS port, usually `21`. |
| `FTP_REMOTE_DIR` | Remote directory path where the Angular build should be uploaded. |

Secrets are encrypted at rest and only exposed to workflow runs triggered from the same repository. Forks cannot read
these values.

## Customising the deployment

- **Branch**: Edit the `branches` array in the workflow trigger if you deploy from a branch other than `main`.
- **Base path**: For subdirectory hosting, change `--base-href` and `--deploy-url` to match the public path.
- **Exclusions**: Extend the `exclude` list if certain files should remain untouched on the server.
- **Dry runs**: You can temporarily set `dry-run: true` on the FTP deploy step to validate credentials without uploading
  files.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| `Error: EAI_AGAIN` during deploy | Confirm the FTP hostname is reachable and not blocked by firewall rules. |
| Authentication failures | Reset the FTP password and update the GitHub secret. |
| Missing `jq` during build | GitHub's Ubuntu runner bundles `jq` by default; if removed, add `sudo apt-get install jq`. |
| Empty uploads | Ensure the Angular build succeeded and that `DIST_DIR` points to the correct folder in the workflow. |

If you need to audit past deployments, open **Actions → Build & Deploy (Angular → FTPS)** and inspect the logs for the
relevant run.
