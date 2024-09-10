"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1510],{39745:(N,D,e)=>{e.d(D,{A:()=>h,u:()=>T});var r=e(32196),a=e(96540),y=e(97594),O=e(41987),E=e(13544),l=e(14110),S=e(32264),g=e(84167),c=e(88575),P=e(21594),v=e(60029),U=e(20333),A=e(15648),I=e(29678),x=e(55852),W=e(3911),C=e(59429),n=e(8484),f=e(74513),L=e(65615),R=e(2769);function _(){const o=f.Yj.map(t=>({value:t.code,label:t.name})).sort((t,m)=>t.value===f.wi?1:m.value===f.wi?-1:t.label.localeCompare(m.label));return[{value:"",label:(0,n.t)("common.locale.default","Default")},...o]}class T extends a.PureComponent{constructor(s){super(s),this.onSubmitForm=async t=>{if(t.preventDefault(),this.props.onConfirm?await this.props.onConfirm():!0){const{homeDashboardUID:K,theme:B,timezone:z,weekStart:p,language:M,queryHistory:b}=this.state;await this.service.update({homeDashboardUID:K,theme:B,timezone:z,weekStart:p,language:M,queryHistory:b}),window.location.reload()}},this.onThemeChanged=t=>{this.setState({theme:t.value}),t.value&&(0,R.K)(t.value,!0)},this.onTimeZoneChanged=t=>{typeof t=="string"&&this.setState({timezone:t})},this.onWeekStartChanged=t=>{this.setState({weekStart:t})},this.onHomeDashboardChanged=t=>{this.setState({homeDashboardUID:t})},this.onLanguageChanged=t=>{this.setState({language:t}),(0,l.rR)("grafana_preferences_language_changed",{toLanguage:t,preferenceType:this.props.preferenceType})},this.service=new L.W(s.resourceUri),this.state={theme:"",timezone:"",weekStart:"",language:"",queryHistory:{homeTab:""}},this.themeOptions=(0,y.k)(S.$.featureToggles.extraThemes).map(t=>({value:t.id,label:u(t)})),this.themeOptions.unshift({value:"",label:(0,n.t)("shared-preferences.theme.default-label","Default")})}async componentDidMount(){const s=await this.service.load();this.setState({homeDashboardUID:s.homeDashboardUID,theme:s.theme,timezone:s.timezone,weekStart:s.weekStart,language:s.language,queryHistory:s.queryHistory})}render(){const{theme:s,timezone:t,weekStart:m,homeDashboardUID:K,language:B}=this.state,{disabled:z}=this.props,p=i(),M=_(),b=this.themeOptions.find(d=>d.value===s)??this.themeOptions[0];return a.createElement("form",{onSubmit:this.onSubmitForm,className:p.form},a.createElement(g.n,{label:a.createElement(n.x6,{i18nKey:"shared-preferences.title"},"Preferences"),disabled:z},a.createElement(c.D,{label:(0,n.t)("shared-preferences.fields.theme-label","Interface theme")},a.createElement(P.l6,{options:this.themeOptions,value:b,onChange:this.onThemeChanged,inputId:"shared-preferences-theme-select"})),a.createElement(c.D,{label:a.createElement(v.J,{htmlFor:"home-dashboard-select"},a.createElement("span",{className:p.labelText},a.createElement(n.x6,{i18nKey:"shared-preferences.fields.home-dashboard-label"},"Home Dashboard"))),"data-testid":"User preferences home dashboard drop down"},a.createElement(C.b,{value:K,onChange:d=>this.onHomeDashboardChanged(d?.uid??""),defaultOptions:!0,isClearable:!0,placeholder:(0,n.t)("shared-preferences.fields.home-dashboard-placeholder","Default dashboard"),inputId:"home-dashboard-select"})),a.createElement(c.D,{label:(0,n.t)("shared-dashboard.fields.timezone-label","Timezone"),"data-testid":E.Tp.components.TimeZonePicker.containerV2},a.createElement(U.U,{includeInternal:!0,value:t,onChange:this.onTimeZoneChanged,inputId:"shared-preferences-timezone-picker"})),a.createElement(c.D,{label:(0,n.t)("shared-preferences.fields.week-start-label","Week start"),"data-testid":E.Tp.components.WeekStartPicker.containerV2},a.createElement(A.l,{value:m||"",onChange:this.onWeekStartChanged,inputId:"shared-preferences-week-start-picker"})),a.createElement(c.D,{label:a.createElement(v.J,{htmlFor:"locale-select"},a.createElement("span",{className:p.labelText},a.createElement(n.x6,{i18nKey:"shared-preferences.fields.locale-label"},"Language")),a.createElement(I.y,{featureState:O.Ay.beta})),"data-testid":"User preferences language drop down"},a.createElement(P.l6,{value:M.find(d=>d.value===B),onChange:d=>this.onLanguageChanged(d.value??""),options:M,placeholder:(0,n.t)("shared-preferences.fields.locale-placeholder","Choose language"),inputId:"locale-select"}))),a.createElement(x.$n,{type:"submit",variant:"primary","data-testid":E.Tp.components.UserProfile.preferencesSaveButton},a.createElement(n.x6,{i18nKey:"common.save"},"Save")))}}const h=T,i=(0,W.N)(()=>({labelText:(0,r.css)({marginRight:"6px"}),form:(0,r.css)({width:"100%",maxWidth:"600px"})}));function u(o){switch(o.id){case"dark":return(0,n.t)("shared.preferences.theme.dark-label","Dark");case"light":return(0,n.t)("shared.preferences.theme.light-label","Light");case"system":return(0,n.t)("shared.preferences.theme.system-label","System preference");default:return o.name}}},69047:(N,D,e)=>{e.r(D),e.d(D,{OrgDetailsPage:()=>f,default:()=>T});var r=e(96540),a=e(71468),y=e(67061),O=e(67608),E=e(39745),l=e(10096),S=e(17422),g=e(31678),c=e(28444),P=e(84167),v=e(88575),U=e(10354),A=e(55852),I=e(72235);const W=({onSubmit:h,orgName:i})=>{const u=l.contextSrv.hasPermission(g.AccessControlAction.OrgsWrite);return r.createElement(I.l,{defaultValues:{orgName:i},onSubmit:({orgName:o})=>h(o)},({register:o})=>r.createElement(P.n,{label:"Organization profile",disabled:!u},r.createElement(v.D,{label:"Organization name"},r.createElement(U.p,{id:"org-name-input",type:"text",...o("orgName",{required:!0})})),r.createElement(A.$n,{type:"submit"},"Update organization name")))};var C=e(32931),n=e(10943);class f extends r.PureComponent{constructor(){super(...arguments),this.onUpdateOrganization=i=>{this.props.setOrganizationName(i),this.props.updateOrganization()},this.handleConfirm=()=>new Promise(i=>{l.lE.publish(new c.bY({title:"Confirm preferences update",text:"This will update the preferences for the whole organization. Are you sure you want to update the preferences?",yesText:"Save",yesButtonVariant:"primary",onConfirm:async()=>i(!0),onDismiss:async()=>i(!1)}))})}async componentDidMount(){await this.props.loadOrganization()}render(){const{navModel:i,organization:u}=this.props,o=Object.keys(u).length===0,s=l.contextSrv.hasPermission(g.AccessControlAction.OrgsRead),t=l.contextSrv.hasPermission(g.AccessControlAction.OrgsPreferencesRead),m=l.contextSrv.hasPermission(g.AccessControlAction.OrgsPreferencesWrite);return r.createElement(O.Y,{navModel:i},r.createElement(O.Y.Contents,{isLoading:o},!o&&r.createElement(y.B,{direction:"column",gap:3},s&&r.createElement(W,{onSubmit:this.onUpdateOrganization,orgName:u.name}),t&&r.createElement(E.A,{resourceUri:"org",disabled:!m,preferenceType:"org",onConfirm:this.handleConfirm}))))}}function L(h){return{navModel:(0,S.tc)(h.navIndex,"org-settings"),organization:h.organization.organization}}const R={loadOrganization:C.YS,setOrganizationName:n.n,updateOrganization:C.L_},T=(0,a.connect)(L,R)(f)}}]);

//# sourceMappingURL=OrgDetailsPage.5bae0c036e6c86b869f8.js.map