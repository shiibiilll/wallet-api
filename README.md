# 💰 Wallet App Backend API

This is the backend API for the React Native Wallet App.  
It handles authentication, transactions, and database operations.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- PostgreSQL (Neon Database)
- Clerk Authentication
- Render (Deployment)

---

## 📂 Project Structure

src/
  ├── config/
  ├── routes/
  ├── controllers/
  └── server.js
.env
package.json

---

## ⚙️ Features

- ✅ Create transactions
- ✅ Fetch user transactions
- ✅ Delete transactions
- ✅ Income & Expense handling
- ✅ Clerk user authentication
- ✅ PostgreSQL database integration

---

## 🔐 Environment Variables

Create a `.env` file in the root folder and add:
PORT=5001
DATABASE_URL=your_neon_database_url
CLERK_SECRET_KEY=your_clerk_secret_key
