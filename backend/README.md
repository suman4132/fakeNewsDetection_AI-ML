# VeritasAI Backend (Node.js)

This directory contains the Node.js/Express backend for the Fake News Detection System.

## Setup

1.  **Install Node.js** (if not already installed).
2.  **Install MongoDB** (and ensure it is running locally or provide a cloud URI).
3.  **Install Dependencies**:
    ```bash
    npm install
    ```
4.  **Environment Variables**:
    *   Edit `.env` if necessary (defaults to `mongodb://localhost:27017/veritas_ai` and Port `8000`).

## Running the Server

```bash
# Development (with Nodemon)
npm run dev

# Production
npm start
```

## API Endpoints

*   **Auth**:
    *   `POST /api/auth/register` - { name, email, password }
    *   `POST /api/auth/login` - { email, password }
    *   `GET /api/auth/user` - (Protected) Get current user
*   **News**:
    *   `POST /api/analyze` - (Protected) Upload file 'file'
    *   `GET /api/history` - (Protected) Get user history
