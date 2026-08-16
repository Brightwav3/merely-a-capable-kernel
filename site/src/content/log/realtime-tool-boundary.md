---
title: "Realtime tools are a bounded platform path"
date: 2026-08-13
area: Tools
mark: II
status: VERIFIED
verification: HARDWARE
summary: "The voice model can request a declared realtime tool, but Tool System still owns validation, policy, execution, and the result returned to the live session."
---

The native realtime session does not get unrestricted access to the host. Its session configuration
declares the active safe catalogue, and a correlated speech event carries the request across the
provider-neutral boundary.

```text
Gemini Live
    ↓ tool request
Realtime Core
    ↓ correlated event
Tool System
    ↓ validation + policy + guard
Host Tools
    ↓ result
Realtime Core → Gemini Live
```

The default read-only path includes `get_time`, `calculate`, `uptime`, and `system_status`. The
native path is hardware-verified. Side-effecting capabilities such as `open_app` remain explicit
opt-ins, so a model request is never the same thing as permission to act.

The important boundary is ownership. The model may request an action. The platform decides whether
that action is declared, valid, allowed, bounded, observable, cancellable, and safe to return.
