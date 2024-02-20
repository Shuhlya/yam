import{K as m,M as l,at as d,N as c,j as e,T as t,a$ as b,aB as p,O as v}from"./index-FOTF8lnp.js";import{S as r}from"./SelectFormInput--qNqWLUa.js";import{T as x}from"./TextAreaFormInput-pWbAbjQ1.js";import{B as y}from"./BreadcrumbAdmin-ygB8ZR-E.js";import"./setPrototypeOf-ahVgEFUp.js";import"./PageTitle-JdW5tM8x.js";const h=()=>{const i=m({fname:l().required("Please enter your first name"),lname:l().required("Please enter your last name"),username:l().required("Please enter your user name"),email:l().email("Please enter a valid email").required("Please enter your email"),phoneNo:d().required("Please enter your Phone NO."),country:l().required("Please select your Country"),state:l().required("Please select your State/Province"),zipCode:l().required("Please select your ZIP/Postal code"),description:l().required("Please enter your description")}),n={fname:"Tiana",lname:"Geidt",username:"tianageidt",email:"tianageidt@mail.com",phoneNo:9876785457,description:"Hi, I'm Kaiya Botosh, it has been the industry's standard dummy text since the 1500s when an unknown printer took a galley of type.",country:"",state:"",zipCode:""},{control:a,handleSubmit:s,reset:o}=c({resolver:v(i),defaultValues:n}),u=()=>{o(n)};return e.jsx("div",{className:"rounded-lg border border-default-200",children:e.jsxs("form",{onSubmit:s(()=>{}),className:"p-6",children:[e.jsxs("div",{className:"mb-6 grid gap-6 lg:grid-cols-2",children:[e.jsx(t,{name:"fname",label:"First Name",type:"text",control:a,fullWidth:!0}),e.jsx(t,{name:"lname",label:"Last Name",type:"text",control:a,fullWidth:!0}),e.jsx(t,{name:"username",label:"User Name",type:"text",control:a,fullWidth:!0}),e.jsx(t,{name:"email",label:"Email",type:"email",control:a,fullWidth:!0}),e.jsx(t,{name:"phoneNo",label:"Phone Number",type:"text",control:a,fullWidth:!0}),e.jsx(r,{name:"country",label:"Country/Region",control:a,id:"billing-country1",instanceId:"billing-country",options:[{value:"United States",label:"United States"},{value:"Canada",label:"Canada"},{value:"Australia",label:"Australia"},{value:"Germany",label:"Germany"},{value:"Bangladesh",label:"Bangladesh"},{value:"China",label:"China"},{value:"Argentina",label:"Argentina"},{value:"Bharat",label:"Bharat"},{value:"Afghanistan",label:"Afghanistan"},{value:"France",label:"France"},{value:"Brazil",label:"Brazil"},{value:"Belgium",label:"Belgium"},{value:"Colombia",label:"Colombia"},{value:"Albania",label:"Albania"}]}),e.jsx(r,{name:"state",label:"State/Province",control:a,id:"billing-state-province1",instanceId:"billing-state-province",options:[{value:"Alabama",label:"Alabama"},{value:"Alaska",label:"Alaska"},{value:"Arizona",label:"Arizona"},{value:"Arkansas",label:"Arkansas"},{value:"California",label:"California"},{value:"Colorado",label:"Colorado"},{value:"Connecticut",label:"Connecticut"},{value:"Delaware",label:"Delaware"},{value:"Florida",label:"Florida"},{value:"Gujarat",label:"Gujarat"},{value:"Iowa",label:"Iowa"},{value:"Kansas",label:"Kansas"},{value:"Kentucky",label:"Kentucky"}]}),e.jsx(r,{name:"zipCode",label:"ZIP/Postal Code",control:a,id:"billing-zip-code1",instanceId:"billing-zip-code",options:[{value:356123,label:"356123"},{value:350115,label:"350115"},{value:350125,label:"350125"},{value:350135,label:"350135"},{value:350145,label:"350145"}]}),e.jsx(x,{name:"description",label:"Description",rows:5,containerClassName:"lg:col-span-2",control:a,fullWidth:!0})]}),e.jsxs("div",{className:"flex flex-wrap justify-end gap-4",children:[e.jsxs("button",{type:"reset",onClick:u,className:"inline-flex items-center gap-1 rounded-lg border border-primary bg-transparent px-5 py-2 text-center align-middle text-base font-semibold tracking-wide text-primary duration-500 hover:bg-primary hover:text-white",children:[e.jsx(b,{size:20}),"Cancel"]}),e.jsxs("button",{type:"submit",className:"flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500",children:[e.jsx(p,{size:20}),"Save"]})]})]})})},P=()=>e.jsx("div",{className:"w-full lg:ps-64",children:e.jsxs("div",{className:"page-content space-y-6 p-6",children:[e.jsx(y,{title:"Edit Customer",subtitle:"Customers",link:"/admin/customers"}),e.jsx(h,{})]})});export{P as default};
