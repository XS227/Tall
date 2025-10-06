// Numerology illustration specs for T2I (Stable Diffusion, Flux, Midjourney, etc.)

export type Aspect = '16:9' | '1:1' | '4:5';
export interface IllustrationSpec {
  id: string;
  title: string;
  number: number | 11 | 22 | 33;
  prompt: string;          // main positive prompt
  negative?: string;       // optional neg prompt
  styleTags: string[];     // quick style flags for your generator
  palette: string[];       // brand-ish colors (hex)
  ratios: Aspect[];        // recommended outputs
  keywords: string[];      // for search/filtering
}

// Global style you can reuse in the UI (badge, headers)
export const NUMEROLOGY_BASE_STYLE =
  "minimalist vector poster, sacred geometry, clean white background, subtle cosmic gradients, crisp line art, " +
  "elegant typography, soft depth, high contrast focal number, tasteful glow, editorial quality, printable, ui-ready";

// Common negative prompt to reduce visual noise/artefacts
export const DEFAULT_NEG =
  "no watermark, no text blocks, no frame, no extra hands, no distortion, no low-res, no jpeg artifacts, no blurry edges";

// Brand palette (tweak freely)
export const BRAND_PALETTE = ["#111111", "#FFFFFF", "#FFA34D", "#1E1B4B", "#0FA3B1", "#C4F1BE"];

// === ILLUSTRATIONS ===
export const ILLUSTRATIONS: IllustrationSpec[] = [
  {
    id: "num-1-leader-politics-surgery",
    title: "1 — Lederen",
    number: 1,
    prompt:
      `${NUMEROLOGY_BASE_STYLE}, large numeral 1 as monolith, golden amber glow, ray burst crown, ` +
      `subtle motifs of leadership & initiative, tiny iconography: podium, compass, surgical scalpel, ` +
      `thin sacred-geometry grid behind, clean composition`,
    negative: DEFAULT_NEG,
    styleTags: ["minimal", "sacred-geometry", "editorial", "premium"],
    palette: BRAND_PALETTE,
    ratios: ["16:9", "1:1", "4:5"],
    keywords: ["leader", "politician", "surgeon", "career"]
  },
  {
    id: "num-2-healer-mediator",
    title: "2 — Diplomaten & Healer",
    number: 2,
    prompt:
      `${NUMEROLOGY_BASE_STYLE}, numeral 2 formed by two interlocking crescent shapes, ` +
      `soothing emerald aura, hands symbol of healing, olive branch, yin-yang micro motif, ` +
      `gentle bokeh lights, harmony`,
    negative: DEFAULT_NEG,
    styleTags: ["healing", "calm", "emerald"],
    palette: BRAND_PALETTE,
    ratios: ["1:1", "4:5", "16:9"],
    keywords: ["healing", "nurse", "mediator", "counselor"]
  },
  {
    id: "num-3-creator-communications",
    title: "3 — Skaperen",
    number: 3,
    prompt:
      `${NUMEROLOGY_BASE_STYLE}, numeral 3 woven with flowing ribbons and sparks, ` +
      `creative tools micro-icons: pen, camera, stage mask, warm amber highlights, playful yet elegant`,
    negative: DEFAULT_NEG,
    styleTags: ["creative", "warm", "ribbons"],
    palette: BRAND_PALETTE,
    ratios: ["1:1", "16:9"],
    keywords: ["writer", "marketer", "entertainer"]
  },
  {
    id: "num-4-engineer-chemist",
    title: "4 — Byggeren (Ingeniør/Kjemiker)",
    number: 4,
    prompt:
      `${NUMEROLOGY_BASE_STYLE}, numeral 4 integrated into blueprint grid, ` +
      `isometric engineering symbols, beaker & molecule lattice (chemist hint), ruler & cog, ` +
      `cool indigo/teal accents, precision`,
    negative: DEFAULT_NEG,
    styleTags: ["blueprint", "isometric", "precision"],
    palette: BRAND_PALETTE,
    ratios: ["16:9", "1:1"],
    keywords: ["engineer", "architect", "chemist"]
  },
  {
    id: "num-5-explorer-travel",
    title: "5 — Utforskeren",
    number: 5,
    prompt:
      `${NUMEROLOGY_BASE_STYLE}, numeral 5 with motion trails, ` +
      `subtle world map lines, paper plane + compass micro-icons, dynamic composition, ` +
      `teal breeze gradient, freedom`,
    negative: DEFAULT_NEG,
    styleTags: ["dynamic", "travel", "freedom"],
    palette: BRAND_PALETTE,
    ratios: ["16:9", "4:5"],
    keywords: ["journalist", "pilot", "digital-nomad"]
  },
  {
    id: "num-6-caregiver-medicine",
    title: "6 — Vokteren (Medisin/Utdanning)",
    number: 6,
    prompt:
      `${NUMEROLOGY_BASE_STYLE}, numeral 6 shaped like a protective nest, ` +
      `stethoscope & book micro-icons, soft warm glow, heart geometry lines, reassuring design`,
    negative: DEFAULT_NEG,
    styleTags: ["care", "medical", "education"],
    palette: BRAND_PALETTE,
    ratios: ["1:1", "4:5"],
    keywords: ["doctor", "teacher", "family-therapist"]
  },
  {
    id: "num-7-astronomer-physicist",
    title: "7 — Søkeren (Astronomi/Fysikk)",
    number: 7,
    prompt:
      `${NUMEROLOGY_BASE_STYLE}, numeral 7 aligned with star chart and constellations, ` +
      `deep indigo night, telescope silhouette, subtle equations (no text), ` +
      `mystic yet scientific balance`,
    negative: DEFAULT_NEG,
    styleTags: ["cosmic", "research", "indigo"],
    palette: BRAND_PALETTE,
    ratios: ["16:9", "1:1"],
    keywords: ["astronomer", "physicist", "data-science"]
  },
  {
    id: "num-8-law-finance",
    title: "8 — Kraft & Struktur (Jus/Finans)",
    number: 8,
    prompt:
      `${NUMEROLOGY_BASE_STYLE}, numeral 8 as infinity loop made of balanced scales & geometric bars, ` +
      `sleek black/amber highlights, authority and abundance, marble texture hint`,
    negative: DEFAULT_NEG,
    styleTags: ["authority", "lux", "balanced"],
    palette: BRAND_PALETTE,
    ratios: ["1:1", "16:9"],
    keywords: ["lawyer", "banker", "entrepreneur"]
  },
  {
    id: "num-9-humanitarian-psychology",
    title: "9 — Humanitæren",
    number: 9,
    prompt:
      `${NUMEROLOGY_BASE_STYLE}, numeral 9 with radiating petals, globe heart micro-icon, ` +
      `soft mint + amber accents, compassionate aura, service to humanity`,
    negative: DEFAULT_NEG,
    styleTags: ["humanitarian", "soft", "mint"],
    palette: BRAND_PALETTE,
    ratios: ["4:5", "1:1"],
    keywords: ["ngo", "psychologist", "diplomat"]
  },
  {
    id: "num-11-mystic-medium-healing",
    title: "11 — Mestertall: Seeren (Medium/Healing)",
    number: 11,
    prompt:
      `${NUMEROLOGY_BASE_STYLE}, twin pillars forming 11, prism light beam, ` +
      `subtle third-eye motif, hands channeling gentle energy, ethereal particles, hush tones`,
    negative: DEFAULT_NEG,
    styleTags: ["mystic", "healing", "ethereal"],
    palette: BRAND_PALETTE,
    ratios: ["1:1", "4:5", "16:9"],
    keywords: ["medium", "spiritual-teacher", "energy-healer"]
  },
  {
    id: "num-22-master-builder-systems",
    title: "22 — Mestertall: Mesterbygger (Systemer)",
    number: 22,
    prompt:
      `${NUMEROLOGY_BASE_STYLE}, numeral 22 as interlocked architectural frames, ` +
      `city grid & network nodes, systems engineering vibe, disciplined elegance`,
    negative: DEFAULT_NEG,
    styleTags: ["systems", "architecture", "network"],
    palette: BRAND_PALETTE,
    ratios: ["16:9", "1:1"],
    keywords: ["systems-engineer", "urban-planner", "founder"]
  },
  {
    id: "num-33-master-teacher-compassion",
    title: "33 — Mestertall: Læreren",
    number: 33,
    prompt:
      `${NUMEROLOGY_BASE_STYLE}, numeral 33 as twin spiral hearts, ` +
      `open book & guiding light micro-icons, warm halo, universal compassion`,
    negative: DEFAULT_NEG,
    styleTags: ["teacher", "compassion", "warm"],
    palette: BRAND_PALETTE,
    ratios: ["4:5", "1:1"],
    keywords: ["counselor", "mentor", "humanitarian-healer"]
  },
  // BONUS: career-specific variants you mentioned
  {
    id: "career-astronaut-master",
    title: "Astronaut (for 7/11/22)",
    number: 7,
    prompt:
      `${NUMEROLOGY_BASE_STYLE}, astronaut silhouette within a giant numeral, ` +
      `orbital rings & sacred geometry, deep space minimalism, brave serenity`,
    negative: DEFAULT_NEG,
    styleTags: ["space", "brave", "minimal"],
    palette: BRAND_PALETTE,
    ratios: ["16:9", "1:1"],
    keywords: ["astronaut", "research", "frontier"]
  },
  {
    id: "career-chemist-4",
    title: "Kjemiker (for 4/8/22)",
    number: 4,
    prompt:
      `${NUMEROLOGY_BASE_STYLE}, crystalline numeral with molecule lattice overlay, ` +
      `lab glassware micro-icons, precise indigo lines on white, clinical clarity`,
    negative: DEFAULT_NEG,
    styleTags: ["lab", "crystal", "precision"],
    palette: BRAND_PALETTE,
    ratios: ["1:1", "16:9"],
    keywords: ["chemist", "lab", "science"]
  }
];

// Example helper: pick a spec by number for dynamic UIs
export function getIllustrationsForNumber(n: number | 11 | 22 | 33) {
  return ILLUSTRATIONS.filter(i => i.number === n);
}
