(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(4),o=s.n(n),c=s(2),r=s(5),i=s(6),a=s(8),l=s(7),u=s(1),b=s.n(u),p=(s(13),s(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(r.a)(this,s);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={goods:[].concat(d),isVisible:!1},t.showGoods=function(){t.setState({isVisible:!0})},t.reverse=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods).reverse()}}))},t.sort=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods).sort()}}))},t.sortByLength=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods).sort((function(t,e){return t.length-e.length}))}}))},t.reset=function(){t.setState((function(){return{goods:[].concat(d)}}))},t}return Object(i.a)(s,[{key:"render",value:function(){var t=this.state,e=t.goods,s=t.isVisible;return Object(p.jsx)("div",{className:"App",children:s?Object(p.jsxs)("div",{className:"App__goods",children:[Object(p.jsx)("h1",{className:"App__title",children:"Goods"}),Object(p.jsx)("ul",{className:"App__list",children:e.map((function(t){return Object(p.jsx)("li",{className:"App__listItem",children:t},t)}))}),Object(p.jsxs)("div",{className:"App__buttons",children:[Object(p.jsx)("button",{className:"App__button",type:"button",onClick:this.reverse,children:"Reverse"}),Object(p.jsx)("button",{className:"App__button",type:"button",onClick:this.sort,children:"Sort"}),Object(p.jsx)("button",{className:"App__button",type:"button",onClick:this.sortByLength,children:"Sort by length"}),Object(p.jsx)("button",{className:"App__button",type:"button",onClick:this.reset,children:"Reset"})]})]}):Object(p.jsx)("button",{className:"App__button App__button--start",type:"button",onClick:this.showGoods,children:"Start"})})}}]),s}(b.a.Component),j=h;o.a.render(Object(p.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ea8b01e7.chunk.js.map