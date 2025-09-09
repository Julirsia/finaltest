# Finaltest

A simple Node.js and Express web application for sharing stories, reviews and notices.
The project separates a public user area from an admin dashboard and uses EJS templates,
MySQL and Firebase authentication.

## Features

- **User pages** – browse and create stories and reviews, and view notices.
- **Admin pages** – manage all content, post notices, delete entries and select featured stories.
- **Authentication** – Google sign‑in via Firebase with a hard‑coded admin email.

## Project Structure

```
finaltest/
├── app.js                 # Express app setup and middleware
├── bin/www                # HTTP server bootstrap (default port 55555)
├── controller/            # Business logic for user and admin
├── routes/                # Route definitions
├── views/                 # EJS templates for pages
├── public/                # Static assets and Firebase scripts
└── database/              # MySQL pool and configuration
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure the database connection in `database/db_config.js`.
3. Start the server:
   ```bash
   npm start
   ```
   The app listens on `PORT` or falls back to `55555`.

## Authentication

`public/firebase/firebase.js` initialises Firebase and `firebase_use.js` handles
Google login. Only `food8123@gmail.com` is treated as the administrator account.

## Database

The application uses a MySQL connection pool. Adjust the credentials in
`database/db_config.js` for your environment.

## License

This project is provided as‑is without warranty.
