(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{48189:function(e,t,n){Promise.resolve().then(n.bind(n,21469))},21469:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var r=n(57437),a=n(35937),u=n(30998),i=n(16463),o=n(2265),s=n(99240),c=n(74340),d=n(40191),h=n(95668),l=n(56532),m=n(1845),p=n(44651),v=n(57250),y=n(59662),x=n(86021),b=n(63095),j=n(28148),_=n(2842),f=n(9542),q=n(85475),N=n(20153),k=n(16638),g=n(79584),C=n.n(g),T=JSON.parse('[{"month":"January","quantity":120,"revenue":2400,"product":"Baldur\'s Gate 3"},{"month":"February","quantity":100,"revenue":2000,"product":"Cyberpunk 2077"},{"month":"March","quantity":150,"revenue":3000,"product":"The Witcher 3"},{"month":"April","quantity":130,"revenue":2600,"product":"Baldur\'s Gate 3"},{"month":"May","quantity":110,"revenue":2200,"product":"Cyberpunk 2077"},{"month":"June","quantity":140,"revenue":2800,"product":"The Witcher 3"},{"month":"July","quantity":160,"revenue":3200,"product":"Baldur\'s Gate 3"},{"month":"August","quantity":120,"revenue":2400,"product":"Cyberpunk 2077"},{"month":"September","quantity":130,"revenue":2600,"product":"The Witcher 3"},{"month":"October","quantity":140,"revenue":2800,"product":"Baldur\'s Gate 3"},{"month":"November","quantity":150,"revenue":3000,"product":"Cyberpunk 2077"},{"month":"December","quantity":160,"revenue":3200,"product":"The Witcher 3"},{"month":"January","quantity":110,"revenue":2200,"product":"Baldur\'s Gate 3"},{"month":"February","quantity":120,"revenue":2400,"product":"Cyberpunk 2077"},{"month":"March","quantity":130,"revenue":2600,"product":"The Witcher 3"},{"month":"April","quantity":140,"revenue":2800,"product":"Baldur\'s Gate 3"},{"month":"May","quantity":150,"revenue":3000,"product":"Cyberpunk 2077"},{"month":"June","quantity":160,"revenue":3200,"product":"The Witcher 3"},{"month":"July","quantity":100,"revenue":2000,"product":"Baldur\'s Gate 3"},{"month":"August","quantity":110,"revenue":2200,"product":"Cyberpunk 2077"},{"month":"September","quantity":120,"revenue":2400,"product":"The Witcher 3"},{"month":"October","quantity":130,"revenue":2600,"product":"Baldur\'s Gate 3"},{"month":"November","quantity":140,"revenue":2800,"product":"Cyberpunk 2077"},{"month":"December","quantity":150,"revenue":3000,"product":"The Witcher 3"},{"month":"January","quantity":160,"revenue":3200,"product":"Baldur\'s Gate 3"},{"month":"February","quantity":100,"revenue":2000,"product":"Cyberpunk 2077"},{"month":"March","quantity":110,"revenue":2200,"product":"The Witcher 3"},{"month":"April","quantity":120,"revenue":2400,"product":"Baldur\'s Gate 3"},{"month":"May","quantity":130,"revenue":2600,"product":"Cyberpunk 2077"},{"month":"June","quantity":140,"revenue":2800,"product":"The Witcher 3"}]');function W(){let{data:e,status:t}=(0,u.useSession)(),n=(0,i.useRouter)();if((0,o.useEffect)(()=>{"unauthenticated"===t&&n.push("/")},[t,n]),"loading"===t)return(0,r.jsx)("div",{children:"Loading..."});let g=[...new Set(T.map(e=>e.product))];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{}),(0,r.jsx)("div",{className:C().container,children:(0,r.jsx)(s.k,{flexDirection:"column",alignItems:"center",children:g.map(e=>{let t=T.filter(t=>t.product===e);return(0,r.jsxs)(c.xu,{mt:8,p:4,bg:"gray.100",borderRadius:"md",width:"100%",children:[(0,r.jsxs)(d.x,{fontSize:"40",fontWeight:"bold",color:"",mb:20,children:[e," Sales"]}),(0,r.jsxs)(j.w,{width:800,height:300,data:t,className:C().lineChart,children:[(0,r.jsx)(_.K,{dataKey:"month"}),(0,r.jsx)(f.B,{}),(0,r.jsx)(q.u,{}),(0,r.jsx)(N.D,{}),(0,r.jsx)(k.x,{type:"monotone",dataKey:"revenue",stroke:"#8884d8"}),(0,r.jsx)(k.x,{type:"monotone",dataKey:"quantity",stroke:"#82ca9d"})]}),(0,r.jsx)("div",{className:C().tableContainer,children:(0,r.jsx)(h.x,{mt:4,style:{width:"90%"},children:(0,r.jsxs)(l.i,{variant:"striped",className:C().tableProduct,children:[(0,r.jsx)(m.h,{children:(0,r.jsxs)(p.Tr,{textAlign:"left",children:[(0,r.jsx)(v.Th,{children:"Month"}),(0,r.jsx)(v.Th,{isNumeric:!0,children:"Quantity"}),(0,r.jsx)(v.Th,{isNumeric:!0,children:"Revenue"})]})}),(0,r.jsx)(y.p,{children:t.map((e,t)=>(0,r.jsxs)(p.Tr,{children:[(0,r.jsx)(x.Td,{children:e.month}),(0,r.jsx)(x.Td,{isNumeric:!0,children:e.quantity}),(0,r.jsx)(x.Td,{isNumeric:!0,children:e.revenue})]},t))}),(0,r.jsxs)(b.$,{children:[(0,r.jsxs)(p.Tr,{textAlign:"left",children:[(0,r.jsx)(v.Th,{children:"Month"}),(0,r.jsx)(v.Th,{isNumeric:!0,children:"Quantity"}),(0,r.jsx)(v.Th,{isNumeric:!0,children:"Revenue"})]}),(0,r.jsxs)(d.x,{size:"sm",children:[e," Sales"]})]})]})})})]},e)})})})]})}n(59904)},35937:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var r=n(57437),a=n(63917),u=n.n(a),i=n(87138),o=n(30998);n(59904);var s=n(47414);function c(){let{data:e}=(0,o.useSession)();return e?(0,r.jsxs)("nav",{className:u().navbar,children:[(0,r.jsxs)("div",{className:u().linksContainer,children:[(0,r.jsx)("a",{href:"/",children:(0,r.jsx)("img",{src:"/logo.png",alt:"Logo",className:u().logo})}),[{name:"dashboard",url:"/dashboard"},{name:"team",url:"/team"},{name:"workspaces",url:"/workspaces"}].map((e,t)=>(0,r.jsx)(i.default,{href:e.url,className:u().navLink,children:e.name},t))]}),(0,r.jsx)("div",{className:"logout-container",children:(0,r.jsx)(s.z,{colorScheme:"blue",className:u().navLink,onClick:o.signOut,children:"Logout"})})]}):(0,r.jsx)("nav",{className:u().navbar,children:(0,r.jsxs)("div",{className:u().linksContainer,children:[(0,r.jsx)("a",{href:"/",children:(0,r.jsx)("img",{src:"/logo.png",alt:"Logo",className:u().logo})}),(0,r.jsx)(i.default,{href:"/login",className:u().navLink,children:"Login"})]})})}},59904:function(){},79584:function(e){e.exports={tablebox:"dashboard_tablebox__VLrRa",container:"dashboard_container__Kdrrt",tableCaption:"dashboard_tableCaption__F_wzp",productText:"dashboard_productText__iYeqO",tableProduct:"dashboard_tableProduct__kGW4F",td:"dashboard_td__UNRAJ",tableContainer:"dashboard_tableContainer__XIu3f",lineChart:"dashboard_lineChart__T__jw"}},63917:function(e){e.exports={navbar:"Navbar_navbar__UMdIx",navLink:"Navbar_navLink__WmfVb",logo:"Navbar_logo__PiZmU",linksContainer:"Navbar_linksContainer__zKzpV"}}},function(e){e.O(0,[80,46,138,928,971,23,744],function(){return e(e.s=48189)}),_N_E=e.O()}]);