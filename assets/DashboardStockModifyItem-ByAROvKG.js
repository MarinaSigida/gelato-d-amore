import{r as n,e as v,u as F,a as I,j as e,A as N,t as u}from"./index-DqfOK4-j.js";import{F as D,a as w,b as o}from"./formik.esm-Dro_gGG0.js";import{B as P}from"./Banner-DQTFi5Ef.js";import{b as h,a as S}from"./banner-dashboard-products-mobile-JLjYs1l0.js";import{i as d}from"./placeholder-ice-cream-CrNkbAc3.js";var E={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const C=E.VITE_IMAGE_KEY,M=()=>{const[x,m]=n.useState(h),p=v(),g=F(),s=I(t=>t.stockItems.selectedItem),[i,j]=n.useState(null),[f,c]=n.useState(d);n.useEffect(()=>{s&&(j(s),c(s.image?`${C}/${s.image}`:d))},[s]),n.useEffect(()=>{const t=()=>{window.innerWidth<=430?m(h):m(S)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const b=t=>{t.preventDefault(),p("/dashboard/stock")},k=(t,a)=>{const r=t.currentTarget.files[0];if(r){const l=new FileReader;l.onloadend=()=>{c(l.result),a("image",r)},l.readAsDataURL(r)}else c(d)},y=async t=>{const a=new FormData;a.append("title",t.title),a.append("category",t.category),a.append("description",t.description),a.append("quantity",t.quantity),a.append("pricePerUnit",t.pricePerUnit),a.append("status",t.status),a.append("image",t.image);try{await g(N({id:s._id,updatedItem:a})).unwrap(),u.success("Article modifié avec succès !"),p("/dashboard/stock")}catch(r){console.error("Failed to update item:",r),u.error("Échec de modification de l'article.")}};return i?e.jsxs("div",{className:"main",children:[e.jsx(P,{image:x,titleSpan:"Modifiez l'article",textColorExtra:"white",textPosition:"left"}),e.jsx("section",{className:"modify-stock-item",children:e.jsxs("div",{className:"add-stock-item-form-wrapper",children:[e.jsx("div",{className:"add-stock-item-form-image",children:e.jsx("img",{src:f,alt:"Stock Item"})}),e.jsx(D,{initialValues:{title:i.title||"",category:i.category||"",description:i.description||"",imgUrl:i.imgUrl||"",quantity:i.quantity||0,pricePerUnit:i.pricePerUnit||0,status:i.status||"",image:i.image||""},onSubmit:y,children:({setFieldValue:t})=>e.jsxs(w,{className:"add-stock-item-form",children:[e.jsx("label",{htmlFor:"title",children:"Nom de la glace"}),e.jsx("div",{className:"add-stock-item-input",children:e.jsx(o,{name:"title",type:"text",placeholder:"Nom de la glace"})}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"category",children:"Categorie de la glace"}),e.jsxs(o,{as:"select",name:"category",id:"option",required:!0,children:[e.jsx("option",{value:"Crème",label:"Crème"}),e.jsx("option",{value:"Fruits",label:"Fruits"}),e.jsx("option",{value:"Fruits rouges",label:"Fruits rouges"}),e.jsx("option",{value:"Noix",label:"Noix"})]})]}),e.jsx("label",{htmlFor:"description",children:"Description"}),e.jsx("div",{className:"add-stock-item-input",children:e.jsx(o,{name:"description",as:"textarea",placeholder:"Description"})}),e.jsx("label",{htmlFor:"image",children:"Image"}),e.jsx("div",{className:"add-stock-item-input",children:e.jsx("input",{name:"image",type:"file",accept:"image/*",onChange:a=>k(a,t)})}),e.jsx("label",{htmlFor:"quantity",children:"Quantité"}),e.jsx("div",{className:"add-stock-item-input",children:e.jsx(o,{name:"quantity",type:"number",placeholder:"Quantité"})}),e.jsx("label",{htmlFor:"pricePerUnit",children:"Prix"}),e.jsx("div",{className:"add-stock-item-input",children:e.jsx(o,{name:"pricePerUnit",type:"number",placeholder:"Prix"})}),e.jsxs("div",{className:"add-stock-item-form-buttons",children:[e.jsx("button",{onClick:b,children:"Annuler"}),e.jsx("button",{type:"submit",children:"Modifier"})]})]})})]})})]}):e.jsx("div",{children:"Loading..."})};export{M as default};
