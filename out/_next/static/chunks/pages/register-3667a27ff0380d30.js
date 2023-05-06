(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{1362:function(e,a,r){"use strict";r.d(a,{Z:function(){return _}});var n=r(3366),o=r(7462),t=r(7294),i=r(4780),l=r(1796),s=r(6010),c=r(6622),d=r(1719),u=r(2293),h=r(9711),m=r(9828),p=r(4867),x=r(1588);function f(e){return(0,p.Z)("PrivateSwitchBase",e)}(0,x.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var v=r(5893);const Z=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],b=(0,d.ZP)(m.Z)((({ownerState:e})=>(0,o.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),g=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});var y=t.forwardRef((function(e,a){const{autoFocus:r,checked:t,checkedIcon:l,className:d,defaultChecked:m,disabled:p,disableFocusRipple:x=!1,edge:y=!1,icon:k,id:j,inputProps:w,inputRef:C,name:N,onBlur:B,onChange:S,onFocus:I,readOnly:P,required:z,tabIndex:F,type:R,value:_}=e,q=(0,n.Z)(e,Z),[E,H]=(0,u.Z)({controlled:t,default:Boolean(m),name:"SwitchBase",state:"checked"}),O=(0,h.Z)();let T=p;O&&"undefined"===typeof T&&(T=O.disabled);const M="checkbox"===R||"radio"===R,$=(0,o.Z)({},e,{checked:E,disabled:T,disableFocusRipple:x,edge:y}),W=(e=>{const{classes:a,checked:r,disabled:n,edge:o}=e,t={root:["root",r&&"checked",n&&"disabled",o&&`edge${(0,c.Z)(o)}`],input:["input"]};return(0,i.Z)(t,f,a)})($);return(0,v.jsxs)(b,(0,o.Z)({component:"span",className:(0,s.Z)(W.root,d),centerRipple:!0,focusRipple:!x,disabled:T,tabIndex:null,role:void 0,onFocus:e=>{I&&I(e),O&&O.onFocus&&O.onFocus(e)},onBlur:e=>{B&&B(e),O&&O.onBlur&&O.onBlur(e)},ownerState:$,ref:a},q,{children:[(0,v.jsx)(g,(0,o.Z)({autoFocus:r,checked:t,defaultChecked:m,className:W.input,disabled:T,id:M&&j,name:N,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const a=e.target.checked;H(a),S&&S(e,a)},readOnly:P,ref:C,required:z,ownerState:$,tabIndex:F,type:R},"checkbox"===R&&void 0===_?{}:{value:_},w)),E?l:k]}))})),k=r(4235),j=(0,k.Z)((0,v.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),w=(0,k.Z)((0,v.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),C=(0,k.Z)((0,v.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),N=r(8884);function B(e){return(0,p.Z)("MuiCheckbox",e)}var S=(0,x.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);const I=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],P=(0,d.ZP)(y,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,r.indeterminate&&a.indeterminate,"default"!==r.color&&a[`color${(0,c.Z)(r.color)}`]]}})((({theme:e,ownerState:a})=>(0,o.Z)({color:(e.vars||e).palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===a.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)("default"===a.color?e.palette.action.active:e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&{[`&.${S.checked}, &.${S.indeterminate}`]:{color:(e.vars||e).palette[a.color].main},[`&.${S.disabled}`]:{color:(e.vars||e).palette.action.disabled}}))),z=(0,v.jsx)(w,{}),F=(0,v.jsx)(j,{}),R=(0,v.jsx)(C,{});var _=t.forwardRef((function(e,a){var r,l;const s=(0,N.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:d=z,color:u="primary",icon:h=F,indeterminate:m=!1,indeterminateIcon:p=R,inputProps:x,size:f="medium"}=s,Z=(0,n.Z)(s,I),b=m?p:h,g=m?p:d,y=(0,o.Z)({},s,{color:u,indeterminate:m,size:f}),k=(e=>{const{classes:a,indeterminate:r,color:n}=e,t={root:["root",r&&"indeterminate",`color${(0,c.Z)(n)}`]},l=(0,i.Z)(t,B,a);return(0,o.Z)({},a,l)})(y);return(0,v.jsx)(P,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":m},x),icon:t.cloneElement(b,{fontSize:null!=(r=b.props.fontSize)?r:f}),checkedIcon:t.cloneElement(g,{fontSize:null!=(l=g.props.fontSize)?l:f}),ownerState:y,ref:a},Z,{classes:k}))}))},5511:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return r(297)}])},297:function(e,a,r){"use strict";r.r(a);var n=r(5893),o=r(9008),t=r.n(o),i=r(1664),l=r.n(i),s=r(1163),c=r.n(s),d=r(2175),u=r(4231),h=r(1953),m=r(6336),p=r(5084),x=r(9630),f=r(2145),v=r(1362),Z=r(8346),b=r(2631),g=r(1023);a.default=function(){var e=(0,d.TA)({initialValues:{email:"",firstName:"",lastName:"",password:"",policy:!1},validationSchema:u.Ry({email:u.Z_().email("Must be a valid email").max(255).required("Email is required"),firstName:u.Z_().max(255).required("First name is required"),lastName:u.Z_().max(255).required("Last name is required"),password:u.Z_().max(255).required("Password is required"),policy:u.O7().oneOf([!0],"This field must be checked")}),onSubmit:function(){c().push("/").catch(console.error)}});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t(),{children:(0,n.jsx)("title",{children:"Register | Helpers"})}),(0,n.jsx)(h.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,minHeight:"100%"},children:(0,n.jsxs)(m.Z,{maxWidth:"sm",children:[(0,n.jsx)(l(),{href:"/",passHref:!0,children:(0,n.jsx)(p.Z,{component:"a",startIcon:(0,n.jsx)(g.Z,{fontSize:"small"}),children:"Dashboard"})}),(0,n.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,n.jsxs)(h.Z,{sx:{my:3},children:[(0,n.jsx)(x.Z,{color:"textPrimary",variant:"h4",children:"Create a new account"}),(0,n.jsx)(x.Z,{color:"textSecondary",gutterBottom:!0,variant:"body2",children:"Use your email to create a new account"})]}),(0,n.jsx)(f.Z,{error:Boolean(e.touched.firstName&&e.errors.firstName),fullWidth:!0,helperText:e.touched.firstName&&e.errors.firstName,label:"First Name",margin:"normal",name:"firstName",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.firstName,variant:"outlined"}),(0,n.jsx)(f.Z,{error:Boolean(e.touched.lastName&&e.errors.lastName),fullWidth:!0,helperText:e.touched.lastName&&e.errors.lastName,label:"Last Name",margin:"normal",name:"lastName",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.lastName,variant:"outlined"}),(0,n.jsx)(f.Z,{error:Boolean(e.touched.email&&e.errors.email),fullWidth:!0,helperText:e.touched.email&&e.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:e.handleBlur,onChange:e.handleChange,type:"email",value:e.values.email,variant:"outlined"}),(0,n.jsx)(f.Z,{error:Boolean(e.touched.password&&e.errors.password),fullWidth:!0,helperText:e.touched.password&&e.errors.password,label:"Password",margin:"normal",name:"password",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.password,variant:"outlined"}),(0,n.jsxs)(h.Z,{sx:{alignItems:"center",display:"flex",ml:-1},children:[(0,n.jsx)(v.Z,{checked:e.values.policy,name:"policy",onChange:e.handleChange}),(0,n.jsxs)(x.Z,{color:"textSecondary",variant:"body2",children:["I have read the"," ",(0,n.jsx)(l(),{href:"#",passHref:!0,children:(0,n.jsx)(Z.Z,{color:"primary",underline:"always",variant:"subtitle2",children:"Terms and Conditions"})})]})]}),Boolean(e.touched.policy&&e.errors.policy)&&(0,n.jsx)(b.Z,{error:!0,children:e.errors.policy}),(0,n.jsx)(h.Z,{sx:{py:2},children:(0,n.jsx)(p.Z,{color:"primary",disabled:e.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign Up Now"})}),(0,n.jsxs)(x.Z,{color:"textSecondary",variant:"body2",children:["Have an account?"," ",(0,n.jsx)(l(),{href:"/login",passHref:!0,children:(0,n.jsx)(Z.Z,{variant:"subtitle2",underline:"hover",children:"Sign In"})})]})]})]})})]})}}},function(e){e.O(0,[368,608,490,293,141,313,774,888,179],(function(){return a=5511,e(e.s=a);var a}));var a=e.O();_N_E=a}]);