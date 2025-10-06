import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ILLUSTRATIONS, IllustrationSpec } from './assets/illustrations.numerology';

interface NumerologyHighlight {
  label: string;
  value: string;
  description: string;
}

interface CoreNumberStory {
  number: number;
  archetype: string;
  description: string;
}

type ActiveView = 'client' | 'admin';

type TaskStatus = 'next' | 'in-progress' | 'done';

interface AdminTask {
  title: string;
  summary: string;
  status: TaskStatus;
  reference?: string;
}

interface MigrationStep {
  title: string;
  detail: string;
  outcome: string;
}

interface ContentMapping {
  label: string;
  source: string;
  destination: string;
  note: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly activeView = signal<ActiveView>('client');
  readonly intakeProgress = 9;
  readonly highlights: NumerologyHighlight[] = [
    {
      label: 'Life path',
      value: '7',
      description: 'Inner seeker who trusts their intuition and loves deep conversations.'
    },
    {
      label: 'Expression',
      value: '3',
      description: 'Creative storyteller who shines when sharing your message with the world.'
    },
    {
      label: 'Soul urge',
      value: '11',
      description: 'Sensitive visionary here to lift others with spiritual insight and compassion.'
    }
  ];

  readonly stories: CoreNumberStory[] = [
    { number: 1, archetype: 'The Pioneer', description: 'Leadership, courage and blazing new trails with confidence.' },
    { number: 2, archetype: 'The Diplomat', description: 'Harmony, support and holding space for meaningful partnership.' },
    { number: 3, archetype: 'The Muse', description: 'Joyful expression, play and sharing your voice with the world.' },
    { number: 4, archetype: 'The Architect', description: 'Grounded structure, long term vision and reliable stewardship.' },
    { number: 5, archetype: 'The Explorer', description: 'Adaptability, freedom and inviting others on bold adventures.' },
    { number: 6, archetype: 'The Guardian', description: 'Heart-centered service, devotion and building nurturing homes.' },
    { number: 7, archetype: 'The Sage', description: 'Inner wisdom, spiritual study and guiding others to clarity.' },
    { number: 8, archetype: 'The Visionary', description: 'Strategic leadership, prosperity and turning purpose into impact.' },
    { number: 9, archetype: 'The Humanitarian', description: 'Compassionate service, artistry and collective transformation.' },
    { number: 11, archetype: 'The Oracle', description: 'Inspired insight, intuitive mastery and soulful mentoring.' },
    { number: 22, archetype: 'The Master Builder', description: 'Grand designs, community leadership and tangible legacy.' },
    { number: 33, archetype: 'The Master Healer', description: 'Radiant love, spiritual teaching and generational healing.' }
  ];

  readonly illustrationPrompts: IllustrationSpec[] = ILLUSTRATIONS;

  readonly nightMode = signal(false);

  readonly migrationSteps: MigrationStep[] = [
    {
      title: 'Export WordPress data to JSON',
      detail:
        'Run the provided export script to pull pages, posts, media metadata and taxonomies from the live WordPress instance via the REST API.',
      outcome: 'Generates clean JSON snapshots under src/assets/wordpress for the Angular app to hydrate content blocks.'
    },
    {
      title: 'Map records to Angular views',
      detail:
        'Use the content mapping table to pair WordPress content types with the corresponding Angular sections (hero copy, stories, illustration briefs).',
      outcome: 'Ensures Åse’s existing narratives appear in the new client intake, illustration prompts and knowledge base.'
    },
    {
      title: 'Schedule incremental refreshes',
      detail:
        'Add the export script to your CI or hosting pipeline so the JSON snapshots refresh automatically when editors publish updates in WordPress.',
      outcome: 'Keeps the Angular front-end in sync without abandoning the familiar WordPress authoring workflow.'
    }
  ];

  readonly contentMappings: ContentMapping[] = [
    {
      label: 'Pages (wp/v2/pages)',
      source: '/wp-json/wp/v2/pages?per_page=100&_embed',
      destination: 'src/assets/wordpress/pages.json',
      note: 'Reuse hero copy, welcome text and footer content authored in WordPress pages.'
    },
    {
      label: 'Posts (wp/v2/posts)',
      source: '/wp-json/wp/v2/posts?per_page=100&_embed',
      destination: 'src/assets/wordpress/posts.json',
      note: 'Surface blog-style teachings or numerology stories inside the admin knowledge base.'
    },
    {
      label: 'Media (wp/v2/media)',
      source: '/wp-json/wp/v2/media?per_page=100',
      destination: 'src/assets/wordpress/media.json',
      note: 'Collect illustration references and featured images to accompany each number profile.'
    },
    {
      label: 'Categories & tags (wp/v2/taxonomies)',
      source: '/wp-json/wp/v2/taxonomies',
      destination: 'src/assets/wordpress/taxonomies.json',
      note: 'Preserve Åse’s thematic groupings to power filters inside the admin area.'
    }
  ];

  readonly adminTasks: AdminTask[] = [
    {
      title: 'Configure the export script',
      summary:
        'Set WP_BASE_URL or pass --baseUrl to point at the live WordPress site, then choose an output folder for JSON snapshots.',
      status: 'next',
      reference: 'package.json → scripts.export:wordpress'
    },
    {
      title: 'Run `npm run export:wordpress`',
      summary:
        'Generates WordPress data snapshots under src/assets/wordpress – commit these files or serve them from a headless CMS endpoint.',
      status: 'in-progress',
      reference: 'tools/export-wordpress-content.mjs'
    },
    {
      title: 'Wire JSON into Angular services',
      summary:
        'Replace static arrays with HttpClient calls that hydrate hero copy, stories and illustration prompts from the exported JSON.',
      status: 'done'
    }
  ];

  readonly statusLabels: Record<TaskStatus, string> = {
    next: 'Ready to start',
    'in-progress': 'In progress',
    done: 'Complete'
  };

  setActiveView(view: ActiveView): void {
    this.activeView.set(view);
  }

  toggleNightMode(): void {
    this.nightMode.update(value => !value);
  }
}
