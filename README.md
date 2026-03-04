# 🔍 VeritasAI - Fake News Detection System

> **A Cutting-Edge Full-Stack AI-Powered Solution for Detecting Fake News & Misinformation**

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v16%2B-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18%2B-61dafb.svg)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-13aa52.svg)](https://www.mongodb.com/)

---

## 🎯 Project Overview

**VeritasAI** is a comprehensive **Full-Stack Web Application** that leverages Artificial Intelligence and Machine Learning to detect fake news and misinformation with high accuracy. The project combines modern web technologies with advanced AI models to provide users with a reliable platform for news verification.

### 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│          Frontend (React + Vite + Tailwind)         │
│     Modern UI with Glassmorphism & 3D Elements     │
└──────────────────┬──────────────────────────────────┘
                   │
                   │ (HTTP/REST API)
                   │
┌──────────────────▼──────────────────────────────────┐
│         Backend (Node.js + Express.js)              │
│   Authentication • History • Data Processing         │
└──────────────────┬──────────────────────────────────┘
                   │
        ┌──────────┼──────────┐
        │          │          │
    MongoDB    Python ML   File Storage
    Database    Model       (Images)
```

---

## ✨ Key Features

✅ **AI-Powered Analysis** - Uses advanced Machine Learning models to detect fake news  
✅ **User Authentication** - Secure JWT-based authentication system  
✅ **Analysis History** - Track all previous news analyses in your personal dashboard  
✅ **Beautiful UI** - Modern glassmorphism design with dark/light theme support  
✅ **Real-time Results** - Get instant predictions with confidence scores  
✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices  
✅ **3D Animations** - Interactive 3D elements for enhanced user experience  
✅ **Secure API** - Protected routes and encrypted data transmission  
✅ **Database Integration** - Persistent storage with MongoDB  

---

## 🛠️ Technology Stack

### Frontend 🎨
| Technology | Purpose |
|------------|---------|
| **React 18+** | UI Library & Component Framework |
| **Vite** | Ultra-fast Build Tool |
| **Tailwind CSS** | Utility-First CSS Framework |
| **Three.js** | 3D Graphics Library |
| **Axios** | HTTP Client |
| **Context API** | State Management |

### Backend 🔧
| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript Runtime |
| **Express.js** | Web Framework |
| **MongoDB** | NoSQL Database |
| **Mongoose** | Database ODM |
| **JWT (jsonwebtoken)** | Authentication |
| **Multer** | File Upload Handling |

### ML & AI 🤖
| Component | Purpose |
|-----------|---------|
| **TensorFlow/Keras** | Model Training |
| **Python** | ML Implementation |
| **NumPy & Pandas** | Data Processing |
| **Scikit-learn** | ML Algorithms |

---

## 📂 Detailed Project Structure

```
fakeNewsDetection_AI-ML/
│
├── 📄 README.md                          # This file
│
├── 🎨 frontend/                          # React + Vite Frontend
│   ├── public/                           # Static assets
│   ├── src/
│   │   ├── components/                  # Reusable components
│   │   │   ├── 3d/                      # 3D scene components
│   │   │   ├── layout/                  # Layout components
│   │   │   │   ├── Navbar.jsx          # Navigation bar
│   │   │   │   ├── Sidebar.jsx         # Sidebar menu
│   │   │   │   ├── DashboardLayout.jsx # Dashboard wrapper
│   │   │   │   ├── Footer.jsx          # Footer component
│   │   │   │   └── ThemeToggle.jsx     # Dark/Light theme
│   │   │   └── ui/                      # UI components
│   │   ├── context/                     # Global state
│   │   │   ├── AuthContext.jsx         # Authentication state
│   │   │   └── ThemeContext.jsx        # Theme state
│   │   ├── pages/                       # Page components
│   │   │   ├── LandingPage.jsx         # Home page
│   │   │   ├── auth/                    # Authentication pages
│   │   │   │   ├── Login.jsx           # Login form
│   │   │   │   └── Register.jsx        # Registration form
│   │   │   └── dashboard/               # Dashboard pages
│   │   │       ├── DashboardHome.jsx   # Dashboard home
│   │   │       ├── UploadNews.jsx      # News upload
│   │   │       ├── History.jsx         # Analysis history
│   │   │       └── AboutModel.jsx      # Model info
│   │   ├── services/
│   │   │   └── api.js                  # API integration
│   │   ├── App.jsx                      # Main app component
│   │   ├── main.jsx                     # Entry point
│   │   ├── App.css                      # App styles
│   │   └── index.css                    # Global styles
│   ├── vite.config.js                   # Vite configuration
│   ├── tailwind.config.js               # Tailwind configuration
│   ├── postcss.config.js                # PostCSS configuration
│   ├── eslint.config.js                 # ESLint rules
│   ├── package.json                     # Dependencies
│   └── index.html                       # HTML template
│
├── 🔧 backend/                           # Node.js + Express Backend
│   ├── models/                          # Database schemas
│   │   ├── User.js                     # User model
│   │   └── History.js                  # Analysis history model
│   ├── routes/                          # API endpoints
│   │   ├── auth.js                     # Authentication routes
│   │   └── news.js                     # News analysis routes
│   ├── middleware/                      # Express middleware
│   │   └── auth.js                     # JWT verification
│   ├── server.js                        # Server entry point
│   ├── package.json                     # Dependencies
│   ├── .env                             # Environment variables
│   └── README.md                        # Backend documentation
│
└── 🤖 ML Model/ (Optional)              # Machine Learning
    ├── model.pkl                        # Trained model
    ├── predict.py                       # Prediction script
    └── requirements.txt                 # Python dependencies
```

---

## 🚀 Quick Start Guide

### Prerequisites ✅

Before you begin, ensure you have installed:

- **[Node.js](https://nodejs.org/)** v16 or higher
  ```bash
  node --version  # Verify installation
  ```
- **[MongoDB](https://www.mongodb.com/try/download/community)** v4.4 or higher
  - OR use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Cloud)
- **[Python](https://www.python.org/)** v3.7+ (for ML model)
  ```bash
  python --version  # Verify installation
  ```

### Installation Steps

#### 1️⃣ Clone & Navigate to Project

```bash
# Navigate to project directory
cd fakeNewsDetection_AI-ML
```

#### 2️⃣ Backend Setup (Server)

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Configure environment variables
# Edit .env file with your settings:
# PORT=8000
# MONGO_URI=mongodb://localhost:27017/veritas_ai
# JWT_SECRET=your_secure_jwt_secret_key_here

# Start backend server
npm run dev
```

✅ **Backend Server Running:** `http://localhost:8000`

#### 3️⃣ Frontend Setup (Client)

```bash
# Open new terminal, navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

✅ **Frontend App Running:** `http://localhost:5173`

---

## 📡 API Documentation

### Authentication Endpoints 🔐

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": { "id": "...", "username": "john_doe" }
}
```

### News Analysis Endpoints 🔍

#### Upload & Analyze News
```http
POST /api/news/analyze
Authorization: Bearer {token}
Content-Type: multipart/form-data

- file: <image_file>

Response:
{
  "prediction": "Fake" | "Real",
  "confidence": 95.5,
  "features_detected": ["misleading_headline", "doctored_image"],
  "timestamp": "2024-03-04T10:30:00Z"
}
```

#### Get Analysis History
```http
GET /api/news/history
Authorization: Bearer {token}

Response:
{
  "analyses": [
    {
      "_id": "...",
      "prediction": "Fake",
      "confidence": 92.3,
      "timestamp": "2024-03-04T10:30:00Z"
    }
  ]
}
```

---

## 🤖 Machine Learning Integration

### Current Status
The backend currently includes a **simulation** of ML predictions. To connect your trained model, follow these steps:

### Integration Options

#### ✅ Option A: Python Script (Recommended)

If your model is a Python script (`predict.py`):

1. **Uncomment in `backend/routes/news.js`**:
   ```javascript
   const { spawn } = require('child_process');
   ```

2. **Add prediction logic**:
   ```javascript
   const pythonProcess = spawn('python', ['./ml_model/predict.py', req.file.path]);
   
   pythonProcess.stdout.on('data', (data) => {
     const result = JSON.parse(data.toString());
     // Process and send result...
   });
   ```

#### ✅ Option B: Flask/FastAPI Microservice

If your model runs on a separate Python server:

1. **Install axios**:
   ```bash
   npm install axios
   ```

2. **Make HTTP request**:
   ```javascript
   const axios = require('axios');
   const response = await axios.post('http://localhost:5000/predict', formData);
   const prediction = response.data;
   ```

### Expected Response Format

Your model must return data in this format:

```json
{
  "prediction": "Fake" | "Real",
  "confidence": 95.5,
  "features_detected": [
    "misleading_headline",
    "manipulated_image",
    "false_claims"
  ],
  "model_version": "v1.0.0"
}
```

---

## 🔒 Authentication & Security

### JWT Authentication 🛡️

- **Register**: Creates a new user account in MongoDB
- **Login**: Issues a JWT token stored in browser's `localStorage`
- **Protected Routes**: Dashboard pages require valid JWT token
- **Token Expiration**: Tokens expire after 24 hours (configurable)

### Security Features

✅ Password hashing with bcrypt  
✅ JWT-based stateless authentication  
✅ Protected API routes with middleware  
✅ CORS enabled for secure cross-origin requests  
✅ Environment variables for sensitive data  
✅ Input validation & sanitization  

---

## 📊 Database Schema

### User Model
```javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### History Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  imageUrl: String,
  prediction: String ("Fake" | "Real"),
  confidence: Number (0-100),
  features_detected: [String],
  timestamp: Date
}
```

---

## 🎯 Usage Walkthrough

1. **Create Account** 👤
   - Go to `http://localhost:5173`
   - Click "Register" and fill in details
   - Verify email (if enabled)

2. **Login** 🔑
   - Enter email and password
   - Receive JWT token automatically

3. **Upload News** 📰
   - Navigate to Dashboard → Upload News
   - Select image of news article/screenshot
   - Click "Analyze"

4. **View Results** 📊
   - See prediction (Fake/Real)
   - View confidence percentage
   - Read detected features

5. **Check History** 📜
   - Go to Dashboard → History
   - See all previous analyses
   - Filter by date or prediction

---

## 🔧 Configuration

### Environment Variables (.env)

```env
# Server
PORT=8000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/veritas_ai

# JWT
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# File Upload
MAX_FILE_SIZE=5242880  # 5MB in bytes

# CORS
FRONTEND_URL=http://localhost:5173
```

---

## 📖 Frontend Usage

### Available Routes
- `/` - Landing page
- `/auth/login` - Login page
- `/auth/register` - Registration page
- `/dashboard` - Dashboard home (protected)
- `/dashboard/upload` - Upload news (protected)
- `/dashboard/history` - Analysis history (protected)
- `/dashboard/about` - About model (protected)

### Theme Support
- 🌓 Dark/Light theme toggle in navbar
- Preferences stored in browser's `localStorage`
- Smooth transitions between themes

---

## 🐛 Troubleshooting

### Common Issues & Solutions

**Issue: Backend won't start**
```bash
# Check if port 8000 is in use
netstat -ano | findstr :8000

# Change PORT in .env file
PORT=8001
```

**Issue: MongoDB connection error**
```bash
# Ensure MongoDB is running
# On Windows:
mongod

# Or verify MONGO_URI in .env
MONGO_URI=mongodb://localhost:27017/veritas_ai
```

**Issue: CORS errors**
- Verify `FRONTEND_URL` in backend `.env`
- Check CORS middleware in `server.js`

**Issue: Images not uploading**
- Check file size limits in Multer config
- Verify `uploads/` folder exists
- Check file permissions

---

## 🚀 Advanced Features

### Coming Soon 🔮
- 🎬 Video analysis support
- 📱 Mobile app (React Native)
- 🌐 Multi-language support
- 📈 Advanced analytics dashboard
- 🔔 Real-time notifications
- 💾 Batch analysis processing
- 🌍 Global news source integration

---

## 🤝 Contributing

We welcome contributions! Here's how to get involved:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Contribution Guidelines
- Follow existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors & Contact

**Project Lead:** Your Name  
📧 **Email:** contact@example.com  
🔗 **GitHub:** [@yourprofile](https://github.com/yourprofile)  
💼 **LinkedIn:** [Your Profile](https://linkedin.com)  

---

## 📚 Resources & Documentation

- [React Documentation](https://react.dev)
- [Node.js Documentation](https://nodejs.org/docs/)
- [MongoDB Guide](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/)
- [TensorFlow/Keras](https://www.tensorflow.org/)

---

## 💡 Tips & Best Practices

- 🔑 Keep your JWT_SECRET secure and change it in production
- 🔐 Use environment variables for all sensitive data
- 📦 Regularly update dependencies: `npm update`
- 🧪 Write tests for critical functions
- 📊 Monitor API performance with logging
- 🌐 Deploy on production with HTTPS only

---

## 🎉 Support

If you found this project helpful, please ⭐ **star** the repository!

For questions or issues, please [open an issue](https://github.com/yourprofile/fakeNewsDetection_AI-ML/issues) on GitHub.

---

**Last Updated:** March 4, 2026  
**Version:** 1.0.0
