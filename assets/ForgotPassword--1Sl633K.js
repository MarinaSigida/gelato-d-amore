import{r as a,u as p,a as h,g as f,j as e,I as v,t}from"./index-BesrCjma.js";import{F as x,a as j,b as w}from"./formik.esm-BcKbNVOq.js";const b="/assets/images/banner-forgot-password.png",l="/assets/images/banner-mobile-forgot-password.png",y=()=>{const[c,i]=a.useState(l),m=p(),{loading:d,error:u,isAuthenticated:o}=h(s=>s.user),n=f();a.useEffect(()=>{const s=()=>{window.innerWidth<=430?i(l):i(b)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),a.useEffect(()=>{o&&n("/")},[o,n]);const g=async s=>{try{await m(v(s.email)).unwrap(),t.success("E-mail de réinitialisation envoyé avec succès. Vérifiez votre boîte de réception.")}catch{t.error("Échec de l'envoi de l'e-mail de réinitialisation. Veuillez réessayer plus tard ou contacter le support.")}};return e.jsx("div",{className:"main",children:e.jsxs("div",{className:"login-container",children:[e.jsx("div",{className:"login-background-image",style:{backgroundImage:`url(${c})`}}),e.jsxs("div",{className:"login-form-wrapper",children:[e.jsx(x,{initialValues:{email:""},onSubmit:g,validate:s=>{const r={};return s.email||(r.email="L'email est requis"),r},children:({errors:s,touched:r})=>e.jsxs(j,{className:"login-form",children:[e.jsx("h3",{className:"form-header",children:"Veuillez entrer votre adresse e-mail pour réinitialiser votre mot de passe"}),e.jsxs("div",{className:"login-inputs",children:[e.jsx("div",{className:"login-input",children:e.jsx(w,{type:"email",name:"email",placeholder:"Votre adresse email",required:!0})}),s.email&&r.email&&e.jsx("p",{className:"form-error",children:s.email})]}),u&&e.jsx("p",{className:"form-error",style:{marginBottom:"40px"},children:"Utilisateur non trouvé. Veuillez vérifier votre email."}),e.jsxs("button",{type:"submit",children:[" ",d?"Envoi en cours...":"Confirmer"]})]})}),e.jsx("div",{className:"signup-link",children:e.jsx("a",{href:"login",children:"Retourner à la connexion"})})]})]})})};export{y as default};