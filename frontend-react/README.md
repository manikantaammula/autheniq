# frontend-react

This is a minimal Vite + React + TypeScript frontend scaffold for the AuthenIQ backend.

Prerequisites
- Node.js (install via https://nodejs.org or `winget install --id OpenJS.NodeJS.LTS -e --source winget`)

Run locally

```bash
cd frontend-react
npm install
npm run dev
```

The app expects the backend at `http://localhost:8080` by default. To change the API base URL, set an env var before running:

```bash
# Linux/macOS (example)
VITE_API_BASE=http://localhost:8080 npm run dev

# Windows PowerShell
$env:VITE_API_BASE = 'http://localhost:8080'; npm run dev
```

What is included
- Basic routing (Register / Verify)
- `src/api.ts` - wrapper for calling the backend endpoints
- TypeScript types in `src/types.ts`

Next steps
- I can add QR rendering on the client, improve form validation, or convert more UI/UX features.
