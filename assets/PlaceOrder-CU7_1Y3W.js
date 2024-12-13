import{j as e,O as T,c as A,a as N,e as y,u as b,J as B,K as C,M as F,q as S,N as z,t as E,r as j,n as L}from"./index-nAO5NnHY.js";import{B as V}from"./Banner-BBbr3Ta8.js";import{b as v,B as R,a as Q}from"./banner-basket-mobile-B8GiTStI.js";import{F as D,a as _,b as l}from"./formik.esm-DuydH-wK.js";import{S as J}from"./ScrollUpButton-BEd3GV2z.js";import"./placeholder-ice-cream-CrNkbAc3.js";const M="/assets/we-love-you-DEp5a6eE.png",U=({isPopupOpen:p,closePopup:n})=>{const c=o=>{o.target===o.currentTarget&&n()};return e.jsx(e.Fragment,{children:e.jsx(T,{onClick:c,children:e.jsxs("div",{className:`popup-container ${p?"open":"closed"}`,children:[e.jsx("div",{onClick:n,className:"icon-close",children:e.jsx("img",{src:A,alt:"close"})}),e.jsxs("div",{className:"popup-content",children:[e.jsx("div",{className:"popup-content-img",children:e.jsx("img",{src:M,alt:"Thank you for the order"})}),e.jsx("h4",{children:"Merci pour votre commande "}),e.jsxs("h3",{children:["Bisous, ",e.jsx("span",{children:"I love you!"})]}),e.jsx("button",{onClick:n,children:"Fermer"})]})]})})})},$=({openPopup:p,basketItems:n,handleClearBasket:c})=>{const o=N(r=>r.user.user),m=y(),d=b(),h=r=>{r.preventDefault(),m("/catalog")},u=async(r,{resetForm:s})=>{try{const{email:a,firstName:x,lastName:i,mobilePhone:f,comment:k,deliveryOption:g,deliveryAddress:q}=r,w={userId:(await d(B(a)).unwrap())._id,comment:k,deliveryOption:g,deliveryAddress:q,mobilePhone:f,firstName:x,lastName:i},O=(await d(C(w)).unwrap())._id,P=n.map(t=>({orderId:O,stockItemId:t.id,quantity:t.quantity}));await Promise.all(P.map(t=>d(F(t)).unwrap())),await Promise.all(n.map(async t=>{const I=(await d(S(t.id)).unwrap()).quantity-t.quantity;return d(z({id:t.id,updatedItem:{quantity:I}})).unwrap()})),c(),s(),p()}catch(a){console.error("Error in handleSubmit:",a),E.error(`Échec de la commande. ${a.message||"Veuillez réessayer plus tard."}`)}};return e.jsx("div",{className:"order-form-wrapper",children:e.jsx(D,{initialValues:{firstName:"",lastName:"",email:o.email,mobilePhone:"",comment:"",deliveryOption:"pickup",deliveryAddress:"",agreeToTerms:!1},onSubmit:u,validate:r=>{const s={};return r.email||(s.email="L'email est requis"),r.lastName||(s.lastName="Le nom est requis"),r.firstName||(s.firstName="Le prénom est requis"),r.mobilePhone||(s.mobilePhone="Le téléphone mobile est requis"),r.deliveryOption||(s.deliveryOption="Vous devez choisir un mode de livraison"),r.deliveryOption==="delivery"&&!r.deliveryAddress&&(s.deliveryAddress="L'adresse de livraison est requise"),r.agreeToTerms||(s.agreeToTerms="Vous devez accepter les conditions générales de vente."),s},children:({values:r,errors:s,touched:a})=>e.jsxs(_,{className:"order-form",children:[e.jsx("h3",{children:"Veuillez remplir les informations suivantes"}),e.jsxs("div",{className:"order-inputs",children:[e.jsx("label",{htmlFor:"firstName",children:"Informations personnelles"}),e.jsxs("div",{className:"order-input-name",children:[e.jsxs("div",{children:[e.jsx("div",{className:"order-input",children:e.jsx(l,{type:"text",name:"lastName",placeholder:"Nom",required:!0})}),s.lastName&&a.lastName&&e.jsx("p",{className:"form-error",children:s.lastName})]}),e.jsxs("div",{children:[e.jsx("div",{className:"order-input",children:e.jsx(l,{type:"text",name:"firstName",placeholder:"Prénom",required:!0})}),s.firstName&&a.firstName&&e.jsx("p",{className:"form-error",children:s.firstName})]})]}),e.jsx("label",{htmlFor:"email",children:"E-mail"}),e.jsx("div",{className:"order-input",children:e.jsx(l,{type:"email",name:"email",placeholder:"Votre e-mail",required:!0})}),s.email&&a.email&&e.jsx("p",{className:"form-error",children:s.email}),e.jsx("label",{htmlFor:"mobilePhone",children:"Numéro de téléphone"}),e.jsx("div",{className:"order-input",children:e.jsx(l,{type:"phone",name:"mobilePhone",placeholder:"Numéro de téléphone",required:!0})}),s.mobilePhone&&a.mobilePhone&&e.jsx("p",{className:"form-error",children:s.mobilePhone}),e.jsx("label",{htmlFor:"comment",children:"Commentaire"}),e.jsx("div",{className:"order-input",children:e.jsx(l,{as:"textarea",name:"comment",placeholder:"Avez-vous des précisions concernant votre commande?"})}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"deliveryOption",children:"Je souhaite recuperer ma commande:"}),e.jsxs(l,{as:"select",name:"deliveryOption",id:"option",required:!0,children:[e.jsx("option",{value:"pickup",label:"A emporter"}),e.jsx("option",{value:"delivery",label:"Par une livraison"})]})]}),s.deliveryOption&&a.deliveryOption&&e.jsx("p",{className:"form-error",children:s.deliveryOption}),r.deliveryOption==="delivery"&&e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"deliveryAddress",children:["Adresse de livraison ",e.jsx("span",{className:"info-bold",children:"*"})]}),e.jsx("div",{className:"order-input",children:e.jsx(l,{type:"text",name:"deliveryAddress",placeholder:"Adresse de livraison"})}),s.deliveryAddress&&a.deliveryAddress&&e.jsx("p",{className:"form-error",children:s.deliveryAddress}),e.jsxs("div",{style:{fontSize:12},children:[e.jsx("span",{className:"info-bold",children:"* "}),"La livraison peut être réalisée uniquement à Nice (06000)"]})]}),e.jsx("div",{className:"rgpd-consent",children:e.jsxs("label",{children:[e.jsx(l,{type:"checkbox",name:"agreeToTerms",required:!0}),"J'accepte les"," ",e.jsx("a",{href:"/rgpd",target:"_blank",rel:"noopener noreferrer",children:"règles RGPD"})," ","et les",e.jsxs("a",{href:"/terms",target:"_blank",rel:"noopener noreferrer",children:[" ","conditions générales de vente"]})]})}),s.agreeToTerms&&a.agreeToTerms&&e.jsx("p",{className:"form-error",children:s.agreeToTerms})]}),e.jsxs("div",{className:"order-buttons",children:[e.jsx("button",{onClick:h,children:"Annuler"}),e.jsx("button",{type:"submit",children:"Commander"})]})]})})})},ie=()=>{const[p,n]=j.useState(v),[c,o]=j.useState(!1),{items:m,totalQuantity:d,totalAmount:h}=N(i=>i.basket),u=y(),r=b();j.useEffect(()=>{const i=()=>{window.innerWidth<=430?n(v):n(Q)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const s=()=>{r(L())},a=()=>{o(!0)},x=()=>{o(!1),u("/")};return e.jsxs("div",{className:"main",children:[e.jsx(V,{image:p}),e.jsxs("section",{className:"basket",children:[e.jsxs("h2",{className:"basket-title",children:["Completez votre ",e.jsx("span",{children:"commande"})]}),e.jsxs("div",{className:"basket-content",children:[e.jsxs("div",{className:"basket-items-total",children:[e.jsxs("div",{className:"basket-total",children:[e.jsxs("div",{className:"basket-total-price",children:[e.jsx("p",{children:"Coût total"}),e.jsx("div",{className:"price",children:e.jsxs("p",{children:[h," €"]})})]}),e.jsxs("div",{className:"basket-total-quantity",children:[e.jsx("p",{children:"Quantité"}),e.jsx("div",{className:"quantity",children:e.jsxs("p",{children:[d*450/1e3," kg"]})})]}),m.length>0&&e.jsx("div",{children:e.jsx("button",{className:"empty-basket-button",onClick:s,children:e.jsx("p",{children:"Vider le panier"})})})]}),e.jsx("div",{className:"basket-items",children:m.length>0?m.map(i=>e.jsx(R,{item:i},i.id)):e.jsx("div",{className:"empty-basket-message",children:e.jsx("p",{children:"Votre panier est vide."})})})]}),e.jsx("div",{className:"basket-form",children:e.jsx($,{openPopup:a,basketItems:m,handleClearBasket:s})})]})]}),c&&e.jsx(U,{isPopupOpen:c,closePopup:x}),e.jsx(J,{})]})};export{ie as default};