import{r as w,j as e,aD as g,c as s,aE as N,aF as y,D as h}from"./index-FOTF8lnp.js";const E=({control:m,name:l,label:d,className:u,labelClassName:i,containerClassName:p,noValidate:t,fullWidth:r,...f})=>{const[o,b]=w.useState(!1);return e.jsx(g,{control:m,defaultValue:"",render:({field:j,fieldState:a})=>{var n,c,x;return e.jsxs("div",{className:s(p,"relative",r&&"w-full"),children:[d&&e.jsx("label",{className:s("mb-2 block text-sm font-medium text-default-900",i),htmlFor:l,children:d}),e.jsxs("div",{className:s("flex",r&&"w-full"),children:[e.jsxs("div",{className:s("relative",r&&"w-full"),children:[e.jsx("input",{...f,...j,type:o?"text":"password",className:s("rounded-e-none rounded-s-lg border border-default-200 px-4 py-2.5 focus:border-primary dark:bg-default-50",u,r&&"w-full",{"border-red-500 focus:border-red-500":!t&&((n=a.error)==null?void 0:n.message)})}),!t&&((c=a.error)==null?void 0:c.message)&&e.jsx("div",{className:"pointer-events-none absolute inset-y-0 end-4 flex items-center",children:e.jsx(N,{size:20,className:"text-red-500"})})]}),e.jsx("button",{className:"password-toggle ms-[1px] inline-flex items-center justify-center rounded-e-lg border border-s-0 border-default-200 bg-white px-4 py-2.5 dark:bg-default-50",onClick:()=>{b(!o)},type:"button",children:o?e.jsx(y,{size:20,className:"text-default-600"}):e.jsx(h,{size:20,className:"text-default-600"})})]}),!t&&((x=a.error)==null?void 0:x.message)&&e.jsx("p",{className:"mt-2 text-xs text-red-600",children:a.error.message})]})},name:l})};export{E as P};