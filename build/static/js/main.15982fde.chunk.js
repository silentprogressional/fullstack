(this.webpackJsonpfullstack1=this.webpackJsonpfullstack1||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),u=n(4),l=n(2),i=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a))},m=function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)},f=n(3),s=n.n(f),p="http://localhost:3001/api/notes",d=function(){var t=s.a.get(p),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},v=function(t){return s.a.post(p,t).then((function(t){return t.data}))},b=function(t,e){return s.a.put("".concat(p,"/").concat(t),e).then((function(t){return t.data}))},E=function(){return r.a.createElement("div",{style:{backgroundColor:"black",color:"green",fontStyle:"italic",fontSize:16,paddingBottom:10}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2020"))},h=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(""),f=Object(l.a)(c,2),s=f[0],p=f[1],h=Object(a.useState)(!0),g=Object(l.a)(h,2),k=g[0],O=g[1],j=Object(a.useState)(null),S=Object(l.a)(j,2),y=S[0],w=S[1];Object(a.useEffect)((function(){d().then((function(t){o(t)}))}),[]);var C=k?n:n.filter((function(t){return t.important}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(m,{message:y}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return O(!k)}},"show ",k?"important":"all")),r.a.createElement("ul",null,C.map((function(t){return r.a.createElement(i,{key:t.id,note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),a=Object(u.a)(Object(u.a)({},e),{},{important:!e.important});b(t,a).then((function(e){o(n.map((function(n){return n.id!==t?n:e})))})).catch((function(a){w("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3),o(n.filter((function(e){return e.id!==t})))}))}(t.id)}})}))),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:s,date:(new Date).toISOString(),important:Math.random()<.5};v(e).then((function(t){o(n.concat(t)),p("")}))}},r.a.createElement("input",{value:s,onChange:function(t){console.log(t.target.value),p(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(E,null))};n(37);c.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.15982fde.chunk.js.map