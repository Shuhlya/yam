import{K as o,M as u,N as i,O as d,j as e,T as b,n as j,au as y,aT as N,c as g,aU as w,ae as v}from"./index-FOTF8lnp.js";import{D as n}from"./DemoFilterDropdown-_P89mAIh.js";import{D as k}from"./DateFormInput-ln57xDHI.js";import{G as D}from"./GoToAddButton-Qx_JfKlj.js";const F=()=>{const r=o({search:u().optional()}),{control:a}=i({resolver:d(r),mode:"onChange"});return e.jsx(b,{name:"search",control:a,className:"max-w-sm",startInnerIcon:e.jsx(j,{}),placeholder:"Search...",fullWidth:!0})},C=()=>{const r=o({filterByDateRange:y().optional()}),{control:a}=i({resolver:d(r),mode:"onChange"});return e.jsx(k,{name:"filterByDateRange",control:a,className:"max-w-[180px]",placeholder:"01/05/2003",startInnerIcon:e.jsx(N,{}),options:{dateFormat:"d/m/Y"}})},S=["Ascending","Descending"],T=["All","Active","Blocked"],R=({rows:r,columns:a,title:x,buttonLink:m,buttonText:p})=>e.jsxs("div",{className:"rounded-lg border border-default-200",children:[e.jsx("div",{className:"border-b border-b-default-200 px-6 py-4",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-6",children:[e.jsx("h2",{className:"text-xl font-medium text-default-900",children:x}),e.jsx(D,{buttonText:p,buttonLink:m})]})}),e.jsx("div",{className:"p-6",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsx(F,{}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(C,{}),e.jsx(n,{filterType:"Sort",filterOptions:S}),e.jsx(n,{filterType:"Status",filterOptions:T})]})]})}),e.jsx("div",{className:"relative overflow-x-auto border-t border-default-200",children:e.jsx("div",{className:"inline-block min-w-full align-middle",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full divide-y divide-default-200",children:[e.jsx("thead",{className:"bg-default-100",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"max-w-[1rem] px-6 py-4",children:e.jsxs("div",{className:"flex h-5 items-center",children:[e.jsx("input",{id:"hs-table-search-checkbox-all",type:"checkbox",className:"form-checkbox h-5 w-5 rounded border border-default-300 bg-transparent text-primary focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0"}),e.jsx("label",{htmlFor:"hs-table-search-checkbox-all",className:"sr-only",children:"Checkbox"})]})}),a.map(t=>e.jsx("th",{scope:"col",className:"whitespace-nowrap px-6 py-4 text-start text-sm font-medium text-default-500",children:t.name},t.key))]})}),e.jsx("tbody",{className:"divide-y divide-default-200",children:r.map((t,h)=>e.jsxs("tr",{children:[e.jsx("td",{className:"whitespace-nowrap px-6 py-4",children:e.jsxs("div",{className:"flex h-5 items-center",children:[e.jsx("input",{id:"hs-table-search-checkbox-1",type:"checkbox",className:"form-checkbox h-5 w-5 rounded border border-default-300 bg-transparent text-primary focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0"}),e.jsx("label",{htmlFor:"hs-table-search-checkbox-1",className:"sr-only",children:"Checkbox"})]})}),a.map((c,l)=>{const s=t[c.key];if(c.key=="joining_date")return e.jsxs("td",{className:"whitespace-nowrap px-6 py-4 text-base text-default-800",children:[s," | ",e.jsx("span",{className:"text-xs",children:t.joining_time})]},s+l);if(c.key=="status"){const f=s=="active"?"bg-green-500/10 text-green-500":"bg-red-500/10 text-red-500";return e.jsx("td",{className:"whitespace-nowrap px-6 py-4",children:e.jsx("span",{className:g("rounded-md px-3 py-1 text-xs font-medium",f),children:w(s)})},s+l)}else return e.jsxs("td",{className:"whitespace-nowrap px-6 py-4 text-base text-default-800",children:[c.key=="order_total"&&v,s]},s+l)})]},h))})]})})})})]});export{R as C};