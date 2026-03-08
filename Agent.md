# Agent Guide for React + Node Web App

This file helps both humans and AI agents work safely and quickly in this project.

## Project Overview

- Type: Full-stack web app
- Frontend: React + Vite
- Backend: Node.js + Express
- Root folder: `d:\LEARN\AI`

## Folder Structure

- `client/` React frontend
- `server/` Express backend API
- `package.json` root scripts for running both apps together

## Quick Start

Install dependencies:

```bash
npm install
npm install --prefix server
npm install --prefix client
```

Run in development:

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

Production build and start:

```bash
npm run build
npm start
```

## Current API

- `GET /api/health` returns service health and timestamp
- `GET /api/message` returns a sample message used by frontend

Backend entry file: `server/index.js`

## How Frontend Connects to Backend

- Vite proxy in `client/vite.config.js` forwards `/api` to `http://localhost:5000`
- Frontend can call `/api/...` directly in dev without hardcoding backend host

## Agent Working Rules

- Keep existing architecture unless user asks for a redesign.
- Prefer small, focused changes over broad refactors.
- Do not remove endpoints without updating frontend usage.
- If adding an API route, follow current JSON response style and add basic error handling.
- If changing ports, update both backend config and Vite proxy.
- Run a validation step after changes:
  - Frontend build: `npm run build`
  - Backend syntax check: `node --check server/index.js`
- Update this file when workflow or architecture changes.

## Safe Change Checklist (for humans and agents)

- Does frontend still load and render?
- Do `/api/health` and `/api/message` still respond?
- Does `npm run dev` still start both services?
- Does `npm run build` pass?

## Recommended Next Enhancements

- Add environment variables (`.env`) for configurable backend URL and port.
- Add linting (`eslint`) for frontend and backend.
- Add tests for API endpoints and UI integration.
