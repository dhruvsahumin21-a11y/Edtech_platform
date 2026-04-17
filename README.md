# StudyNotion EdTech Platform

A polished full-stack learning marketplace built with React, Node.js, Express, MongoDB, and Tailwind CSS.

StudyNotion supports students, instructors, and admins with role-based dashboards, secure authentication, course creation, enrollment, progress tracking, payments, reviews, and profile management.

---

## 🚀 What this project includes

- Multi-role system: Student, Instructor, Admin
- Secure email OTP signup and password reset
- Protected dashboard routing and role-aware access
- Course creation, editing, sections, and subsections for instructors
- Course catalog, categories, and course-detail pages
- Razorpay checkout flow for secure purchasing
- Enrolled course playback with progress tracking
- Ratings, reviews, and instructor analytics
- Profile editing, avatar upload, and account deletion
- Contact form with transactional email notifications

---

## 💡 Tech Stack

### Frontend

- React 18
- React Router 6
- Redux Toolkit
- Tailwind CSS
- Axios
- Chart.js

### Backend

- Node.js
- Express
- MongoDB / Mongoose
- JWT authentication
- Cloudinary media uploads
- Razorpay payments
- Nodemailer email delivery

---

## 📁 Project Structure

```text
.
├── public/             # Static frontend assets
├── src/                # React app
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route-level views
│   ├── services/       # API clients + operations
│   ├── slices/         # Redux state management
│   └── utils/          # Shared helpers and constants
└── server/             # Express API backend
    ├── config/         # DB, Cloudinary, Razorpay config
    ├── controllers/    # Request handlers
    ├── middleware/     # Auth and role guards
    ├── models/         # Mongoose schemas
    ├── routes/         # API endpoints
    └── utils/          # Upload, mail, and helper utilities
```

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js 16+
- npm
- MongoDB connection string
- Cloudinary account
- Razorpay account
- SMTP email credentials

### 1. Install dependencies

From the project root:

```bash
npm install
```

Then install backend dependencies:

```bash
cd server
npm install
```

### 2. Configure environment variables

Create a `.env` file in `server/` with the following values:

```env
PORT=4000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
FOLDER_NAME=StudyNotion

MAIL_HOST=your_smtp_host
MAIL_USER=your_email_user
MAIL_PASS=your_email_password

RAZORPAY_KEY=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_key_secret
```

### 3. Update the frontend API base URL

Confirm the backend URL in `src/services/apis.js`:

```js
const BASE_URL = "http://localhost:4000/api/v1";
```

If your backend runs on a different host or port, update this value.

### 4. Run the app

Start both frontend and backend together from the root:

```bash
npm run dev
```

This should launch:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:4000`

You can also run them separately:

```bash
npm start
```

```bash
cd server
npm run dev
```

---

## 🧩 Available Scripts

### Root

- `npm start` - start React dev server
- `npm run build` - create production build
- `npm test` - run frontend tests
- `npm run server` - start backend in development mode
- `npm run dev` - run both frontend and backend together

### Backend (`server/`)

- `npm start` - start Express server
- `npm run dev` - start server with nodemon

---

## 🌐 API Endpoints

The backend exposes routes under `/api/v1`:

- `/auth` - authentication, OTP, password reset
- `/profile` - user profile, enrolled courses, dashboards
- `/course` - course creation, editing, categories, reviews, progress
- `/payment` - payments, verification, success email
- `/reach` - contact form submissions

---

## 📝 Notes

- Backend enforces role permissions for student, instructor, and admin routes.
- In the current frontend, Razorpay may require moving public keys into environment variables for production.
- Adding `.env.example` files would improve setup clarity.

---

## 🚧 Future Improvements

- Move frontend config such as API base URL and Razorpay public key into environment variables
- Add `.env.example` files for root and server setup
- Add deployment instructions for frontend and backend
- Add automated tests and API documentation
