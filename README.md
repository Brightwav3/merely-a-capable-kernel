# Merely a capable kernel

The meta-repository for the Merely a capable kernel lineage.

Merely a capable kernel is not one application or one provider. It is the evolution of an assistant kernel across
three technological boundaries:

```text
Mark I        Proof of Concept
      ↓
Mark II       Advanced Half-Duplex Assistant
      ↓
Mark III      Future Conversational Assistant
```

The public Astro site is the Mark II devblog: the original ZIP source with its log, entries,
Marks, system view, and full design system preserved.

The site source lives in [`site/`](./site) and deploys to [GitHub Pages](https://brightwav3.github.io/merely-a-capable-kernel/)
through [`.github/workflows/pages.yml`](./.github/workflows/pages.yml).

The responsive layouts are implemented in the Astro source against the supplied design references:
390px mobile uses the two-row header and one-column content, while 834px tablet uses the single-row
header, two-column Marks grid, and tablet table geometry. The desktop ZIP remains the source of the
content, routes, tokens, and components.

## Browse the Marks

| Mark | Open |
| --- | --- |
| Mark I | [Pages route](https://brightwav3.github.io/merely-a-capable-kernel/marks/i/) · [root submodule](./mark-i/) |
| Mark II | [Pages route](https://brightwav3.github.io/merely-a-capable-kernel/marks/ii/) · [root submodule](./mark-ii/) |
| All Marks | [Pages index](https://brightwav3.github.io/merely-a-capable-kernel/marks/) |

## Pinned Marks

The lineage is represented in the repository as pinned Git submodules:

| Mark | Path | Repository |
| --- | --- | --- |
| Mark I | [`mark-i/`](./mark-i) | [Assistant-mark-I](https://github.com/Brightwav3/Assistant-mark-I) |
| Mark II | [`mark-ii/`](./mark-ii) | [Assistant-mark-II](https://github.com/Brightwav3/Assistant-mark-II) |
| Mark III | — | Future; no repository published yet |

Clone with `git clone --recurse-submodules` to materialize both pinned Mark repositories.
