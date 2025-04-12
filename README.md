# 🍽️ Restaurant Landing Page

A modern, responsive restaurant landing page built with React (Vite) and Django REST Framework. This project provides a seamless user experience for restaurant customers with features like menu browsing, online ordering, and basket management.

![Project Preview](path-to-your-project-screenshot.png)

## ✨ Features

- 🎨 Modern and responsive design using Tailwind CSS
- 🛒 Shopping cart functionality with session management
- 🍕 Dynamic menu display with categories
- 🌐 RESTful API backend
- 🔒 User authentication system
- 🐳 Docker containerization
- 📱 Mobile-first approach

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Context API for state management
- Axios for API requests

### Backend
- Django REST Framework
- PostgreSQL
- Session-based cart management
- JWT Authentication

### DevOps
- Docker & Docker Compose
- Nginx (for production)

## 🚀 Getting Started

### Prerequisites
- Docker and Docker Compose
- Node.js (for local development)
- Python 3.10+

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/restaurant-landing.git
cd restaurant-landing
```

2. Start the Docker containers
```bash
docker-compose up --build
```

3. Access the applications:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- Admin Panel: http://localhost:8000/admin

### Manual Setup (Without Docker)

#### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 📁 Project Structure
