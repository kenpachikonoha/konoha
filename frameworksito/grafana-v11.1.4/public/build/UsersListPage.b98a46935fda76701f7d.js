"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9856],{69546:(ae,C,n)=>{n.d(C,{b:()=>X});var e=n(96540),y=n(13544),Q=n(12942),L=n(94753),u=n(90613),$=n(56034),z=n(14578),M=n(78369),p=n(55852),x=n(67061),N=n(48840),F=n(19384),G=n(96374),j=n(89062),Y=n(85927),H=n(46334),g=n(10096),B=n(31678),J=n(5133);const Z=`This user's role is not editable because it is synchronized from your auth provider.
Refer to the Grafana authentication docs for details.`,S=v=>{const c=v?.isExternallySynced;return!g.contextSrv.hasPermissionInMetadata(B.AccessControlAction.OrgUsersWrite,v)||c},V=y.Tp.pages.UserListPage.UsersListPage,X=({users:v,orgId:c,onRoleChange:h,onRemoveUser:_,fetchData:P,changePage:w,page:l,totalPages:m,rolesLoading:W})=>{const[f,O]=(0,e.useState)(null),[K,k]=(0,e.useState)([]);(0,e.useEffect)(()=>{async function r(){try{if(g.contextSrv.hasPermission(B.AccessControlAction.ActionRolesList)){let o=await(0,Y.RL)(c);k(o)}}catch{console.error("Error loading options")}}g.contextSrv.licensedAccessControlEnabled()&&r()},[c]);const q=(0,e.useMemo)(()=>[{id:"avatarUrl",header:"",cell:({cell:{value:r}})=>r&&e.createElement(Q.e,{src:r,alt:"User avatar"})},{id:"login",header:"Login",cell:({cell:{value:r}})=>e.createElement("div",null,r),sortType:"string"},{id:"email",header:"Email",cell:({cell:{value:r}})=>r,sortType:"string"},{id:"name",header:"Name",cell:({cell:{value:r}})=>r,sortType:"string"},{id:"lastSeenAtAge",header:"Last active",cell:({cell:{value:r}})=>e.createElement(e.Fragment,null,r&&e.createElement(e.Fragment,null,r==="10 years"?e.createElement(L.E,{color:"disabled"},"Never"):r)),sortType:(r,o)=>new Date(r.original.lastSeenAt).getTime()-new Date(o.original.lastSeenAt).getTime()},{id:"role",header:"Role",cell:({cell:{value:r},row:{original:o}})=>{const b=S(o);return g.contextSrv.licensedAccessControlEnabled()?e.createElement(j.y,{userId:o.userId,roles:o.roles||[],isLoading:W,orgId:c,roleOptions:K,basicRole:r,onBasicRoleChange:R=>h(R,o),basicRoleDisabled:b,basicRoleDisabledMessage:Z,width:40}):e.createElement(J.r,{"aria-label":"Role",value:r,disabled:b,onChange:R=>h(R,o)})}},{id:"info",header:"",cell:({row:{original:r}})=>S(r)&&e.createElement(u.a,{display:"flex",alignItems:"center",marginLeft:1},e.createElement($.m,{interactive:!0,content:e.createElement("div",null,"This user's role is not editable because it is synchronized from your auth provider. Refer to the\xA0",e.createElement("a",{href:"https://grafana.com/docs/grafana/latest/administration/user-management/manage-org-users/#change-a-users-organization-permissions",rel:"noreferrer",target:"_blank"},"Grafana authentication docs"),"\xA0for details.")},e.createElement(z.I,{name:"question-circle"})))},{id:"authLabels",header:"Origin",cell:({cell:{value:r}})=>e.createElement(e.Fragment,null,Array.isArray(r)&&r.length>0&&e.createElement(H.E,{label:r[0],removeIcon:!1,count:0}))},{id:"isDisabled",header:"",cell:({cell:{value:r}})=>e.createElement(e.Fragment,null,r&&e.createElement(M.v,{colorIndex:9,name:"Disabled"}))},{id:"delete",header:"",cell:({row:{original:r}})=>g.contextSrv.hasPermissionInMetadata(B.AccessControlAction.OrgUsersRemove,r)&&e.createElement(p.$n,{size:"sm",variant:"destructive",onClick:()=>{O(r)},icon:"times","aria-label":`Delete user ${r.name}`})}],[W,c,K,h]);return e.createElement(x.B,{direction:"column",gap:2,"data-testid":V.container},e.createElement(N.j,{columns:q,data:v,getRowId:r=>String(r.userId),fetchData:P}),e.createElement(x.B,{justifyContent:"flex-end"},e.createElement(F.d,{onNavigate:w,currentPage:l,numberOfPages:m,hideWhenSinglePage:!0})),!!f&&e.createElement(G.u,{body:`Are you sure you want to delete user ${f?.login}?`,confirmText:"Delete",title:"Delete",onDismiss:()=>{O(null)},isOpen:!0,onConfirm:()=>{f&&(_(f),O(null))}}))}},31083:(ae,C,n)=>{n.r(C),n.d(C,{UsersListPageContent:()=>re,UsersListPageUnconnected:()=>ne,default:()=>de});var e=n(96540),y=n(71468),Q=n(36663),L=n(67608),u=n(10096),$=n(69546),z=n(10534),M=n(55852),p=n(47259);const x={revokeInvite:p.eb},N=(0,y.connect)(null,x);class F extends e.PureComponent{render(){const{invitee:s,revokeInvite:a}=this.props;return e.createElement("tr",null,e.createElement("td",null,s.email),e.createElement("td",null,s.name),e.createElement("td",{className:"text-right"},e.createElement(z.b,{icon:"copy",variant:"secondary",size:"sm",getText:()=>s.url},"Copy Invite"),"\xA0"),e.createElement("td",null,e.createElement(M.$n,{variant:"destructive",size:"sm",icon:"times",onClick:()=>a(s.code),"aria-label":"Revoke Invite"})))}}const G=N(F);class j extends e.PureComponent{render(){const{invitees:s}=this.props;return e.createElement("table",{className:"filter-table form-inline"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Email"),e.createElement("th",null,"Name"),e.createElement("th",null),e.createElement("th",{style:{width:"34px"}}))),e.createElement("tbody",{"data-testid":"InviteesTable-body"},s.map((a,i)=>e.createElement(G,{key:`${a.id}-${i}`,invitee:a}))))}}var Y=n(25508),H=n(40823);const{selectAll:g,selectById:B,selectTotal:J}=H.Tp,Z=(t,s)=>s,S=(0,Y.Mz)([g,Z],(t,s)=>{const a=new RegExp(s,"i");return t.filter(d=>a.test(d.name)||a.test(d.email))});var V=n(14186),X=n(67647),v=n(94354),c=n(2913),h=n(31678),_=n(2543),P=n(17172),w=n(80714),l=n(87617);function m(){return async(t,s)=>{try{t((0,l.Cj)());const{perPage:a,page:i,searchQuery:d,sort:U}=s().users,E=await(0,P.AI)().get("/api/org/users/search",(0,w.F)({perpage:a,page:i,query:d,sort:U}));if(u.contextSrv.licensedAccessControlEnabled()&&u.contextSrv.hasPermission(h.AccessControlAction.ActionUserRolesList)){t((0,l.dJ)());const I=u.contextSrv.user.orgId,T=E?.orgUsers.map(D=>D.userId),A=await(0,P.AI)().post("/api/access-control/users/roles/search",{userIds:T,orgId:I});E.orgUsers.forEach(D=>{D.roles=A?A[D.userId]||[]:[]}),t((0,l.jE)())}t((0,l.Y_)(E))}catch{(0,l.g4)()}}}const W=(0,_.debounce)(t=>t(m()),300);function f(t){return async s=>{await(0,P.AI)().patch(`/api/org/users/${t.userId}`,{role:t.role}),s(m())}}function O(t){return async s=>{await(0,P.AI)().delete(`/api/org/users/${t}`),s(m())}}function K(t){return async s=>{s((0,l.EC)(t)),s(m())}}function k({sortBy:t}){const s=t.length?`${t[0].id}-${t[0].desc?"desc":"asc"}`:void 0;return async a=>{a((0,l.$u)(s)),a(m())}}function q(t){return async s=>{s((0,l.t_)(t)),W(s)}}const r=t=>{const s=new RegExp(t.searchQuery,"i");return t.users.filter(a=>s.test(a.login)||s.test(a.email)||s.test(a.name))},o=t=>t.searchQuery;function b(t){return{searchQuery:o(t.users),pendingInvitesCount:J(t.invites),externalUserMngLinkName:t.users.externalUserMngLinkName,externalUserMngLinkUrl:t.users.externalUserMngLinkUrl}}const R={changeSearchQuery:q},oe=(0,y.connect)(b,R)(({externalUserMngLinkName:t,externalUserMngLinkUrl:s,searchQuery:a,pendingInvitesCount:i,changeSearchQuery:d,onShowInvites:U,showInvites:E})=>{const I=[{label:"Users",value:"users"},{label:`Pending Invites (${i})`,value:"invites"}],A=u.contextSrv.hasPermission(h.AccessControlAction.OrgUsersAdd)&&!(c.Ay.disableLoginForm&&c.Ay.externalUserMngInfo);return e.createElement("div",{className:"page-action-bar","data-testid":"users-action-bar"},e.createElement(V.I,{grow:!0},e.createElement(X.Z,{value:a,onChange:d,placeholder:"Search user by login, email or name"})),i>0&&e.createElement("div",{style:{marginLeft:"1rem"}},e.createElement(v.z,{value:E?"invites":"users",options:I,onChange:U})),A&&e.createElement(M.z9,{href:"org/users/invite"},"Invite"),s&&e.createElement(M.z9,{href:s,target:"_blank",rel:"noopener"},t))});function le(t){const s=o(t.users);return{users:r(t.users),searchQuery:o(t.users),page:t.users.page,totalPages:t.users.totalPages,perPage:t.users.perPage,invitees:S(t.invites,s),externalUserMngInfo:t.users.externalUserMngInfo,isLoading:t.users.isLoading,rolesLoading:t.users.rolesLoading}}const ce={loadUsers:m,fetchInvitees:p.G7,changePage:K,changeSort:k,updateUser:f,removeUser:O},ie=(0,y.connect)(le,ce),ne=({users:t,page:s,totalPages:a,invitees:i,externalUserMngInfo:d,isLoading:U,rolesLoading:E,loadUsers:I,fetchInvitees:T,changePage:A,updateUser:D,removeUser:me,changeSort:ue})=>{const[ee,ge]=(0,e.useState)(!1),se=d?(0,Q.G)(d):"";(0,e.useEffect)(()=>{I(),T()},[T,I]);const Ee=(te,fe)=>{D({...fe,role:te})},ve=te=>me(te.userId),he=()=>{ge(!ee)},Pe=()=>ee?e.createElement(j,{invitees:i}):e.createElement($.b,{users:t,orgId:u.contextSrv.user.orgId,rolesLoading:E,onRoleChange:Ee,onRemoveUser:ve,fetchData:ue,changePage:A,page:s,totalPages:a});return e.createElement(L.Y.Contents,{isLoading:!U},e.createElement(oe,{onShowInvites:he,showInvites:ee}),se&&e.createElement("div",{className:"grafana-info-box",dangerouslySetInnerHTML:{__html:se}}),U&&Pe())},re=ie(ne);function de(){return e.createElement(L.Y,{navId:"users"},e.createElement(re,null))}}}]);

//# sourceMappingURL=UsersListPage.b98a46935fda76701f7d.js.map