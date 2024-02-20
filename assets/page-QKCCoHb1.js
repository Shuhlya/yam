import{K as i,M as l,at as m,N as o,j as e,T as r,O as u,X as c}from"./index-FOTF8lnp.js";import{r as p,p as v,a as h,b as x,F as y}from"./filepond-plugin-image-preview-Rs-YY8_b.js";import{S as t}from"./SelectFormInput--qNqWLUa.js";import{P as d}from"./PasswordFormInput-EV8qaTwD.js";import{T as b}from"./TextAreaFormInput-pWbAbjQ1.js";import{B as g}from"./BreadcrumbAdmin-ygB8ZR-E.js";import"./setPrototypeOf-ahVgEFUp.js";import"./PageTitle-JdW5tM8x.js";p(v,h,x);const N=()=>{const s=i({fName:l().required("Please enter your first name"),lName:l().required("Please enter your last Name"),userName:l().required("Please enter your user Name"),email:l().email("Please enter a valid email").required("Please enter your email"),phoneNo:m().required("Please enter your Phone NO."),country:l().required("Please select your Country"),state:l().required("Please select your State/Province"),zipCode:l().required("Please select your ZIP/Postal code")}),{control:a,handleSubmit:n}=o({resolver:u(s)});return e.jsx("div",{className:"mb-6 rounded-lg border border-default-200 p-6",children:e.jsxs("div",{children:[e.jsx("h4",{className:"mb-4 text-xl font-medium text-default-900",children:"Personal Details"}),e.jsxs("div",{className:"grid gap-6 xl:grid-cols-5",children:[e.jsx("div",{className:"xl:col-span-1",children:e.jsx("div",{className:"mx-auto",children:e.jsx(y,{className:"mx-auto h-44 w-44 lg:h-48 lg:w-48 ",labelIdle:"Add Photo",imagePreviewHeight:110,imageCropAspectRatio:"1:1",stylePanelLayout:"compact circle",styleButtonRemoveItemPosition:"center bottom"})})}),e.jsx("div",{className:"xl:col-span-4",children:e.jsxs("form",{onSubmit:n(()=>{}),className:"grid gap-6 lg:grid-cols-2",children:[e.jsx(r,{name:"fName",label:"First Name",type:"text",placeholder:"Enter Your First Name",control:a,fullWidth:!0}),e.jsx(r,{name:"lName",label:"Last Name",type:"text",placeholder:"Enter Your Last Name",control:a,fullWidth:!0}),e.jsx(r,{name:"lName",label:"User Name",type:"text",placeholder:"Enter Your User Name",control:a,fullWidth:!0}),e.jsx(r,{name:"email",label:"Email",type:"email",placeholder:"demoexample@mail.com",control:a,fullWidth:!0}),e.jsx(r,{name:"phoneNo",label:"Phone Number",type:"text",placeholder:"+1-123-XXX-4567",control:a,fullWidth:!0}),e.jsx(t,{name:"country",label:"Country",control:a,id:"billing-country2",instanceId:"billing-country",options:[{value:"United States",label:"United States"},{value:"Canada",label:"Canada"},{value:"Australia",label:"Australia"},{value:"Germany",label:"Germany"},{value:"Bangladesh",label:"Bangladesh"},{value:"China",label:"China"},{value:"Argentina",label:"Argentina"},{value:"Bharat",label:"Bharat"},{value:"Afghanistan",label:"Afghanistan"},{value:"France",label:"France"},{value:"Brazil",label:"Brazil"},{value:"Belgium",label:"Belgium"},{value:"Colombia",label:"Colombia"},{value:"Albania",label:"Albania"}]}),e.jsx(t,{name:"state",label:"State/Province",control:a,id:"billing-state-province2",instanceId:"billing-state-province",options:[{value:"Alabama",label:"Alabama"},{value:"Alaska",label:"Alaska"},{value:"Arizona",label:"Arizona"},{value:"Arkansas",label:"Arkansas"},{value:"California",label:"California"},{value:"Colorado",label:"Colorado"},{value:"Connecticut",label:"Connecticut"},{value:"Delaware",label:"Delaware"},{value:"Florida",label:"Florida"},{value:"Gujarat",label:"Gujarat"},{value:"Iowa",label:"Iowa"},{value:"Kansas",label:"Kansas"},{value:"Kentucky",label:"Kentucky"}]}),e.jsx(t,{name:"zipCode",label:"ZIP/Postal Code",control:a,id:"billing-zip-code2",instanceId:"billing-zip-code",options:[{value:356123,label:"356123"},{value:350115,label:"350115"},{value:350125,label:"350125"},{value:350135,label:"350135"},{value:350145,label:"350145"}]}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500",children:"Save Changes"})})]})})]})]})})},C=()=>{const s=i({currentPassword:l().required("Please enter your current password"),newPassword:l().required("Please enter your new password"),confirmPassword:l().oneOf([c("newPassword"),""],"Passwords must match")}),{control:a,handleSubmit:n}=o({resolver:u(s)});return e.jsxs("form",{onSubmit:n(()=>{}),children:[e.jsx("h4",{className:"mb-4 text-xl font-medium text-default-900",children:"Change Password"}),e.jsx(d,{name:"currentPassword",label:"Current Password",containerClassName:"mb-4",placeholder:"Enter your password",control:a,fullWidth:!0}),e.jsx(d,{name:"newPassword",label:"New Password",containerClassName:"mb-4",placeholder:"Enter your new password",control:a,fullWidth:!0}),e.jsx(d,{name:"confirmPassword",label:"Confirm Password",containerClassName:"mb-4",placeholder:"Enter your confirm password",control:a,fullWidth:!0}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200  hover:bg-primary-500",children:"Save Changes"})})]})},A=()=>{const s=i({bfName:l().required("Please enter your first name"),blName:l().required("Please enter your last Name"),bcompanyName:l().optional(),baddress:l().required("Please enter your Address"),bcountry:l().required("Please select your Country"),bstate:l().required("Please select your State/Province"),bcity:l().required("Please select your City"),bzipCode:l().required("Please select your ZIP/Postal code"),bemail:l().email("Please enter a valid email").required("Please enter your email"),bphoneNo:m().required("Please enter your Phone NO.")}),{control:a,handleSubmit:n}=o({resolver:u(s)});return e.jsxs("form",{onSubmit:n(()=>{}),className:"rounded-lg border border-default-200 p-6",children:[e.jsx("h4",{className:"mb-6 text-xl font-medium text-default-900",children:"Billing Address"}),e.jsxs("div",{className:"grid gap-6 lg:grid-cols-2",children:[e.jsx(r,{name:"bfName",label:"First Name",type:"text",placeholder:"Enter Your First Name",control:a,fullWidth:!0}),e.jsx(r,{name:"blName",label:"Last Name",type:"text",placeholder:"Enter Your Last Name",control:a,fullWidth:!0}),e.jsx(r,{name:"bcompanyName",label:"Company Name (Optional)",type:"text",placeholder:"Enter Your Company Name",containerClassName:"lg:col-span-2",control:a,fullWidth:!0}),e.jsx(b,{name:"baddress",label:"Address",placeholder:"Road No. 47/x, House no. 123/B, Flat No. B4",containerClassName:"lg:col-span-2",control:a,fullWidth:!0}),e.jsx(t,{name:"bcountry",label:"Country/Region",control:a,id:"billing-country1",instanceId:"billing-country1",containerClassName:"lg:col-span-2",options:[{value:"United States",label:"United States"},{value:"Canada",label:"Canada"},{value:"Australia",label:"Australia"},{value:"Germany",label:"Germany"},{value:"Bangladesh",label:"Bangladesh"},{value:"China",label:"China"},{value:"Argentina",label:"Argentina"},{value:"Bharat",label:"Bharat"},{value:"Afghanistan",label:"Afghanistan"},{value:"France",label:"France"},{value:"Brazil",label:"Brazil"},{value:"Belgium",label:"Belgium"},{value:"Colombia",label:"Colombia"},{value:"Albania",label:"Albania"}]}),e.jsx(t,{name:"bstate",label:"State/Province",control:a,id:"billing-state-province1",containerClassName:"lg:col-span-2",instanceId:"billing-state-province1",options:[{value:"Alabama",label:"Alabama"},{value:"Alaska",label:"Alaska"},{value:"Arizona",label:"Arizona"},{value:"Arkansas",label:"Arkansas"},{value:"California",label:"California"},{value:"Colorado",label:"Colorado"},{value:"Connecticut",label:"Connecticut"},{value:"Delaware",label:"Delaware"},{value:"Florida",label:"Florida"},{value:"Gujarat",label:"Gujarat"},{value:"Iowa",label:"Iowa"},{value:"Kansas",label:"Kansas"},{value:"Kentucky",label:"Kentucky"}]}),e.jsx(t,{name:"bcity",label:"City",control:a,id:"billing-city1",instanceId:"billing-city1",options:[{value:"Alexander",label:"Alexander"},{value:"Andalusia",label:"Andalusia"},{value:"Anniston",label:"Anniston"},{value:"Athens",label:"Athens"},{value:"Atmore",label:"Atmore"},{value:"Auburn",label:"Auburn"},{value:"Chickasaw",label:"Chickasaw"},{value:"Clanton",label:"Clanton"},{value:"Demopolis",label:"Demopolis"},{value:"Guntersville",label:"Guntersville"},{value:"Huntsville",label:"Huntsville"},{value:"Jasper",label:"Jasper"},{value:"Marion",label:"Marion"}]}),e.jsx(t,{name:"bzipCode",label:"ZIP/Postal Code",control:a,id:"billing-zip-code1",instanceId:"billing-zip-code1",options:[{value:356123,label:"356123"},{value:350115,label:"350115"},{value:350125,label:"350125"},{value:350135,label:"350135"},{value:350145,label:"350145"}]}),e.jsx(r,{name:"bemail",label:"Email",type:"text",placeholder:"demoexample@mail.com",containerClassName:"lg:col-span-2",control:a,fullWidth:!0}),e.jsx(r,{name:"bphoneNo",label:"Phone Number",type:"text",placeholder:"+1-123-XXX-4567",containerClassName:"lg:col-span-2",control:a,fullWidth:!0}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:border-primary-700 hover:bg-primary-500",children:"Save Changes"})})]})]})},f=()=>{const s=i({sfName:l().required("Please enter your first name"),slName:l().required("Please enter your last Name"),scompanyName:l().optional(),saddress:l().required("Please enter your Address"),scountry:l().required("Please select your Country"),sstate:l().required("Please select your State/Province"),scity:l().required("Please select your City"),szipCode:l().required("Please select your ZIP/Postal code"),semail:l().email("Please enter a valid email").required("Please enter your email"),sphoneNo:m().required("Please enter your Phone NO.")}),{control:a,handleSubmit:n}=o({resolver:u(s)});return e.jsxs("form",{onSubmit:n(()=>{}),className:"rounded-lg border border-default-200 p-6",children:[e.jsx("h4",{className:"mb-6 text-xl font-medium text-default-900",children:"Shipping Address"}),e.jsxs("div",{className:"grid gap-6 lg:grid-cols-2",children:[e.jsx(r,{name:"sfName",label:"First Name",type:"text",placeholder:"Enter Your First Name",control:a,fullWidth:!0}),e.jsx(r,{name:"slName",label:"Last Name",type:"text",placeholder:"Enter Your Last Name",control:a,fullWidth:!0}),e.jsx(r,{name:"scompanyName",label:"Company Name (Optional)",type:"text",placeholder:"Enter Your Company Name",containerClassName:"lg:col-span-2",control:a,fullWidth:!0}),e.jsx(b,{name:"saddress",label:"Address",placeholder:"Road No. 47/x, House no. 123/B, Flat No. B4",containerClassName:"lg:col-span-2",control:a,fullWidth:!0}),e.jsx(t,{name:"scountry",label:"Country/Region",control:a,id:"billing-country3",instanceId:"billing-country",containerClassName:"lg:col-span-2",options:[{value:"United States",label:"United States"},{value:"Canada",label:"Canada"},{value:"Australia",label:"Australia"},{value:"Germany",label:"Germany"},{value:"Bangladesh",label:"Bangladesh"},{value:"China",label:"China"},{value:"Argentina",label:"Argentina"},{value:"Bharat",label:"Bharat"},{value:"Afghanistan",label:"Afghanistan"},{value:"France",label:"France"},{value:"Brazil",label:"Brazil"},{value:"Belgium",label:"Belgium"},{value:"Colombia",label:"Colombia"},{value:"Albania",label:"Albania"}]}),e.jsx(t,{name:"sstate",label:"State/Province",control:a,id:"billing-state-province3",containerClassName:"lg:col-span-2",instanceId:"billing-state-province",options:[{value:"Alabama",label:"Alabama"},{value:"Alaska",label:"Alaska"},{value:"Arizona",label:"Arizona"},{value:"Arkansas",label:"Arkansas"},{value:"California",label:"California"},{value:"Colorado",label:"Colorado"},{value:"Connecticut",label:"Connecticut"},{value:"Delaware",label:"Delaware"},{value:"Florida",label:"Florida"},{value:"Gujarat",label:"Gujarat"},{value:"Iowa",label:"Iowa"},{value:"Kansas",label:"Kansas"},{value:"Kentucky",label:"Kentucky"}]}),e.jsx(t,{name:"scity",label:"City",control:a,id:"billing-city3",instanceId:"billing-city",options:[{value:"Alexander",label:"Alexander"},{value:"Andalusia",label:"Andalusia"},{value:"Anniston",label:"Anniston"},{value:"Athens",label:"Athens"},{value:"Atmore",label:"Atmore"},{value:"Auburn",label:"Auburn"},{value:"Chickasaw",label:"Chickasaw"},{value:"Clanton",label:"Clanton"},{value:"Demopolis",label:"Demopolis"},{value:"Guntersville",label:"Guntersville"},{value:"Huntsville",label:"Huntsville"},{value:"Jasper",label:"Jasper"},{value:"Marion",label:"Marion"}]}),e.jsx(t,{name:"szipCode",label:"ZIP/Postal Code",control:a,id:"billing-zip-code3",instanceId:"billing-zip-code",options:[{value:356123,label:"356123"},{value:350115,label:"350115"},{value:350125,label:"350125"},{value:350135,label:"350135"},{value:350145,label:"350145"}]}),e.jsx(r,{name:"semail",label:"Email",type:"text",placeholder:"demoexample@mail.com",containerClassName:"lg:col-span-2",control:a,fullWidth:!0}),e.jsx(r,{name:"sphoneNo",label:"Phone Number",type:"text",placeholder:"+1-123-XXX-4567",containerClassName:"lg:col-span-2",control:a,fullWidth:!0}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:border-primary-700 hover:bg-primary-500",children:"Save Changes"})})]})]})},z=()=>e.jsx("div",{className:"w-full lg:ps-64",children:e.jsxs("div",{className:"page-content space-y-6 p-6",children:[e.jsx(g,{title:"Profile",subtitle:"Admin",link:"/admin/dashboard"}),e.jsx(N,{}),e.jsx("div",{className:"mb-6 rounded-lg border border-default-200 p-6",children:e.jsx(C,{})}),e.jsxs("div",{className:"grid gap-6 lg:grid-cols-2",children:[e.jsx(A,{}),e.jsx(f,{})]})]})});export{z as default};
