import{j as e,u,e as h,a as x,O as v,c as j,C as p,t as l}from"./index-nAO5NnHY.js";import{i as f}from"./placeholder-ice-cream-CrNkbAc3.js";var C={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const N=C.VITE_IMAGE_KEY,E=({title:r,quantity:s,price:i,image:n,category:d})=>e.jsxs("div",{className:"flavor-card basket-item-card",children:[e.jsx("div",{className:"flavor-card-image",children:e.jsx("img",{src:n?`${N}/${n}`:f,alt:r})}),e.jsx("h3",{children:r}),e.jsx("p",{className:"flavor-category",children:d}),e.jsx("div",{className:"flavor-size",children:e.jsx("p",{children:"Poids : 450 g"})}),e.jsxs("div",{className:"price-and-quantity",children:[e.jsx("div",{className:"price",children:e.jsxs("p",{children:[i*s," €"]})}),e.jsx("div",{className:"quantity",children:e.jsx("p",{children:s})})]})]}),_=({isPopupOpen:r,closePopup:s,orderNumber:i,orderId:n})=>{const d=u(),o=h(),{user:a,isAuthenticated:g}=x(c=>c.user),t=async()=>{try{await d(p(n)).unwrap(),s(),(a==null?void 0:a.role)==="admin"?(l.success("Commande annulée avec succés."),o("/dashboard/orders")):(a==null?void 0:a.role)==="client"?(l.success("Commande annulée avec succés."),o("/orders")):(l.success("Commande annulée avec succés."),o("/"))}catch(c){console.error("Failed to delete order:",c),l.error("Échec d'annulation de la commande.")}},m=c=>{c.target===c.currentTarget&&s()};return r?e.jsx(v,{onClick:m,children:e.jsxs("div",{className:`popup-container ${r?"open":"closed"}`,children:[e.jsx("div",{onClick:s,className:"icon-close",children:e.jsx("img",{src:j,alt:"close"})}),e.jsxs("div",{className:"popup-content",children:[e.jsxs("h3",{children:["Etes-vous sûr de vouloir annuler la commande"," ",e.jsxs("span",{children:["#",i]})," ?"]}),e.jsxs("div",{className:"popup-buttons",children:[e.jsx("button",{onClick:t,children:"Oui"}),e.jsx("button",{onClick:s,children:"Non"})]})]})]})}):null},b="/assets/turn-back-DYxXevL3.png";export{_ as C,E as O,b as g};
