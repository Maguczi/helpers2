(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{754:function(r,t,e){"use strict";e.d(t,{Z:function(){return P}});var n=e(3366),a=e(7462),i=e(7294),o=e(6010),s=e(4780),c=e(917),l=e(6622),u=e(8884),h=e(1719),p=e(4867);function f(r){return(0,p.Z)("MuiCircularProgress",r)}(0,e(1588).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var d=e(5893);const g=["className","color","disableShrink","size","style","thickness","value","variant"];let v,m,y,x,Z=r=>r;const C=44,w=(0,c.F4)(v||(v=Z`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),b=(0,c.F4)(m||(m=Z`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),k=(0,h.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:e}=r;return[t.root,t[e.variant],t[`color${(0,l.Z)(e.color)}`]]}})((({ownerState:r,theme:t})=>(0,a.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:t.transitions.create("transform")},"inherit"!==r.color&&{color:(t.vars||t).palette[r.color].main})),(({ownerState:r})=>"indeterminate"===r.variant&&(0,c.iv)(y||(y=Z`
      animation: ${0} 1.4s linear infinite;
    `),w))),S=(0,h.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,t)=>t.svg})({display:"block"}),j=(0,h.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,t)=>{const{ownerState:e}=r;return[t.circle,t[`circle${(0,l.Z)(e.variant)}`],e.disableShrink&&t.circleDisableShrink]}})((({ownerState:r,theme:t})=>(0,a.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:r})=>"indeterminate"===r.variant&&!r.disableShrink&&(0,c.iv)(x||(x=Z`
      animation: ${0} 1.4s ease-in-out infinite;
    `),b)));var P=i.forwardRef((function(r,t){const e=(0,u.Z)({props:r,name:"MuiCircularProgress"}),{className:i,color:c="primary",disableShrink:h=!1,size:p=40,style:v,thickness:m=3.6,value:y=0,variant:x="indeterminate"}=e,Z=(0,n.Z)(e,g),w=(0,a.Z)({},e,{color:c,disableShrink:h,size:p,thickness:m,value:y,variant:x}),b=(r=>{const{classes:t,variant:e,color:n,disableShrink:a}=r,i={root:["root",e,`color${(0,l.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(e)}`,a&&"circleDisableShrink"]};return(0,s.Z)(i,f,t)})(w),P={},M={},O={};if("determinate"===x){const r=2*Math.PI*((C-m)/2);P.strokeDasharray=r.toFixed(3),O["aria-valuenow"]=Math.round(y),P.strokeDashoffset=`${((100-y)/100*r).toFixed(3)}px`,M.transform="rotate(-90deg)"}return(0,d.jsx)(k,(0,a.Z)({className:(0,o.Z)(b.root,i),style:(0,a.Z)({width:p,height:p},M,v),ownerState:w,ref:t,role:"progressbar"},O,Z,{children:(0,d.jsx)(S,{className:b.svg,ownerState:w,viewBox:"22 22 44 44",children:(0,d.jsx)(j,{className:b.circle,style:P,ownerState:w,cx:C,cy:C,r:(C-m)/2,fill:"none",strokeWidth:m})})}))}))},9630:function(r,t,e){"use strict";e.d(t,{Z:function(){return x}});var n=e(3366),a=e(7462),i=e(7294),o=e(6010),s=e(9707),c=e(4780),l=e(1719),u=e(8884),h=e(6622),p=e(4867);function f(r){return(0,p.Z)("MuiTypography",r)}(0,e(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var d=e(5893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:e}=r;return[t.root,e.variant&&t[e.variant],"inherit"!==e.align&&t[`align${(0,h.Z)(e.align)}`],e.noWrap&&t.noWrap,e.gutterBottom&&t.gutterBottom,e.paragraph&&t.paragraph]}})((({theme:r,ownerState:t})=>(0,a.Z)({margin:0},t.variant&&r.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),m={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var x=i.forwardRef((function(r,t){const e=(0,u.Z)({props:r,name:"MuiTypography"}),i=(r=>y[r]||r)(e.color),l=(0,s.Z)((0,a.Z)({},e,{color:i})),{align:p="inherit",className:x,component:Z,gutterBottom:C=!1,noWrap:w=!1,paragraph:b=!1,variant:k="body1",variantMapping:S=m}=l,j=(0,n.Z)(l,g),P=(0,a.Z)({},l,{align:p,color:i,className:x,component:Z,gutterBottom:C,noWrap:w,paragraph:b,variant:k,variantMapping:S}),M=Z||(b?"p":S[k]||m[k])||"span",O=(r=>{const{align:t,gutterBottom:e,noWrap:n,paragraph:a,variant:i,classes:o}=r,s={root:["root",i,"inherit"!==r.align&&`align${(0,h.Z)(t)}`,e&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,c.Z)(s,f,o)})(P);return(0,d.jsx)(v,(0,a.Z)({as:M,ref:t,ownerState:P,className:(0,o.Z)(O.root,x)},j))}))},5166:function(r,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-in/confirm",function(){return e(9985)}])},6788:function(r,t,e){"use strict";e.d(t,{T:function(){return h}});var n=e(6042),a=e(9396),i=e(9534),o=e(7297),s=e(5893),c=e(5697),l=e.n(c);function u(){var r=(0,o.Z)([""]);return u=function(){return r},r}var h=(0,e(1719).ZP)((function(r){var t=r.variant,e=(0,i.Z)(r,["variant"]),o="light"===t?"#C1C4D6":"#5048E5";return(0,s.jsxs)("svg",(0,a.Z)((0,n.Z)({width:"42",height:"42",viewBox:"0 0 42 42",xmlns:"http://www.w3.org/2000/svg"},e),{children:[(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.6744 4.50247L31.9038 9.66459C32.117 9.78381 32.2944 9.95738 32.4178 10.1674C32.5413 10.3775 32.6064 10.6164 32.6064 10.8597C32.6064 11.1031 32.5413 11.342 32.4178 11.5521C32.2944 11.7621 32.117 11.9357 31.9038 12.0549L22.6745 17.2172C22.0854 17.5467 21.4212 17.7198 20.7456 17.7198C20.0698 17.7198 19.4056 17.5467 18.8166 17.2172L9.5873 12.0549C9.37415 11.9357 9.1967 11.7621 9.0732 11.5521C8.94971 11.342 8.8846 11.1031 8.8846 10.8597C8.8846 10.6164 8.94971 10.3775 9.0732 10.1674C9.1967 9.95738 9.37415 9.78381 9.5873 9.66459L18.8166 4.50247C19.4056 4.17301 20.0698 4 20.7456 4C21.4212 4 22.0854 4.17301 22.6744 4.50247Z",fill:o}),(0,s.jsx)("path",{opacity:"0.7",d:"M22.6244 9.34853L35.8422 16.7415C36.0554 16.8607 36.2328 17.0343 36.3563 17.2443C36.4798 17.4544 36.5449 17.6933 36.5449 17.9366C36.5449 18.18 36.4798 18.419 36.3563 18.629C36.2328 18.8391 36.0554 19.0126 35.8422 19.1319L22.6244 26.5248C22.0355 26.8541 21.3712 27.0272 20.6956 27.0272C20.0199 27.0272 19.3557 26.8541 18.7667 26.5248L5.54893 19.1319C5.33578 19.0126 5.15833 18.8391 5.03483 18.629C4.91133 18.419 4.84623 18.18 4.84623 17.9366C4.84623 17.6933 4.91133 17.4544 5.03483 17.2443C5.15833 17.0343 5.33578 16.8607 5.54893 16.7415L18.7667 9.34853C19.3557 9.01916 20.0199 8.84615 20.6956 8.84615C21.3712 8.84615 22.0355 9.01916 22.6244 9.34853Z",fill:o}),(0,s.jsx)("path",{opacity:"0.4",d:"M22.9257 14.1939L41.2984 24.4703C41.5113 24.5894 41.6884 24.7626 41.8117 24.9724C41.935 25.182 42 25.4206 42 25.6636C42 25.9065 41.935 26.1451 41.8117 26.3548C41.6884 26.5645 41.5113 26.7378 41.2984 26.8568L22.9257 37.1329C22.3377 37.4618 21.6745 37.6346 21 37.6346C20.3254 37.6346 19.6623 37.4618 19.0743 37.1329L0.701542 26.8568C0.488743 26.7378 0.311581 26.5645 0.188286 26.3548C0.0649948 26.1451 0 25.9065 0 25.6636C0 25.4206 0.0649948 25.182 0.188286 24.9724C0.311581 24.7626 0.488743 24.5894 0.701542 24.4703L19.0743 14.1939C19.6623 13.8651 20.3254 13.6923 21 13.6923C21.6745 13.6923 22.3377 13.8651 22.9257 14.1939Z",fill:o})]}))}))(u());h.defaultProps={variant:"primary"},h.propTypes={variant:l().oneOf(["light","primary"])}},9985:function(r,t,e){"use strict";e.r(t);var n=e(7568),a=e(414),i=e(5893),o=e(7294),s=e(1163),c=e.n(s),l=e(1664),u=e.n(l),h=e(1953),p=e(754),f=e(9630),d=e(6788),g=e(5462),v=e(1486);t.default=function(){var r=(0,g.Eu)(),t=(0,o.useRef)(!1),e=(0,o.useState)(!0),s=e[0],l=e[1],m=(0,o.useState)(""),y=m[0],x=m[1],Z=function(){var e=(0,n.Z)((function(){var e,n,i,o;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:if(t.current)return[2];if(t.current=!0,!v.P)return x("Zalter authentication not enabled"),l(!1),[2];if(!(e=window.location.hash.substring(1).split("=")[1]))return c().push("/").catch(console.error),[2];a.label=1;case 1:return a.trys.push([1,3,,4]),n={},[4,v.I.signInWithLink("finalize",(n.token=e,n))];case 2:return a.sent(),i={},r.signIn(i),c().push("/").catch(console.error),[3,4];case 3:return o=a.sent(),console.error(o),x(o.message||"Something went wrong"),l(!1),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){Z().catch(console.error)}),[]),s?(0,i.jsx)(h.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",p:3},children:(0,i.jsx)(p.Z,{})}):y?(0,i.jsxs)(h.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",p:3},children:[(0,i.jsx)(h.Z,{sx:{p:3},children:(0,i.jsx)(u(),{href:"/",passHref:!0,children:(0,i.jsx)("a",{children:(0,i.jsx)(d.T,{sx:{height:42,width:42}})})})}),(0,i.jsx)(f.Z,{sx:{mb:1},variant:"h4",children:"Oops!"}),(0,i.jsx)(f.Z,{variant:"body2",children:y})]}):null}},1163:function(r,t,e){r.exports=e(387)},9534:function(r,t,e){"use strict";function n(r,t){if(null==r)return{};var e,n,a=function(r,t){if(null==r)return{};var e,n,a={},i=Object.keys(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||(a[e]=r[e]);return a}(r,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(r,e)&&(a[e]=r[e])}return a}e.d(t,{Z:function(){return n}})},7297:function(r,t,e){"use strict";function n(r,t){return t||(t=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(t)}}))}e.d(t,{Z:function(){return n}})}},function(r){r.O(0,[368,774,888,179],(function(){return t=5166,r(r.s=t);var t}));var t=r.O();_N_E=t}]);