(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{3742:function(e,t,r){Promise.resolve().then(r.bind(r,6482)),Promise.resolve().then(r.t.bind(r,5250,23))},6482:function(e,t,r){"use strict";r.r(t),r.d(t,{SignInForm:function(){return u}});var s=r(7437),n=r(6332),l=r(5407),a=r(1396),i=r.n(a),c=r(2265);let o=(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsxs)("label",{className:"flex items-center",children:[(0,s.jsx)("input",{name:"keep-signed-in",type:"checkbox",className:"form-checkbox"}),(0,s.jsx)("span",{className:"text-gray-400 ml-2",children:"Keep me signed in"})]}),(0,s.jsx)(i(),{href:"/reset-password",className:"text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out",children:"Forgot Password?"})]}),u=()=>{let e=(0,l.Lu)(),[t,r]=(0,c.useState)(null),a=async t=>{t.preventDefault();let r=Object.fromEntries(new FormData(t.currentTarget).entries());console.log(r);let s=r.email,n=r.password;r["keep-signed-in"];let l=s.toString(),a=n.toString();try{await e.loginMemberEmailPassword({email:l,password:a}).then(e=>{console.log(e)})}catch(e){console.log(e)}};return(0,s.jsxs)(n.l0,{onSubmit:a,children:[(0,s.jsx)(n.p7,{children:(0,s.jsx)(n.sp,{id:"email",label:"Work Email",placeholder:"you@yourcompany.com",type:"email",required:!0})}),(0,s.jsx)(n.p7,{children:(0,s.jsx)(n.sp,{id:"password",label:"Password",placeholder:"Password (at least 10 characters)",type:"password",required:!0})}),(0,s.jsx)(n.p7,{children:t&&(0,s.jsx)("p",{className:"text-red-500 text-md mt-2",children:t})}),(0,s.jsx)(n.p7,{children:o}),(0,s.jsx)(n.p7,{children:(0,s.jsx)(n.OL,{buttonText:"Sign In"})})]})}},6332:function(e,t,r){"use strict";r.d(t,{dk:function(){return i},l0:function(){return n},OL:function(){return c},p7:function(){return l},sp:function(){return a}});var s=r(7437),n=e=>{let{children:t,...r}=e;return(0,s.jsx)("form",{...r,children:t})},l=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:"flex flex-wrap -mx-3 mb-4",children:(0,s.jsx)("div",{className:"w-full px-3",children:t})})},a=e=>{let{id:t,label:r,placeholder:n,type:l,required:a}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("label",{className:"block text-gray-300 text-sm font-medium mb-1",htmlFor:t,children:[r,a&&(0,s.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,s.jsx)("input",{id:t,name:t,type:l,className:"form-input w-full text-gray-300",placeholder:n,required:a})]})};r(2265);var i=e=>{let{content:t}=e;return(0,s.jsx)("div",{className:"text-sm text-gray-500 text-center",children:t})},c=e=>{let{buttonText:t,onClick:r}=e;return(0,s.jsx)("button",{className:"btn text-white bg-purple-600 hover:bg-purple-700 w-full",onClick:r,children:t})}},1396:function(e,t,r){e.exports=r(5250)}},function(e){e.O(0,[91,250,961,971,938,744],function(){return e(e.s=3742)}),_N_E=e.O()}]);