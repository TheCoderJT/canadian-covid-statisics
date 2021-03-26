(this["webpackJsonpcanadian-covid-numbers"]=this["webpackJsonpcanadian-covid-numbers"]||[]).push([[0],{93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(11),s=a.n(r),i=a(136),o=a(130),d=a(132),l=a(133),j=a(37),b=a(12),m=a(127),u=Object(m.a)((function(e){return{appBar:{backgroundColor:"rgb(196, 12, 12)"},iconbutton:Object(b.a)({color:"white",fontSize:"2.25em",margin:"0 .5em"},e.breakpoints.down("xs"),{fontSize:"1em"}),toolBar:{margin:"0 auto"},heading:Object(b.a)({},e.breakpoints.down("xs"),{fontSize:"1em"})}})),h=a(4),p=function(){var e=u();return Object(h.jsx)(o.a,{className:e.appBar,position:"static",children:Object(h.jsxs)(d.a,{disableGutters:!0,className:e.toolBar,children:[Object(h.jsx)(j.a,{className:e.iconbutton}),Object(h.jsx)(l.a,{className:e.heading,variant:"h4",children:"Covid Stats For Canadian Provinces"}),Object(h.jsx)(j.a,{className:e.iconbutton})]})})},O=a(36),x=a(13),g=a(138),f=Object(m.a)((function(){return{autocomplete:{marginTop:"2em",marginBottom:"4em",margin:"0 auto"}}})),v=a(139),_=a(53),N=a.n(_),S=a(134),C=a(135),y=Object(m.a)((function(e){return{card:{display:"block",margin:"5em auto 10em auto",height:"600px",maxWidth:"800px",backgroundColor:e.palette.background.paper},card_provName:{fontFamily:"Hind Madurai, sans-serif",fontWeight:"bold",fontSize:"2.15em"},card_data:{fontSize:"1.75em",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium},card_date:{fontSize:"1.5em",display:"block",textAlign:"center"},card_date_grid:{marginTop:"1em"},card_dataValues:{color:"rgb(255, 71, 71)"},cardContent:{height:"100%",padding:"0",margin:"0"},grid_items:{height:"100%",backgroundColor:"rgba(0,0,1,0.10)"}}})),k=function(e){var t=e.provName,a=e.totalCases,c=e.activeCases,n=e.totalDeaths,r=e.totalRecovered,s=e.date,o=y();return Object(h.jsx)(S.a,{raised:!0,className:o.card,children:Object(h.jsx)(C.a,{elementTypd:"div",className:o.cardContent,children:Object(h.jsxs)(i.a,{className:o.grid_items,direction:"column",container:!0,justify:"space-around",alignItems:"center",children:[Object(h.jsxs)(i.a,{item:!0,children:[Object(h.jsx)(l.a,{className:o.card_provName,variant:"p",children:t}),Object(h.jsx)(i.a,{item:!0,className:o.card_date_grid,children:Object(h.jsxs)(l.a,{className:o.card_date,variant:"p",children:["Date: ",s]})})]}),Object(h.jsx)(i.a,{item:!0,zeroMinWidth:!0,children:Object(h.jsxs)(l.a,{className:o.card_data,variant:"p",children:["Total Cases: ",Object(h.jsx)("span",{className:o.card_dataValues,children:a})]})}),Object(h.jsx)(i.a,{item:!0,zeroMinWidth:!0,children:Object(h.jsxs)(l.a,{className:o.card_data,variant:"p",children:["Active Cases: ",Object(h.jsx)("span",{className:o.card_dataValues,children:c})]})}),Object(h.jsx)(i.a,{item:!0,zeroMinWidth:!0,children:Object(h.jsxs)(l.a,{className:o.card_data,variant:"p",children:["Total Deaths: ",Object(h.jsx)("span",{className:o.card_dataValues,children:n})]})}),Object(h.jsx)(i.a,{item:!0,zeroMinWidth:!0,children:Object(h.jsxs)(l.a,{className:o.card_data,variant:"p",children:["Total Recovered: ",Object(h.jsx)("span",{className:o.card_dataValues,children:r})]})})]})})})},z=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(x.a)(r,2),i=s[0],o=s[1],d=Object(c.useState)(!1),l=Object(x.a)(d,2),j=l[0],b=l[1],m=Object(c.useState)(""),u=Object(x.a)(m,2),p=u[0],_=u[1],S=Object(c.useState)(""),C=Object(x.a)(S,2),y=C[0],z=C[1],B=Object(c.useState)(""),W=Object(x.a)(B,2),w=W[0],M=W[1],I=Object(c.useState)(""),L=Object(x.a)(I,2),T=L[0],D=L[1],F=Object(c.useState)(""),V=Object(x.a)(F,2),A=V[0],R=V[1],E=f();Object(c.useEffect)((function(){N.a.get("https://api.opencovid.ca/summary").then((function(e){n(e.data.summary)})).catch((function(e){return console.error(e.message)}))}),[p,y,w,T,A]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v.a,{className:E.autocomplete,autoSelect:!0,fullWidth:!0,onChange:function(e){b(!0);for(var t=0;t<a.length;t++)a[t].province===e.target.textContent&&(o(a[t].province),_(parseInt(a[t].active_cases).toLocaleString()),z(parseInt(a[t].cumulative_cases).toLocaleString()),M(parseInt(a[t].cumulative_deaths).toLocaleString()),D(parseInt(a[t].cumulative_recovered).toLocaleString()),R(a[t].date))},options:a,getOptionLabel:function(e){return e.province},style:{width:300},renderInput:function(e){return Object(h.jsx)(g.a,Object(O.a)(Object(O.a)({},e),{},{label:"Search Provinces",variant:"outlined"}))}}),j&&Object(h.jsx)(k,{provName:i,totalCases:y,activeCases:p,totalDeaths:w,totalRecovered:T,date:A})]})},B=Object(m.a)((function(){return{appBar:{backgroundColor:"rgb(196, 12, 12)",position:"fixed",left:"0",bottom:"0",right:"0",height:"60px",width:"100%"},toolBar:{flexDirection:"column",justifyContent:"space-around",alignContent:"center"},footer__text:{textAlign:"center"},footer__anchor:{color:"rgb(55, 55, 55)",cursor:"pointer",marginLeft:"0.25em",fontStyle:"none",textDecoration:"none"}}})),W=function(){var e=B();return Object(h.jsx)(o.a,{className:e.appBar,position:"static",children:Object(h.jsx)(d.a,{className:e.toolBar,children:Object(h.jsxs)(l.a,{className:e.footer__text,variant:"p",children:["This website uses data from",Object(h.jsx)("a",{className:e.footer__anchor,href:"https://opencovid.ca/",target:"_blank",rel:"noreferrer",children:"https://opencovid.ca"}),"and used under",Object(h.jsx)("a",{className:e.footer__anchor,href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noreferrer",children:"CC License"})]})})})},w=Object(m.a)((function(){return{content_container:{height:"100%"}}})),M=function(){w();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(i.a,{container:!0,direction:"column",children:Object(h.jsx)(i.a,{item:!0,children:Object(h.jsx)(p,{})})}),Object(h.jsx)(i.a,{item:!0,container:!0,justify:"center",zeroMinWidth:!0,children:Object(h.jsx)(i.a,{item:!0,xs:12,sm:8,children:Object(h.jsx)(z,{})})}),Object(h.jsx)(W,{})]})};a(93);s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.233e2874.chunk.js.map