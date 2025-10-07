# Project documentation

Åse Stensland's numerology experience ships with several living documents to help the team migrate from WordPress,
operate the new Angular experience, and keep the content model in sync during future iterations.

## Available guides

| Guide | Description |
| --- | --- |
| [Admin playbook](admin-playbook.md) | How to access the in-app admin workspace, triage tasks, and invite collaborators. |
| [WordPress migration](wordpress-migration.md) | End-to-end migration plan for exporting the current site and hydrating the Angular build. |
| [Content model](content-model.md) | Data sources that power the UI (calculator, courses, articles, illustrations, careers). |
| [Deployment pipeline](deployment.md) | GitHub Actions FTPS workflow, required secrets, and troubleshooting tips. |

## Contributing to docs

1. Keep sections short with bulleted steps where possible.
2. Link to the relevant source files in `src/app` or `tools` so editors know where to update data.
3. Update the table above whenever you add a new guide.

All documentation lives in Git and should be updated via pull requests alongside code changes.
