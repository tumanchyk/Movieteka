"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{197:function(n,t,e){e.d(t,{Df:function(){return p},M1:function(){return l},XT:function(){return f},t2:function(){return d},tx:function(){return h}});var r=e(5861),a=e(4687),i=e.n(a),o=e(1243),c="4c232873f45eedb749cb12734938c628",s="https://api.themoviedb.org/3/",u="".concat(s,"trending/movie/day?api_key=").concat(c),p=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)(u);case 2:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(s,"search/movie?api_key=").concat(c,"&query=").concat(t));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(s,"movie/").concat(t,"?api_key=").concat(c));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(c));case 2:return e=n.sent,r=e.data.cast,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(c));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2874:function(n,t,e){e.d(t,{Z:function(){return T}});var r,a,i,o,c,s,u,p,f,d,l,h=e(3433),x=e(9439),v=e(2007),g=e.n(v),Z=e(2791),m=e(168),w=e(4934),b=e(1087),k=e(8820),y=w.Z.ul(r||(r=(0,m.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\nmargin: -10px;\n"]))),j=w.Z.li(a||(a=(0,m.Z)(["\n position: relative;\n width: 300px;\nmargin: 10px;\n "]))),_=(0,w.Z)(b.rU)(i||(i=(0,m.Z)(["\n text-decoration: none"]))),M=w.Z.div(o||(o=(0,m.Z)(["\n width: 100%;\n height: 350px;\n position: relative;\n "]))),S=w.Z.img(c||(c=(0,m.Z)(["\n display: block;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;"]))),N=w.Z.span(s||(s=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n  padding: 5px 10px;\n  background-color: #cf6679;\n  position: absolute;\n  top: 15px;\n  right: 0;"]))),z=(0,w.Z)(k.pHD)(u||(u=(0,m.Z)(["\n  width: 15px;\n  height: 15px;\n  margin-right: 10px;"]))),F=w.Z.div(p||(p=(0,m.Z)(["\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  padding: 15px 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n   h2 {\n    font-size: 18px;\n    font-weight: 600;\n    max-width: 290px;\n  }\n  "]))),q=w.Z.button(f||(f=(0,m.Z)(["\n  position: absolute;\n  top: 15px;\n  left: 10px;\n  background-color: transparent;\n  border: none;\n  z-index: 12;\n  "]))),C=(0,w.Z)(k.lo)(d||(d=(0,m.Z)(["\n  width: 30px;\n  height: 30px;\n  fill: #fff;\n  "]))),D=(0,w.Z)(k.M_L)(l||(l=(0,m.Z)(["\nwidth: 30px;\nheight: 30px;\nfill: #fff;\n"]))),E=e(5094),I=e(184),R=function(n){var t=n.set,e=n.state,r=(0,Z.useState)([]),a=(0,x.Z)(r,2),i=a[0],o=a[1];(0,Z.useEffect)((function(){var n,t=null!==(n=JSON.parse(window.localStorage.getItem("FavoriteMovie")))&&void 0!==n?n:[];t.length&&o(t)}),[]),(0,Z.useEffect)((function(){i.length&&window.localStorage.setItem("FavoriteMovie",JSON.stringify(i))}),[i]);return(0,I.jsx)(y,{children:t.map((function(n){var t=n.id,r=n.title,a=n.vote_average,c=n.backdrop_path,s=n.poster_path;return(0,I.jsxs)(j,{children:[(0,I.jsx)(q,{onClick:function(n){"path"!==n.target.nodeName&&"svg"!==n.target.nodeName||function(n){if(i.some((function(t){return t.id===n.id}))){n.id===i[0].id&&1===i.length&&window.localStorage.removeItem("FavoriteMovie");var t=i.filter((function(t){return t.id!==n.id}));o((0,h.Z)(t))}else o([n].concat((0,h.Z)(i)))}({id:t,title:r,vote_average:a,backdrop_path:c,poster_path:s})},children:i.some((function(n){return n.id===t}))?(0,I.jsx)(D,{}):(0,I.jsx)(C,{})}),(0,I.jsx)(_,{to:"/movies/".concat(t),state:e,children:(0,I.jsxs)(M,{children:[(0,I.jsx)(S,{src:c&&s?"".concat("https://image.tmdb.org/t/p/w500").concat(c||s):E}),a>0&&(0,I.jsxs)(N,{children:[(0,I.jsx)(z,{}),a.toFixed(1)]}),(0,I.jsx)(F,{children:(0,I.jsx)("h2",{children:r})})]})})]},t)}))})};R.protoTypes={set:g().array.isRequired,state:g().object.isRequired};var T=R},8304:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,i=e(9439),o=e(2791),c=e(7689),s=e(197),u=e(168),p=e(4934),f=p.Z.h1(r||(r=(0,u.Z)(["\nfont-weight: 700;\ndisplay: flex;\nfont-size: 40px;\npadding: 50px 0;\nwidth: 700px;\nflex-wrap: wrap;\njustify-content: center;\nmargin: 0 auto;"]))),d=p.Z.span(a||(a=(0,u.Z)(["\ncolor: #03dac6;\nmargin-top: 10px;\n"]))),l=e(2874),h=e(184),x=function(){var n=(0,o.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1];(0,o.useEffect)((function(){(0,s.Df)().then(r)}),[]);var a=(0,c.TH)();return(0,h.jsxs)("div",{children:[(0,h.jsxs)(f,{children:["What to Watch?",(0,h.jsx)(d,{children:"Most Popular Movies Right Now"})]}),(0,h.jsx)(l.Z,{set:e,state:{from:a}})]})}},5094:function(n,t,e){n.exports=e.p+"static/media/not-found-image.22bff5ce129d7674c04e.jpg"}}]);
//# sourceMappingURL=304.dc1c07fe.chunk.js.map