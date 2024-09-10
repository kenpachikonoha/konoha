"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7197],{15663:(ne,D,t)=>{t.r(D),t.d(D,{default:()=>te});var a=t(96540),z=t(32264),s=t(32196),v=t(64388),f=t(13544),m=t(40845),S=t(67061),A=t(14578),P=t(67608),k=t(39419),N=t(31771);const F=f.Tp.pages.PublicDashboard,T=function(){const e=(0,m.of)(R),n=(0,N.P)();return n.footerHide?null:a.createElement("div",{className:e.footer,"data-testid":F.footer},a.createElement("a",{className:e.link,href:n.footerLink,target:"_blank",rel:"noreferrer noopener"},n.footerText," ",a.createElement("img",{className:e.logoImg,alt:"",src:n.footerLogo})))},R=e=>({footer:(0,s.css)({display:"flex",justifyContent:"end",height:"30px",backgroundColor:e.colors.background.canvas,position:"sticky",bottom:0,zIndex:e.zIndex.navbarFixed,padding:e.spacing(.5,0)}),link:(0,s.css)({display:"flex",alignItems:"center"}),logoImg:(0,s.css)({height:"16px",marginLeft:e.spacing(.5)})});var y=t(19361),B=t(20851);const E=f.Tp.pages.PublicDashboard.NotAvailable,h=({paused:e})=>{const n=(0,m.of)(M),r=(0,m.of)(B.YO),c=y.M.LoginBoxBackground();return a.createElement(y.M.LoginBackground,{className:n.container,"data-testid":E.container},a.createElement("div",{className:(0,s.cx)(n.box,c)},a.createElement(y.M.LoginLogo,{className:r.loginLogo}),a.createElement("p",{className:n.title,"data-testid":E.title},e?"This dashboard has been paused by the administrator":"The dashboard your are trying to access does not exist"),e&&a.createElement("p",{className:n.description,"data-testid":E.pausedDescription},"Try again later")))},M=e=>({container:(0,s.css)({display:"flex",justifyContent:"center",alignItems:"center",height:"100%",":before":{opacity:1}}),box:(0,s.css)({width:"608px",display:"flex",alignItems:"center",flexDirection:"column",gap:e.spacing(4),zIndex:1,borderRadius:e.shape.borderRadius(4),padding:e.spacing(6,8),opacity:1}),title:(0,s.css)({fontSize:e.typography.h3.fontSize,textAlign:"center",margin:0}),description:(0,s.css)({fontSize:e.typography.h5.fontSize,margin:0})});var j=t(95425),U=t(72255);const C=f.Tp.pages.PublicDashboardScene;function Y({match:e,route:n}){const r=(0,U.sP)(),c=(0,m.of)(I),{dashboard:l,isLoading:d,loadError:i}=r.useState();return(0,a.useEffect)(()=>(r.loadDashboard({uid:e.params.accessToken,route:j.Z4.Public}),()=>{r.clearState()}),[r,e.params.accessToken,n.routeName]),l?l.state.meta.publicDashboardEnabled===!1?a.createElement(h,{paused:!0}):l.state.meta.dashboardNotFound?a.createElement(h,null):a.createElement(G,{model:l}):a.createElement(P.Y,{layout:v.k.Custom,className:c.loadingPage,"data-testid":C.loadingPage},d&&a.createElement(k.A,null),i&&a.createElement("h2",null,i))}function G({model:e}){const[n,r]=(0,a.useState)(!1),{controls:c,title:l}=e.useState(),{timePicker:d,refreshPicker:i,hideTimeControls:b}=c.useState(),g=e.getBodyToRender(),o=(0,m.of)(I);return(0,a.useEffect)(()=>(r(!0),e.activate()),[e]),n?a.createElement(P.Y,{layout:v.k.Custom,className:o.page,"data-testid":C.page},a.createElement("div",{className:o.controls},a.createElement(S.B,{alignItems:"center"},a.createElement("div",{className:o.iconTitle},a.createElement(A.I,{name:"grafana",size:"lg","aria-hidden":!0})),a.createElement("span",{className:o.title},l)),!b&&a.createElement(S.B,null,a.createElement(d.Component,{model:d}),a.createElement(i.Component,{model:i}))),a.createElement("div",{className:o.body},a.createElement(g.Component,{model:g})),a.createElement(T,null)):null}function I(e){return{loadingPage:(0,s.css)({justifyContent:"center"}),page:(0,s.css)({padding:e.spacing(0,2)}),controls:(0,s.css)({display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,zIndex:e.zIndex.navbarFixed,background:e.colors.background.canvas,padding:e.spacing(2,0),[e.breakpoints.down("sm")]:{flexDirection:"column",gap:e.spacing(1),alignItems:"stretch"}}),iconTitle:(0,s.css)({display:"none",[e.breakpoints.up("sm")]:{display:"flex",alignItems:"center"}}),title:(0,s.css)({overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"flex",fontSize:e.typography.h4.fontSize,margin:0}),body:(0,s.css)({label:"body",flex:1,overflowY:"auto"})}}var O=t(84596),H=t(95247),Z=t(76888),$=t(81862),x=t(31678),J=t(62367),K=t(82138),Q=t(9980),V=t(2118),L=t(74856),W=t(20470);const X=f.Tp.pages.PublicDashboard,w=({dashboard:e})=>{const n=(0,x.useDispatch)(),r=(0,N.P)(),c=l=>{n((0,$.Cj)(l))};return a.createElement(H.d,{title:e.title,pageIcon:r.headerLogoHide?void 0:"grafana",buttonOverflowAlignment:"right"},!e.timepicker.hidden&&a.createElement(J.$,{dashboard:e,onChangeTimeZone:c}))},q=e=>{const{match:n,route:r,location:c}=e,l=(0,x.useDispatch)(),d=(0,Z.Il)(),i=(0,O.A)(e),b=(0,m.of)(_),g=(0,x.useSelector)(u=>u.dashboard),o=g.getModel();return(0,a.useEffect)(()=>{l((0,W.vR)({routeName:r.routeName,fixUrl:!1,accessToken:n.params.accessToken,keybindingSrv:d.keybindings}))},[r.routeName,n.params.accessToken,d.keybindings,l]),(0,a.useEffect)(()=>{if(i?.location.search!==c.search){const u=i?.queryParams,p=e.queryParams;(p?.from!==u?.from||p?.to!==u?.to)&&!o?.timepicker.hidden&&(0,L.jG)().updateTimeRangeFromUrl(),!u?.refresh&&p?.refresh&&(0,L.jG)().setAutoRefresh(p.refresh)}},[i,c.search,e.queryParams,o?.timepicker.hidden,n.params.accessToken]),o?o.meta.publicDashboardEnabled===!1?a.createElement(h,{paused:!0}):o.meta.dashboardNotFound?a.createElement(h,null):a.createElement(P.Y,{pageNav:{text:o.title},layout:v.k.Custom,"data-testid":X.page},a.createElement(w,{dashboard:o}),g.initError&&a.createElement(K.y,{initError:g.initError}),a.createElement("div",{className:b.gridContainer},a.createElement(V.N,{dashboard:o,isEditable:!1,viewPanel:null,editPanel:null,hidePanelMenus:!0})),a.createElement("div",{className:b.footer},a.createElement(T,null))):a.createElement(Q.P,{initPhase:g.initPhase})},_=e=>({gridContainer:(0,s.css)({flex:1,padding:e.spacing(2,2,2,2),overflow:"auto"}),footer:(0,s.css)({padding:e.spacing(0,2)})}),ee=q;function ae(e){return z.$.featureToggles.publicDashboardsScene?a.createElement(Y,{...e}):a.createElement(ee,{...e})}const te=ae}}]);

//# sourceMappingURL=PublicDashboardPage.d3c27e8fc3a5f90c195b.js.map