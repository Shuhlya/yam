import{j as e}from"./index-FOTF8lnp.js";import{_ as d}from"./react-apexcharts.min-KQXZd0H0.js";import{B as h}from"./BreadcrumbAdmin-ygB8ZR-E.js";import"./PageTitle-JdW5tM8x.js";function a(s,n,t){let r=0;const i=[];for(;r<n;){const l=s,c=Math.floor(Math.random()*(t.max-t.min+1))+t.min;i.push([l,c]),s+=864e5,r++}return i}const o={chart:{height:380,type:"scatter",zoom:{enabled:!1}},series:[{name:"Sample A",data:[[16.4,5.4],[21.7,2],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7.4],[10.9,0],[10.9,8.2],[16.4,0],[16.4,1.8],[13.6,.3],[13.6,0],[29.9,0],[27.1,2.3],[16.4,0],[13.6,3.7],[10.9,5.2],[16.4,6.5],[10.9,0],[24.5,7.1],[10.9,0],[8.1,4.7],[19,0],[21.7,1.8],[27.1,0],[24.5,0],[27.1,0],[29.9,1.5],[27.1,.8],[22.1,2]]},{name:"Sample B",data:[[6.4,13.4],[1.7,11],[5.4,8],[9,17],[1.9,4],[3.6,12.2],[1.9,14.4],[1.9,9],[1.9,13.2],[1.4,7],[6.4,8.8],[3.6,4.3],[1.6,10],[9.9,2],[7.1,15],[1.4,0],[3.6,13.7],[1.9,15.2],[6.4,16.5],[.9,10],[4.5,17.1],[10.9,10],[.1,14.7],[9,10],[12.7,11.8],[2.1,10],[2.5,10],[27.1,10],[2.9,11.5],[7.1,10.8],[2.1,12]]},{name:"Sample C",data:[[21.7,3],[23.6,3.5],[24.6,3],[29.9,3],[21.7,20],[23,2],[10.9,3],[28,4],[27.1,.3],[16.4,4],[13.6,0],[19,5],[22.4,3],[24.5,3],[32.6,3],[27.1,4],[29.6,6],[31.6,8],[21.6,5],[20.9,4],[22.4,0],[32.6,10.3],[29.7,20.8],[24.5,.8],[21.4,0],[21.7,6.9],[28.6,7.7],[15.4,0],[18.1,0],[33.4,0],[16.4,0]]}],xaxis:{tickAmount:10},yaxis:{tickAmount:7},colors:["#39afd1","#ffbc00","#3e60d5"],grid:{borderColor:"#f1f3fa",padding:{bottom:5}},legend:{offsetY:7},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]},m={chart:{height:380,type:"scatter",zoom:{type:"xy"}},series:[{name:"Team 1",data:a(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Team 2",data:a(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Team 3",data:a(new Date("11 Feb 2017 GMT").getTime(),30,{min:10,max:60})},{name:"Team 4",data:a(new Date("11 Feb 2017 GMT").getTime(),10,{min:10,max:60})},{name:"Team 5",data:a(new Date("11 Feb 2017 GMT").getTime(),30,{min:10,max:60})}],dataLabels:{enabled:!1},colors:["#6c757d","#ffbc00","#3e60d5","#47ad77","#fa5c7c"],grid:{borderColor:"#f1f3fa",padding:{bottom:5},xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},legend:{offsetY:10},xaxis:{type:"datetime"},yaxis:{max:70},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]},g=()=>e.jsx("div",{className:"w-full lg:ps-64",children:e.jsxs("div",{className:"page-content space-y-6 p-6",children:[e.jsx(h,{title:"Scatter",subtitle:"Scatter"}),e.jsxs("div",{className:"grid xl:grid-cols-2 gap-6",children:[e.jsx("div",{className:"rounded-lg border border-default-200",children:e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"card-title mb-4",children:"Scatter (XY) Chart"}),e.jsx("div",{dir:"ltr",children:e.jsx(d,{className:"apex-charts",options:o,height:380,series:o.series,type:"scatter"})})]})}),e.jsx("div",{className:"rounded-lg border border-default-200",children:e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"card-title mb-4",children:"Scatter Chart - Datetime"}),e.jsx("div",{dir:"ltr",children:e.jsx(d,{className:"apex-charts",options:m,height:380,series:m.series,type:"scatter"})})]})})]})]})});export{g as default};
