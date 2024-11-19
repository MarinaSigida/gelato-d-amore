import{j as e,c as A,a as N,e as y,u as b,E as F,F as B,G as C,w as E,H as S,t as z,r as j,p as L}from"./index-DqfOK4-j.js";import{O as V}from"./OverlayPopup.styled-DSydNYh_.js";import{B as Q}from"./Banner-DQTFi5Ef.js";import{b as v,B as R,a as D}from"./banner-basket-mobile-DMEjxQuK.js";import{F as M,a as T,b as d}from"./formik.esm-Dro_gGG0.js";import"./placeholder-ice-cream-CrNkbAc3.js";const _="/assets/we-love-you-DEp5a6eE.png",$=({isPopupOpen:p,closePopup:t})=>{const c=l=>{l.target===l.currentTarget&&t()};return e.jsx(e.Fragment,{children:e.jsx(V,{onClick:c,children:e.jsxs("div",{className:`popup-container ${p?"open":"closed"}`,children:[e.jsx("div",{onClick:t,className:"icon-close",children:e.jsx("img",{src:A,alt:"close"})}),e.jsxs("div",{className:"popup-content",children:[e.jsx("div",{className:"popup-content-img",children:e.jsx("img",{src:_,alt:"Thank you for the order"})}),e.jsx("h4",{children:"Merci pour votre commande "}),e.jsxs("h3",{children:["Bisous, ",e.jsx("span",{children:"I love you!"})]}),e.jsx("button",{onClick:t,children:"Fermer"})]})]})})})},G=({openPopup:p,basketItems:t,handleClearBasket:c})=>{const l=N(r=>r.user.user),m=y(),o=b(),h=r=>{r.preventDefault(),m("/catalog")},u=async(r,{resetForm:s})=>{try{const{email:a,firstName:x,lastName:i,mobilePhone:f,comment:k,deliveryOption:w,deliveryAddress:O}=r,g={userId:(await o(F(a)).unwrap())._id,comment:k,deliveryOption:w,deliveryAddress:O,mobilePhone:f,firstName:x,lastName:i},I=(await o(B(g)).unwrap())._id,P=t.map(n=>({orderId:I,stockItemId:n.id,quantity:n.quantity}));await Promise.all(P.map(n=>o(C(n)).unwrap())),await Promise.all(t.map(async n=>{const q=(await o(E(n.id)).unwrap()).quantity-n.quantity;return o(S({id:n.id,updatedItem:{quantity:q}})).unwrap()})),c(),s(),p()}catch(a){console.error("Error in handleSubmit:",a),z.error(`Échec de la commande. ${a.message||"Veuillez réessayer plus tard."}`)}};return e.jsx("div",{className:"order-form-wrapper",children:e.jsx(M,{initialValues:{firstName:"",lastName:"",email:l.email,mobilePhone:"",comment:"",deliveryOption:"pickup",deliveryAddress:""},onSubmit:u,validate:r=>{const s={};return r.email||(s.email="L'email est requis"),r.lastName||(s.lastName="Le nom est requis"),r.firstName||(s.firstName="Le prénom est requis"),r.mobilePhone||(s.mobilePhone="Le téléphone mobile est requis"),r.deliveryOption||(s.deliveryOption="Vous devez choisir un mode de livraison"),r.deliveryOption==="delivery"&&!r.deliveryAddress&&(s.deliveryAddress="L'adresse de livraison est requise"),s},children:({values:r,errors:s,touched:a})=>e.jsxs(T,{className:"order-form",children:[e.jsx("h3",{children:"Veuillez remplir les informations suivantes"}),e.jsxs("div",{className:"order-inputs",children:[e.jsx("label",{htmlFor:"firstName",children:"Informations personnelles"}),e.jsxs("div",{className:"order-input-name",children:[e.jsxs("div",{children:[e.jsx("div",{className:"order-input",children:e.jsx(d,{type:"text",name:"lastName",placeholder:"Nom",required:!0})}),s.lastName&&a.lastName&&e.jsx("p",{className:"order-form-error",children:s.lastName})]}),e.jsxs("div",{children:[e.jsx("div",{className:"order-input",children:e.jsx(d,{type:"text",name:"firstName",placeholder:"Prénom",required:!0})}),s.firstName&&a.firstName&&e.jsx("p",{className:"order-form-error",children:s.firstName})]})]}),e.jsx("label",{htmlFor:"email",children:"E-mail"}),e.jsx("div",{className:"order-input",children:e.jsx(d,{type:"email",name:"email",placeholder:"Votre e-mail",required:!0})}),s.email&&a.email&&e.jsx("p",{className:"order-form-error",children:s.email}),e.jsx("label",{htmlFor:"mobilePhone",children:"Numéro de téléphone"}),e.jsx("div",{className:"order-input",children:e.jsx(d,{type:"phone",name:"mobilePhone",placeholder:"Numéro de téléphone",required:!0})}),s.mobilePhone&&a.mobilePhone&&e.jsx("p",{className:"order-form-error",children:s.mobilePhone}),e.jsx("label",{htmlFor:"comment",children:"Commentaire"}),e.jsx("div",{className:"order-input",children:e.jsx(d,{as:"textarea",name:"comment",placeholder:"Avez-vous des précisions concernant votre commande?"})}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"deliveryOption",children:"Je souhaite recuperer ma commande:"}),e.jsxs(d,{as:"select",name:"deliveryOption",id:"option",required:!0,children:[e.jsx("option",{value:"pickup",label:"A emporter"}),e.jsx("option",{value:"delivery",label:"Par une livraison"})]})]}),s.deliveryOption&&a.deliveryOption&&e.jsx("p",{className:"order-form-error",children:s.deliveryOption}),r.deliveryOption==="delivery"&&e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"deliveryAddress",children:["Adresse de livraison ",e.jsx("span",{className:"info-bold",children:"*"})]}),e.jsx("div",{className:"order-input",children:e.jsx(d,{type:"text",name:"deliveryAddress",placeholder:"Adresse de livraison"})}),s.deliveryAddress&&a.deliveryAddress&&e.jsx("p",{className:"order-form-error",children:s.deliveryAddress}),e.jsxs("div",{style:{fontSize:12},children:[e.jsx("span",{className:"info-bold",children:"* "}),"La livraison peut être réalisée uniquement à Nice (06000)"]})]})]}),e.jsxs("div",{className:"order-buttons",children:[e.jsx("button",{onClick:h,children:"Annuler"}),e.jsx("button",{type:"submit",children:"Commander"})]})]})})})},ae=()=>{const[p,t]=j.useState(v),[c,l]=j.useState(!1),{items:m,totalQuantity:o,totalAmount:h}=N(i=>i.basket),u=y(),r=b();j.useEffect(()=>{const i=()=>{window.innerWidth<=430?t(v):t(D)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const s=()=>{r(L())},a=()=>{l(!0)},x=()=>{l(!1),u("/")};return e.jsxs("div",{className:"main",children:[e.jsx(Q,{image:p}),e.jsxs("section",{className:"basket",children:[e.jsxs("h2",{className:"basket-title",children:["Completez votre ",e.jsx("span",{children:"commande"})]}),e.jsxs("div",{className:"basket-content",children:[e.jsxs("div",{className:"basket-items-total",children:[e.jsxs("div",{className:"basket-total",children:[e.jsxs("div",{className:"basket-total-price",children:[e.jsx("p",{children:"Coût total"}),e.jsx("div",{className:"price",children:e.jsxs("p",{children:[h," €"]})})]}),e.jsxs("div",{className:"basket-total-quantity",children:[e.jsx("p",{children:"Quantité"}),e.jsx("div",{className:"quantity",children:e.jsxs("p",{children:[o*450/1e3," kg"]})})]}),m.length>0&&e.jsx("div",{children:e.jsx("button",{className:"empty-basket-button",onClick:s,children:e.jsx("p",{children:"Vider le panier"})})})]}),e.jsx("div",{className:"basket-items",children:m.length>0?m.map(i=>e.jsx(R,{item:i},i.id)):e.jsx("div",{className:"empty-basket-message",children:e.jsx("p",{children:"Votre panier est vide."})})})]}),e.jsx("div",{className:"basket-form",children:e.jsx(G,{openPopup:a,basketItems:m,handleClearBasket:s})})]})]}),c&&e.jsx($,{isPopupOpen:c,closePopup:x})]})};export{ae as default};
