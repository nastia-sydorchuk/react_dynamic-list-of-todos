(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var s,a=c(8),n=c.n(a),l=c(7),r=c(2),i=c(3),o=c.n(i),d=c(1),j=(c(14),c(15),c(4)),u=c(5),b=c.n(u),h=c(0),m=function(e){var t=e.todos,c=e.selectTodo,s=e.selectedTodo;return Object(h.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"todo",className:b()({"has-background-info-light":s===e.id}),children:[Object(h.jsx)("td",{className:"is-vcentered",children:e.id}),Object(h.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(h.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("td",{className:"is-vcentered is-expanded",children:Object(h.jsx)("p",{className:b()({"has-text-success":e.completed},{"has-text-danger":!e.completed}),children:e.title})}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e.id)},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:b()("far",{"fa-eye":s!==e.id},{"fa-eye-slash":s===e.id})})})})})]},e.id)}))})]})};!function(e){e.all="All",e.completed="Completed",e.active="Active"}(s||(s={}));var O=function(e){var t=e.selectValue,c=e.setSelectValue,a=e.setAppliedQuery,n=Object(d.useState)(""),l=Object(r.a)(n,2),i=l[0],o=l[1],u=Object(d.useCallback)(Object(j.debounce)(a,1e3),[]);return Object(h.jsxs)("form",{className:"field has-addons",children:[Object(h.jsx)("p",{className:"control",children:Object(h.jsx)("span",{className:"select",children:Object(h.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return c(e.target.value)},children:[Object(h.jsx)("option",{value:s.all,children:s.all}),Object(h.jsx)("option",{value:s.active,children:s.active}),Object(h.jsx)("option",{value:s.completed,children:s.completed})]})})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:i,onChange:function(e){o(e.target.value),u(e.target.value)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),i&&Object(h.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(h.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){o(""),a("")}})})]})]})};function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}var f=function(){return x("/todos")},p=(c(19),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),v=function(e){var t=e.todo,c=e.unselectTodo,s=Object(d.useState)(),a=Object(r.a)(s,2),n=a[0],l=a[1];return Object(d.useEffect)((function(){var e;(e=t.userId,x("/users/".concat(e))).then((function(e){return l(e)}))}),[]),Object(h.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(h.jsx)("div",{className:"modal-background"}),n?Object(h.jsxs)("div",{className:"modal-card",children:[Object(h.jsxs)("header",{className:"modal-card-head",children:[Object(h.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(h.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c()}})]}),Object(h.jsxs)("div",{className:"modal-card-body",children:[Object(h.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(h.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(h.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(h.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(h.jsx)("a",{href:n.email,children:n.name})]})]})]}):Object(h.jsx)(p,{})]})},N=function(){var e=Object(d.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(!0),i=Object(r.a)(n,2),u=i[0],b=i[1],x=Object(d.useState)(null),N=Object(r.a)(x,2),y=N[0],g=N[1],k=Object(d.useState)(s.all),w=Object(r.a)(k,2),S=w[0],C=w[1],T=Object(d.useState)(""),E=Object(r.a)(T,2),_=E[0],A=E[1];Object(d.useEffect)((function(){f().then((function(e){a(e),b(!1)}))}),[]);var L=function(e){return e.filter((function(e){switch(S){case s.completed:return e.completed;case s.active:return!e.completed;default:return e}}))};return Object(d.useMemo)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,a(L(t));case 4:case"end":return e.stop()}}),e)}))),[S]),Object(d.useMemo)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,a(t.filter((function(e){return e.title.toLowerCase().includes(_.toLowerCase())})));case 4:case"end":return e.stop()}}),e)}))),[_]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("h1",{className:"title",children:"Todos:"}),Object(h.jsxs)("div",{className:"block",children:[Object(h.jsx)(O,{selectValue:S,setSelectValue:function(e){return C(e)},setAppliedQuery:A}),Object(h.jsx)("button",{type:"button",className:"button",onClick:function(){return a(Object(j.shuffle)(c))},children:"Randomize"})]}),Object(h.jsxs)("div",{className:"block",children:[u&&Object(h.jsx)(p,{}),Object(h.jsx)(m,{todos:c,selectedTodo:y,selectTodo:function(e){return g(e)}})]})]})})}),y&&Object(h.jsx)(v,{todo:c[y-1],unselectTodo:function(){return g(null)}})]})};n.a.render(Object(h.jsx)(N,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.830a03cb.chunk.js.map