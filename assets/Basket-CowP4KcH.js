import{e as u,j as e,c as N,r,a as h,u as B,f as C,q as S}from"./index-D6-fVkmn.js";import{O as I}from"./OverlayPopup.styled-dVv7PbEb.js";import{B as w}from"./Banner-BWHzXTgN.js";import{b as p,B as y,a as E}from"./banner-basket-mobile-DmMeHQfh.js";import{S as O}from"./ScrollUpButton-CLndXzxi.js";import"./placeholder-ice-cream-CrNkbAc3.js";const P=({isPopupOpen:l,closePopup:n})=>{const i=u(),a=c=>{c.target===c.currentTarget&&n()},t=()=>{i("/register",{state:{from:"/basket"}}),n()},o=()=>{i("/login",{state:{from:"/basket"}}),n()};return e.jsx(e.Fragment,{children:e.jsx(I,{onClick:a,children:e.jsxs("div",{className:`popup-container ${l?"open":"closed"}`,children:[e.jsx("div",{onClick:n,className:"icon-close",children:e.jsx("img",{src:N,alt:"close"})}),e.jsxs("div",{className:"signin-popup-content",children:[e.jsx("h2",{children:"Connexion ou inscription requise"}),e.jsx("ul",{className:"signin-popup-benefits",children:e.jsx("li",{children:"Pour passer une commande, vous devez être connecté ou créer un compte."})}),e.jsxs("div",{className:"signin-buttons",children:[e.jsx("div",{className:"signin-button",children:e.jsx("button",{onClick:o,children:"Se connecter"})}),e.jsx("div",{className:"divider",children:e.jsx("span",{children:"OU"})}),e.jsx("div",{className:"signin-button",children:e.jsx("button",{onClick:t,children:"S'inscrire"})})]})]})]})})})},V=()=>{const[l,n]=r.useState(p),[i,a]=r.useState(!1),{items:t,totalQuantity:o,totalAmount:c}=h(s=>s.basket),d=h(s=>s.stockItems.items),x=h(s=>s.user.user),j=u(),m=B();r.useEffect(()=>{d.length||m(C())},[m,d.length]),r.useEffect(()=>{const s=()=>{window.innerWidth<=430?n(p):n(E)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const k=()=>{m(S())},v=()=>{x?j("/place-order"):a(!0)},b=()=>{a(!1)};return e.jsxs("div",{className:"main",children:[e.jsx(w,{image:l}),e.jsxs("section",{className:"basket",children:[e.jsxs("h2",{className:"basket-title",children:["bienvenue dans votre ",e.jsx("span",{children:"panier"}),"!"]}),e.jsx("div",{className:"basket-content",children:e.jsxs("div",{className:"basket-items-total",children:[e.jsxs("div",{className:"basket-total",children:[e.jsxs("div",{className:"basket-total-price",children:[e.jsx("p",{children:"Coût total"}),e.jsx("div",{className:"price",children:e.jsxs("p",{children:[c," €"]})})]}),e.jsxs("div",{className:"basket-total-quantity",children:[e.jsx("p",{children:"Quantité"}),e.jsx("div",{className:"quantity",children:e.jsxs("p",{children:[o*450/1e3," kg"]})})]}),t.length>0&&e.jsx("div",{children:e.jsx("button",{className:"empty-basket-button",onClick:k,children:e.jsx("p",{children:"Vider le panier"})})})]}),e.jsx("div",{className:"basket-items",children:t.length>0?t.map(s=>{const g=d.find(f=>f._id===s.id);return e.jsx(y,{item:s,stockItem:g},s.id)}):e.jsx("div",{className:"empty-basket-message",children:e.jsx("p",{children:"Votre panier est vide."})})}),t.length>0&&e.jsx("div",{children:e.jsx("button",{onClick:v,children:"Passer commande"})})]})})]}),i&&e.jsx(P,{isPopupOpen:i,closePopup:b}),e.jsx(O,{})]})};export{V as default};
