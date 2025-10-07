# Content model

The Angular app aggregates structured data so the intake journey stays consistent while the team continues to
iterate on content. This guide maps each data source to its UI surface.

## Calculator

- Located in `src/app/app.component.ts` under the `calculatorHighlight` section.
- Promoted across the hero, offerings grid, and admin reminders to keep it visible during the full study period.
- Source data: `calculatorHighlight` object in `AppComponent` (includes CTA copy and deep-link targets).

## Courses and memberships

- Defined in `AppComponent` as the `programs` array.
- Surfaces on the front page beside the calculator promotion.
- Includes tags for filters and icons for quick scanning.

## Articles / blog posts

- Temporary seed data lives in `featuredArticles` within `AppComponent`.
- Replace with exported WordPress `posts.json` entries once the migration script has been run.
- Each card expects `title`, `excerpt`, `category`, and `readingTime` fields.

## Numerology stories & careers

- Powered by the `coreStories` collection in `AppComponent` and enriched with careers per numerology number.
- Supplemented by the `EXAMPLE_PROFILES` data from `src/app/assets/exampleProfiles.ts`.
- Use this section to link graduates to relevant jobs while teaching the energy of each number.

## Illustrations

- The catalog in `src/app/assets/illustrations.numerology.ts` contains prompt/negative prompt pairs, palettes, and ratios.
- Consume via the exported `ILLUSTRATIONS` array or helper `getIllustrationsForNumber`.
- Ideal for feeding text-to-image services (Stable Diffusion, Midjourney, Flux, etc.).

## Admin content

- `adminTasks`, `contentMapping`, and `actionItems` objects in `AppComponent` drive the admin workspace.
- Update them whenever tasks change so the team has a single source of truth.

Keep this document aligned with the actual component structures to avoid confusion for editors.
