import{u as C,a as f,r as o,j as e,c as E,D as M,t as P,e as D,h as B,i as q,k as L}from"./index-ZrAIOhC1.js";import{g as U,O as T,C as z}from"./turn-back-D5v3BYS5.js";import{B as R}from"./Banner-Ca8Flnkp.js";import{b as I,a as _,c as G}from"./banner-dashboard-orders-mobile-CcmeqHM1.js";import{F as Q,a as V,b as m}from"./formik.esm-CbH9b3ND.js";import{O as W}from"./OverlayPopup.styled-D3LRsPIv.js";import{s as $,d as H}from"./orderUtils-DBNxGViL.js";import{S as J}from"./ScrollUpButton-C2CHthG7.js";import"./placeholder-ice-cream-CrNkbAc3.js";const K=({isPopupOpen:p,closePopup:a})=>{const u=C(),d=f(i=>i.orders.selectedOrder.order),[l,j]=o.useState(!1),b=async i=>{const h={number:d.number,userId:d.userId,status:i.status,deliveryOption:i.deliveryOption,firstName:i.firstName,lastName:i.lastName,comment:i.comment,deliveryAddress:i.deliveryAddress,mobilePhone:i.mobilePhone};console.log("Updated Order:",h);try{await u(M({id:d._id,updatedOrder:h})).unwrap(),P.success("Commande modifiée avec succès !"),a()}catch(y){console.error("Failed to update order:",y),P.error("Échec de modification de commande.")}},v=i=>{i.target===i.currentTarget&&a()};return p?e.jsx(W,{onClick:v,children:e.jsxs("div",{className:`popup-container order-form ${p?"open":"closed"}`,children:[e.jsx("div",{onClick:a,className:"icon-close",children:e.jsx("img",{src:E,alt:"close"})}),e.jsx("div",{className:"popup-content-modify-order-form",children:d&&e.jsx(Q,{initialValues:{status:d.status,deliveryOption:d.deliveryOption,firstName:d.firstName,lastName:d.lastName,comment:d.comment,deliveryAddress:d.deliveryAddress,mobilePhone:d.mobilePhone},onSubmit:b,children:()=>e.jsxs(V,{className:"modify-order-form",children:[e.jsx("label",{htmlFor:"status",children:"Status de la commande"}),e.jsx("div",{children:e.jsxs(m,{as:"select",name:"status",required:!0,children:[e.jsx("option",{value:"pending",label:"En attente"}),e.jsx("option",{value:"processing",label:"En cours"}),e.jsx("option",{value:"shipped",label:"Expédiée"}),e.jsx("option",{value:"canceled",label:"Annulée"})]})}),e.jsx("a",{className:"info-bold",onClick:()=>j(!l),children:l?"Masquer  infos":"Modifier d'autres infos"}),l&&e.jsxs("div",{className:"modify-order-form-other-info",children:[e.jsx("label",{htmlFor:"deliveryOption",children:"Option de livraison"}),e.jsx("div",{children:e.jsxs(m,{as:"select",name:"deliveryOption",required:!0,children:[e.jsx("option",{value:"delivery",label:"Livraison"}),e.jsx("option",{value:"pickup",label:"Retrait"})]})}),e.jsx("label",{htmlFor:"lastName",children:"Nom"}),e.jsx("div",{className:"modify-order-form-input",children:e.jsx(m,{name:"lastName",type:"text",placeholder:"Nom"})}),e.jsx("label",{htmlFor:"firstName",children:"Prénom"}),e.jsx("div",{className:"modify-order-form-input",children:e.jsx(m,{name:"firstName",type:"text",placeholder:"Prénom"})}),e.jsx("label",{htmlFor:"deliveryAddress",children:"Adresse de livraison"}),e.jsx("div",{className:"modify-order-form-input",children:e.jsx(m,{name:"deliveryAddress",as:"textarea",placeholder:"Adresse de livraison"})}),e.jsx("label",{htmlFor:"mobilePhone",children:"Numéro de téléphone"}),e.jsx("div",{className:"modify-order-form-input",children:e.jsx(m,{name:"mobilePhone",type:"tel",placeholder:"Numéro de téléphone"})})]}),e.jsxs("div",{className:"modify-order-form-buttons",children:[e.jsx("button",{type:"submit",children:"Modifier"}),e.jsx("button",{onClick:a,children:"Annuler"})]})]})})})]})}):null},oe=()=>{const[p,a]=o.useState(I),[u,d]=o.useState(!1),[l,j]=o.useState(!1),[b,v]=o.useState(""),[i,h]=o.useState(""),y=D(),{id:N}=B(),x=C(),c=f(s=>s.orders.selectedOrder),S=f(s=>s.orders.loading),O=f(s=>s.usersData.user);o.useEffect(()=>{N&&x(q(N))},[N,x]),o.useEffect(()=>{c&&c.order.userId&&x(L(c.order.userId))},[c,x]),o.useEffect(()=>{const s=()=>{const t=window.innerWidth;t<=430?a(I):t<=768?a(_):a(G)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const A=()=>{y("/dashboard/orders")};if(S)return e.jsx("div",{children:"Loading..."});if(!c)return e.jsx("div",{children:"No order found"});const{order:r,orderItems:n}=c,g=()=>{d(!u)},k=()=>{j(!l)},F=()=>{v(r.number),h(r._id),g()},w=()=>{k()};return e.jsxs("div",{className:"main",children:[e.jsx(R,{image:p,titleSpan:"Gestion des commandes",textPosition:"right"}),e.jsxs("section",{className:"order-detail",children:[e.jsxs("div",{className:"order-container",children:[e.jsx("div",{className:"icon-open",onClick:A,children:e.jsx("img",{src:U,alt:"close"})}),e.jsxs("div",{className:"order-number",children:[e.jsxs("h3",{children:["#",r.number]}),e.jsxs("p",{children:["Date : ",new Date(r.createdAt).toLocaleDateString()]})]}),e.jsxs("div",{className:"order-main-info",children:[e.jsx("div",{className:"order-total",children:e.jsxs("div",{children:[e.jsxs("p",{children:["Coût total :"," ",e.jsxs("span",{children:[" ",n==null?void 0:n.reduce((s,t)=>s+t.quantity*t.stockItemId.pricePerUnit,0),"€"]})]}),e.jsxs("p",{children:["Quantité :"," ",e.jsxs("span",{children:[" ",(n==null?void 0:n.reduce((s,t)=>s+t.quantity,0))*450/1e3," ","kg"]})]})]})}),e.jsxs("div",{className:"order-delivery-info",children:[e.jsxs("p",{className:"info-bold",children:[r.firstName," ",r.lastName,", ",r.mobilePhone]}),e.jsxs("p",{children:["Email :"," ",e.jsx("span",{className:"info-bold",children:O&&O.email?O.email:"Email non disponible"})]}),e.jsxs("p",{children:["Statut :"," ",e.jsx("span",{className:"info-bold",children:$[r.status]||"Statut inconnu"})]}),e.jsxs("p",{children:["Mode de livraison :"," ",H[r.deliveryOption]||"Option inconnue"]}),r.deliveryOption==="delivery"&&e.jsxs("p",{children:["Adresse de livraison :"," ",e.jsx("span",{className:"info-bold",children:r.deliveryAddress})]}),r.comment&&e.jsxs("p",{children:["Commantaire: ",r.comment]})]})]}),e.jsxs("div",{className:"dashboard-order-modify-buttons",children:[r.status!="canceled"&&e.jsx("button",{onClick:w,id:"modify-btn",children:"Modifier"}),r.status!=="canceled"&&e.jsx("button",{onClick:F,id:"cancel-btn",children:"Annuler"})]})]}),e.jsx("div",{className:"order-items-container",children:n&&n.length>0?n.map(s=>e.jsx(T,{title:s.stockItemId.title,category:s.stockItemId.category,price:s.stockItemId.pricePerUnit,quantity:s.quantity,image:s.stockItemId.image},s._id)):e.jsx("div",{children:"Aucun article dans la commande"})})]}),e.jsx(K,{isPopupOpen:l,closePopup:k}),e.jsx(z,{orderNumber:b,orderId:i,isPopupOpen:u,closePopup:g}),e.jsx(J,{})]})};export{oe as default};
