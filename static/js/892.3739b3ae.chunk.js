"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[892],{197:function(n,e,t){t.d(e,{Df:function(){return p},M1:function(){return f},XT:function(){return l},t2:function(){return d},tx:function(){return x}});var r=t(5861),i=t(4687),c=t.n(i),a=t(1243),o="4c232873f45eedb749cb12734938c628",s="https://api.themoviedb.org/3/",u="".concat(s,"trending/movie/day?api_key=").concat(o),p=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)(u);case 2:return e=n.sent,t=e.data.results,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(e));case 2:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("".concat(s,"movie/").concat(e,"?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(o));case 2:return t=n.sent,r=t.data.cast,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(o));case 2:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},8892:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,i,c,a,o,s,u,p,l,d,f,x,h=t(9439),v=t(7689),m=t(2791),g=t(197),j=t(168),Z=t(4934),w=t(1087),b=(0,Z.Z)(w.OL)(r||(r=(0,j.Z)(["\ntext-decoration: none;\nmargin-right: 20px;\nmargin-top: 30px;\nfont-size: 20px;\ncolor: #eee;\n&.active{\n    color: #03dac6;\n    font-size: 30px;\n    font-weight: 700;\n}\n&:hover{\n    font-weight: 700;\n  }\n"]))),k=Z.Z.div(i||(i=(0,j.Z)(["\ndisplay: flex;\nalign-items: flex-end;"]))),y=t(184),_=function(){return(0,y.jsxs)(k,{children:[(0,y.jsx)(b,{to:"cast",children:"Cast"}),(0,y.jsx)(b,{to:"reviews",children:"Reviews"})]})},z=t(9126),C=(0,Z.Z)(w.rU)(c||(c=(0,j.Z)(["\nfont-size: 16px;\ndisplay: flex;\nalign-items: center;\ntext-decoration: none;\ncolor: #fff;\n&:hover{\n  color: #03dac6\n}\n\n"]))),R=(0,Z.Z)(z.And)(a||(a=(0,j.Z)(["\nwidth: 20px;\nheight: 20px;\nmargin-right: 10px;\nfill: currentColor;\n"]))),O=Z.Z.div(o||(o=(0,j.Z)(["\ndisplay: flex;\nmargin: 30px 0"]))),G=Z.Z.div(s||(s=(0,j.Z)(["\nheight: 350px;\nmin-width: 250px;\nmax-width: 300px;\n"]))),S=Z.Z.img(u||(u=(0,j.Z)(["\ndisplay: block;\nheight: 100%;\nwidth: 100%;\nobject-fit: cover;\n"]))),T=Z.Z.div(p||(p=(0,j.Z)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: flex-start;\nmargin-left: 35px;\n"]))),U=Z.Z.h1(l||(l=(0,j.Z)(["\nfont-size: 36px;\nmargin-bottom: 20px;\n"]))),q=Z.Z.div(d||(d=(0,j.Z)(["\ndisplay: flex;\npadding: 10px 0"]))),A=Z.Z.h2(f||(f=(0,j.Z)(["\nfont-weight: 600;\nfont-size: 20px;\nmargin-right: 10px;\n&:not(:last-child){\nmargin-bottom: 10px;\n}"]))),D=Z.Z.p(x||(x=(0,j.Z)(["\nfont-size: 20px;\n\n&:not(:last-child){\nmargin-bottom: 10px;\n}"]))),E=function(n){return n.substring(0,4)},F=t(5094),H=function(n){var e=n.item;return console.log(e),(0,y.jsxs)(O,{children:[(0,y.jsx)(G,{children:(0,y.jsx)(S,{src:e.backdrop_path?"".concat("https://image.tmdb.org/t/p/w500").concat(e.backdrop_path):F})}),(0,y.jsxs)(T,{children:[(0,y.jsx)(U,{children:e.title}),(0,y.jsxs)(q,{children:[(0,y.jsx)(A,{children:"Release:"}),(0,y.jsx)(D,{children:e.release_date?E(e.release_date):null})]}),(0,y.jsxs)(q,{children:[(0,y.jsx)(A,{children:"Country:"}),(0,y.jsx)(D,{children:e.production_countries?e.production_countries.map((function(n){return n.name})).join(", "):null})]}),(0,y.jsxs)(q,{children:[(0,y.jsx)(A,{children:"Genres:"}),(0,y.jsx)(D,{children:e.genres?e.genres.map((function(n){return n.name})).join(", "):null})]}),e.vote_average>0&&(0,y.jsxs)(q,{children:[(0,y.jsx)(A,{children:"Rating:"}),(0,y.jsxs)(D,{children:[" ",e.vote_average.toFixed(1)]})]}),(0,y.jsx)(A,{children:"Overview"}),(0,y.jsx)(D,{children:e.overview})]})]})},L=function(){var n,e,t=(0,m.useState)({}),r=(0,h.Z)(t,2),i=r[0],c=r[1],a=(0,v.UO)().id,o=(0,v.TH)(),s=(0,m.useRef)(null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");return(0,m.useEffect)((function(){(0,g.t2)(a).then((function(n){c(n)}))}),[a]),(0,y.jsxs)("div",{children:[(0,y.jsxs)(C,{to:s.current,children:[(0,y.jsx)(R,{})," Go back"]}),i?(0,y.jsx)(H,{item:i}):null,(0,y.jsx)(_,{}),(0,y.jsx)(m.Suspense,{children:(0,y.jsx)(v.j3,{})})]})}},5094:function(n,e,t){n.exports=t.p+"static/media/not-found-image.22bff5ce129d7674c04e.jpg"}}]);
//# sourceMappingURL=892.3739b3ae.chunk.js.map