import{r as n,u as h,a as x,e as j,j as e,n as v,t as l,o as w}from"./index-ZrAIOhC1.js";import{F as f,a as N,b as c}from"./formik.esm-CbH9b3ND.js";const b="/assets/images/login-background.png",d="/assets/images/login-background-mobile.png",y=()=>{const[m,r]=n.useState(d),o=h(),{loading:u,error:p,isAuthenticated:a}=x(s=>s.user),t=j();n.useEffect(()=>{const s=()=>{window.innerWidth<=430?r(d):r(b)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),n.useEffect(()=>{a&&t("/")},[a,t]);const g=async s=>{try{const i=await o(v({email:s.email,password:s.password})).unwrap();l.success("Connexion réussie ! Bienvenue à bord."),o(w(i))}catch(i){console.error("Échec de la connexion :",i),l.error("Échec de la connexion. Veuillez vérifier vos identifiants et réessayer.")}};return a?e.jsx("div",{children:"Vous êtes connecté !"}):e.jsx("div",{className:"main",children:e.jsxs("div",{className:"login-container",children:[e.jsx("div",{className:"login-background-image",style:{backgroundImage:`url(${m})`}}),e.jsxs("div",{className:"login-form-wrapper",children:[e.jsx(f,{initialValues:{email:"",password:""},onSubmit:g,validate:s=>{const i={};return s.email||(i.email="L'email est requis"),s.password||(i.password="Le mot de passe est requis"),i},children:({errors:s,touched:i})=>e.jsxs(N,{className:"login-form",children:[e.jsx("h2",{children:"BIENVENUE"}),e.jsxs("div",{className:"login-inputs",children:[e.jsx("div",{className:"login-input",children:e.jsx(c,{type:"email",name:"email",placeholder:"Votre adresse email",required:!0})}),s.email&&i.email&&e.jsx("p",{children:s.email}),e.jsx("div",{className:"login-input",children:e.jsx(c,{type:"password",name:"password",placeholder:"Votre mot de passe",required:!0})}),s.password&&i.password&&e.jsx("p",{children:s.password})]}),p&&e.jsx("p",{className:"error-message",children:"Utilisateur non trouvé. Veuillez vérifier votre email et mot de passe."}),e.jsxs("button",{type:"submit",children:[" ",u?"Connexion en cours...":"Connexion"]})]})}),e.jsx("div",{className:"signup-link",children:e.jsx("a",{href:"register",children:"Créer un compte"})})]})]})})};export{y as default};