import{e as N,u as g,j as e,w as v,r as n,x as q,t as u,c as J,y as F,a as Q,f as V}from"./index-DWB8Jxkb.js";import{B as P}from"./Banner-BdO8SdDw.js";import{i as E}from"./placeholder-ice-cream-CrNkbAc3.js";import{F as O,a as M,b as A}from"./formik.esm-C3-GBHP_.js";import{O as Y}from"./OverlayPopup.styled-B49phNGn.js";import{b as B,a as L}from"./banner-dashboard-products-mobile-JLjYs1l0.js";import{S as T}from"./ScrollUpButton-OIgMd8o0.js";var K={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const G=K.VITE_IMAGE_KEY,H=({id:r,title:c,description:o,quantity:d,pricePerUnit:p,category:s,status:t,image:i,onDeleteClick:l})=>{const m=N(),I=g(),x=async h=>{h.preventDefault(),await I(v(r)),m(`/dashboard/stock/${r}`)};return e.jsxs("div",{className:"flavor-card basket-item-card",children:[e.jsx("div",{className:"flavor-card-image",children:e.jsx("img",{src:i?`${G}/${i}`:E,alt:c})}),e.jsx("h3",{children:c}),e.jsx("p",{className:"flavor-category",children:s}),e.jsx("div",{className:"flavor-size",children:e.jsx("p",{children:"Poids : 450 g"})}),e.jsxs("div",{className:"price-and-quantity",children:[e.jsx("div",{className:"price",children:e.jsxs("p",{children:[p," €"]})}),e.jsx("div",{className:"quantity",children:e.jsx("p",{children:d})})]}),e.jsxs("div",{className:"stock-item-buttons",children:[e.jsx("button",{onClick:x,children:"Modifier"}),e.jsx("button",{onClick:()=>l(r,c),children:"Supprimer"})]})]})},X=()=>{const r=g(),[c,o]=n.useState(E),d=(s,t)=>{const i=s.currentTarget.files[0];if(t("image",i),i){const l=URL.createObjectURL(i);o(l)}},p=async(s,{resetForm:t})=>{const i=new FormData;i.append("title",s.title),i.append("category",s.category),i.append("description",s.description),i.append("quantity",s.quantity),i.append("pricePerUnit",s.pricePerUnit),i.append("status",s.status),i.append("image",s.image);try{await r(q(i)).unwrap(),u.success("Article ajouté avec succès !"),t(),o(E)}catch(l){console.error("Failed to add item:",l),u.error("Échec d'ajout de l'article.")}};return e.jsxs("div",{className:"add-stock-item-form-wrapper",children:[e.jsx("div",{className:"add-stock-item-form-image",children:e.jsx("img",{src:c,alt:"ice cream placeholder"})}),e.jsx(O,{initialValues:{title:"",category:"Crème",description:"",quantity:0,pricePerUnit:0,status:"available",image:null},onSubmit:p,validate:s=>{const t={};return s.title||(t.title="Le nom est requis"),s.category||(t.category="La catégorie est requise"),s.description||(t.description="La description est requise"),(!s.image||!(s.image instanceof File))&&(t.image="Veuillez télécharger une image."),!s.quantity||s.quantity===0?t.quantity="La quantité est requise":s.quantity<0&&(t.quantity="La quantité ne peut pas être négative"),!s.pricePerUnit||s.pricePerUnit===0?t.pricePerUnit="Le prix est requis":s.pricePerUnit<0&&(t.pricePerUnit="Le prix ne peut pas être négatif"),t},children:({values:s,errors:t,touched:i,setFieldValue:l})=>e.jsxs(M,{className:"add-stock-item-form",children:[e.jsx("label",{htmlFor:"title",children:"Nom de la glace"}),e.jsx("div",{className:"add-stock-item-input",children:e.jsx(A,{name:"title",type:"text",placeholder:"Nom de la glace"})}),t.title&&i.title&&e.jsx("p",{className:"form-error",children:t.title}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"category",children:"Categorie de la glace"}),e.jsxs(A,{as:"select",name:"category",id:"option",required:!0,children:[e.jsx("option",{value:"Crème",label:"Crème"}),e.jsx("option",{value:"Fruits",label:"Fruits"}),e.jsx("option",{value:"Fruits rouges",label:"Fruits rouges"}),e.jsx("option",{value:"Noix",label:"Noix"})]})]}),t.category&&i.category&&e.jsx("p",{className:"form-error",children:t.category}),e.jsx("label",{htmlFor:"description",children:"Description"}),e.jsx("div",{className:"add-stock-item-input",children:e.jsx(A,{name:"description",as:"textarea",placeholder:"Description"})}),t.description&&i.description&&e.jsx("p",{className:"form-error",children:t.description}),e.jsx("label",{htmlFor:"image",children:"Image"}),e.jsx("div",{className:"add-stock-item-input",children:e.jsx("input",{name:"image",type:"file",accept:"image/*",onChange:m=>d(m,l)})}),t.image&&i.image&&e.jsx("p",{className:"form-error",children:t.image}),e.jsx("label",{htmlFor:"quantity",children:"Quantité"}),e.jsx("div",{className:"add-stock-item-input",children:e.jsx(A,{name:"quantity",type:"number",min:"0",placeholder:"Quantité"})}),t.quantity&&i.quantity&&e.jsx("p",{className:"form-error",children:t.quantity}),e.jsx("label",{htmlFor:"pricePerUnit",children:"Prix"}),e.jsx("div",{className:"add-stock-item-input",children:e.jsx(A,{name:"pricePerUnit",type:"number",min:"0",placeholder:"Prix"})}),t.pricePerUnit&&i.pricePerUnit&&e.jsx("p",{className:"form-error",children:t.pricePerUnit}),e.jsxs("div",{className:"add-stock-item-form-buttons",children:[e.jsx("button",{type:"reset",children:"Annuler"}),e.jsx("button",{type:"submit",children:"Ajouter"})]})]})})]})},Z=({isPopupOpen:r,closePopup:c,itemTitle:o,itemId:d})=>{const p=g(),s=async()=>{try{await p(F(d)).unwrap(),u.success("Article supprimé avec succés."),c()}catch(i){console.error("Failed to delete item:",i),u.error("Échec de suppression de l'article.")}},t=i=>{i.target===i.currentTarget&&c()};return r?e.jsx(Y,{onClick:t,children:e.jsxs("div",{className:`popup-container ${r?"open":"closed"}`,children:[e.jsx("div",{onClick:c,className:"icon-close",children:e.jsx("img",{src:J,alt:"close"})}),e.jsxs("div",{className:"popup-content",children:[e.jsxs("h3",{children:["Etes-vous sûr de vouloir supprimer la glace ",e.jsx("span",{children:o})," ","?"]}),e.jsxs("div",{className:"popup-buttons",children:[e.jsx("button",{onClick:s,children:"Oui"}),e.jsx("button",{onClick:c,children:"Non"})]})]})]})}):null},W="data:image/png;base64,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",ce=()=>{const[r,c]=n.useState(B),[o,d]=n.useState(!0),[p,s]=n.useState(!1),[t,i]=n.useState(!1),[l,m]=n.useState(""),[I,x]=n.useState(""),[h,f]=n.useState(""),S=g(),{items:b,loading:z,error:j}=Q(a=>a.stockItems);n.useEffect(()=>{S(V())},[S]),n.useEffect(()=>{const a=()=>{window.innerWidth<=430?c(B):c(L)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]);const y=a=>{a.preventDefault(),d(!0),s(!1)},D=a=>{a.preventDefault(),d(!1),s(!0)},C=()=>{i(!t)},k=(a,U)=>{x(a),m(U),C()},R=a=>{f(a.target.value)},w=b.filter(a=>a.title.toLowerCase().includes(h.toLowerCase()));return j?(console.log("error",j),e.jsxs("div",{children:["Error: ",j.message]})):e.jsxs("div",{className:"main",children:[e.jsx(P,{image:r,title:"Gestion des stocks",textColor:"white",textPosition:"left"}),e.jsxs("section",{className:"stock",children:[e.jsxs("div",{className:"stock-buttons",children:[e.jsx("button",{onClick:y,children:"Liste des glaces"}),e.jsx("button",{onClick:D,children:"Ajouter une glace"})]}),o&&!p&&e.jsxs("div",{className:"stock-quantity-and-search",children:[e.jsxs("p",{children:["Nombre d'articles: ",w.length]}),e.jsxs("div",{className:"search-bar",children:[e.jsx("input",{placeholder:"Rechercher",type:"text",name:"title",value:h,onChange:R}),e.jsx("img",{src:W,className:"search-icon",alt:"search icon"})]}),e.jsx("div",{className:"stock-list",children:w.map(a=>e.jsx(H,{id:a._id,title:a.title,image:a.image,description:a.description,quantity:a.quantity,pricePerUnit:a.pricePerUnit,category:a.category,status:a.status,onDeleteClick:()=>k(a._id,a.title)},a._id))})]}),!o&&p&&e.jsx(X,{}),e.jsx(Z,{isPopupOpen:t,closePopup:C,itemTitle:l,itemId:I})]}),e.jsx(T,{})]})};export{ce as default};
