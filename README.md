# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- For svg sprite:
1) delete everywhere "fill" and "stroke" properties to color the svg how you want in css
2) put sprite.svg directly to /public and inject them in your component like this (no import is needed):

<svg className="icon" alt="basket">
                <use
                  xlinkHref={`${import.meta.env.BASE_URL}sprite.svg#basket`}
                ></use>
              </svg>

-->

<!-- For background-images :
- put them in public/assets/images

 --->

 <!-- For autofilled inputs : 
 - remove styles:
input:-webkit-autofill {
  background-color: transparent !important;
  color: inherit !important;
  -webkit-box-shadow: 0 0 0px 1000px fn.get-color('light') inset !important;
  border-radius: 30px;
}

BACKEND
express: A minimal web framework for Node.js.
mongoose: A MongoDB object modeling tool.
dotenv: To manage environment variables (for storing MongoDB connection URI).
cors: To allow cross-origin requests from your React frontend.

backend deployment:
Small backend API or serverless functions: Use Vercel (doesn't support WebSockets).
Simple app, minimal traffic: Use Render.com or Heroku.

app.js: Focuses on setting up the Express application, including middleware, routes, and any other configurations.
Acts as a module that exports the configured Express app for use elsewhere.
server.js: Responsible for starting the server, connecting to the database, and handling server-level configurations (like port settings).

to test connection to mongoDB: node server.js
 -->
