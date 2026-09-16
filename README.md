# My Blog (full-stack)

A Django + React blog, built as a portfolio project on top of the NAIT SDEV2401 blog example. Started as coursework, extended with a REST API and a React frontend to demonstrate full-stack skills for entry-level developer roles.

## Stack

- **Backend:** Django 5 + Django REST Framework
- **Frontend:** React (Vite)
- **Database:** SQLite (dev)

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

## Next steps

- Deploy backend + frontend and add the live link here
- Add per-post edit/delete buttons in the UI (API already supports it)
