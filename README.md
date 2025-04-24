
# 🛡️ Full Authentication System with Next.js App Router, JWT, Cookies, Bcrypt & MongoDB

This is a full-featured authentication system using **Next.js App Router** and **MongoDB**, with **JWT-based authentication**, **HTTP-only cookies**, and **bcrypt** for secure password hashing. Built using the modern `app/` directory structure inside `src/`.

## 🚀 Features

- ✅ App Router-based routing (`app/` folder)
- ✅ JWT Authentication (Access Token in HTTP-only cookie)
- ✅ Secure password hashing with Bcrypt
- ✅ MongoDB with Mongoose
- ✅ Fully working Signup & Login pages
- ✅ Project structure using `src/` for best practices

---

## 📦 Tech Stack

- **Framework:** Next.js (App Router)
- **Backend:** API Routes (`app/api/`)
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT + Cookies
- **Security:** bcrypt, HTTP-only cookies

---

## 🛠️ Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/nextjs-auth-app-router.git
   cd nextjs-auth-app-router
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Environment Variables**

   Create a `.env.local` file in the root:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```


---

## 🔑 API Routes (App Router)

### **POST** `/api/auth/signup`
Registers a new user.

### **POST** `/api/auth/login`
Logs in the user and sets an HTTP-only cookie.

### **GET** `/api/auth/logout`
Clears the auth cookie and logs out the user.

---

## 🧠 Future Plans

- Add Refresh Token Support
- Google/GitHub OAuth
- Protected Routes Middleware
- Profile Dashboard with Session Validation

---

## 🤝 Contributing

Feel free to fork, improve, or raise issues. PRs welcome!

---

## 📜 License

MIT License © 2025 Baseer
