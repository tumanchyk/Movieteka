"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[474],{197:function(n,t,e){e.d(t,{Df:function(){return p},M1:function(){return l},XT:function(){return d},t2:function(){return f},tx:function(){return x}});var r=e(5861),i=e(4687),c=e.n(i),a=e(1243),o="4c232873f45eedb749cb12734938c628",s="https://api.themoviedb.org/3/",u="".concat(s,"trending/movie/day?api_key=").concat(o),p=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)(u);case 2:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("".concat(s,"movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,r=e.data.cast,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4474:function(n,t,e){e.r(t),e.d(t,{default:function(){return F}});var r,i,c,a,o,s,u,p,d,f,l,x,h=e(9439),v=e(7689),m=e(2791),Z=e(197),g=e(168),j=e(4934),w=e(1087),b=(0,j.Z)(w.OL)(r||(r=(0,g.Z)(["\ntext-decoration: none;\nmargin-right: 20px;\nmargin-top: 30px;\nfont-size: 20px;\ncolor: #eee;\n&.active{\n    color: #03dac6;\n    font-size: 30px;\n    font-weight: 700;\n}\n&:hover{\n    font-weight: 700;\n  }\n"]))),k=j.Z.div(i||(i=(0,g.Z)(["\ndisplay: flex;\nalign-items: flex-end;"]))),y=e(184),_=function(){return(0,y.jsxs)(k,{children:[(0,y.jsx)(b,{to:"cast",children:"Cast"}),(0,y.jsx)(b,{to:"reviews",children:"Reviews"})]})},z=e(9126),C=(0,j.Z)(w.rU)(c||(c=(0,g.Z)(["\nfont-size: 16px;\ndisplay: flex;\nalign-items: center;\ntext-decoration: none;\ncolor: #fff;\n&:hover{\n  color: #03dac6\n}\n\n"]))),R=(0,j.Z)(z.And)(a||(a=(0,g.Z)(["\nwidth: 20px;\nheight: 20px;\nmargin-right: 10px;\nfill: currentColor;\n"]))),O=j.Z.div(o||(o=(0,g.Z)(["\ndisplay: flex;\nmargin: 30px 0"]))),S=j.Z.div(s||(s=(0,g.Z)(["\nheight: 350px;\nmin-width: 250px;\nmax-width: 300px;\n"]))),G=j.Z.img(u||(u=(0,g.Z)(["\n display: block;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  "]))),T=j.Z.div(p||(p=(0,g.Z)(["\n   display: flex;\n   flex-direction: column;\n   justify-content: flex-start;\n   margin-left: 35px;\n   "]))),U=j.Z.h1(d||(d=(0,g.Z)(["\n   font-size: 36px;\n   margin-bottom: 20px;\n   "]))),q=j.Z.div(f||(f=(0,g.Z)(["\n   display: flex;\n   padding: 10px 0"]))),A=j.Z.h2(l||(l=(0,g.Z)(["\n   font-weight: 600;\n   font-size: 20px;\n   margin-right: 10px;\n   &:not(:last-child){\n    margin-bottom: 10px;\n   }"]))),D=j.Z.p(x||(x=(0,g.Z)(["\n   font-size: 20px;\n\n   &:not(:last-child){\n    margin-bottom: 10px;\n   }"]))),E=e(5094),F=function(){var n,t,e=(0,m.useState)({}),r=(0,h.Z)(e,2),i=r[0],c=r[1],a=(0,m.useState)([]),o=(0,h.Z)(a,2),s=o[0],u=o[1],p=(0,v.UO)().id,d=(0,v.TH)(),f=(0,m.useRef)(null!==(n=null===(t=d.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies");(0,m.useEffect)((function(){(0,Z.t2)(p).then((function(n){c(n),u(n.genres)}))}),[p]);var l=i.title,x=i.backdrop_path,g=i.overview,j=i.vote_average,w=i.release_date;return console.log(w),(0,y.jsxs)("div",{children:[(0,y.jsxs)(C,{to:f.current,children:[(0,y.jsx)(R,{})," Go back"]}),i?(0,y.jsxs)(O,{children:[(0,y.jsx)(S,{children:(0,y.jsx)(G,{src:x?"".concat("https://image.tmdb.org/t/p/w500").concat(x):E})}),(0,y.jsxs)(T,{children:[(0,y.jsx)(U,{children:l}),(0,y.jsxs)(q,{children:[(0,y.jsx)(A,{children:"Release:"}),(0,y.jsx)(D,{children:w})]}),(0,y.jsxs)(q,{children:[(0,y.jsx)(A,{children:"Genres:"}),(0,y.jsx)(D,{children:s.map((function(n){return n.name})).join(", ")})]}),j>0&&(0,y.jsxs)(q,{children:[(0,y.jsx)(A,{children:"Rating:"}),(0,y.jsxs)(D,{children:[" ",j.toFixed(1)]})]}),(0,y.jsx)(A,{children:"Overview"}),(0,y.jsx)(D,{children:g})]})]}):null,(0,y.jsx)(_,{}),(0,y.jsx)(m.Suspense,{children:(0,y.jsx)(v.j3,{})})]})}},5094:function(n,t,e){n.exports=e.p+"static/media/not-found-image.22bff5ce129d7674c04e.jpg"}}]);
//# sourceMappingURL=474.23c74586.chunk.js.map