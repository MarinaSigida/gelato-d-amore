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

 -->
