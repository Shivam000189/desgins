export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  cardColor: string;
  textColor: string;
  avatarType: 'dave' | 'chelcie' | 'deedy' | 'steven' | 'chihua';
  rotation?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'dave-gilboa',
    name: 'Dave Gilboa',
    role: 'CEO',
    company: 'Warby Parker',
    quote:
      '“Wispr Flow’s dictation has always felt like magic. With Notetaker, that magic has gone multiplayer with no extra setup, perfectly formatted notes, and summaries that are actually useful.”',
    cardColor: 'bg-[#faf7f0]',
    textColor: 'text-[#1c1917]',
    avatarType: 'dave',
  },
  {
    id: 'chelcie-taylor',
    name: 'Chelcie Taylor',
    role: 'Principal',
    company: 'Notable Capital',
    quote:
      '“I’ve connected Wispr Flow Notetaker to the other agents I run, and they do noticeably better work with its transcripts. The accuracy makes a difference beyond the meeting itself.”',
    cardColor: 'bg-[#c65135]',
    textColor: 'text-white',
    avatarType: 'chelcie',
  },
  {
    id: 'deedy-das',
    name: 'Deedy Das',
    role: 'Partner',
    company: 'Menlo Ventures',
    quote:
      '“There are many notetakers in the market, but Wispr Notetaker is the most seamless experience I’ve seen.”',
    cardColor: 'bg-[#ffffff]',
    textColor: 'text-[#1c1917]',
    avatarType: 'deedy',
  },
  {
    id: 'steven-bartlett',
    name: 'Steven Bartlett',
    role: 'Host of The Diary of a CEO',
    company: "Spotify's #1 global podcast",
    quote:
      '“Every important thing I do starts with a conversation. I trust Wispr Notetaker to capture it accurately, so I can focus on what comes next.”',
    cardColor: 'bg-[#ded6eb]',
    textColor: 'text-[#1c1917]',
    avatarType: 'steven',
  },
  {
    id: 'chi-hua-chien',
    name: 'Chi-Hua Chien',
    role: 'Co-Founder & Managing Partner',
    company: 'Goodwater Capital',
    quote:
      '“Notetaker has become my constant companion for all meetings. It helps me focus much more on the meeting content with the confidence that high-quality notes and next steps will be magically produced.”',
    cardColor: 'bg-[#0a8a65]',
    textColor: 'text-white',
    avatarType: 'chihua',
  },
];

export interface TrickyWordSnippet {
  id: string;
  speaker: string;
  speakerColor: string;
  textBefore: string;
  highlightedWord: string;
  textAfter: string;
  x: string;
  y: string;
}

export const TRICKY_WORDS: TrickyWordSnippet[] = [
  {
    id: '1',
    speaker: 'Natasha',
    speakerColor: 'text-[#10b981]',
    textBefore: 'Make sure the ',
    highlightedWord: 'Tableau',
    textAfter: ' dashboard is ready.',
    x: 'left-4 top-24',
    y: '',
  },
  {
    id: '2',
    speaker: 'Stephen',
    speakerColor: 'text-[#f59e0b]',
    textBefore: 'Stephen, how’s the ',
    highlightedWord: 'process review',
    textAfter: ' going?',
    x: 'right-1/4 top-8',
    y: '',
  },
  {
    id: '3',
    speaker: 'Stephen',
    speakerColor: 'text-[#f59e0b]',
    textBefore: 'I’d give Raphael ',
    highlightedWord: 'carte blanche',
    textAfter: '.',
    x: 'right-8 top-32',
    y: '',
  },
  {
    id: '4',
    speaker: 'Emmert',
    speakerColor: 'text-[#38bdf8]',
    textBefore: 'Will you be ready to present the ',
    highlightedWord: 'Miro-board',
    textAfter: ' on Monday?',
    x: 'left-1/4 bottom-12',
    y: '',
  },
  {
    id: '5',
    speaker: 'Sarah',
    speakerColor: 'text-[#ec4899]',
    textBefore: 'Tuesday is better. I want to run it by ',
    highlightedWord: 'Sridhar',
    textAfter: ' first.',
    x: 'right-1/3 bottom-16',
    y: '',
  },
  {
    id: '6',
    speaker: 'Josh',
    speakerColor: 'text-[#a855f7]',
    textBefore: 'Most and how validation will do on ',
    highlightedWord: 'Asana',
    textAfter: '.',
    x: 'left-12 top-4',
    y: '',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'How does Wispr Notetaker join meetings?',
    answer:
      'Wispr Notetaker works directly on your Mac or Windows desktop at the OS audio level. There is NO awkward third-party bot joining your call, no bot sitting in the participant list, and no awkward “Wispr Bot has entered the lobby” messages. It quietly captures high-fidelity audio directly from your system and microphone.',
  },
  {
    question: 'Does it work across Google Meet, Zoom, Teams, and Slack?',
    answer:
      'Yes, 100%. Because Wispr Notetaker lives natively on your device, it captures any meeting regardless of the platform: Zoom, Google Meet, Microsoft Teams, Slack Huddles, Webex, or even in-person discussions via your computer mic.',
  },
  {
    question: 'How does it capture rare names, industry jargon, and acronyms accurately?',
    answer:
      'Wispr connects to your work calendar and personal vocabulary dictionary. It references attendees’ exact spellings, past documents, and technical terms to transcribe domain-specific words (like "Kubernetes", "Sridhar", "ARR", "Tableau", or "carte blanche") with unmatched accuracy.',
  },
  {
    question: 'What is the "What did I miss?" button and how does it work?',
    answer:
      'If you get distracted or step away for a minute, you can tap "What did I miss?". Wispr instantly provides an executive 3-bullet recap of everything spoken in the last 2-3 minutes so you can seamlessly answer questions or participate without asking anyone to repeat themselves.',
  },
  {
    question: 'Can I import my past meeting history from Otter, Fathom, or Granola?',
    answer:
      'Yes. Our one-click migration tool lets you import your entire workspace archive from Granola, Otter.ai, Fathom, or Fireflies, preserving meeting dates, titles, full transcripts, and tags so you never lose your institutional memory.',
  },
  {
    question: 'Is my meeting data private, encrypted, and safe from AI model training?',
    answer:
      'Yes. Wispr is SOC 2 Type II compliant with end-to-end encryption in transit and at rest. Your audio and meeting transcripts are never used to train frontier public AI models. Enterprise accounts also include central admin controls and granular consent gates.',
  },
];
