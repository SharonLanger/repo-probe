# repo-probe

Data extraction engine for ICM. Maps codebase metrics per-folder, aggregates bottom-up, derives insights.

## Quick start

```bash
npm install
npm run build
npm test
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Run from source via ts-node |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run compiled output |
| `npm run lint` | Check for lint errors |
| `npm run lint:fix` | Auto-fix lint errors |
| `npm run format` | Format all source files |
| `npm run format:check` | Check formatting without writing |
| `npm run typecheck` | Type-check without emitting |
| `npm test` | Run all tests |
| `npm run test:unit` | Run unit tests only |
| `npm run test:integration` | Run integration tests only |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run clean` | Remove `dist/` and `coverage/` |
| `npm run ci` | Lint + typecheck + test (CI pipeline) |

## Running Tests

```bash
npm test              # all tests
npm run test:unit     # unit tests only
npm run test:watch    # watch mode (reruns on file changes)
npm run test:coverage # with coverage report
```

Or use the IntelliJ/WebStorm run configurations from the Run dropdown.

## CI/CD

CI runs on **GitHub Actions** via `.github/workflows/ci.yml`.

**Triggers:** push to `main`, any PR targeting `main`.

**Jobs (dependency chain):**

1. `quality` — lint + format check + typecheck (runs first)
2. `test-unit` — unit tests (waits for quality)
3. `test-integration` — integration tests (waits for quality, parallel with unit)
4. `build` — compile TS to JS (waits for both test jobs)

Each job runs on a fresh `ubuntu-latest` VM. If any job fails, the PR is blocked from merging (branch protection).

`cancel-in-progress: true` ensures outdated runs are killed when you push again.
