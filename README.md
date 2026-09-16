# My Blog (full-stack)

A Django + React blog, built as a portfolio project on top of the NAIT SDEV2401 blog example. Started as coursework, extended with a REST API and a React frontend to demonstrate full-stack skills for entry-level developer roles.

**Live:** https://myblogwebsite-portfolio.vercel.app (API: https://myblogwebsite-api.onrender.com)

## Stack

- **Backend:** Django 5 + Django REST Framework, deployed on [Render](https://render.com)
- **Frontend:** React (Vite), deployed on [Vercel](https://vercel.com)
- **Database:** SQLite locally, Postgres in production

## Running locally

Backend:

```bash
source venv/bin/activate
python manage.py migrate
python manage.py runserver
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173`. The React app fetches posts from the Django API at `http://127.0.0.1:8000/api/posts/`.

## Features

- Public post feed
- Sign up / log in (JWT auth)
- Authenticated users can publish new posts from the UI
- Only a post's author can edit or delete it

## API

- `GET /api/posts/` — list all posts (public)
- `GET /api/posts/<id>/` — retrieve one post (public)
- `POST /api/posts/` — create a post (requires authentication)
- `PUT`/`PATCH`/`DELETE /api/posts/<id>/` — update/delete (requires authentication, author only)
- `POST /api/register/` — create a user account
- `POST /api/token/` — obtain a JWT access/refresh token pair
- `POST /api/token/refresh/` — refresh an access token

## Deployment

Backend (Render):

1. Push this repo to GitHub (already done).
2. On [Render](https://dashboard.render.com), click **New > Blueprint**, connect this repo — it reads [`render.yaml`](render.yaml) and provisions a free web service + free Postgres database automatically.
3. Once it's live, copy the service URL (e.g. `https://myblogwebsite-api.onrender.com`).

Frontend (Vercel):

1. On [Vercel](https://vercel.com/new), import this repo, set **Root Directory** to `frontend`.
2. Add an environment variable `VITE_API_URL` set to `https://<your-render-url>/api`.
3. Deploy. Copy the resulting Vercel URL.

Then wire the two together:

- On Render, update the `CORS_ALLOWED_ORIGINS` environment variable to your Vercel URL (comma-separate if you keep localhost too).
- Redeploy the backend for the CORS change to take effect.

**Note:** the Render free tier spins the backend down after inactivity, so the first request after a while can take ~50s to wake it back up. Subsequent requests are fast.

## Next steps

- Add per-post edit/delete buttons in the UI (API already supports it)
