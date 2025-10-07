# Admin playbook

The Angular experience contains an embedded admin workspace so Åse and collaborators can manage the migration
without leaving the app.

## Switching to admin mode

1. Open the app at `http://localhost:4200` (or the deployed URL).
2. Use the "Admin" toggle in the navigation bar to reveal the administrative workspace.
3. Review the task tracker cards for the latest migration, content, and QA actions.

## Core panels

- **Migration checklist** – Mirrors the WordPress export steps and includes owner/status chips.
- **Content mapping grid** – Shows each WordPress endpoint and where it renders inside the Angular UI.
- **Action log** – Captures follow-ups (e.g., scheduling exports, connecting APIs, copy approvals).
- **Calculator CTA placement** – Highlights where the numerology calculator appears across the journey to keep it visible for students.

## Collaborating with others

- Assign a status/owner on each checklist card before handing work to another team member.
- Capture meeting notes directly in the action log so the next editor has context.
- When the migration is complete, archive the checklist items instead of deleting them to preserve the timeline.

## Best practices

- Refresh the page after running the WordPress export script so the admin dashboard picks up new JSON snapshots.
- Commit admin-facing content updates (tasks, notes, etc.) alongside the associated code/data changes.
- Use the "Calculator visibility" card to ensure every new course, article, or membership page promotes the tool.
