# City Safety

**Never enter a city blind.**

City Safety is a static interactive product concept that turns natural travel-safety questions into calm, structured guidance. The prototype includes six connected journeys, a component-built messaging interface, fictional route maps, honest confidence and evidence notes, and a clear boundary for unconnected questions.

## Local development

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run lint
npm run build
npm run build:pages
npm run preview
```

The Vite build uses a relative asset base, so the generated `dist` directory works both at a domain root and under a GitHub Pages repository path.

## Deployment

GitHub Pages is configured to publish the `main` branch root. Run `npm run build:pages` before committing a release; this creates the normal `dist` build and synchronises its production entry and compiled assets to the repository root. The source HTML remains in `index.source.html` for Vite development.

## Prototype disclaimer

City Safety does not guarantee personal safety and does not replace official travel advice, emergency services or individual judgement. All prototype responses use illustrative data and scenarios.
