import{r as s,_ as o,a0 as n,G as d,az as m,j as e}from"./index-FOTF8lnp.js";import{O as c,o as u}from"./page-1s08HyM6.js";import{B as p}from"./BreadcrumbAdmin-ygB8ZR-E.js";import"./DateFormInput-ln57xDHI.js";import"./DemoFilterDropdown-_P89mAIh.js";import"./PageTitle-JdW5tM8x.js";const g=s.lazy(()=>o(()=>import("./PersonDetailsCard-RqGIiP9z.js"),__vite__mapDeps([0,1,2]))),x=[{key:"date",name:"Date"},{key:"id",name:"Order ID"},{key:"dish_id",name:"Dish"},{key:"amount",name:"Amount"},{key:"status",name:"Status"}],h=()=>{const{sellerId:a}=n(),[t,r]=s.useState(),i=d();return s.useEffect(()=>{(async()=>{const l=await m(Number(a));l?r(l):i("/not-found")})()},[a]),e.jsx("div",{className:"w-full lg:ps-64",children:e.jsxs("div",{className:"page-content space-y-6 p-6",children:[e.jsx(p,{title:"Sellers Details",link:"/admin/sellers",subtitle:"Sellers"}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-3",children:[e.jsx("div",{className:"lg:col-span-1",children:t&&e.jsx(g,{seller:t})}),e.jsx("div",{className:"lg:col-span-2",children:e.jsx(c,{title:"Sales Order history",columns:x,rows:u})})]})]})})};export{h as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PersonDetailsCard-RqGIiP9z.js","assets/index-FOTF8lnp.js","assets/index-Y88LFwnN.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}