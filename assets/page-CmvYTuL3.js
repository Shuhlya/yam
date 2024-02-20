import{j as e,K as d,M as r,X as u,at as t,N as m,T as l,O as o}from"./index-FOTF8lnp.js";import{P as n}from"./PasswordFormInput-EV8qaTwD.js";import{T as c}from"./TextAreaFormInput-pWbAbjQ1.js";import{B as b}from"./BreadcrumbAdmin-ygB8ZR-E.js";import"./PageTitle-JdW5tM8x.js";const p=()=>e.jsx("div",{className:"border border-default-200 rounded-lg",children:e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"font-medium text-base text-default-600",children:"Browser defaults - Normal"}),e.jsx("p",{className:"text-default-600",children:"Provide valuable, actionable feedback to your users with HTML5 form validation–available in all our supported browsers."}),e.jsx("div",{className:"pt-5",children:e.jsxs("form",{className:"space-y-5",onSubmit:s=>s.preventDefault(),children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"validationDefault01",className:"font-semibold mb-2",children:"First name"}),e.jsx("input",{type:"text",className:"block mt-2 w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50",id:"validationDefault01",defaultValue:"Mark",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"validationDefault02",className:"font-semibold mb-2",children:"Last name"}),e.jsx("input",{type:"text",className:"block mt-2 w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50",id:"validationDefault02",defaultValue:"Otto",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"validationDefaultUsername",className:"font-semibold mb-2",children:"Username"}),e.jsxs("div",{className:"flex items-end ",children:[e.jsx("span",{className:"h-[42px] w-[42px] flex items-center justify-center  btn bg-default-100 border border-default-200 rounded-s-lg ",id:"inputGroupPrepend2",children:"@"}),e.jsx("input",{type:"text",className:"block mt-2 w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50 border-s-0 rounded-s-none",id:"validationDefaultUsername",placeholder:"Username","aria-describedby":"inputGroupPrepend2",required:!0})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"validationDefault03",className:"font-semibold mb-2",children:"City"}),e.jsx("input",{type:"text",className:"block mt-2 w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50",id:"validationDefault03",placeholder:"City",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"validationDefault04",className:"font-semibold mb-2",children:"State"}),e.jsx("input",{type:"text",className:"block mt-2 w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50",id:"validationDefault04",placeholder:"State",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"validationDefault05",className:"font-semibold mb-2",children:"Zip"}),e.jsx("input",{type:"text",className:"block mt-2 w-full rounded-lg border border-default-200 bg-transparent px-4 py-2 dark:bg-default-50",id:"validationDefault05",placeholder:"Zip",required:!0})]}),e.jsx("div",{className:"lg:col-span-3",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{className:"form-checkbox rounded text-primary",type:"checkbox",defaultValue:"",id:"invalidCheck2",required:!0}),e.jsx("label",{className:"ms-1.5 font-semibold",htmlFor:"invalidCheck2",children:"Agree to terms and conditions"})]})}),e.jsx("div",{className:"lg:col-span-3",children:e.jsx("button",{className:"py-2 px-5 inline-block font-semibold rounded-lg bg-primary/90 text-white hover:bg-primary",type:"submit",children:"Submit form"})})]})})]})}),h=()=>{const s=d({textvalue:r().required("Please Type Something"),password:r().required("Please Enter Password"),re_password:r().oneOf([u("password")]).required("Please Enter Re-type Password"),email:r().email("Please enter valid email").required("Please Enter email"),url:r().required("Please Enter URL"),digits:t().required("Please Enter digits"),numbers:t().required("Please Enter numbers"),alphanumeric:r().required("Please Enter Alphanumeric"),textarea:r().required("Please Enter Text")}),{control:a,handleSubmit:i}=m({resolver:o(s)});return e.jsx("div",{className:"border border-default-200 rounded-lg",children:e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"font-medium text-base text-default-600",children:"Validation type"}),e.jsx("p",{className:"text-default-600",children:"Provide valuable, actionable feedback to your users with HTML5 form validation–available in all our supported browsers."}),e.jsx("div",{className:"pt-5",children:e.jsxs("form",{className:"space-y-5",onSubmit:i(()=>null),children:[e.jsx("div",{className:"form-group",children:e.jsx(l,{name:"textvalue",control:a,className:"form-input",label:"Required",placeholder:"Type Something",labelClassName:"font-semibold mb-2",fullWidth:!0})}),e.jsxs("div",{className:"form-group",children:[e.jsx(n,{name:"password",control:a,className:"form-input",label:"Equal To",placeholder:"Password",labelClassName:"font-semibold mb-2",fullWidth:!0}),e.jsx(n,{name:"re_password",control:a,className:"form-input",containerClassName:"mt-2",placeholder:"Re-Type Password",fullWidth:!0})]}),e.jsx("div",{className:"form-group",children:e.jsx(l,{name:"email",control:a,className:"form-input",label:"E-Mail",placeholder:"Enter a vaild e-mail",labelClassName:"font-semibold mb-2",fullWidth:!0})}),e.jsx("div",{className:"form-group",children:e.jsx(l,{name:"url",control:a,className:"form-input",label:"URL",placeholder:"URL",labelClassName:"font-semibold mb-2",fullWidth:!0})}),e.jsx("div",{className:"form-group",children:e.jsx(l,{name:"digits",control:a,className:"form-input",label:"Digits",placeholder:"Enter only digits",labelClassName:"font-semibold mb-2",fullWidth:!0})}),e.jsx("div",{className:"form-group",children:e.jsx(l,{name:"numbers",control:a,className:"form-input",label:"Numbers",placeholder:"Enter only numbers",labelClassName:"font-semibold mb-2",fullWidth:!0})}),e.jsx("div",{className:"form-group",children:e.jsx(l,{name:"alphanumeric",control:a,className:"form-input",label:"Alphanumeric",placeholder:"Type Something",labelClassName:"font-semibold mb-2",fullWidth:!0})}),e.jsx("div",{className:"form-group",children:e.jsx(c,{name:"textarea",control:a,className:"form-input",label:"Textarea",labelClassName:"font-semibold mb-2",fullWidth:!0})}),e.jsxs("div",{className:"lg:col-span-3 flex items-center gap-2",children:[e.jsx("button",{className:"py-2 px-5 inline-block font-semibold rounded-lg bg-primary/90 text-white hover:bg-primary",type:"submit",children:"Submit"}),e.jsx("button",{className:"py-2 px-5 inline-block font-semibold rounded-lg bg-secondary/90 text-white hover:bg-secondary",type:"submit",children:"Cancel"})]})]})})]})})},x=()=>{const s=d({minlength:r().min(6,"Please Enter Minimum 6 characters").required("Please Enter characters"),maxlength:r().max(6,"Please Enter Maximum 6 characters").required("Please Enter characters"),rangelength:r().min(5,"Please Enter Minimum 5 characters").max(10,"Please Enter Maximum 10 characters").required("Please Enter characters"),minvalue:t().min(6,"Please Enter Minimum 6 numbers").required("Please Enter numbers"),rangevalue:t().min(6,"Please Enter Maximun 6 numbers value").max(100,"Please Enter Maximum 100 numbers value").required("Please Enter numbers"),regularvalue:r().length(6,"Please Enter 6 length value").required("Please Enter color value")}),{control:a,handleSubmit:i}=m({resolver:o(s)});return e.jsx("div",{className:"border border-default-200 rounded-lg",children:e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"font-medium text-base text-default-600",children:"Range validation"}),e.jsx("p",{className:"text-default-600",children:"Provide valuable, actionable feedback to your users with HTML5 form validation–available in all our supported browsers."}),e.jsx("div",{className:"pt-5",children:e.jsxs("form",{className:"space-y-5",onSubmit:i(()=>null),children:[e.jsx("div",{className:"form-group",children:e.jsx(l,{name:"minlength",control:a,className:"form-input",label:"Min Length",placeholder:"Min 6 characters",labelClassName:"font-semibold mb-2",fullWidth:!0})}),e.jsx("div",{className:"form-group",children:e.jsx(l,{name:"maxlength",control:a,className:"form-input",label:"Max Length",placeholder:"Max 6 characters",labelClassName:"font-semibold mb-2",fullWidth:!0})}),e.jsx("div",{className:"form-group",children:e.jsx(l,{name:"rangelength",control:a,className:"form-input",label:"Range Length",placeholder:"Text between 5 - 10 chars length",labelClassName:"font-semibold mb-2",fullWidth:!0})}),e.jsx("div",{className:"form-group",children:e.jsx(l,{name:"minvalue",control:a,className:"form-input",label:"Min Value",placeholder:"Min value is 6",labelClassName:"font-semibold mb-2",fullWidth:!0})}),e.jsx("div",{className:"form-group",children:e.jsx(l,{name:"rangevalue",control:a,className:"form-input",label:"Range Value",placeholder:"Number between 6 - 100",labelClassName:"font-semibold mb-2",fullWidth:!0})}),e.jsx("div",{className:"form-group",children:e.jsx(l,{name:"regularvalue",control:a,className:"form-input",label:"Regular Exp",placeholder:"Hex. Color",labelClassName:"font-semibold mb-2",fullWidth:!0})}),e.jsxs("div",{className:"lg:col-span-3 flex items-center gap-2",children:[e.jsx("button",{className:"py-2 px-5 inline-block font-semibold rounded-lg bg-primary/90 text-white hover:bg-primary",type:"submit",children:"Submit"}),e.jsx("button",{className:"py-2 px-5 inline-block font-semibold rounded-lg bg-secondary/90 text-white hover:bg-secondary",type:"submit",children:"Cancel"})]})]})})]})})},y=()=>e.jsx("div",{className:"w-full lg:ps-64",children:e.jsxs("div",{className:"page-content space-y-6 p-6",children:[e.jsx(b,{title:"Validation",subtitle:"Forms"}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-5",children:[e.jsx(p,{}),e.jsx(x,{}),e.jsx(h,{})]})]})});export{y as default};
