# M.A.R.K.

The meta-repository for the M.A.R.K. lineage.

M.A.R.K. is not one application or one provider. It is the evolution of an assistant kernel across
three technological boundaries:

```text
M.A.R.K. I    Proof of Concept
      ↓
M.A.R.K. II   Advanced Half-Duplex Assistant
      ↓
M.A.R.K. III  Future Conversational Assistant
```

The public Astro site is the M.A.R.K. II devblog: the original ZIP source with its log, entries,
Marks, system view, and full design system preserved.

The site source lives in [`site/`](./site) and deploys to [GitHub Pages](https://brightwav3.github.io/M.A.R.K./)
through [`.github/workflows/pages.yml`](./.github/workflows/pages.yml).

The responsive layouts are implemented in the Astro source against the supplied design references:
390px mobile uses the two-row header and one-column content, while 834px tablet uses the single-row
header, two-column Marks grid, and tablet table geometry. The desktop ZIP remains the source of the
content, routes, tokens, and components.

## Pinned Marks

The lineage is represented in the repository as pinned Git submodules:

| Mark | Path | Repository |
| --- | --- | --- |
| M.A.R.K. I | [`marks/mark-i/`](./marks/mark-i) | [Assistant-mark-I](https://github.com/Brightwav3/Assistant-mark-I) |
| M.A.R.K. II | [`marks/mark-ii/`](./marks/mark-ii) | [Assistant-mark-II](https://github.com/Brightwav3/Assistant-mark-II) |
| M.A.R.K. III | — | Future; no repository published yet |

Clone with `git clone --recurse-submodules` to materialize both pinned Mark repositories.
