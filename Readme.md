# 🍳 Recipe App

A full-stack web application where users can **search, create, and share recipes** with others. Built with Node.js, Express, EJS, and MongoDB.

---

## 🌟 Features

- 🔍 Search and discover new recipes
- ✍️ Create and share your own recipes
- 🔐 User authentication (Register / Login / Logout)
- ✅ Input validation with Joi
- 🛡️ Security best practices (Helmet, Mongo Sanitize)
- 💬 Flash messages for user feedback
- 📱 Responsive UI with EJS templates

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **Express.js v5** | Backend framework |
| **EJS + EJS-Mate** | Templating engine |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB ODM |
| **Passport.js** | User authentication |
| **Passport-Local-Mongoose** | Local auth strategy |
| **Joi** | Data validation |
| **Helmet** | Security headers |
| **Express-Mongo-Sanitize** | NoSQL injection prevention |
| **Connect-Flash** | Flash messages |
| **Express-Session** | Session management |
| **Method-Override** | PUT/DELETE support |
| **Dotenv** | Environment variables |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/sundeepamit/recipeapp.git
cd recipeapp
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file** in the root directory
```env
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
PORT=3000
```

4. **Run the app**
```bash
# Development (with nodemon)
npm run dev

# Production
npm start
```

5. **Open in browser**
```
http://localhost:3000
```

---

## 📁 Project Structure

```
recipeapp/
├── models/          # Mongoose models
├── routes/          # Express routes
├── views/           # EJS templates
│   └── layouts/     # EJS-Mate layouts
├── public/          # Static files (CSS, JS, images)
├── middleware/      # Custom middleware
├── .env             # Environment variables (not committed)
├── index.js         # Entry point
└── package.json
```

---

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `SESSION_SECRET` | Secret key for sessions |
| `PORT` | Port number (default: 3000) |

---

## 📦 Scripts

```bash
npm start       # Start the server
npm run dev     # Start with nodemon (auto-restart)
```

---

## 🛡️ Security Features

- **Helmet** — Sets secure HTTP headers
- **Express-Mongo-Sanitize** — Prevents NoSQL injection attacks
- **Joi Validation** — Validates all user inputs server-side
- **Passport.js** — Secure local authentication with hashed passwords
- **Express-Session** — Secure session management

---

## 👨‍💻 Author

**Amit Maurya**
- GitHub: [@sundeepamit](https://github.com/sundeepamit)
- LinkedIn: [Amit Maurya](https://www.linkedin.com/in/amit-maurya-0b906a131/)

---

## 📄 License

This project is licensed under the **ISC License**.

---

⭐ **If you like this project, give it a star!**