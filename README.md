# Project Lift

Keep the work connected, current, and moving.

Project Lift is a Company Brain hackathon prototype that brings scattered project updates, evidence and decisions into a shared, source-grounded view of work. This runnable export uses fictional company data, a TypeScript/Node.js backend and a lightweight web interface.

## Run locally

Install Node.js 24.15 or newer within the 24.x series and npm 11.19.0. No Python, bundler, credentials, account, or hosted service is needed. Dependency installation requires access to the npm registry; the running demo works offline.

```sh
cd app
npm ci --ignore-scripts
npm start
```

Open http://127.0.0.1:4318. If that port is occupied, choose another with `PORT=4321 npm start` on macOS/Linux or `$env:PORT=4321; npm start` in PowerShell. Startup fails on an occupied port and never stops another process. Stop with Ctrl+C.

The server binds only to IPv4 loopback. The default launcher discards inherited Hydra credentials and authorization, locks model calls, and uses this checkout's `.runtime/` directory. It does not open a browser.

## Try the demo

- Select Atlas R1 or Harbor Onboarding Pilot in Overview. Inspect source revisions, clocks, review weights and explicit decision history.
- Open Team to choose a team and see recorded open work and completion records.
- In My Work, choose a fictional User Focus, then submit an unverified update to a project or one of that person's tasks. Target attribution and original text persist locally; submitting an update does not close a task or accept a proposal.
- Agent roles explains the planned Monitor and on-demand Triage. Live Triage stays locked in default startup. Recorded agent activity is initially empty.

Inputs and review decisions are saved under `.runtime/` with restrictive local permissions. To start over, stop the app and remove that directory. Never publish local runtime files or real user submissions.

## Verify offline

From `app/`:

```sh
npm test
npm run test:ui
npm run build
npm run verify:offline
```

Unit tests use synthetic records and mocked subprocesses; provider operations are rejected by the offline adapter. The offline-startup verification copies only source and fixtures to a temporary checkout, so existing local submissions are never read or changed. UI tests launch a temporary server on an available loopback port with provider/model authorization removed, use an isolated DOM, and remove their temporary state. They do not use your browser, account, or credentials. The build performs syntax and TypeScript checks; no bundle is emitted.

## Scope and limitations

The default demo has no live retrieval, background monitor, external messages, production authentication, or public deployment. User Focus is a fictional display identity, not an authentication boundary. Source assertions and user updates are unverified evidence; source text is rendered inertly.

The live HydraDB adapter and SDK are excluded from this public offline export. The compatibility adapter has no network client and rejects provider operations, even if environment settings request live access. Connecting HydraDB would require a separate implementation and independently authorized installation under its applicable terms. Optional bounded Codex CLI investigation source remains; it requires explicit operator authorization, a separately installed CLI and an authenticated account, and can transmit evidence outside the machine. `npm start` intentionally disables them. No connection settings, credentials, provider receipts, or previous investigations are included. Presentation/spreadsheet records contain synthetic extracted text; binary documents and document conversion are not included. Task-specific investigation is limited to the Atlas gateway. Do not host this local shared-state demo publicly as a production service.

This source snapshot contains no local Git history. No project-wide open-source license has been selected; third-party packages retain their respective licenses in THIRD_PARTY_NOTICES.md and licenses/.
