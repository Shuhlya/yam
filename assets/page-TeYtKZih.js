import{r as i,az as f,j as e,ai as j,U as p,ah as N,f as g,ad as v}from"./index-FOTF8lnp.js";import{B as b}from"./BreadcrumbAdmin-ygB8ZR-E.js";import{P as y}from"./ProductPagination-972Q1D5X.js";import"./PageTitle-JdW5tM8x.js";const L=({restaurant:s})=>{const{contact_no:r,address:d,email:c,logo:x,total_dishes:m,total_sales:n,name:o,seller_id:a,id:u}=s,[t,h]=i.useState();return i.useEffect(()=>{(async()=>{const l=await f(a);l&&h(l)})()},[a]),e.jsxs("div",{className:"relative rounded-lg border border-default-200 p-6",children:[e.jsx("img",{src:x,width:56,height:56,className:"mx-auto mb-4 h-14 w-14",alt:"restaurant"}),e.jsx("h4",{className:"text-center text-base font-medium uppercase text-default-900",children:o}),t&&e.jsx("h4",{className:"mb-10 text-center text-base font-medium text-default-600",children:t.name}),e.jsxs("div",{className:"mb-8 flex justify-around",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"mb-2.5 text-lg font-medium text-primary",children:m}),e.jsx("h5",{className:"text-sm text-default-800",children:"Total Product"})]}),e.jsx("div",{className:"border-s border-default-200"}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"mb-2.5 text-lg font-medium text-primary",children:n}),e.jsx("h5",{className:"text-sm text-default-800",children:"Total Sales"})]})]}),e.jsxs("div",{className:"mb-6 space-y-5",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex-shrink",children:e.jsx(j,{size:20,className:"text-default-800"})}),e.jsx("p",{className:"d text-sm text-default-700",children:d})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex-shrink",children:e.jsx(p,{size:20,className:"text-default-800"})}),e.jsx("p",{className:"d text-sm text-default-700",children:c})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex-shrink",children:e.jsx(N,{size:20,className:"text-default-800"})}),e.jsx("p",{className:"d text-sm text-default-700",children:r})]})]}),e.jsx("div",{className:"text-center",children:e.jsx(g,{to:`/admin/restaurants/${u}`,className:"inline-flex rounded-lg bg-primary px-8 py-2.5 font-medium text-white transition-all hover:bg-primary-500",children:"View Details"})})]})},k=()=>e.jsx("div",{className:"w-full lg:ps-64",children:e.jsxs("div",{className:"page-content space-y-6 p-6",children:[e.jsx(b,{title:"Restaurants List",subtitle:"Restaurants"}),e.jsx("div",{className:"mb-6 grid gap-6 md:grid-cols-2 2xl:grid-cols-4",children:v.map(s=>e.jsx(L,{restaurant:s},s.id))}),e.jsx(y,{})]})});export{k as default};
