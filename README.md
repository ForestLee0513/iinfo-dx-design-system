# iinfo-dx-design-system

A React/Tailwind component library (shadcn + base-ui based) published as a private package on GitHub Packages, built for consumption from Next.js apps (and any other React 19 app).

## Install (consumer apps)

GitHub Packages requires authentication to install scoped packages, even from public repos, and this repo is private. Add a GitHub personal access token with `read:packages` scope, then configure the registry for the `@forestlee0513` scope.

`.npmrc` (or the yarn/pnpm equivalent) in the consuming project:

```
@forestlee0513:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

For a Yarn Berry consumer, add to `.yarnrc.yml` instead:

```yaml
npmScopes:
  forestlee0513:
    npmRegistryServer: "https://npm.pkg.github.com"
    npmAlwaysAuth: true
    npmAuthToken: "${GITHUB_TOKEN}"
```

Then install:

```bash
yarn add @forestlee0513/iinfo-dx-design-system
```

## Usage

```tsx
// once, e.g. in app/layout.tsx or globals.css
import "@forestlee0513/iinfo-dx-design-system/styles.css"

import { Button } from "@forestlee0513/iinfo-dx-design-system"

export default function Example() {
  return <Button variant="outline">Click me</Button>
}
```

`styles.css` ships as a fully compiled, self-contained Tailwind CSS bundle — the consuming app does not need Tailwind configured to see correct styles.

Every export is bundled behind a top-level `"use client"` directive, so components can be imported directly into React Server Components trees in the Next.js App Router without extra wrapping.

## Development

```bash
yarn install
yarn storybook        # component playground at localhost:6006
yarn build             # bundles src/index.ts -> dist (ESM + CJS + types + styles.css)
yarn typecheck
yarn lint
```

Stories live in `src/stories/*.stories.tsx`. Components live in `src/components/ui/*.tsx` and are re-exported from `src/index.ts`.

## Publishing

Publishing runs in CI (`.github/workflows/publish.yml`) whenever a GitHub Release is published, using the repo's built-in `GITHUB_TOKEN`. To publish:

1. Bump `version` in `package.json`.
2. Cut a GitHub Release (tag it, e.g. `v0.2.0`).
3. CI builds and runs `yarn npm publish` against `npm.pkg.github.com`.
