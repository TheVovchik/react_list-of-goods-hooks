(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c,s=n(8),r=n.n(s),i=n(6),o=n(9),a=n(1),l=n(4),u=n.n(l),b=(n(15),n(16),n(20)),j=n(7),h=n(10),O=n(0),d=["children"],N=function(t){var e=t.children,n=Object(h.a)(t,d);return Object(O.jsx)("button",Object(j.a)(Object(j.a)({type:"button"},n),{},{children:e}))},f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var E=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],s=e[1],r=Object(a.useState)(c.NONE),l=Object(i.a)(r,2),j=l[0],h=l[1],d=function(t,e,n){var s=Object(o.a)(t).sort((function(t,n){switch(e){case c.ALPABET:return t.localeCompare(n);case c.LENGTH:return t.length-n.length;default:return 0}}));return n?s.reverse():s}(f,j,n),E=n||j!==c.NONE;return Object(O.jsxs)("div",{className:"section content",children:[Object(O.jsxs)("div",{className:"buttons",children:[Object(O.jsx)(N,{className:u()("button","is-info",{"is-light":j!==c.ALPABET}),onClick:function(){return h(c.ALPABET)},children:"Sort alphabetically"}),Object(O.jsx)(N,{className:u()("button","is-success",{"is-light":j!==c.LENGTH}),onClick:function(){return h(c.LENGTH)},children:"Sort by length"}),Object(O.jsx)(N,{className:u()("button","is-warning",{"is-light":!n}),onClick:function(){s((function(t){return!t}))},children:"Reverse"}),E&&Object(O.jsx)(N,{className:"button is-danger is-light",onClick:function(){s(!1),h(c.NONE)},children:"Reset"})]}),Object(O.jsx)("ul",{children:Object(O.jsx)("ul",{children:d.map((function(t){return Object(O.jsx)("li",{"data-cy":"Good",children:t},Object(b.a)())}))})})]})};r.a.render(Object(O.jsx)(E,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.36327ffe.chunk.js.map