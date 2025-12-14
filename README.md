# 🏦 LoanLink – Microloan Request & Approval Tracker System

## 📌 Project Overview

**LoanLink** is a modern web-based microloan management system designed to streamline loan application, verification, approval, and repayment tracking. It helps microfinance organizations, NGOs, and loan providers manage borrowers, loans, and approvals efficiently through role-based dashboards.

This project is built with a clean UI, secure authentication, and real-time backend integration to ensure a smooth user experience for all roles.

---

## 🚀 Live Website

🔗 **Live URL:** _Add your deployed live link here_

---

## 👥 User Roles

LoanLink supports three different user roles, each with dedicated permissions and dashboards:

- **Admin** – Manages users, loans, and all loan applications
- **Manager (Loan Officer)** – Creates loans and approves or rejects applications
- **Borrower (User)** – Applies for loans, tracks status, and manages payments

---

## ✨ Key Features

### 🔐 Secure Authentication

- Email & password-based authentication using Firebase
- Google login support
- JWT token stored in HTTP-only cookies
- Protected private routes with reload persistence

### 📊 Role-Based Dashboard

- Separate dashboards for Admin, Manager, and Borrower
- Access control based on user roles
- Clean sidebar navigation and responsive layout

### 📝 Loan Application System

- Borrowers can apply for loans with detailed information
- Auto-filled user and loan data
- Application status tracking (Pending, Approved, Rejected)

### ✅ Loan Approval Workflow

- Managers can review, approve, or reject loan applications
- Admin can view and manage all loan applications
- Real-time status updates

### 💳 Online Application Fee Payment

- Stripe payment integration with fixed application fee
- Payment status update after successful transaction
- Payment details viewable in modal

### 🌗 Theme Toggle & Responsive Design

- Dark/Light theme toggle
- Fully responsive UI for mobile, tablet, and desktop

---

## 🏠 Home Page Sections

- Hero Banner with call-to-action
- Available Loans (dynamic from database)
- How It Works (step-by-step process)
- User Reviews (carousel)
- Additional informative sections

---

## 🛠️ Technology Stack

### Frontend

- React
- React Router DOM
- Tailwind CSS
- Firebase Authentication
- Axios
- React Hook Form
- SweetAlert / Toast Notifications
- Framer Motion

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Stripe Payment Gateway

---

## 🔒 Security

- Firebase configuration secured using environment variables
- MongoDB credentials stored in environment variables
- JWT-based authorization for all private routes

---

## 📂 Project Structure

```
LoanLink/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── hooks/
│   │   ├── providers/
│   │   └── utils/
│   └── .env
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middlewares/
│   ├── index.js
│   └── .env
│
└── README.md
```

---

## ⚙️ Environment Variables

### Client (.env)

```
VITE_API_URL=your_api_url
VITE_FIREBASE_API_KEY=your_firebase_key
```

### Server (.env)

```
PORT=5000
DB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
```

---

## 📦 NPM Packages Used

- react
- react-router-dom
- firebase
- axios
- react-hook-form
- sweetalert2
- framer-motion
- express
- mongoose
- jsonwebtoken
- stripe
- cors
- cookie-parser

---

## 👨‍💻 Admin & Manager Credentials (For Testing)

**Admin Email:** _add here_

**Admin Password:** _add here_

**Manager Email:** _add here_

**Manager Password:** _add here_

---

## 📌 Deployment Notes

- Client deployed on Netlify / Vercel
- Server deployed on Render / Vercel
- Firebase authorized domains configured
- No CORS, 404, or reload issues on production

---

## 📣 Final Note

LoanLink is designed with scalability, security, and user experience in mind. This project demonstrates full-stack development skills, clean architecture, and real-world microloan workflow implementation.

---

⭐ _Thank you for reviewing LoanLink!_
