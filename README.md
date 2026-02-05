# ☁️ Cloud Task Manager

Web application created as a project for **Cloud Application Development** course.

The application allows users to register, log in and manage their tasks in a cloud environment using Docker and MongoDB Atlas.

---

## 👨‍💻 Author

- **Artsiom Litvinchuk**, index: 54075  

---

## 🧩 Project Features

- User registration and login (JWT authentication)
- Task management (CRUD)
- Task status management (TODO / DONE)
- Cloud database (MongoDB Atlas)
- Web UI (HTML, CSS, JavaScript)
- Fully dockerized environment

---

## 🛠️ Technology Stack

- **Backend**: Node.js + Express
- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Database**: MongoDB Atlas (cloud)
- **Containerization**: Docker, Docker Compose
- **Authentication**: JWT

---

## 🧱 Architecture

The application consists of three main parts:

- **Backend API** – handles business logic and authentication
- **Frontend** – user interface served via Nginx
- **Database** – MongoDB Atlas (cloud-hosted)

All services are orchestrated using **Docker Compose**.

---

## 🚀 How to Run the Project

### 1️⃣ Requirements

- Docker
- Docker Compose
- MongoDB Atlas account

---

### 2️⃣ Clone repository

```bash
git clone https://github.com/ethic8L/cloud-task-manager.git
cd cloud-task-manager
