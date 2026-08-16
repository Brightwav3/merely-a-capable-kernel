---
title: "Echo cancellation needs one signal relationship"
date: 2026-08-14
area: Audio
mark: II
status: NEEDS WORK
verification: NOT VERIFIED
summary: "AEC needs capture and playback on one timeline, while the current speech cores intentionally remain independent repositories."
---

The current native speech route is intentionally small:

```text
microphone → Realtime Core → Gemini Live → response audio
```

Echo cancellation adds a relationship the existing core boundaries do not yet carry. It needs the
captured signal and the exact audio being played, aligned on one timeline. Scribe Core owns capture
and Realtime Core owns playback, so neither core can quietly take ownership of the other stream.

That is why the M.A.R.K. II architecture records an explicit AEC boundary rather than pretending
that a filter is already integrated. The future boundary must let the host supply both streams,
keep device ownership in the platform leaves, and report whether cancellation converged or degraded.

This is application work around the current model ceiling. It is not evidence that M.A.R.K. II is
full-duplex. Gemini Live remains a turn-based model even though the transport is native and
bidirectional.
