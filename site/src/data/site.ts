export const site = {
  title: "M.A.R.K.",
  tagline: "The assistant kernel lineage",
  description:
    "The M.A.R.K. lineage: one map for every generation of the assistant kernel.",
  repo: "https://github.com/Brightwav3/M.A.R.K.",
  org: "https://github.com/Brightwav3",
};

export type MarkStatus = "complete" | "active" | "future";

export const marks: {
  number: string;
  name: string;
  title: string;
  question: string;
  description: string;
  status: MarkStatus;
  repo?: string;
}[] = [
  {
    number: "I",
    name: "Assistant M.A.R.K. I",
    title: "Proof of Concept",
    question: "Can a long-term personal assistant exist as a modular system independent of one AI model?",
    description: "The frozen proof that independent cores can compose into one usable assistant system.",
    status: "complete",
    repo: "https://github.com/Brightwav3/Assistant-mark-I",
  },
  {
    number: "II",
    name: "Assistant M.A.R.K. II",
    title: "Advanced Half-Duplex Assistant",
    question: "How capable can an assistant become with current-generation half-duplex voice models?",
    description: "The active line: Gemini Live, delegation, memory evidence, state, tools, and a headless runtime.",
    status: "active",
    repo: "https://github.com/Brightwav3/Assistant-mark-II",
  },
  {
    number: "III",
    name: "M.A.R.K. III",
    title: "Future Conversational Assistant",
    question: "What changes when the assistant can listen, speak, and reason through natural overlap?",
    description: "The future boundary for full conversational interaction, semantic backchannels, and true overlap.",
    status: "future",
  },
];
