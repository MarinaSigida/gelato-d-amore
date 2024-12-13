# Gelato d'Amore Frontend

Welcome to the **Gelato d'Amore** frontend repository! This is the client-side of our web application built with **React** and **Vite**, providing a delightful user experience for exploring our gelato products and placing orders.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)
- [Assets](#assets)
- [Backend](#backend)

---

## Getting Started

To get started with this project, clone the repository and install the required dependencies:

```bash
# Clone the repository
git clone https://github.com/MarinaSigida/gelato-d-amore

# Navigate to the project directory
cd gelato-d-amore-frontend

# Install dependencies
npm install
```

Once dependencies are installed, you can start the development server or build the project for production.

---

## Available Scripts

### `npm run dev`

Runs the app in development mode.

- Open [http://localhost:5173](http://localhost:5173) to view it in your browser.
- The page reloads when you make changes.
- You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.

- The build is optimized for the best performance.
- The filenames include hashes for cache busting.

### `npm run preview`

Previews the production build locally.

### `npm run lint`

Runs ESLint to identify and fix code quality and style issues.

### `npm run watch`

Watches for changes and rebuilds the project incrementally for production.

---

## Environment Variables

The following environment variables are required to configure the project. Create a `.env` file in the root directory and set the variables accordingly:

```plaintext
VITE_API_KEY: This variable is used to connect the frontend application to the backend services. Ensure that it points to the appropriate backend API key for seamless data interactions.

VITE_IMAGE_KEY: This variable facilitates the handling of image uploads and retrievals, integrating with Multer to manage images effectively in the application.
```

---

## Technologies Used

This project leverages the following technologies and libraries:

### Core Technologies:

- **React**: For building the user interface.
- **Vite**: For fast and optimized development and build processes.

### State Management:

- **@reduxjs/toolkit**: Simplified and efficient state management.

### Routing:

- **react-router-dom**: For declarative routing.

### Forms:

- **formik**: For form handling and validation.

### Styling:

- **styled-components**: For dynamic, scoped CSS styling.
- **Sass**: For powerful CSS preprocessing.

### Utilities:

- **axios**: For HTTP requests.
- **jwt-decode**: For decoding JWT tokens.
- **sonner**: For notifications and alerts.

### Maps:

- **react-leaflet**: For interactive maps.

### Carousels:

- **swiper**: For touch-friendly carousels.

---

## Assets

Background images and other static assets are stored in the `public/assets/images` directory. These assets can be directly accessed in the application as needed.

---

## Backend

The backend for this application is built using **Node.js** and provides API endpoints for data fetching and processing. You can find the backend repository at:

[Backend Repository](https://github.com/MarinaSigida/gelato-d-amore-backend)

---

We hope you enjoy working with **Gelato d'Amore**! If you encounter any issues or have questions, feel free to open an issue in this repository.

Happy coding! 🍦
