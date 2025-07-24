
# StayNest 🏡

[![Live Site](https://img.shields.io/badge/Live-StayNest-green?style=flat-square)](https://staynest-2gcg.onrender.com/listings)

**StayNest** is a full-stack, Airbnb-inspired vacation rental listing platform that allows users to browse, create, and manage rental listings with authentication, image uploads, and user reviews. Built with Node.js, Express, MongoDB, and EJS, it offers a complete booking interface with robust backend security and modular architecture.

---

## 🚀 Live Demo

🔗 **Visit StayNest:** [https://staynest-2gcg.onrender.com/listings](https://staynest-2gcg.onrender.com/listings)

---

## ✨ Features

- 🔐 Secure user authentication with sessions
- 🏘️ Full CRUD for rental listings
- 🖼️ Image upload & deletion via **Multer** and **Cloudinary**
- 📝 Review system linked to listings
- ✅ Joi-based form validation
- 💬 Flash messaging for user feedback
- ❌ Custom error handling with `ExpressError`
- 🧱 MVC structure with reusable middleware
- 📱 Responsive UI with **Bootstrap + EJS**
- 🌐 MongoDB Atlas for persistent data with Mongoose ODM

---

## 🛠️ Tech Stack

**Frontend:**
- EJS (templating)
- Bootstrap (UI components)

**Backend:**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

**Other Libraries:**
- Multer & Cloudinary (image upload)
- Express-session (auth)
- Joi (validation)
- Connect-flash (messaging)
- Method-override
- Dotenv

---

## 📂 Folder Structure

```
staynest/
├── models/           # Mongoose models (User, Listing, Review)
├── routes/           # Modular Express routes
├── views/            # EJS templates for pages
├── public/           # Static files (CSS, client-side JS)
├── controllers/      # Logic separated from routes
├── middleware/       # Authentication & validation logic
├── utils/            # Error handling & helper functions
├── app.js            # Main Express application
├── .env              # Environment variables
└── README.md
```

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/staynest.git
   cd staynest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory:**

   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   DB_URL=your_mongodb_connection_string
   SECRET=your_session_secret
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   Open your browser and go to `http://localhost:3000`.

---

## 🧪 How to Use

- **SignUp** a new account
- **Log in** to access listing controls
- **Create** a listing (with images)
- **Edit/Delete** your own listings
- **Post/Delete** reviews on any listing
- All changes reflect in real-time with validations and alerts

---

## ⚙️ Deployment Notes

This project is deployed using **Render**:
- Uses Render for Node.js hosting
- MongoDB Atlas for database
- Cloudinary for image hosting

To deploy your own version:
1. Push code to GitHub
2. Connect GitHub repo to Render
3. Set environment variables in Render dashboard
4. Deploy!

---

## 🙌 Acknowledgements

- [Cloudinary](https://cloudinary.com/)
- [Bootstrap](https://getbootstrap.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Icons by [FontAwesome](https://fontawesome.com/)

---

## ✍️ Author

Made with ❤️ by [Atharva](https://github.com/atharvak-3000)  
