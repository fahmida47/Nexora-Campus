# 🎓 Nexora Campus

A lightweight campus notice board web application that allows students to view important university announcements through a simple and responsive web interface.

Nexora Campus is built with **TypeScript, Express.js, MySQL, HTML, CSS, and JavaScript**, providing a clean full-stack application with a database-driven backend and a simple browser-based frontend.

---

## ✨ Features

* 📢 View campus announcements
* 🏷️ Organize notices by category
* 📅 Display notice publication dates
* 🔎 Retrieve notices through a REST API
* 🗄️ MySQL database integration
* ⚡ Express.js backend
* 🛡️ Application and database health check
* 📱 Responsive and clean user interface
* 📦 TypeScript production build

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MySQL

### Development Tools

* Git
* GitHub
* npm

---

## 📁 Project Structure

```text
nexora-campus/
│
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── db/
│   └── server.ts
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── dist/
│
├── package.json
├── tsconfig.json
├── .env
├── .gitignore
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint           | Description                           |
| ------ | ------------------ | ------------------------------------- |
| `GET`  | `/api/notices`     | Retrieve all campus notices           |
| `GET`  | `/api/notices/:id` | Retrieve a specific notice            |
| `GET`  | `/api/health`      | Check application and database health |

### Health Check

```http
GET /api/health
```

Example response:

```json
{
  "status": "ok",
  "database": "up"
}
```

---

## 🗄️ Database

Nexora Campus uses **MySQL** as its database system.

Database:

```text
campus_notice_db
```

Main table:

```text
notices
```

### Notice Fields

| Field         | Description      |
| ------------- | ---------------- |
| `id`          | Unique notice ID |
| `title`       | Notice title     |
| `description` | Notice details   |
| `category`    | Notice category  |
| `created_at`  | Publication date |

---

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* MySQL
* Git

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/nexora-campus.git
cd nexora-campus
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=campus_notice_db
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
PORT=3000
```

> Keep database credentials private and never commit the `.env` file to GitHub.

### 4. Build the application

```bash
npm run build
```

The compiled application will be generated in the `dist/` directory.

### 5. Start the application

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

---

## 🧪 Testing

### Check Application Health

```bash
curl http://localhost:3000/api/health
```

Expected response:

```json
{
  "status": "ok",
  "database": "up"
}
```

### Get All Notices

```bash
curl http://localhost:3000/api/notices
```

---

## 📦 Build Process

The backend is written in TypeScript and compiled into JavaScript for production.

```text
TypeScript Source
       │
       ▼
   npm run build
       │
       ▼
     dist/
       │
       ▼
Production Application
```

---

## 🌐 Deployment

Nexora Campus can be deployed on a Linux VPS using a production-oriented setup.

Typical deployment architecture:

```text
                    Internet
                       │
                       ▼
                     Nginx
                    Port 80
                       │
                       ▼
              Express Application
                  TypeScript
                       │
                       ▼
                    MySQL
```

A process manager can be used to keep the application running after logout and automatically restart it when necessary.

---

## 🔐 Security

* Database credentials are stored in environment variables.
* `.env` is excluded from version control.
* The application uses a dedicated MySQL account for database access.
* Production services are isolated from other applications on the server.

---

## 🎯 Learning Objectives

This project is designed to practice:

* TypeScript and Express.js
* REST API development
* MySQL database integration
* Environment configuration
* Production builds
* Linux VPS deployment
* Process management
* Nginx reverse proxy
* Public domain configuration
* Application health monitoring

---

## 👩‍💻 Author

**Fahmida Afrin Nadia**

CSE Student | Aspiring Frontend Developer

---

⭐ **Nexora Campus — Connecting students with the information that matters.**
