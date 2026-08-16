export const site = {
  title: "M.A.R.K.",
  tagline: "Merely A Responsive Kernel",
  description:
    "M.A.R.K. is model-independent infrastructure for a persistent personal assistant.",
  repo: "https://github.com/Brightwav3/Assistant-mark-II",
  org: "https://github.com/Brightwav3",
};

export type Status =
  | "VERIFIED"
  | "ACTIVE"
  | "EXPERIMENTAL"
  | "NEEDS WORK"
  | "SUPERSEDED"
  | "RETIRED"
  | "IMPLEMENTED"
  | "PLANNED"
  | "UNSUPPORTED"
  | "HISTORICAL";

export const subsystems: { name: string; owns: string; status: Status; href?: string }[] = [
  { name: "assistant-runtime", owns: "Composition root, lifecycle, typed adapters", status: "ACTIVE" },
  { name: "core-runtime", owns: "Lifecycle, configuration, events, registry, health", status: "IMPLEMENTED" },
  { name: "activation-core", owns: "Activation providers and activation events", status: "IMPLEMENTED" },
  { name: "speech-system", owns: "Scribe / Voice siblings retained; Realtime Core is the native path", status: "IMPLEMENTED" },
  { name: "intelligence-core", owns: "Model gateway, context, reasoning boundaries", status: "IMPLEMENTED" },
  { name: "memory-core", owns: "Durable memory and bounded retrieval", status: "IMPLEMENTED" },
  { name: "state-core", owns: "Current state, freshness, revisions, snapshots", status: "IMPLEMENTED" },
  { name: "tool-system", owns: "Tool contracts, validation, policy, brokered execution", status: "IMPLEMENTED" },
  { name: "host-tools", owns: "Deterministic host capability catalogue", status: "IMPLEMENTED" },
  { name: "device-network", owns: "Device protocol, registry, transport, liveness", status: "IMPLEMENTED" },
  { name: "AEC boundary", owns: "Shared capture/playback signal relationship", status: "NEEDS WORK", href: "https://github.com/Brightwav3/Assistant-mark-II#the-full-duplex-problem" },
  { name: "interaction-core", owns: "Conversation flow coordination", status: "PLANNED" },
  { name: "event-core", owns: "Central cross-system event infrastructure", status: "PLANNED" },
  { name: "context-core", owns: "Broader environmental and user context", status: "PLANNED" },
  { name: "security-core", owns: "Authority, permissions, trust boundaries", status: "PLANNED" },
  { name: "task-core", owns: "Long-running work beyond one conversation", status: "PLANNED" },
  { name: "automation-core", owns: "Deterministic trigger → condition → action workflows", status: "PLANNED" },
  { name: "presence-core", owns: "User presence and confidence", status: "PLANNED" },
  { name: "display-system", owns: "Structured visual output", status: "PLANNED" },
  { name: "home-bridge", owns: "Home Assistant and smart-home infrastructure", status: "PLANNED" },
  { name: "apple-bridge", owns: "Calendar, Mail, Contacts, Reminders", status: "PLANNED" },
  { name: "internet-gateway", owns: "Separate internet-facing trust zone", status: "PLANNED" },
  { name: "room-satellite", owns: "Physical microphone, speaker, display, sensors", status: "PLANNED" },
  { name: "control-center", owns: "Administration, diagnostics, configuration", status: "PLANNED" },
  { name: "activation-gemini-bridge", owns: "Historical temporary activation-to-realtime bridge", status: "HISTORICAL" },
];

export const facts = [
  { label: "Generation", value: "M.A.R.K. II" },
  { label: "Cross-core imports", value: "0" },
  { label: "Delegation latency", value: "~2 s" },
  { label: "Verified host", value: "Windows x64" },
];

export const hosts: { host: string; status: Status; note: string }[] = [
  { host: "Windows x64", status: "VERIFIED", note: "Source, deterministic tests, and the Windows CI job with real ffmpeg/ffplay." },
  { host: "macOS (darwin)", status: "UNSUPPORTED", note: "No adapter. The factory returns a structured unsupported capability." },
  { host: "Linux", status: "UNSUPPORTED", note: "No adapter. Capture and playback report degraded with a reason." },
];
