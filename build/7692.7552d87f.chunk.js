(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[7692],{76539:(M,p,e)=>{"use strict";e.d(p,{Z:()=>s});var t=e(67294),o=e(86896),n=e(45697),a=e.n(n),E=e(87631),r=e(85018),T=e(67109),f=e(53979),c=e(11047),P=e(29728),v=e(30815),A=e(95428);const l=({onRegenerate:y,idToRegenerate:R,backUrl:U,onError:b})=>{const{formatMessage:Z}=(0,o.Z)(),[D,N]=(0,t.useState)(!1),{regenerateData:S,isLoadingConfirmation:H}=(0,A.rW)(U,R,y,b),W=async()=>{S(),N(!1)};return t.createElement(t.Fragment,null,t.createElement(P.z,{startIcon:t.createElement(v.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>N(!0),name:"regenerate"},Z({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(E.QH,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(v.Z,null),isConfirmButtonLoading:H,isOpen:D,onToggleDialog:()=>N(!1),onConfirm:W,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};l.defaultProps={onRegenerate(){},onError:void 0},l.propTypes={onRegenerate:a().func,idToRegenerate:a().oneOfType([a().number,a().string]).isRequired,backUrl:a().string.isRequired,onError:a().func};const i=l,u=({title:y,token:R,setToken:U,canEditInputs:b,canRegenerate:Z,isSubmitting:D,backUrl:N,regenerateUrl:S,onErrorRegenerate:H})=>{const{formatMessage:W}=(0,o.Z)(),Y=Q=>{U({...R,accessKey:Q})};return t.createElement(f.T,{title:R?.name||W(y),primaryAction:b?t.createElement(c.k,{gap:2},Z&&R?.id&&t.createElement(i,{backUrl:S,onRegenerate:Y,idToRegenerate:R?.id,onError:H}),t.createElement(P.z,{disabled:D,loading:D,startIcon:t.createElement(r.Z,null),type:"submit",size:"S"},W({id:"global.save",defaultMessage:"Save"}))):Z&&R?.id&&t.createElement(i,{onRegenerate:Y,idToRegenerate:R?.id,backUrl:S}),navigationAction:t.createElement(E.rU,{startIcon:t.createElement(T.Z,null),to:N},W({id:"global.back",defaultMessage:"Back"})),ellipsis:!0})};u.propTypes={token:a().shape({id:a().oneOfType([a().number,a().string]),type:a().string,lifespan:a().oneOfType([a().number,a().string]),name:a().string,accessKey:a().string,permissions:a().array,description:a().string,createdAt:a().string}),canEditInputs:a().bool.isRequired,canRegenerate:a().bool.isRequired,setToken:a().func.isRequired,isSubmitting:a().bool.isRequired,backUrl:a().string.isRequired,title:a().shape({id:a().string,label:a().string}).isRequired,regenerateUrl:a().string.isRequired,onErrorRegenerate:a().func},u.defaultProps={token:void 0,onErrorRegenerate:void 0};const s=u},60401:(M,p,e)=>{"use strict";e.d(p,{Z:()=>P});var t=e(67294),o=e(45697),n=e.n(o),a=e(86896),E=e(40619),r=e(82562),T=e(75515),f=e(75056);const c=({token:v,errors:A,values:l,onChange:i,isCreating:u})=>{const{formatMessage:s}=(0,a.Z)();return t.createElement(t.Fragment,null,t.createElement(E.P,{name:"lifespan",label:s({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:l.lifespan!==null?l.lifespan:"0",error:A.lifespan?s(A.lifespan?.id?A.lifespan:{id:A.lifespan,defaultMessage:A.lifespan}):null,onChange:y=>{i({target:{name:"lifespan",value:y}})},required:!0,disabled:!u,placeholder:"Select"},t.createElement(r.W,{value:"604800000"},s({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(r.W,{value:"2592000000"},s({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(r.W,{value:"7776000000"},s({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(r.W,{value:"0"},s({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(T.Z,{variant:"pi",textColor:"neutral600"},!u&&`${s({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,f.IX)(v?.createdAt,parseInt(l.lifespan,10))}`))};c.propTypes={errors:n().shape({lifespan:n().string}),onChange:n().func.isRequired,values:n().shape({lifespan:n().oneOfType([n().number,n().string])}).isRequired,isCreating:n().bool.isRequired,token:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().string,name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string})},c.defaultProps={errors:{},token:{}};const P=c},24122:(M,p,e)=>{"use strict";e.d(p,{Z:()=>P});var t=e(67294),o=e(86896),n=e(87631),a=e(12028),E=e(65186),r=e(69427),T=e(45697),f=e.n(T);const c=({token:v,tokenType:A})=>{const{formatMessage:l}=(0,o.Z)(),i=(0,n.lm)(),{trackUsage:u}=(0,n.rS)(),{copy:s}=(0,n.VP)(),y=R=>async()=>{await s(R)&&(u.current("didCopyTokenKey",{tokenType:A}),i({type:"success",message:{id:"Settings.tokens.notification.copied"}}))};return t.createElement(n.Y_,{endAction:v&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(a.h,{label:l({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),onClick:y(v),noBorder:!0,icon:t.createElement(E.Z,null),style:{padding:0,height:"1rem"}})),title:v||l({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:l(v?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(r.Z,null),iconBackground:"neutral100"})};c.defaultProps={token:null},c.propTypes={token:f().string,tokenType:f().string.isRequired};const P=c},40695:(M,p,e)=>{"use strict";e.d(p,{Z:()=>T});var t=e(67294),o=e(45697),n=e.n(o),a=e(86896),E=e(61467);const r=({errors:f,values:c,onChange:P,canEditInputs:v})=>{const{formatMessage:A}=(0,a.Z)();return t.createElement(E.g,{label:A({id:"Settings.tokens.form.description",defaultMessage:"Description"}),id:"description",error:f.description?A(f.description?.id?f.description:{id:f.description,defaultMessage:f.description}):null,onChange:P,disabled:!v},c.description)};r.propTypes={errors:n().shape({description:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({description:n().string}).isRequired},r.defaultProps={errors:{}};const T=r},61053:(M,p,e)=>{"use strict";e.d(p,{Z:()=>T});var t=e(67294),o=e(45697),n=e.n(o),a=e(86896),E=e(16364);const r=({errors:f,values:c,onChange:P,canEditInputs:v})=>{const{formatMessage:A}=(0,a.Z)();return t.createElement(E.o,{name:"name",error:f.name?A(f.name?.id?f.name:{id:f.name,defaultMessage:f.name}):null,label:A({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:P,value:c.name,disabled:!v,required:!0})};r.propTypes={errors:n().shape({name:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({name:n().string}).isRequired},r.defaultProps={errors:{}};const T=r},31065:(M,p,e)=>{"use strict";e.d(p,{Z:()=>f});var t=e(67294),o=e(45697),n=e.n(o),a=e(86896),E=e(40619),r=e(82562);const T=({name:c,errors:P,values:v,onChange:A,canEditInputs:l,options:i,label:u})=>{const{formatMessage:s}=(0,a.Z)();return t.createElement(E.P,{name:c,label:s({id:u.id,defaultMessage:u.defaultMessage}),value:v&&v[c],error:P[c]?s(P[c]?.id?P[c]:{id:P[c],defaultMessage:P[c]}):null,onChange:A,placeholder:"Select",required:!0,disabled:!l},i&&i.map(({value:y,label:R})=>t.createElement(r.W,{key:y,value:y},s(R))))};T.propTypes={name:n().string,options:n().arrayOf(n().shape({label:n().shape({id:n().string,defaultMessage:n().string}),value:n().string})),errors:n().shape({type:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({type:n().string}).isRequired,label:n().shape({id:n().string,defaultMessage:n().string}).isRequired},T.defaultProps={name:"type",errors:{},options:[]};const f=T},47670:(M,p,e)=>{"use strict";e.d(p,{Z:()=>t,f:()=>o});const t="api-token",o="transfer-token"},57692:(M,p,e)=>{"use strict";e.d(p,{Z:()=>Ge});var t=e(67294),o=e(86896),n=e(87631),a=e(185),E=e(49066),r=e(11047),T=e(14916),f=e(16550),c=e(88767),P=e(19631),v=e(75056),A=e(53979),l=e(29728),i=e(85018),u=e(45697),s=e.n(u);const y=({apiTokenName:d})=>{const{formatMessage:g}=(0,o.Z)();return(0,n.go)(),t.createElement(a.o,{"aria-busy":"true"},t.createElement(n.SL,{name:"API Tokens"}),t.createElement(A.T,{primaryAction:t.createElement(l.z,{disabled:!0,startIcon:t.createElement(i.Z,null),type:"button",size:"L"},g({id:"global.save",defaultMessage:"Save"})),title:d||g({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),t.createElement(E.D,null,t.createElement(n.dO,null)))};y.defaultProps={apiTokenName:null},y.propTypes={apiTokenName:s().string};const R=y;var U=e(87751);const b=(0,t.createContext)({}),Z=({children:d,...g})=>t.createElement(b.Provider,{value:g},d),D=()=>(0,t.useContext)(b);Z.propTypes={children:s().node.isRequired};const S=(d,g=[])=>({...d,selectedAction:null,routes:[],selectedActions:[],data:(0,v.mk)(g)});var H=e(18172),W=e(97019),Y=e.n(W);const Q={data:{},selectedActions:[]},J=(d,g)=>(0,H.ZP)(d,m=>{switch(g.type){case"ON_CHANGE":{m.selectedActions.includes(g.value)?Y()(m.selectedActions,g.value):m.selectedActions.push(g.value);break}case"SELECT_ALL_IN_PERMISSION":{g.value.every(x=>m.selectedActions.includes(x.actionId))?g.value.forEach(x=>{Y()(m.selectedActions,x.actionId)}):g.value.forEach(x=>{m.selectedActions.push(x.actionId)});break}case"SELECT_ALL_ACTIONS":{m.selectedActions=[...m.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const I=m.data.allActionsIds.filter(x=>x.includes("find")||x.includes("findOne"));m.selectedActions=[...I];break}case"UPDATE_PERMISSIONS_LAYOUT":{m.data=(0,v.mk)(g.value);break}case"UPDATE_ROUTES":{m.routes={...g.value};break}case"UPDATE_PERMISSIONS":{m.selectedActions=[...g.value];break}case"SET_SELECTED_ACTION":{m.selectedAction=g.value;break}default:return m}});var w=e(11276),V=e(74571),$=e(75515),z=e(41580),ce=e(48403),se=e.n(ce),ae=e(48734),oe=e(74756),Ae=e(63081),ve=e(36213),Ce=e(78114),ie=e(71997);const Pe=ie.iv`
  background: ${d=>d.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Me=(0,ie.ZP)(z.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${d=>d.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${d=>d.isActive&&Pe}
  &:hover {
    ${Pe}
  }
`,xe=ie.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:d})=>d.colors.neutral150};
`,pe=({controllers:d,label:g,orderNumber:m,disabled:I,onExpanded:x,indexExpandendCollapsedContent:h})=>{const{value:{onChangeSelectAll:j,onChange:X,selectedActions:K,setSelectedAction:G,selectedAction:ee}}=D(),[F,le]=(0,t.useState)(!1),{formatMessage:te}=(0,o.Z)(),L=()=>{le(B=>!B),x(m)};(0,t.useEffect)(()=>{h!==null&&h!==m&&F&&le(!1)},[h,m,F]);const q=B=>B===ee;return t.createElement(ae.U,{expanded:F,onToggle:L,variant:m%2?"primary":"secondary"},t.createElement(oe.B,{title:se()(g)}),t.createElement(Ae.v,null,d?.map(B=>{const de=B.actions.every(O=>K.includes(O.actionId)),Ee=B.actions.some(O=>K.includes(O.actionId));return t.createElement(z.x,{key:`${g}.${B?.controller}`},t.createElement(r.k,{justifyContent:"space-between",alignItems:"center",padding:4},t.createElement(z.x,{paddingRight:4},t.createElement($.Z,{variant:"sigma",textColor:"neutral600"},B?.controller)),t.createElement(xe,null),t.createElement(z.x,{paddingLeft:4},t.createElement(ve.X,{value:de,indeterminate:!de&&Ee,onValueChange:()=>{j({target:{value:[...B.actions]}})},disabled:I},te({id:"app.utils.select-all",defaultMessage:"Select all"})))),t.createElement(w.r,{gap:4,padding:4},B?.actions&&B?.actions.map(O=>t.createElement(V.P,{col:6,key:O.actionId},t.createElement(Me,{isActive:q(O.actionId),padding:2,hasRadius:!0},t.createElement(ve.X,{value:K.includes(O.actionId),name:O.actionId,onValueChange:()=>{X({target:{value:O.actionId}})},disabled:I},O.action),t.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>G({target:{value:O.actionId}}),style:{display:"inline-flex",alignItems:"center"}},t.createElement(Ce.Z,null)))))))})))};pe.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},pe.propTypes={controllers:s().array,orderNumber:s().number,label:s().string.isRequired,disabled:s().bool,onExpanded:s().func,indexExpandendCollapsedContent:s().number};const Oe=pe,ue=({section:d,...g})=>{const[m,I]=(0,t.useState)(null),x=h=>I(h);return t.createElement(z.x,{padding:4,background:"neutral0"},d&&d.map((h,j)=>t.createElement(Oe,{key:h.apiId,label:h.label,controllers:h.controllers,orderNumber:j,indexExpandendCollapsedContent:m,onExpanded:x,name:h.apiId,...g})))};ue.defaultProps={section:null},ue.propTypes={section:s().arrayOf(s().object)};const Re=ue;var De=e(35161),Ie=e.n(De),Se=e(13217),ke=e.n(Se);const Le=d=>{switch(d){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Be=(0,ie.ZP)(z.x)`
  margin: -1px;
  border-radius: ${({theme:d})=>d.spaces[1]} 0 0 ${({theme:d})=>d.spaces[1]};
`;function ge({route:d}){const{formatMessage:g}=(0,o.Z)(),{method:m,handler:I,path:x}=d,h=x?ke()(x.split("/")):[],[j="",X=""]=I?I.split("."):[],K=Le(d.method);return t.createElement(r.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement($.Z,{variant:"delta",as:"h3"},g({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",t.createElement("span",null,j),t.createElement($.Z,{variant:"delta",textColor:"primary600"},".",X)),t.createElement(r.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},t.createElement(Be,{background:K.background,borderColor:K.border,padding:2},t.createElement($.Z,{fontWeight:"bold",textColor:K.text},m)),t.createElement(z.x,{paddingLeft:2,paddingRight:2},Ie()(h,G=>t.createElement($.Z,{key:G,textColor:G.includes(":")?"neutral600":"neutral900"},"/",G)))))}ge.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},ge.propTypes={route:s().shape({handler:s().string,method:s().string,path:s().string})};const Ue=ge,be=()=>{const{value:{selectedAction:d,routes:g}}=D(),{formatMessage:m}=(0,o.Z)(),I=d?.split(".")[0];return t.createElement(V.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},d?t.createElement(r.k,{direction:"column",alignItems:"stretch",gap:2},g[I]?.map(x=>x.config.auth?.scope?.includes(d)||x.handler===d?t.createElement(Ue,{key:x.handler,route:x}):null)):t.createElement(r.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement($.Z,{variant:"delta",as:"h3"},m({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})),t.createElement($.Z,{as:"p",textColor:"neutral600"},m({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))},Ze=({...d})=>{const{value:{data:g}}=D(),{formatMessage:m}=(0,o.Z)();return t.createElement(w.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},t.createElement(V.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(r.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement($.Z,{variant:"delta",as:"h2"},m({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})),t.createElement($.Z,{as:"p",textColor:"neutral600"},m({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."}))),g?.permissions&&t.createElement(Re,{section:g?.permissions,...d})),t.createElement(be,null))},We=(0,t.memo)(Ze);var Ke=e(60401),Ne=e(61053),$e=e(40695),je=e(31065);const me=({errors:d,onChange:g,canEditInputs:m,isCreating:I,values:x,apiToken:h,onDispatch:j,setHasChangedPermissions:X})=>{const{formatMessage:K}=(0,o.Z)(),G=({target:{value:F}})=>{X(!1),F==="full-access"&&j({type:"SELECT_ALL_ACTIONS"}),F==="read-only"&&j({type:"ON_CHANGE_READ_ONLY"})},ee=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return t.createElement(z.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(r.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement($.Z,{variant:"delta",as:"h2"},K({id:"global.details",defaultMessage:"Details"})),t.createElement(w.r,{gap:5},t.createElement(V.P,{key:"name",col:6,xs:12},t.createElement(Ne.Z,{errors:d,values:x,canEditInputs:m,onChange:g})),t.createElement(V.P,{key:"description",col:6,xs:12},t.createElement($e.Z,{errors:d,values:x,canEditInputs:m,onChange:g})),t.createElement(V.P,{key:"lifespan",col:6,xs:12},t.createElement(Ke.Z,{isCreating:I,errors:d,values:x,onChange:g,token:h})),t.createElement(V.P,{key:"type",col:6,xs:12},t.createElement(je.Z,{values:x,errors:d,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:F=>{G({target:{value:F}}),g({target:{name:"type",value:F}})},options:ee,canEditInputs:m})))))};me.propTypes={errors:s().shape({name:s().string,description:s().string,lifespan:s().string,type:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({name:s().string,description:s().string,lifespan:s().oneOfType([s().number,s().string]),type:s().string}).isRequired,isCreating:s().bool.isRequired,apiToken:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().string,name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),onDispatch:s().func.isRequired,setHasChangedPermissions:s().func.isRequired},me.defaultProps={errors:{},apiToken:{}};const Fe=me;var ze=e(24122),He=e(76539),re=e(47670);const Ve="Name already taken",Ge=()=>{(0,n.go)();const{formatMessage:d}=(0,o.Z)(),{lockApp:g,unlockApp:m}=(0,n.o1)(),I=(0,n.lm)(),x=(0,f.k6)(),[h,j]=(0,t.useState)(x.location.state?.apiToken.accessKey?{...x.location.state.apiToken}:null),{trackUsage:X}=(0,n.rS)(),K=(0,t.useRef)(X),{setCurrentStep:G}=(0,n.c1)(),{allowedActions:{canCreate:ee,canUpdate:F,canRegenerate:le}}=(0,n.ss)(U.Z.settings["api-tokens"]),[te,L]=(0,t.useReducer)(J,Q,C=>S(C,{})),{params:{id:q}}=(0,f.$B)("/settings/api-tokens/:id"),{get:B,post:de,put:Ee}=(0,n.kY)(),O=q==="create";(0,c.useQuery)("content-api-permissions",async()=>{const[C,_]=await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async ne=>{const{data:k}=await B(ne);return k.data}));L({type:"UPDATE_PERMISSIONS_LAYOUT",value:C}),L({type:"UPDATE_ROUTES",value:_}),h&&(h?.type==="read-only"&&L({type:"ON_CHANGE_READ_ONLY"}),h?.type==="full-access"&&L({type:"SELECT_ALL_ACTIONS"}),h?.type==="custom"&&L({type:"UPDATE_PERMISSIONS",value:h?.permissions}))},{onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,t.useEffect)(()=>{K.current(O?"didAddTokenFromList":"didEditTokenFromList",{tokenType:re.Z})},[O]);const{status:Ye}=(0,c.useQuery)(["api-token",q],async()=>{const{data:{data:C}}=await B(`/admin/api-tokens/${q}`);return j({...C}),C?.type==="read-only"&&L({type:"ON_CHANGE_READ_ONLY"}),C?.type==="full-access"&&L({type:"SELECT_ALL_ACTIONS"}),C?.type==="custom"&&L({type:"UPDATE_PERMISSIONS",value:C?.permissions}),C},{enabled:!O&&!h,onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Xe=async(C,_)=>{K.current(O?"willCreateToken":"willEditToken",{tokenType:re.Z}),g();const ne=C.lifespan&&parseInt(C.lifespan,10)&&C.lifespan!=="0"?parseInt(C.lifespan,10):null;try{const{data:{data:k}}=O?await de("/admin/api-tokens",{...C,lifespan:ne,permissions:C.type==="custom"?te.selectedActions:null}):await Ee(`/admin/api-tokens/${q}`,{name:C.name,description:C.description,type:C.type,permissions:C.type==="custom"?te.selectedActions:null});O&&(x.replace(`/settings/api-tokens/${k.id}`,{apiToken:k}),G("apiTokens.success")),m(),j({...k}),I({type:"success",message:d(O?{id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),K.current(O?"didCreateToken":"didEditToken",{type:h.type,tokenType:re.Z})}catch(k){const he=(0,P.Iz)(k.response.data);_.setErrors(he),k?.response?.data?.error?.message===Ve?I({type:"warning",message:k.response.data.message||"notification.error.tokennamenotunique"}):I({type:"warning",message:k?.response?.data?.message||"notification.error"}),m()}},[_e,fe]=(0,t.useState)(!1),Qe={...te,onChange:({target:{value:C}})=>{fe(!0),L({type:"ON_CHANGE",value:C})},onChangeSelectAll:({target:{value:C}})=>{fe(!0),L({type:"SELECT_ALL_IN_PERMISSION",value:C})},setSelectedAction:({target:{value:C}})=>{L({type:"SET_SELECTED_ACTION",value:C})}},ye=F&&!O||ee&&O;return!O&&!h&&Ye!=="success"?t.createElement(R,{apiTokenName:h?.name}):t.createElement(Z,{value:Qe},t.createElement(a.o,null,t.createElement(n.SL,{name:"API Tokens"}),t.createElement(T.J9,{validationSchema:v.fK,validateOnChange:!1,initialValues:{name:h?.name||"",description:h?.description||"",type:h?.type,lifespan:h?.lifespan?h.lifespan.toString():h?.lifespan},enableReinitialize:!0,onSubmit:(C,_)=>Xe(C,_)},({errors:C,handleChange:_,isSubmitting:ne,values:k,setFieldValue:he})=>(_e&&k?.type!=="custom"&&he("type","custom"),t.createElement(n.l0,null,t.createElement(He.Z,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:h,setToken:j,canEditInputs:ye,canRegenerate:le,isSubmitting:ne,regenerateUrl:"/admin/api-tokens/"}),t.createElement(E.D,null,t.createElement(r.k,{direction:"column",alignItems:"stretch",gap:6},Boolean(h?.name)&&t.createElement(ze.Z,{token:h?.accessKey,tokenType:re.Z}),t.createElement(Fe,{errors:C,onChange:_,canEditInputs:ye,isCreating:O,values:k,apiToken:h,onDispatch:L,setHasChangedPermissions:fe}),t.createElement(We,{disabled:!ye||k?.type==="read-only"||k?.type==="full-access"}))))))))}},75056:(M,p,e)=>{"use strict";e.d(p,{IX:()=>E,fK:()=>c,mk:()=>v});var t=e(66115),o=e(77349),n=e(51991);const E=(A,l,i="en")=>{if(l&&typeof l=="number"){const u=l/24/60/60/1e3;return(0,t.Z)((0,o.Z)(new Date(A),u),"PPP",{locale:n[i]})}return"Unlimited"};var r=e(87561),T=e(87631);const c=r.Ry().shape({name:r.Z_(T.I0.string).max(100).required(T.I0.required),type:r.Z_(T.I0.string).oneOf(["read-only","full-access","custom"]).required(T.I0.required),description:r.Z_().nullable(),lifespan:r.Rx().integer().min(0).nullable().defined(T.I0.required)}),v=A=>{const l={allActionsIds:[],permissions:[]};return l.permissions=Object.keys(A).map(i=>({apiId:i,label:i.split("::")[1],controllers:Object.keys(A[i].controllers).map(u=>({controller:u,actions:A[i].controllers[u].map(s=>{const y=`${i}.${u}.${s}`;return i.includes("api::")&&l.allActionsIds.push(y),{action:s,actionId:y}}).flat()})).flat()})),l}},41848:M=>{function p(e,t,o,n){for(var a=e.length,E=o+(n?1:-1);n?E--:++E<a;)if(t(e[E],E,e))return E;return-1}M.exports=p},42118:(M,p,e)=>{var t=e(41848),o=e(62722),n=e(42351);function a(E,r,T){return r===r?n(E,r,T):t(E,o,T)}M.exports=a},74221:M=>{function p(e,t,o,n){for(var a=o-1,E=e.length;++a<E;)if(n(e[a],t))return a;return-1}M.exports=p},62722:M=>{function p(e){return e!==e}M.exports=p},65464:(M,p,e)=>{var t=e(29932),o=e(42118),n=e(74221),a=e(7518),E=e(278),r=Array.prototype,T=r.splice;function f(c,P,v,A){var l=A?n:o,i=-1,u=P.length,s=c;for(c===P&&(P=E(P)),v&&(s=t(c,a(v)));++i<u;)for(var y=0,R=P[i],U=v?v(R):R;(y=l(s,U,y,A))>-1;)s!==c&&T.call(s,y,1),T.call(c,y,1);return c}M.exports=f},42351:M=>{function p(e,t,o){for(var n=o-1,a=e.length;++n<a;)if(e[n]===t)return n;return-1}M.exports=p},97019:(M,p,e)=>{var t=e(5976),o=e(45604),n=t(o);M.exports=n},45604:(M,p,e)=>{var t=e(65464);function o(n,a){return n&&n.length&&a&&a.length?t(n,a):n}M.exports=o},13217:(M,p,e)=>{var t=e(14259);function o(n){var a=n==null?0:n.length;return a?t(n,1,a):[]}M.exports=o},48734:(M,p,e)=>{"use strict";e.d(p,{U:()=>A,y:()=>P});var t=e(85893),o=e(67294),n=e(71997),a=e(13819),E=e(2504),r=e(75515),T=e(11047),f=e(41580);const c=({theme:l,expanded:i,variant:u,disabled:s,error:y})=>y?`1px solid ${l.colors.danger600} !important`:s?`1px solid ${l.colors.neutral150}`:i?`1px solid ${l.colors.primary600}`:u==="primary"?`1px solid ${l.colors.neutral0}`:`1px solid ${l.colors.neutral100}`,P=(0,n.ZP)(r.Z)``,v=(0,n.ZP)(f.x)`
  border: ${c};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:l})=>l.colors.primary600};

    ${P} {
      color: ${({theme:l,expanded:i})=>i?void 0:l.colors.primary700};
    }

    ${r.Z} {
      color: ${({theme:l,expanded:i})=>i?void 0:l.colors.primary600};
    }

    & > ${T.k} {
      background: ${({theme:l})=>l.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:l})=>l.colors.primary200};
    }
  }
`,A=({children:l,disabled:i=!1,error:u,expanded:s=!1,hasErrorMessage:y=!0,id:R,onToggle:U,toggle:b,size:Z="M",variant:D="primary",shadow:N})=>{const S=(0,E.M)(R),H=o.useMemo(()=>({expanded:s,onToggle:U,toggle:b,id:S,size:Z,variant:D,disabled:i}),[i,s,S,U,Z,b,D]);return(0,t.jsxs)(a.S.Provider,{value:H,children:[(0,t.jsx)(v,{"data-strapi-expanded":s,disabled:i,"aria-disabled":i,expanded:s,hasRadius:!0,variant:D,error:u,shadow:N,children:l}),u&&y&&(0,t.jsx)(f.x,{paddingTop:1,children:(0,t.jsx)(r.Z,{variant:"pi",textColor:"danger600",children:u})})]})}},63081:(M,p,e)=>{"use strict";e.d(p,{v:()=>a});var t=e(85893),o=e(13819),n=e(41580);const a=({children:E,...r})=>{const{expanded:T,id:f}=(0,o.A)();if(!T)return null;const c=`accordion-content-${f}`,P=`accordion-label-${f}`,v=`accordion-desc-${f}`;return(0,t.jsx)(n.x,{role:"region",id:c,"aria-labelledby":P,"aria-describedby":v,...r,children:E})}},13819:(M,p,e)=>{"use strict";e.d(p,{A:()=>n,S:()=>o});var t=e(67294);const o=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),n=()=>(0,t.useContext)(o)},74756:(M,p,e)=>{"use strict";e.d(p,{B:()=>l});var t=e(85893),o=e(12645),n=e(71997),a=e(48734),E=e(13819);const r=({expanded:i,disabled:u,variant:s})=>{let y="neutral100";return i?y="primary100":u?y="neutral150":s==="primary"&&(y="neutral0"),y};var T=e(39785),f=e(52624),c=e(11047),P=e(75515);const v=(0,n.ZP)(T.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:i,expanded:u})=>u?i.colors.primary600:i.colors.neutral500};
    }
  }
`,A=(0,n.ZP)(c.k)`
  min-height: ${({theme:i,size:u})=>i.sizes.accordions[u]};
  border-radius: ${({theme:i,expanded:u})=>u?`${i.borderRadius} ${i.borderRadius} 0 0`:i.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:i})=>i.colors.primary600};
      }
    }
  }
`,l=({title:i,description:u,as:s="span",togglePosition:y="right",action:R,...U})=>{const{onToggle:b,toggle:Z,expanded:D,id:N,size:S,variant:H,disabled:W}=(0,E.A)(),Y=`accordion-content-${N}`,Q=`accordion-label-${N}`,Te=`accordion-desc-${N}`,J=S==="M"?6:4,w=S==="M"?J:J-2,V=r({expanded:D,disabled:W,variant:H}),$={as:s,fontWeight:S==="S"?"bold":void 0,id:Q,textColor:D?"primary600":"neutral700",ellipsis:!0,variant:S==="M"?"delta":void 0},z=D?"primary600":"neutral600",ce=D?"primary200":"neutral200",se=S==="M"?`${32/16}rem`:`${24/16}rem`,ae=()=>{W||(Z&&!b?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),Z()):b&&b())},oe=(0,t.jsx)(c.k,{justifyContent:"center",borderRadius:"50%",height:se,width:se,transform:D?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ce,cursor:W?"not-allowed":"pointer",onClick:ae,shrink:0,children:(0,t.jsx)(f.J,{as:o.Z,width:S==="M"?`${11/16}rem`:`${8/16}rem`,color:D?"primary600":"neutral600"})});return(0,t.jsx)(A,{paddingBottom:w,paddingLeft:J,paddingRight:J,paddingTop:w,background:V,expanded:D,size:S,justifyContent:"space-between",cursor:W?"not-allowed":"",children:(0,t.jsxs)(c.k,{gap:3,flex:1,maxWidth:"100%",children:[y==="left"&&oe,(0,t.jsx)(v,{onClick:ae,"aria-disabled":W,"aria-expanded":D,"aria-controls":Y,"aria-labelledby":Q,"data-strapi-accordion-toggle":!0,expanded:D,type:"button",flex:1,minWidth:0,...U,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.y,{...$,children:i}),u&&(0,t.jsx)(P.Z,{as:"p",id:Te,textColor:z,children:u})]})}),y==="right"&&(0,t.jsxs)(c.k,{gap:3,children:[oe,R]}),y==="left"&&R]})})}}}]);
