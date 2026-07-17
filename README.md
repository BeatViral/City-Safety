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
npm run preview
```

The Vite build uses a relative asset base, so the generated `dist` directory works both at a domain root and under a GitHub Pages repository path.

## Deployment

The included GitHub Actions workflow builds and deploys the site to GitHub Pages whenever `main` is updated. In the repository settings, Pages must use **GitHub Actions** as its source.

## Prototype disclaimer

City Safety does not guarantee personal safety and does not replace official travel advice, emergency services or individual judgement. All prototype responses use illustrative data and scenarios.
