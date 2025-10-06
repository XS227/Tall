export interface ExampleProfile {
  id: string;
  displayName: string; // skriv inn navnet når du har godkjenning
  role: string;
  description: string;
  mainNumber: number | 11 | 22 | 33;
  excerpt: string;
  image?: string;
}

export const EXAMPLE_PROFILES: ExampleProfile[] = [
  {
    id: 'example-1',
    displayName: 'Kjent person 1',
    role: 'Forfatter / Filosof',
    description: 'Et eksempel på en 7-er — den som søker sannhet og kunnskap.',
    mainNumber: 7,
    excerpt: 'Symbol på introspeksjon, forskning og å se under overflaten.'
  },
  {
    id: 'example-2',
    displayName: 'Kjent person 2',
    role: 'Leder / Politiker',
    description: 'En tydelig 8-er — struktur, makt, og evne til å skape resultater.',
    mainNumber: 8,
    excerpt: 'Representerer autoritet, visjon og økonomisk mestring.'
  },
  {
    id: 'example-3',
    displayName: 'Kjent person 3',
    role: 'Kunstner / Lærer',
    description: 'En 3-er — uttrykk, kreativitet og kommunikasjon.',
    mainNumber: 3,
    excerpt: 'Forbinder følelser med formidling, inspirerer andre gjennom ord og bilder.'
  }
];
