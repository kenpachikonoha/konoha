"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8576],{14383:(U,s,n)=>{n.r(s),n.d(s,{SignupInvitedPage:()=>E,default:()=>D});var e=n(96540),d=n(16817),o=n(17172),l=n(88575),i=n(10354),u=n(55852),_=n(72235),r=n(67608),p=n(2913),g=n(10096),v=n(35538);const P={main:{icon:"grafana",text:"Invite",subTitle:"Register your Grafana account",breadcrumbs:[{title:"Login",url:"login"}]},node:{text:""}},E=({match:M})=>{const m=M.params.code,[c,O]=(0,e.useState)(),[h,I]=(0,e.useState)(),[f,A]=(0,e.useState)();(0,d.A)(async()=>{const a=await(0,o.AI)().get(`/api/user/invite/${m}`);O({email:a.email,name:a.name,username:a.email}),I(a.name||a.email||a.username),A(a.invitedBy)},[m]);const C=async a=>{await(0,o.AI)().post("/api/user/invite/complete",{...a,inviteCode:m}),window.location.href=(0,p.zj)().appSubUrl+"/"};return c?e.createElement(r.Y,{navModel:P},e.createElement(r.Y.Contents,null,e.createElement("h3",{className:"page-sub-heading"},"Hello ",h||"there","."),e.createElement("div",{className:"modal-tagline p-b-2"},e.createElement("em",null,f||"Someone")," has invited you to join Grafana and the organization"," ",e.createElement("span",{className:"highlight-word"},g.contextSrv.user.orgName),e.createElement("br",null),"Please complete the following and choose a password to accept your invitation and continue:"),e.createElement(_.l,{defaultValues:c,onSubmit:C},({register:a,errors:t})=>e.createElement(e.Fragment,null,e.createElement(l.D,{invalid:!!t.email,error:t.email&&t.email.message,label:"Email"},e.createElement(i.p,{placeholder:"email@example.com",...a("email",{required:"Email is required",pattern:{value:v.pL,message:"Email is invalid"}})})),e.createElement(l.D,{invalid:!!t.name,error:t.name&&t.name.message,label:"Name"},e.createElement(i.p,{placeholder:"Name (optional)",...a("name")})),e.createElement(l.D,{invalid:!!t.username,error:t.username&&t.username.message,label:"Username"},e.createElement(i.p,{...a("username",{required:"Username is required"}),placeholder:"Username"})),e.createElement(l.D,{invalid:!!t.password,error:t.password&&t.password.message,label:"Password"},e.createElement(i.p,{...a("password",{required:"Password is required"}),type:"password",placeholder:"Password"})),e.createElement(u.$n,{type:"submit"},"Sign up"))))):null},D=E}}]);

//# sourceMappingURL=SignupInvited.3fcbaf3f9cff31e5ffa2.js.map