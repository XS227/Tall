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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  toggleNightMode(): void {
    this.nightMode.update(value => !value);
  }
}
