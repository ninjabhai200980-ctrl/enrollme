# Employee Enrollment SPA

Full‑stack skeleton for an Employee Enrollment Single Page Application.

## Tech Stack

- Backend: Node.js, Express, TypeScript, Prisma, PostgreSQL
- Frontend: React, TypeScript, Vite

## Setup

### Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

#### Authentication

The backend exposes a JWT-based authentication API.

- `POST /auth/login` with JSON body `{ "email": string, "password": string }`.
- On success, returns `{ "token": "<jwt>" }`.
- For protected routes, send `Authorization: Bearer <jwt>`.
- Passwords are hashed using bcrypt before storage.
- Configure `JWT_SECRET` in the backend environment for production use.

### Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm test` – run tests

This repository intentionally contains only a clean skeleton. Business logic, UI design, and authentication flows will be layered on later.
