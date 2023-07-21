"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[5162],{93016:(H,h,t)=>{t.d(h,{Z:()=>v});var e=t(67294),s=t(84714);function d(){return e.createElement(s.Z.Root,null,e.createElement(s.Z.Headers,null),e.createElement(s.Z.Body,null))}const v=d},84714:(H,h,t)=>{t.d(h,{Z:()=>me});var e=t(67294),s=t(45697),d=t.n(s),v=t(14916),B=t(86896),V=t(71997),ee=t(45421),de=t(11047),E=t(19270),A=t(77197),U=t(65833),te=t(33709),R=t(54580),ce=t(63237),ne=t(75515),p=t(26031),ae=t(36213),ue=t(92155),j=t(39645);const G=l=>l.reduce((i,c)=>{const M=c.split(".")[0];return i[M]||(i[M]=[]),i[M].push(c),i},{}),S=(0,V.ZP)(ee.w)`
  tbody tr:nth-child(odd) {
    background: ${({theme:l})=>l.colors.neutral100};
  }

  thead th span {
    color: ${({theme:l})=>l.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:l})=>l.spaces[3]};
    padding-block-end: ${({theme:l})=>l.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    // Add padding to the start of the first column to avoid the checkbox appearing
    // too close to the edge of the table
    padding-inline-start: ${({theme:l})=>l.spaces[2]};
  }
`,F=l=>{const i=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return l&&(i.push({id:"app.utils.publish",defaultMessage:"Publish"}),i.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),i},D=l=>{const i=["entry.create","entry.update","entry.delete"];return l&&i.push("entry.publish","entry.unpublish"),{entry:i,media:["media.create","media.update","media.delete"]}},Q=e.createContext(),se=({children:l})=>{const{formatMessage:i}=(0,B.Z)(),{collectionTypes:c,isLoading:M}=(0,j.G)(),P=e.useMemo(()=>c.some(L=>L.options.draftAndPublish===!0),[c]),I=i({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return e.createElement(Q.Provider,{value:{isDraftAndPublish:P}},e.createElement(de.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(E.Q,{"aria-hidden":!0},I),M&&e.createElement(A.a,null,i({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})),e.createElement(S,{"aria-label":I},l)))};se.propTypes={children:d().oneOfType([d().arrayOf(d().node),d().node]).isRequired};const Y=({getHeaders:l=F})=>{const{isDraftAndPublish:i}=e.useContext(Q),{formatMessage:c}=(0,B.Z)(),M=l(i);return e.createElement(U.S,null,e.createElement(te.Z,null,e.createElement(R.g,null,e.createElement(ce.T,null,c({id:"Settings.webhooks.event.select",defaultMessage:"Select event"}))),M.map(P=>["app.utils.publish","app.utils.unpublish"].includes(P.id)?e.createElement(R.g,{key:P.id,title:c({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"})},e.createElement(ne.Z,{variant:"sigma",textColor:"neutral600"},c(P))):e.createElement(R.g,{key:P.id},e.createElement(ne.Z,{variant:"sigma",textColor:"neutral600"},c(P))))))};Y.defaultProps={getHeaders:F},Y.propTypes={getHeaders:d().func};const J=({providedEvents:l})=>{const{isDraftAndPublish:i}=e.useContext(Q),c=l||D(i),{values:M,handleChange:P}=(0,v.u6)(),I="events",L=M.events,X=[],z=G(L),b=({target:{name:f,value:g}})=>{let T=new Set(L);g?T.add(f):T.delete(f),P({target:{name:I,value:Array.from(T)}})},x=({target:{name:f,value:g}})=>{let T=new Set(L);g?c[f].forEach(K=>{X.includes(K)||T.add(K)}):c[f].forEach(K=>T.delete(K)),P({target:{name:I,value:Array.from(T)}})};return e.createElement(p.X,null,Object.entries(c).map(([f,g])=>e.createElement(N,{disabledEvents:X,key:f,name:f,events:g,inputValue:z[f],handleSelect:b,handleSelectAll:x})))};J.defaultProps={providedEvents:null},J.propTypes={providedEvents:d().object};const ge=l=>l.replace(/-/g," ").split(" ").map(i=>i.charAt(0).toUpperCase()+i.slice(1).toLowerCase()).join(" "),N=({disabledEvents:l,name:i,events:c,inputValue:M,handleSelect:P,handleSelectAll:I})=>{const{formatMessage:L}=(0,B.Z)(),X=c.filter(g=>!l.includes(g)),z=M.length>0,b=M.length===X.length,x=({target:{name:g}})=>{I({target:{name:g,value:!b}})},f=5;return e.createElement(te.Z,null,e.createElement(R.f,null,e.createElement(ae.X,{indeterminate:z&&!b,"aria-label":L({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:i,onChange:x,value:b},ge(i))),c.map(g=>e.createElement(R.f,{key:g},e.createElement(ue.C,{disabled:l.includes(g),"aria-label":g,name:g,value:M.includes(g),onValueChange:T=>P({target:{name:g,value:T}})}))),c.length<f&&e.createElement(R.f,{colSpan:`${f-c.length}`}))};N.defaultProps={disabledEvents:[],events:[],inputValue:[],handleSelect(){},handleSelectAll(){}},N.propTypes={disabledEvents:d().array,events:d().array,inputValue:d().array,handleSelect:d().func,handleSelectAll:d().func,name:d().string.isRequired};const me={Root:se,Headers:Y,Body:J,EventRow:N}},41128:(H,h,t)=>{t.d(h,{Z:()=>Pe});var e=t(67294),s=t(87631),d=t(185),v=t(88767),B=t(16550),V=t(39645),ee=t(70885),de=t(45697),E=t.n(de),A=t(14916),U=t(86896),te=t(90321),R=t(85018),ce=t(67109),ne=t(53979),p=t(11047),ae=t(29728),ue=t(49066),j=t(41580),G=t(11276),S=t(74571),F=t(16364),D=t(87561);const Q=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,se=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Y=({formatMessage:n})=>D.Ry().shape({name:D.Z_().required(n({id:"Settings.webhooks.validation.name",defaultMessage:"Name is required"})).matches(Q,s.I0.regex),url:D.Z_().required(n({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(se,n({id:s.I0.regex,defaultMessage:"The value does not match the regex"})),headers:D.Vo(a=>{let r=D.IX();if(a.length===1){const{key:u,value:C}=a[0];if(!u&&!C)return r}return r.of(D.Ry().shape({key:D.Z_().required(n({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:D.Z_().required(n({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:D.IX()});var J=t(96315),ge=t(19270),N=t(39785),me=t(29178),l=t(90608);const i=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],c=({name:n,onChange:a,value:r,...u})=>{const{values:{headers:C}}=(0,A.u6)(),[Z,m]=(0,e.useState)(i);(0,e.useEffect)(()=>{m(i.filter(o=>!C?.some($=>$.key!==r&&$.key===o)))},[C,r]);const w=o=>{a({target:{name:n,value:o}})},_=o=>{m($=>[...$,o]),w(o)};return e.createElement(me.XU,{...u,onClear:()=>w(""),onChange:w,onCreateOption:_,placeholder:"",value:r},Z.map(o=>e.createElement(l.O,{value:o,key:o},o)))};c.defaultProps={value:void 0},c.propTypes={name:E().string.isRequired,onChange:E().func.isRequired,value:E().string};const M=c,I=()=>{const{formatMessage:n}=(0,U.Z)(),{values:a,errors:r}=(0,A.u6)();return e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(ge.Q,null,n({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})),e.createElement(j.x,{padding:8,background:"neutral100",hasRadius:!0},e.createElement(A.F2,{validateOnChange:!1,name:"headers",render:({push:u,remove:C})=>e.createElement(G.r,{gap:4},a.headers.map((Z,m)=>e.createElement(e.Fragment,{key:`${m}.${Z.key}`},e.createElement(S.P,{col:6},e.createElement(A.gN,{as:M,name:`headers.${m}.key`,"aria-label":`row ${m+1} key`,label:n({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:r.headers?.[m]?.key&&r.headers[m].key})),e.createElement(S.P,{col:6},e.createElement(p.k,{alignItems:"flex-end"},e.createElement(j.x,{style:{flex:1}},e.createElement(A.gN,{as:F.o,name:`headers.${m}.value`,"aria-label":`row ${m+1} value`,label:n({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:r.headers?.[m]?.value&&r.headers[m].value})),e.createElement(p.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:r.headers?.[m]?.value?0:5},e.createElement(s.fG,{disabled:a.headers.length===1,onClick:()=>C(m),label:n({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:m+1})})))))),e.createElement(S.P,{col:12},e.createElement(N.A,{type:"button",onClick:()=>{u({key:"",value:""})},startIcon:e.createElement(J.Z,null)},n({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"}))))})))};var L=t(71997),X=t(86647),z=t(70968),b=t(75515);const x=L.ZP.svg(({theme:n,color:a})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;

  path {
    fill: ${n.colors[a]};
  }
`),f=({isPending:n,statusCode:a})=>{const{formatMessage:r}=(0,U.Z)();return n?e.createElement(p.k,{gap:2,alignItems:"center"},e.createElement(x,{as:X.Z}),e.createElement(b.Z,null,r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"}))):a>=200&&a<300?e.createElement(p.k,{gap:2,alignItems:"center"},e.createElement(x,{as:R.Z,color:"success700"}),e.createElement(b.Z,null,r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"}))):a>=300?e.createElement(p.k,{gap:2,alignItems:"center"},e.createElement(x,{as:z.Z,color:"danger700"}),e.createElement(b.Z,null,r({id:"Settings.error",defaultMessage:"error"})," ",a)):null};f.propTypes={isPending:E().bool.isRequired,statusCode:E().number},f.defaultProps={statusCode:void 0};const g=({statusCode:n,message:a})=>{const{formatMessage:r}=(0,U.Z)();return n>=200&&n<300?e.createElement(p.k,{justifyContent:"flex-end"},e.createElement(b.Z,{textColor:"neutral600",ellipsis:!0},r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"}))):n>=300?e.createElement(p.k,{justifyContent:"flex-end"},e.createElement(p.k,{maxWidth:(0,s.Q1)(250),justifyContent:"flex-end",title:a},e.createElement(b.Z,{ellipsis:!0,textColor:"neutral600"},a))):null};g.propTypes={statusCode:E().number,message:E().string},g.defaultProps={statusCode:void 0,message:void 0};const T=({onCancel:n})=>{const{formatMessage:a}=(0,U.Z)();return e.createElement(p.k,{justifyContent:"flex-end"},e.createElement("button",{onClick:n,type:"button"},e.createElement(p.k,{gap:2,alignItems:"center"},e.createElement(b.Z,{textColor:"neutral400"},a({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})),e.createElement(x,{as:z.Z,color:"neutral400"}))))};T.propTypes={onCancel:E().func.isRequired};const K=({isPending:n,onCancel:a,response:r})=>{const{statusCode:u,message:C}=r,{formatMessage:Z}=(0,U.Z)();return e.createElement(j.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0},e.createElement(G.r,{gap:4,style:{alignItems:"center"}},e.createElement(S.P,{col:3},e.createElement(b.Z,null,Z({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"}))),e.createElement(S.P,{col:3},e.createElement(f,{isPending:n,statusCode:u})),e.createElement(S.P,{col:6},n?e.createElement(T,{onCancel:a}):e.createElement(g,{statusCode:u,message:C}))))};K.defaultProps={isPending:!1,onCancel(){},response:{}},K.propTypes={isPending:E().bool,onCancel:E().func,response:E().object};const Ce=K;var Me=function(){return window&&window.strapi&&window.strapi.isEE?t(65224).Z:t(93016).Z}(),Ee=function(a){var r,u,C=a.handleSubmit,Z=a.triggerWebhook,m=a.isCreating,w=a.isTriggering,_=a.triggerResponse,o=a.data,$=(0,U.Z)(),k=$.formatMessage,q=(0,e.useState)(!1),re=(0,ee.Z)(q,2),he=re[0],oe=re[1],ve=function(ie){return Object.keys(ie).length?Object.entries(ie).map(function(pe){var O=(0,ee.Z)(pe,2),W=O[0],be=O[1];return{key:W,value:be}}):[{key:"",value:""}]},y=(0,A.TA)({initialValues:{name:o?.name||"",url:o?.url||"",headers:ve(o?.headers||{}),events:o?.events||[]},onSubmit:C,validationSchema:Y({formatMessage:k}),validateOnChange:!1,validateOnBlur:!1});return e.createElement(A.Hy,{value:y},e.createElement(s.l0,{onSubmit:y.handleSubmit},e.createElement(ne.T,{primaryAction:e.createElement(p.k,{gap:2},e.createElement(ae.z,{onClick:function(){Z(),oe(!0)},variant:"tertiary",startIcon:e.createElement(te.Z,null),disabled:m||w,size:"L"},k({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})),e.createElement(ae.z,{startIcon:e.createElement(R.Z,null),type:"submit",size:"L",disabled:!y.dirty,loading:y.isSubmitting},k({id:"global.save",defaultMessage:"Save"}))),title:m?k({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):o?.name,navigationAction:e.createElement(s.rU,{startIcon:e.createElement(ce.Z,null),to:"/settings/webhooks"},k({id:"global.back",defaultMessage:"Back"}))}),e.createElement(ue.D,null,e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:4},he&&e.createElement(Ce,{isPending:w,response:_,onCancel:function(){return oe(!1)}}),e.createElement(j.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0},e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(G.r,{gap:6},e.createElement(S.P,{col:6},e.createElement(A.gN,{as:F.o,name:"name",error:(y==null||(r=y.errors)===null||r===void 0?void 0:r.name)&&y.errors.name,label:k({id:"global.name",defaultMessage:"Name"}),required:!0})),e.createElement(S.P,{col:12},e.createElement(A.gN,{as:F.o,name:"url",error:(y==null||(u=y.errors)===null||u===void 0?void 0:u.url)&&y.errors.url,label:k({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0}))),e.createElement(I,null),e.createElement(Me,null)))))))};Ee.propTypes={data:E().object,handleSubmit:E().func.isRequired,triggerWebhook:E().func.isRequired,isCreating:E().bool.isRequired,isTriggering:E().bool.isRequired,triggerResponse:E().object},Ee.defaultProps={data:void 0,triggerResponse:void 0};const ye=Ee,fe=n=>({...n,headers:n.headers.reduce((a,{key:r,value:u})=>(r!==""&&(a[r]=u),a),{})}),Pe=()=>{const{params:{id:n}}=(0,B.$B)("/settings/webhooks/:id"),a=n==="create",{replace:r}=(0,B.k6)(),u=(0,s.lm)(),{formatAPIError:C}=(0,s.So)(),Z=(0,v.useQueryClient)(),{isLoading:m}=(0,V.G)(),{put:w,get:_,post:o}=(0,s.kY)(),{isLoading:$,data:k,error:q}=(0,v.useQuery)(["webhooks",n],async()=>{const{data:{data:O}}=await _(`/admin/webhooks/${n}`);return O},{enabled:!a});e.useEffect(()=>{q&&u({type:"warning",message:C(q)})},[q,u,C]);const{isLoading:re,data:he,isIdle:oe,mutate:ve}=(0,v.useMutation)(()=>o(`/admin/webhooks/${n}/trigger`)),y=()=>ve(null,{onError(O){u({type:"warning",message:C(O)})}}),le=(0,v.useMutation)(O=>o("/admin/webhooks",O)),ie=(0,v.useMutation)(({id:O,body:W})=>w(`/admin/webhooks/${O}`,W)),pe=async O=>{if(a){le.mutate(fe(O),{onSuccess({data:W}){u({type:"success",message:{id:"Settings.webhooks.created"}}),r(`/settings/webhooks/${W.data.id}`)},onError(W){u({type:"warning",message:C(W)})}});return}ie.mutate({id:n,body:fe(O)},{onSuccess(){Z.invalidateQueries(["webhooks",n]),u({type:"success",message:{id:"notification.form.success.fields"}})},onError(W){u({type:"warning",message:C(W)})}})};return $||m?e.createElement(s.dO,null):e.createElement(d.o,null,e.createElement(s.SL,{name:"Webhooks"}),e.createElement(ye,{data:k,handleSubmit:pe,triggerWebhook:y,isCreating:a,isTriggering:re,isTriggerIdle:oe,triggerResponse:he?.data.data}))}},3672:(H,h,t)=>{t.r(h),t.d(h,{default:()=>V});var e=t(67294),s=t(87631),d=t(87751),v=t(41128);const V=()=>e.createElement(s.O4,{permissions:d.Z.settings.webhooks.create},e.createElement(v.Z,null))},42122:(H,h,t)=>{t.r(h),t.d(h,{default:()=>V});var e=t(67294),s=t(87631),d=t(87751),v=t(41128);const V=()=>e.createElement(s.O4,{permissions:d.Z.settings.webhooks.update},e.createElement(v.Z,null))},65224:(H,h,t)=>{t.d(h,{Z:()=>v});var e=t(67294),s=t(84714);function d(){return e.createElement(s.Z.Root,null,e.createElement(s.Z.Headers,null),e.createElement(s.Z.Body,null))}const v=d},90608:(H,h,t)=>{t.d(h,{O:()=>s});var e=t(29178);const s=e.Wx},67109:(H,h,t)=>{t.d(h,{Z:()=>d});var e=t(85893);const s=v=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...v,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),d=s}}]);
