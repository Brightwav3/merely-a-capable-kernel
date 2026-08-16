---
title: "Usage stays normalized when providers disagree"
date: 2026-08-14
area: Intelligence
mark: II
status: ACTIVE
verification: DETERMINISTIC TEST
summary: "Voice, delegation, retries, and failed calls share one usage shape, while missing provider usage remains unknown instead of becoming zero."
---

M.A.R.K. II can use more than one model in a single interaction. The voice model keeps the live
conversation moving, a separately configured model handles deeper reasoning, and retries may still
consume provider tokens even when their result is not delivered.

The platform therefore records usage through one normalized contract across provider, model,
operation, role, correlation identifiers, attempts, outcomes, token dimensions, tool calls, and
latency. A provider that does not return usage cannot be treated as free. Its usage remains
`unknown`.

Pricing is a separate question. If a call has no matching price catalog entry, the system exposes
that it is unpriced and follows the configured fail-closed policy. This prevents a dashboard from
turning an absent number into a false zero and keeps model changes visible at the platform boundary.
