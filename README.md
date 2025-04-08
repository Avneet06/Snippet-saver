# SnippetSaver API

A backend API built with Node.js, Express, and PostgreSQL to manage user authentication and task management. The project uses JWT for authentication, bcrypt for secure password hashing, and protected routes for user-specific data.

## Features

- User Registration and Login
- JWT-based Authentication
- Task Management (Create, Read, Update, Delete)
- Password hashing with bcrypt
- PostgreSQL with relational data model

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- bcrypt
- jsonwebtoken
- pg (PostgreSQL client)

## API Endpoints

### Auth Routes

| Method | Route                | Description            |
|--------|----------------------|------------------------|
| POST   | /api/auth/register   | Register a new user    |
| POST   | /api/auth/login      | Log in a user and get JWT|

### Task Routes (Protected)

| Method | Route              | Description               |
|--------|--------------------|---------------------------|
| POST   | /api/tasks         | Create a new task         |
| GET    | /api/tasks         | Get all tasks for user    |
| PUT    | /api/tasks/:id     | Update a task by ID       |
| DELETE | /api/tasks/:id     | Delete a task by ID       |

## Environment Variables

Create a `.env` file in the root with the following:

```
PORT=5432
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/snippet_saver
JWT_SECRET=your_jwt_secret
```

## Getting Started

1. Install dependencies:

```
npm install
```

2. Start the development server:

```
npm run dev
```

3. Test using Postman or any API client with the /api routes.

## Learning Objectives

- Practice JavaScript and Express.js fundamentals
- Learn user authentication with JWT
- Use PostgreSQL for relational data
- Apply middleware for route protection



