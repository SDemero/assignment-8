(this["webpackJsonpassignment-8"]=this["webpackJsonpassignment-8"]||[]).push([[0],{13:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var n=o(0),s=o(1),l=o.n(s),c=o(7),i=o.n(c),r=(o(13),o(2)),a=o(3),u=o(5),d=o(4);var j=function(e){return Object(n.jsx)("td",{onMouseDown:e.mouseDown,onmouseUp:e.mouseUp,onMouseEnter:e.mouseEnter,onClick:e.changeToColor,children:Object(n.jsx)("div",{style:{width:"35px",height:"25px",border:"1.5px solid black"}})})},b=function(e){for(var t=[],o=0;o<e.numColumns;o++)t.push(Object(n.jsx)(j,{mouseDown:e.mouseDown,mouseUp:e.mouseUp,mouseEnter:e.mouseEnter,selectedColor:e.selectedColor,changeToColor:e.changeToColor}));return Object(n.jsx)("tr",{children:t})};var h=function(e){return Object(n.jsxs)("nav",{className:"navbar has-shadow",role:"navigation","aria-label":"main navigation",children:[Object(n.jsx)("div",{class:"navbar-start",children:Object(n.jsx)("div",{class:"navbar-item",children:Object(n.jsxs)("div",{class:"buttons",children:[Object(n.jsx)("div",{class:"button is-success",onClick:e.addColumn,children:"Add Column"}),Object(n.jsx)("div",{class:"button is-danger",onClick:e.removeColumn,children:"Remove Column"})]})})}),Object(n.jsx)("div",{children:Object(n.jsx)("div",{class:"navbar-item",children:Object(n.jsxs)("div",{class:"buttons",children:[Object(n.jsx)("div",{class:"button is-link",onClick:e.fillAll,children:"Fill All"}),Object(n.jsx)("div",{class:"button is-primary",onClick:e.fillMissing,children:"Fill All Uncolored"}),Object(n.jsx)("div",{class:"button is-warning",onClick:e.clearAll,children:"Clear All"}),Object(n.jsxs)("select",{className:"navbar-item has-dropdown is-hoverable",onChange:e.chooseColor,children:[Object(n.jsx)("option",{value:"#00008B",children:"blue"}),Object(n.jsx)("option",{value:"#8B4513",children:"brown"}),Object(n.jsx)("option",{value:"#DA70D6",children:"purple"})]})]})})}),Object(n.jsx)("div",{class:"navbar-end",children:Object(n.jsx)("div",{class:"navbar-item",children:Object(n.jsxs)("div",{class:"buttons",children:[Object(n.jsx)("div",{class:"button is-success",onClick:e.addRow,children:"Add Row"}),Object(n.jsx)("div",{class:"button is-danger",onClick:e.removeRow,children:"Remove Row"})]})})})]})},m=function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(){var e;return Object(r.a)(this,o),(e=t.call(this)).addRow=function(){e.setState({rows:e.state.rows+1})},e.addColumn=function(){e.setState({columns:e.state.columns+1})},e.removeRow=function(){e.setState({rows:e.state.rows-1})},e.removeColumn=function(){e.setState({columns:e.state.columns-1})},e.chooseColor=function(t){e.setState({color:t.target.value})},e.changeToColor=function(t){t.target.style.backgroundColor=e.state.color},e.mouseDown=function(t){e.setState({coloring:!0})},e.mouseUp=function(t){e.setState({coloring:!1})},e.mouseEnter=function(t){!0===e.state.coloring&&(t.target.style.backgroundColor=e.state.color)},e.fillAll=function(t){t.preventDefault();for(var o=document.getElementsByTagName("td"),n=0;n<o.length;n++)o[n].style.backgroundColor=e.state.color},e.fillMissing=function(t){t.preventDefault();for(var o=document.getElementsByTagName("td"),n=0;n<o.length;n++)""===o[n].style.backgroundColor&&(o[n].style.backgroundColor=e.state.color)},e.clearAll=function(e){e.preventDefault();for(var t=document.getElementsByTagName("td"),o=0;o<t.length;o++)t[o].style.backgroundColor=null},e.state={rows:1,columns:1,color:"#00008B",coloring:!1},e}return Object(a.a)(o,[{key:"render",value:function(){for(var e=[],t=0;t<this.state.rows;t++)e.push(Object(n.jsx)(b,{mouseDown:this.mouseDown,mouseUp:this.mouseUp,mouseEnter:this.mouseEnter,numColumns:this.state.columns,selectedColor:this.state.color,changeToColor:this.changeToColor}));return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(h,{chooseColor:this.chooseColor,fillAll:this.fillAll,fillMissing:this.fillMissing,clearAll:this.clearAll,addColumn:this.addColumn,removeColumn:this.removeColumn,addRow:this.addRow,removeRow:this.removeRow}),Object(n.jsx)("section",{className:"hero box",children:Object(n.jsx)("div",{className:"hero-body",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"columns is-centered",children:Object(n.jsx)("div",{className:"column is-5-tablet is-4-desktop is-3-widescreen",children:Object(n.jsx)("table",{className:"container section",children:e})})})})})})]})}}]),o}(s.Component),v=function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(){return Object(r.a)(this,o),t.apply(this,arguments)}return Object(a.a)(o,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(m,{})})}}]),o}(s.Component),g=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,15)).then((function(t){var o=t.getCLS,n=t.getFID,s=t.getFCP,l=t.getLCP,c=t.getTTFB;o(e),n(e),s(e),l(e),c(e)}))};i.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),g()}},[[14,1,2]]]);
//# sourceMappingURL=main.b459cd3a.chunk.js.map