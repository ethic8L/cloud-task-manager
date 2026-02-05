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
```

---

### 3️⃣ Configure environment variables

Create .env file based on example:

```bash
cp backend/.env.example backend/.env
```

Edit backend/.env and set:


```bash
MONGO_URL=<your_mongodb_atlas_connection_string>
JWT_SECRET=secret123
```

---

### 4️⃣ Run application using Docker Compose

```bash
docker compose up --build
```

### 5️⃣ Access application

Frontend: http://localhost:8080
Backend API: http://localhost:3000

## 🧪 Application Usage

Register a new user
Log in
Add new tasks
Change task status (TODO / DONE)
Delete tasks
Log out

## 📸 Screenshots

<img width="1470" height="952" alt="Screenshot 2026-02-05 at 01 56 36" src="https://github.com/user-attachments/assets/be2feae0-ee89-4a2d-8881-ae10d7394aa8" />

---

<img width="1470" height="956" alt="Screenshot 2026-02-05 at 01 56 58" src="https://github.com/user-attachments/assets/2c7619c1-f77d-4c6a-9527-6fd54468a458" />

---

<img width="1263" height="718" alt="Screenshot 2026-02-05 at 01 57 33" src="https://github.com/user-attachments/assets/a0c7a18e-7ae4-4d90-97bd-80adb07a8933" />

