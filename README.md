# Playwright Automation Framework

TypeScript + Playwright framework for UI + API testing with Page Object Model and GitHub Actions CI.

## Setup
```bash
npm install
npx playwright install

## Run Tests 
npm test
npm run test:ui
npm run test:api
npm run report

```

## Structure
- `src/pages/` - Page Objects
- `tests/ui/` - UI tests
- `tests/api/` - API tests
- `.github/workflows/` - CI pipeline