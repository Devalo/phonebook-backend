(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(4),r=t(2),l=t(0),u=t.n(l),c=t(14),o=t.n(c),m=t(3),i=t.n(m),d="/api/persons",s=function(){return i.a.get(d).then((function(e){return e.data}))},f=function(e){return i.a.post(d,e).then((function(e){return e.data}))},E=function(e){return i.a.delete("".concat(d,"/").concat(e))},h=function(e,n){return i.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},b=(t(37),function(){var e=Object(l.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],o=Object(l.useState)(""),m=Object(r.a)(o,2),i=m[0],d=m[1],b=Object(l.useState)(""),y=Object(r.a)(b,2),O=y[0],w=y[1],k=Object(l.useState)(t),C=Object(r.a)(k,2),N=C[0],S=C[1],P=Object(l.useState)(null),B=Object(r.a)(P,2),A=B[0],F=B[1];Object(l.useEffect)((function(){s().then((function(e){c(e)}))}),[]);var I=function(e,n){var r=Object(a.a)(Object(a.a)({},e),{},{number:n});window.confirm("".concat(e.name," is already added to phonebook. Update number?"))&&(h(e.id,r).then((function(n){c(t.map((function(t){return t.id!==e.id?t:n})))})).catch((function(n){F("".concat(e.name," has been has already been removed from the server"))})),F("Entry updated"),setTimeout((function(){F(null)}),3e3))};Object(l.useEffect)((function(){S(t)}),[t]);return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(j,{message:A}),u.a.createElement(p,{handleSearch:function(e){e&&S(Object.values(t).filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())})))}}),u.a.createElement(v,{persons:t,addPerson:function(e){e.preventDefault();for(var n=document.getElementById("name"),a=document.getElementById("num"),r={},l=0;l<t.length;l++)if(t[l].name===i&&0!==t.length)return console.log("same number",r.number),I(t[l],O);f(r={name:i,number:O}).then((function(e){c(t.concat(e))})).catch((function(e){console.log(e),console.log(e.response.data.error),F(e.response.data.error)})),n.value="",a.value="",F("added ".concat(i))},handlePersonChange:function(e){d(e.target.value)},handleNumChange:function(e){w(e.target.value)}}),u.a.createElement(g,{persons:N,deleteEntry:function(e){if(window.confirm("Are you sure you want to delete?")){E(e);var n=t.filter((function(n){return n.id!==e}));c(n),F("Entry deleted"),setTimeout((function(){F(null)}),3e3)}}}))}),p=function(e){return u.a.createElement("form",null,u.a.createElement("div",null,u.a.createElement("input",{onChange:e.handleSearch})))},v=function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",null,"Add new to phonebook"),u.a.createElement("form",{onSubmit:e.addPerson},u.a.createElement("div",null,"name: ",u.a.createElement("input",{value:e.newName,onChange:e.handlePersonChange,id:"name"})),u.a.createElement("div",null,"number: ",u.a.createElement("input",{value:e.newNumber,onChange:e.handleNumChange,id:"num"})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"Add"))))},g=function(e){var n=e.persons,t=e.deleteEntry;return u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",null,"Numbers"),u.a.createElement("table",null,u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Name"),u.a.createElement("th",null,"Number"))),u.a.createElement("tbody",null,n.map((function(e){return u.a.createElement("tr",{key:e.name},u.a.createElement(y,{person:e,key:e.id,deleteEntry:t}))})))))},y=function(e){var n=e.person,t=e.deleteEntry;return u.a.createElement(u.a.Fragment,null,u.a.createElement("td",null,n.name),u.a.createElement("td",null,n.number),u.a.createElement("td",null,u.a.createElement("button",{id:"deleteBtn",onClick:function(){return t(n.id)}},"Delete")))},j=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"notification"},n)};o.a.render(u.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.33a8e9b7.chunk.js.map