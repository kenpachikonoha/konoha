"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1168],{72557:(W,T,t)=>{t.d(T,{A:()=>b});var e=t(96540),k=t(14186),d=t(67647),A=t(55852),x=t(73725);class b extends e.PureComponent{render(){const{searchQuery:L,linkButton:a,setSearchQuery:g,target:v,placeholder:C="Search by name or type",sortPicker:E}=this.props,p={href:a?.href,disabled:a?.disabled};return v&&(p.target=v),e.createElement("div",{className:"page-action-bar"},e.createElement(k.I,{grow:!0},e.createElement(d.Z,{value:L,onChange:g,placeholder:C})),E&&e.createElement(x.r,{onChange:E.onChange,value:E.value,getSortOptions:E.getSortOptions}),a&&e.createElement(A.z9,{...p},a.title))}}},44450:(W,T,t)=>{t.r(T),t.d(T,{PlaylistPage:()=>j,default:()=>ie});var e=t(96540),k=t(16817),d=t(55852),A=t(69529),x=t(72109),b=t(96374),B=t(67608),L=t(72557),a=t(8484),g=t(16233),v=t(32196),C=t(40845),E=t(72129),p=t(70255),f=t(10860),Q=t(71678),F=t(67061),Y=t(93030),I=t(76885),O=t(37390),U=t(84167),P=t(88575),$=t(94354),D=t(10880),H=t(10354),G=t(10534),J=t(22699);const X=({playlistUid:l,onDismiss:s})=>{const[o,i]=(0,e.useState)(!1),[r,u]=(0,e.useState)(!1),m=[{label:(0,a.t)("share-playlist.mode-normal","Normal"),value:!1},{label:(0,a.t)("share-playlist.mode-tv","TV"),value:"tv"},{label:(0,a.t)("share-playlist.mode-kiosk","Kiosk"),value:!0}],y={};o&&(y.kiosk=o),r&&(y.autofitpanels=!0);const h=I.kM.renderUrl(`${(0,J.P_)()}/play/${l}`,y);return e.createElement(O.a,{isOpen:!0,title:(0,a.t)("share-playlist.title","Share playlist"),onDismiss:s},e.createElement(U.n,null,e.createElement(P.D,{label:(0,a.t)("share-playlist.mode","Mode")},e.createElement($.z,{value:o,options:m,onChange:i})),e.createElement(P.D,null,e.createElement(D.S,{label:(0,a.t)("share-playlist.checkbox-label","Autofit"),description:(0,a.t)("share-playlist.checkbox-description","Panel heights will be adjusted to fit screen size"),name:"autofix",value:r,onChange:c=>u(c.currentTarget.checked)})),e.createElement(P.D,{label:(0,a.t)("share-playlist.link-url-label","Link URL")},e.createElement(H.p,{id:"link-url-input",value:h,readOnly:!0,addonAfter:e.createElement(G.b,{icon:"copy",variant:"primary",getText:()=>h},e.createElement(a.x6,{i18nKey:"share-playlist.copy-link-button"},"Copy"))}))))},w=({playlist:l,setStartPlaylist:s,setPlaylistToDelete:o})=>e.createElement(f.Z,null,e.createElement(f.Z.Heading,null,l.name,e.createElement(Q.$s,{key:"button-share"},({showModal:i,hideModal:r})=>e.createElement(Y._,{tooltip:(0,a.t)("playlist-page.card.tooltip","Share playlist"),icon:"share-alt",iconSize:"lg",onClick:()=>{i(X,{playlistUid:l.uid,onDismiss:r})}}))),e.createElement(f.Z.Actions,null,e.createElement(d.$n,{variant:"secondary",icon:"play",onClick:()=>s(l)},e.createElement(a.x6,{i18nKey:"playlist-page.card.start"},"Start playlist")),g.TP.isEditor&&e.createElement(e.Fragment,null,e.createElement(d.z9,{key:"edit",variant:"secondary",href:`/playlists/edit/${l.uid}`,icon:"cog"},e.createElement(a.x6,{i18nKey:"playlist-page.card.edit"},"Edit playlist")),e.createElement(d.$n,{disabled:!1,onClick:()=>o(l),icon:"trash-alt",variant:"destructive"},e.createElement(a.x6,{i18nKey:"playlist-page.card.delete"},"Delete playlist"))))),q=({rootProps:l})=>{const s=(0,C.of)(_);return e.createElement(f.Z,{...l},e.createElement(f.Z.Heading,null,e.createElement(p.A,{width:140})),e.createElement(f.Z.Actions,null,e.createElement(F.B,{direction:"row",wrap:"wrap"},e.createElement(p.A,{containerClassName:s.button,width:142,height:32}),g.TP.isEditor&&e.createElement(e.Fragment,null,e.createElement(p.A,{containerClassName:s.button,width:135,height:32}),e.createElement(p.A,{containerClassName:s.button,width:153,height:32})))))},M=(0,E.j)(w,q);function _(l){return{button:(0,v.css)({lineHeight:1})}}const ee=({playlists:l,setStartPlaylist:s,setPlaylistToDelete:o})=>{const i=(0,C.of)(V);return e.createElement("ul",{className:i.list},l.map(r=>e.createElement("li",{className:i.listItem,key:r.uid},e.createElement(M,{playlist:r,setStartPlaylist:s,setPlaylistToDelete:o}))))},te=({rootProps:l})=>{const s=(0,C.of)(V);return e.createElement("div",{"data-testid":"playlist-page-list-skeleton",className:s.list,...l},e.createElement(M.Skeleton,null),e.createElement(M.Skeleton,null),e.createElement(M.Skeleton,null))},R=(0,E.j)(ee,te);function V(l){return{list:(0,v.css)({display:"grid"}),listItem:(0,v.css)({listStyle:"none"})}}var ae=t(12131),le=t(32264),ne=t(90613);const se=({playlist:l,onDismiss:s})=>{const[o,i]=(0,e.useState)(!1),[r,u]=(0,e.useState)(!1),[m,y]=(0,e.useState)(!0),[h,c]=(0,e.useState)(!0),[S,K]=(0,e.useState)(!0),N=[{label:"Normal",value:!1},{label:"TV",value:"tv"},{label:"Kiosk",value:!0}],z=()=>{const n={};o&&(n.kiosk=o),r&&(n.autofitpanels=!0),m||(n["_dash.hideTimePicker"]=!0),h||(n["_dash.hideVariables"]=!0),S||(n["_dash.hideLinks"]=!0),ae.Ny.push(I.kM.renderUrl(`/playlists/play/${l.uid}`,n))};return e.createElement(O.a,{isOpen:!0,icon:"play",title:"Start playlist",onDismiss:s},e.createElement(U.n,null,e.createElement(P.D,{label:"Mode"},e.createElement($.z,{value:o,options:N,onChange:i})),e.createElement(P.D,null,e.createElement(D.S,{label:"Autofit",description:"Panel heights will be adjusted to fit screen size",name:"autofix",value:r,onChange:n=>u(n.currentTarget.checked)})),le.$.featureToggles.dashboardScene&&e.createElement(P.D,{label:"Display dashboard controls",description:"Customize dashboard elements visibility"},e.createElement(ne.a,{marginTop:2,marginBottom:2},e.createElement(F.B,{direction:"column",alignItems:"start",justifyContent:"left",gap:2},e.createElement(D.S,{label:"Time and refresh",name:"displayTimePicker",value:m,onChange:n=>y(n.currentTarget.checked)}),e.createElement(D.S,{label:"Variables",name:"displayVariableControls",value:h,onChange:n=>c(n.currentTarget.checked)}),e.createElement(D.S,{label:"Dashboard links",name:"displayLinks",value:S,onChange:n=>K(n.currentTarget.checked)}))))),e.createElement(O.a.ButtonRow,null,e.createElement(d.$n,{variant:"primary",onClick:z},"Start ",l.name)))};var Z=t(86022);const j=()=>{const l=(0,Z.NF)(),[s,o]=(0,e.useState)(0),[i,r]=(0,e.useState)(""),u=(0,k.A)(()=>l.getAllPlaylist(),[s]),m=(0,e.useMemo)(()=>(0,Z.GM)(u.value??[],i),[i,u]),[y,h]=(0,e.useState)(),[c,S]=(0,e.useState)(),K=m&&m.length>0,N=()=>S(void 0),z=()=>{c&&l.deletePlaylist(c.uid).finally(()=>{o(s+1),S(void 0)})},n=u.loading||m.length>0||i.length>0;return e.createElement(B.Y,{actions:g.TP.isEditor?e.createElement(d.z9,{href:"/playlists/new"},e.createElement(a.x6,{i18nKey:"playlist-page.create-button.title"},"New playlist")):void 0,navId:"dashboards/playlists"},e.createElement(B.Y.Contents,null,n&&e.createElement(L.A,{searchQuery:i,setSearchQuery:r}),u.loading?e.createElement(R.Skeleton,null):e.createElement(e.Fragment,null,!K&&i?e.createElement(A.p,{variant:"not-found",message:(0,a.t)("playlists.empty-state.message","No playlists found")}):e.createElement(R,{playlists:m,setStartPlaylist:h,setPlaylistToDelete:S}),!n&&e.createElement(A.p,{variant:"call-to-action",button:e.createElement(d.z9,{disabled:!g.TP.isEditor,href:"playlists/new",icon:"plus",size:"lg"},e.createElement(a.x6,{i18nKey:"playlist-page.empty.button"},"Create playlist")),message:(0,a.t)("playlist-page.empty.title","There are no playlists created yet")},e.createElement(a.x6,{i18nKey:"playlist-page.empty.pro-tip"},"You can use playlists to cycle dashboards on TVs without user control."," ",e.createElement(x.Y,{external:!0,href:"https://docs.grafana.org/reference/playlist/"},"Learn more"))),c&&e.createElement(b.u,{title:c.name,confirmText:(0,a.t)("playlist-page.delete-modal.confirm-text","Delete"),body:(0,a.t)("playlist-page.delete-modal.body","Are you sure you want to delete {{name}} playlist?",{name:c.name}),onConfirm:z,isOpen:!!c,onDismiss:N}),y&&e.createElement(se,{playlist:y,onDismiss:()=>h(void 0)}))))},ie=j}}]);

//# sourceMappingURL=PlaylistPage.711fd20044a9f1b97460.js.map