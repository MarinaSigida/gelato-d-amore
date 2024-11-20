import{r as c,e as N,u as P,a as I,j as e,A as F,t as g}from"./index-BLs7LIZJ.js";import{F as U,a as D,b as o}from"./formik.esm-D76hnKWp.js";import{B as w}from"./Banner-DHk_BRgZ.js";import{b as x,a as S}from"./banner-dashboard-products-mobile-JLjYs1l0.js";import{i as d}from"./placeholder-ice-cream-CrNkbAc3.js";var E={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const v=E.VITE_IMAGE_KEY,M=()=>{const[h,m]=c.useState(x),p=N(),f=P(),n=I(i=>i.stockItems.selectedItem),[r,j]=c.useState(null),[y,l]=c.useState(d);c.useEffect(()=>{n&&(j(n),l(n.image?`${v}/${n.image}`:d))},[n]),c.useEffect(()=>{const i=()=>{window.innerWidth<=430?m(x):m(S)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const b=i=>{i.preventDefault(),p("/dashboard/stock")},k=(i,t)=>{const a=i.currentTarget.files[0];if(a){const s=new FileReader;s.onloadend=()=>{l(s.result),t("image",a)},s.readAsDataURL(a)}else l(d)},q=async i=>{const t=new FormData;t.append("title",i.title),t.append("category",i.category),t.append("description",i.description),t.append("quantity",i.quantity),t.append("pricePerUnit",i.pricePerUnit),t.append("status",i.status),t.append("image",i.image);try{await f(F({id:n._id,updatedItem:t})).unwrap(),g.success("Article modifié avec succès !"),p("/dashboard/stock")}catch(a){console.error("Failed to update item:",a),g.error("Échec de modification de l'article.")}};return e.jsxs("div",{className:"main",children:[e.jsx(w,{image:h,titleSpan:"Modifiez l'article",textColorExtra:"white",textPosition:"left"}),e.jsx("section",{className:"modify-stock-item",children:e.jsxs("div",{className:"add-stock-item-form-wrapper",children:[e.jsx("div",{className:"add-stock-item-form-image",children:e.jsx("img",{src:y,alt:"Stock Item"})}),e.jsx(U,{initialValues:{title:r.title||"",category:r.category||"",description:r.description||"",quantity:r.quantity||0,pricePerUnit:r.pricePerUnit||0,status:r.status||"",image:r.image||""},onSubmit:q,validate:i=>{const t={};return i.title||(t.title="Le nom est requis"),i.category||(t.category="La catégorie est requise"),i.description||(t.description="La description est requise"),(!i.image||!(i.image instanceof File))&&(t.image="Veuillez télécharger une image."),!i.quantity||i.quantity===0?t.quantity="La quantité est requise":i.quantity<0&&(t.quantity="La quantité ne peut pas être négative"),!i.pricePerUnit||i.pricePerUnit===0?t.pricePerUnit="Le prix est requis":i.pricePerUnit<0&&(t.pricePerUnit="Le prix ne peut pas être négatif"),t},children:({values:i,errors:t,touched:a,setFieldValue:s})=>e.jsxs(D,{className:"add-stock-item-form",children:[e.jsx("label",{htmlFor:"title",children:"Nom de la glace"}),e.jsx("div",{className:"add-stock-item-input",children:e.jsx(o,{name:"title",type:"text",placeholder:"Nom de la glace"})}),t.title&&a.title&&e.jsx("p",{className:"form-error",children:t.title}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"category",children:"Catégorie de la glace"}),e.jsxs(o,{as:"select",name:"category",id:"option",required:!0,children:[e.jsx("option",{value:"Crème",label:"Crème"}),e.jsx("option",{value:"Fruits",label:"Fruits"}),e.jsx("option",{value:"Fruits rouges",label:"Fruits rouges"}),e.jsx("option",{value:"Noix",label:"Noix"})]})]}),t.category&&a.category&&e.jsx("p",{className:"form-error",children:t.category}),e.jsx("label",{htmlFor:"description",children:"Description"}),e.jsx("div",{className:"add-stock-item-input",children:e.jsx(o,{name:"description",as:"textarea",placeholder:"Description"})}),t.description&&a.description&&e.jsx("p",{className:"form-error",children:t.description}),e.jsx("label",{htmlFor:"image",children:"Image"}),e.jsx("div",{className:"add-stock-item-input",children:e.jsx("input",{name:"image",type:"file",accept:"image/*",onChange:u=>{k(u,s),s("image",u.currentTarget.files[0])},onBlur:()=>s("touched.image",!0)})}),t.image&&a.image&&e.jsx("p",{className:"form-error",children:t.image}),e.jsx("label",{htmlFor:"quantity",children:"Quantité"}),e.jsx("div",{className:"add-stock-item-input",children:e.jsx(o,{name:"quantity",type:"number",min:"0",placeholder:"Quantité"})}),t.quantity&&a.quantity&&e.jsx("p",{className:"form-error",children:t.quantity}),e.jsx("label",{htmlFor:"pricePerUnit",children:"Prix"}),e.jsx("div",{className:"add-stock-item-input",children:e.jsx(o,{name:"pricePerUnit",type:"number",min:"0",placeholder:"Prix"})}),t.pricePerUnit&&a.pricePerUnit&&e.jsx("p",{className:"form-error",children:t.pricePerUnit}),e.jsxs("div",{className:"add-stock-item-form-buttons",children:[e.jsx("button",{onClick:b,children:"Annuler"}),e.jsx("button",{type:"submit",children:"Modifier"})]})]})})]})})]})};export{M as default};
