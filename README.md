# Dr. Eman El Tobgy - Portfolio Website

This repository contains the source code for the professional portfolio website of Dr. Eman El Tobgy, a certified Meta Health & Relationship Expert. The website is a fully responsive single-page application built with React, designed to showcase her specializations, media appearances, and provide a direct method for booking consultations.

## Features

*   **Responsive Single-Page Design:** A modern, fluid layout optimized for all screen sizes, from mobile phones to desktops.
*   **Interactive Sections:** Smooth-scrolling navigation to dedicated sections:
    *   **Home:** An animated hero section with key value propositions and social proof.
    *   **About Eman:** A detailed biography and credentials.
    *   **Specializations:** An overview of core services like Meta Health Analysis and Couples Therapy.
    *   **Media & Sessions:** A gallery featuring images and embedded video content from talks and workshops.
    *   **Contact & Booking:** An actionable contact section with direct links and an integrated booking form.
*   **WhatsApp Integration:** The contact form gathers user information and composes a pre-formatted message, opening it directly in WhatsApp for seamless communication.
*   **Dynamic UI Components:** Built with React, the site features a sticky navigation bar, mobile-responsive menu, and animated elements for an engaging user experience.
*   **Optimized for SEO:** Includes comprehensive meta tags, Open Graph data, and a sitemap for enhanced search engine visibility.

## Tech Stack

*   **Frontend:** React.js
*   **Icons:** Lucide React
*   **Styling:** Custom CSS with a modern, clean design system.
*   **Development Environment:** Create React App

## Project Structure

The project follows a standard Create React App structure:

```
└── doctor-portfolio/
    ├── public/              # Static assets, index.html, and SEO files
    └── src/                 # React application source code
        ├── App.js           # Main application component containing all sections
        ├── App.css          # Component-specific styles
        ├── index.js         # Application entry point
        ├── index.css        # Global styles and theme variables
        └── assets/          # Images and media used throughout the site
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (version 14.x or higher)
*   npm (comes with Node.js)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/fiqyy/DrEmanElTobgy.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd doctor-portfolio
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

## Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload automatically when you make edits.

### `npm run build`

Builds the app for production into the `build` folder. This command bundles React in production mode and optimizes the build for the best performance. Your app is then ready to be deployed.

### `npm test`

Launches the test runner in the interactive watch mode.