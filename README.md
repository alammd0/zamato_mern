# Zomato MERN Clone

This is a full-stack web application inspired by Zomato, built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a platform for users and food partners to share and discover food through posts and reels.

## Features

- **Dual User Roles**: Separate authentication and dashboards for regular Users and Food Partners.
- **Food Posts**: Create, view, like, and comment on food posts.
- **Food Reels**: Create, view, like, and comment on short video reels.
- **Secure Authentication**: JWT-based authentication for secure access to user- and partner-specific features.
- **Cloud Media Uploads**: Integrated with Cloudinary and ImageKit for efficient image and video handling.
- **Password Management**: Secure password reset functionality via email (Nodemailer).
- **RESTful API**: A well-structured backend API for managing all application data.

## Tech Stack

### Backend

- **Framework**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT), bcryptjs
- **File Handling**: Cloudinary, ImageKit, Multer
- **Email**: Nodemailer
- **Middleware**: CORS, Cookie-Parser

### Frontend

- **Framework**: React.js with Vite and TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **API Communication**: Axios
- **UI Components**: Radix UI, Lucide React
- **Form Handling**: React Hook Form
- **Notifications**: React Hot Toast

## Project Setup

### Prerequisites

- Node.js (v18 or higher)
- npm
- MongoDB (local instance or a cloud service like MongoDB Atlas)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd zamato_mern
    ```

2.  **Setup Backend:**
    - Navigate to the backend directory:
      ```bash
      cd backend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Create a `.env` file by copying the example:
      ```bash
      cp .env.example .env
      ```
    - Update the `.env` file with your credentials:
      ```
      PORT=8000
      MONGO_URI=<your_mongodb_connection_string>
      JWT_SECRET=<your_jwt_secret>
      # Add credentials for Cloudinary, ImageKit, and Nodemailer
      ```

3.  **Setup Frontend:**
    - Navigate to the frontend directory:
      ```bash
      cd ../frontend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```

## Running the Application

1.  **Start the Backend Server:**
    - From the `backend` directory:
      ```bash
      npm run dev
      ```
    - The server will start on the port defined in your `.env` file (e.g., `http://localhost:8000`).

2.  **Start the Frontend Development Server:**
    - From the `frontend` directory:
      ```bash
      npm run dev
      ```
    - The application will be accessible at `http://localhost:5173` (or another port specified by Vite).
