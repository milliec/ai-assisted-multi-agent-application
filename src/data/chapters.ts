// The case study's chapters. One list, used by the cover's contents list now and by the
// navigation pill's chapter menu later, so a title or status only changes in one place.
//
// status:
//   'written'    = readable now; has a page at href
//   'collecting' = material gathered every sprint, written up later
//   'build'      = written during the Build phase
//   'planned'    = written later still
// A new chapter is added at the end of each phase. To publish one: create its page,
// set status to 'written' and add its href.

export type ChapterStatus = 'written' | 'collecting' | 'build' | 'planned';

export interface Chapter {
  n: string;       // shown as [01]
  title: string;
  summary: string;
  status: ChapterStatus;
  href?: string;   // only for written chapters
}

// Tag text: long form for the cover list, short form for the (later) pill menu
export const statusLabel: Record<ChapterStatus, { long: string; short: string }> = {
  written: { long: 'Written', short: 'Written' },
  collecting: { long: 'Collecting each sprint', short: 'Collecting' },
  build: { long: 'Build phase', short: 'Build phase' },
  planned: { long: 'Planned', short: 'Planned' },
};

export const chapters: Chapter[] = [
  { n: '01', title: 'The problem', summary: 'Who keeps track of these deadlines today, how, and where it goes wrong.', status: 'written', href: '/chapters/01' },
  { n: '02', title: 'Who decides what', summary: 'What the AI may do, what only a person may do, and the three checkpoints.', status: 'written', href: '/chapters/02' },
  { n: '03', title: 'Directing the agents', summary: 'The instructions I give AI tools, and what happened when they weren’t enough.', status: 'collecting' },
  { n: '04', title: 'Architecture', summary: 'The AI agents, the checker and the code that works out dates.', status: 'build' },
  { n: '05', title: 'Interface', summary: 'The specialist’s review screens and the fund manager’s calendar.', status: 'build' },
  { n: '06', title: 'Evidence', summary: 'How the AI scored against the answer key, and how long a person took to review its work.', status: 'planned' },
  // Note: the mockup also promised "testing with real specialists". The capstone defers that
  // until after the MVP (prd.md OQ-2, A-7), so it is left out here.
  { n: '07', title: 'Decisions and cuts', summary: 'What I left out and why.', status: 'planned' },
  { n: '08', title: 'Learnings', summary: 'What a product designer learned building a product run by AI agents.', status: 'planned' },
];
