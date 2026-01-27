# VeritasAI - Fake News Detection System

A comprehensive Full-Stack Web Application for detecting fake news using Artificial Intelligence.

## 🚀 Project Overview

This project consists of two main parts:
1.  **Frontend (React + Vite)**: A modern, glassmorphism-styled user interface for users to upload news/images and view results.
2.  **Backend (Node.js + Express + MongoDB)**: Handles user authentication, history management, and serves as the gateway to the Machine Learning model.

## 📂 Project Structure

```
d:/FinalYearProject/
├── frontend/       # React User Interface
│   ├── src/
│   └── ...
├── backend/        # API Server & Database Logic
│   ├── models/     # Database Schemas
│   ├── routes/     # API Endpoints
│   └── server.js   # Server Entry Point
└── README.md       # This file
```

---

## 🛠️ Setup & Installation

### Prerequisites
*   [Node.js](https://nodejs.org/) (v16+)
*   [MongoDB](https://www.mongodb.com/try/download/community) (Running locally or Cloud URI)

### 1. Backend Setup (Server)

The backend handles the API logic. By default, it simulates ML predictions until you connect your trained model.

1.  Navigate to the backend folder:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure Environment:
    *   The project uses a `.env` file (already created) with:
    *   `PORT=8000`
    *   `MONGO_URI=mongodb://localhost:27017/veritas_ai`
    *   `JWT_SECRET=your_jwt_secret_key`
4.  Start the Server:
    ```bash
    npm run dev
    ```
    *Server will start on `http://localhost:8000`*

### 2. Frontend Setup (Client)

1.  Open a new terminal and navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the Application:
    ```bash
    npm run dev
    ```
    *Access the app at `http://localhost:5173`*

---

## 🤖 How to Connect Your ML Model

Currently, the file `backend/routes/news.js` contains a **simulation** of the AI analysis. To connect your real trained model (Python/TensorFlow), follow these steps:

1.  **Locate the Integration Point**:
    Open `backend/routes/news.js` and look for the `[ML INTEGRATION POINT]` comment inside the `/analyze` route.

2.  **Implementation Options**:

    **Option A: Python Script (Recommended)**
    If your model is a Python script (`predict.py`) that takes an image and prints JSON:
    *   Uncomment `const { spawn } = require('child_process');` at the top.
    *   Use `spawn` to call python:
        ```javascript
        const pythonProcess = spawn('python', ['./your_model/predict.py', req.file.path]);
        pythonProcess.stdout.on('data', (data) => {
             const result = JSON.parse(data.toString());
             // Send 'result' to frontend...
        });
        ```

    **Option B: Flask/FastAPI Microservice**
    If your model runs on a separate Python server (e.g., port 5000):
    *   Install axios: `npm install axios`
    *   Make an HTTP request:
        ```javascript
        const axios = require('axios');
        const response = await axios.post('http://localhost:5000/predict', formData);
        const prediction = response.data;
        ```

3.  **Update the API Response**:
    Ensure your model returns data matching the frontend's expected format:
    ```json
    {
      "prediction": "Fake" | "Real",
      "confidence": 95.5,
      "features_detected": ["List", "of", "reasons"]
    }
    ```

## 🔒 Authentication

The app uses **JWT (JSON Web Tokens)**.
*   **Register**: Creates a user in MongoDB.
*   **Login**: Returns a token saved in `localStorage`.
*   **Private Routes**: The "Upload" and "History" pages are protected and require login.

## 🤝 Contributing & Usage

1.  Register a new account on the frontend.
2.  Go to **Dashboard > Upload News**.
3.  Upload an image (screenshot of news).
4.  View the Analysis results.
5.  Check **History** to see past scans.
