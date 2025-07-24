# StayNest 🏡

[![Live Site](https://img.shields.io/badge/Live-StayNest-green?style=flat-square)](https://staynest-2gcg.onrender.com/listings)

**StayNest** is a full-stack, Airbnb-inspired vacation rental listing platform that allows users to browse, create, and manage rental listings with authentication, image uploads, and user reviews. Built with Node.js, Express, MongoDB, and EJS.

---

## 🚀 Live Demo

🔗 **Visit StayNest:** [https://staynest-2gcg.onrender.com/listings](https://staynest-2gcg.onrender.com/listings)

---

## 🛠️ Features

- ✅ Full CRUD functionality for rental listings
- 🔐 User authentication with role-based access (listing owners can edit/delete their listings)
- 🖼️ Image uploads with **Multer** and **Cloudinary**
- 📝 Review system linked to listings
- 🧾 Form validation with **Joi** schemas
- 💬 Flash messages for real-time feedback
- 🧰 Custom error handling using `ExpressError`
- 📱 Responsive UI with **EJS** and **Bootstrap**
- 🗃️ MongoDB Atlas for persistent data with Mongoose ODM
- 🔄 Clean MVC architecture with reusable middleware and DRY routes

---

## 📸 Screenshots

| Home Page | Listing Page | Review Form |
|-----------|--------------|-------------|
| _Add your screenshots here_ |

---

## 🧰 Tech Stack

**Frontend:**
- EJS (templating)
- Bootstrap (UI framework)

**Backend:**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

**Other Libraries:**
- Multer & Cloudinary (image upload)
- Express-session (authentication)
- Joi (data validation)
- Connect-flash (flash messaging)

---

## 📦 Installation

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/staynest.git
cd staynest
