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

## API

- `GET /api/posts/` — list all posts (public)
- `GET /api/posts/<id>/` — retrieve one post (public)
- `POST /api/posts/` — create a post (requires authentication)
- `PUT`/`PATCH`/`DELETE /api/posts/<id>/` — update/delete (requires authentication, author only in a future iteration)

## Next steps

- Add JWT authentication so the React app can log in and create posts
- Deploy backend + frontend and add the live link here
