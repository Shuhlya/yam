import{j as e}from"./index-FOTF8lnp.js";import{_ as m}from"./react-apexcharts.min-KQXZd0H0.js";import{B as x}from"./BreadcrumbAdmin-ygB8ZR-E.js";import"./PageTitle-JdW5tM8x.js";function n(i,l,a){let t=0;const s=[];for(;t<l;){const o=Math.floor(Math.random()*750)+1,d=Math.floor(Math.random()*(a.max-a.min+1))+a.min,h=Math.floor(Math.random()*61)+15;s.push([o,d,h]),t++}return s}const c={chart:{height:380,type:"bubble",toolbar:{show:!1}},dataLabels:{enabled:!1},series:[{name:"Bubble 1",data:n(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble 2",data:n(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble 3",data:n(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],fill:{opacity:.8,gradient:{}},colors:["#3e60d5","#ffbc00","#fa5c7c"],xaxis:{tickAmount:12,type:"category"},yaxis:{max:70},grid:{borderColor:"#f1f3fa",padding:{bottom:5}},legend:{offsetY:7}};function r(i,l,a){let t=0;const s=[];for(;t<l;){const o=Math.floor(Math.random()*(a.max-a.min+1))+a.min,d=Math.floor(Math.random()*61)+15;s.push([i,o,d]),i+=864e5,t++}return s}const b={chart:{height:380,type:"bubble",toolbar:{show:!1}},dataLabels:{enabled:!1},series:[{name:"Product 1",data:r(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product 2",data:r(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product 3",data:r(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product 4",data:r(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],fill:{type:"gradient"},colors:["#3e60d5","#47ad77","#fa5c7c","#39afd1"],xaxis:{tickAmount:12,type:"datetime",labels:{rotate:0}},yaxis:{max:70},legend:{offsetY:7},grid:{borderColor:"#f1f3fa",padding:{bottom:5}}},M=()=>e.jsx("div",{className:"w-full lg:ps-64",children:e.jsxs("div",{className:"page-content space-y-6 p-6",children:[e.jsx(x,{title:"Bubble",subtitle:"Charts"}),e.jsxs("div",{className:"grid xl:grid-cols-2 gap-6",children:[e.jsx("div",{className:"rounded-lg border border-default-200",children:e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"card-title",children:"Simple Bubble Chart"}),e.jsx("div",{dir:"ltr",children:e.jsx(m,{className:"apex-charts",options:c,height:380,series:c.series,type:"bubble"})})]})}),e.jsx("div",{className:"rounded-lg border border-default-200",children:e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"card-title",children:"3D Bubble Chart"}),e.jsx("div",{dir:"ltr",children:e.jsx(m,{className:"apex-charts",options:b,height:380,series:b.series,type:"bubble"})})]})})]})]})});export{M as default};