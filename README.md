## Personal Website Project

Megan Simpson  
Junior Full-Stack Developer (Aspiring)

### Overview

This is a server-rendered portfolio built with Express and EJS using an MVC structure.
It is designed as a professional job-application portfolio with dedicated Home, About, and Projects pages.

### Current Pages

- Home: Hero-style landing page with branding copy and hiring-focused content blocks.
- About: Personal background, career journey, and integrated outdoor/lifestyle narrative.
- Projects: Dedicated projects page with vertically stacked project cards, placeholders, and weather widget integration.

### Features

- MVC architecture using routes, controllers, models, and EJS views.
- Shared partials for consistent header, navigation, and footer.
- Responsive layout patterns for mobile, tablet, and desktop.
- Dedicated Projects page with reusable project data model.
- Weather Checker widget (OpenWeatherMap API) inside the projects view.

### Tech Stack

- Node.js
- Express
- EJS
- JavaScript (ES Modules)
- CSS
- Bootstrap

### Project Structure

- app.js: Express app entry point.
- routes/router.js: Route definitions.
- controllers/pageController.js: Controller actions for Home, About, and Projects.
- models/projectModel.js: Project card data source.
- views/pages: Page views (home.ejs, about.ejs, projects.ejs).
- views/partials: Shared layout pieces (head, header, footer).
- public: Static assets (CSS, client-side JS, images).

### Prerequisites

- Node.js 18+ recommended
- npm

### Installation

1. Open a terminal in the project root.
2. Install dependencies:

```bash
npm install
```

### Start the App

Run the development server:

```bash
npm start
```

Then open:

http://localhost:3000

### Notes

- The weather feature currently uses a client-side API key in public/weather.js.
- For production use, move the API key to environment variables and proxy API calls through the server.