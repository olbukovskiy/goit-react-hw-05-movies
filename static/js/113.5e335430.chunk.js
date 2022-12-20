"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[113],{3113:function(n,e,t){t.r(e),t.d(e,{Cast:function(){return w}});var r,a,c,i=t(885),o=t(2791),u=t(7689),s=t(9969),p=t(168),l=t(3081),f=l.Z.div(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  margin-bottom: ","px;\n  height: 100%;\n"])),(function(n){return n.theme.space[4]})),h=l.Z.div(a||(a=(0,p.Z)(["\n  position: relative;\n  height: 320px;\n"]))),v=l.Z.div(c||(c=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: ","px;\n  padding: 6px 12px;\n  flex-grow: 1;\n\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.5;\n\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n"])),(function(n){return n.theme.space[1]})),d=t(184);function m(n){var e=n.name,t=n.character,r=n.profile_path;return(0,d.jsxs)(f,{children:[(0,d.jsx)(h,{children:(0,d.jsx)("img",{src:(0,s.bu)(r),alt:e})}),(0,d.jsxs)(v,{children:[(0,d.jsxs)("p",{children:["Name: ",e]}),(0,d.jsxs)("p",{children:["Character: ",t]})]})]})}var g=t(3792);function x(n){var e=n.cast;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.P,{children:"Full cast"}),(0,d.jsx)(g.Q,{children:e.map((function(n){var e=n.name,t=n.character,r=n.profile_path;return(0,d.jsx)(m,{name:e,character:t,profile_path:r},e)}))})]})}var Z=new s._r;function w(){var n=(0,o.useState)(null),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,u.UO)().movieId;return(0,o.useEffect)((function(){Z.searchMovieCredits(a).then((function(n){r(n.data.cast)}))}),[a]),(0,d.jsx)(o.Fragment,{children:t&&(0,d.jsx)("div",{children:(0,d.jsx)(x,{cast:t})})})}},3792:function(n,e,t){t.d(e,{P:function(){return u},Q:function(){return o}});var r,a,c=t(168),i=t(3081),o=i.Z.ul(r||(r=(0,c.Z)(["\n  display: grid;\n  max-width: calc(100% - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  grid-gap: 18px;\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),u=i.Z.h2(a||(a=(0,c.Z)(["\n  text-align: center;\n  font-size: 28px;\n  margin-bottom: 18px;\n"])))},9969:function(n,e,t){t.d(e,{E$:function(){return h},_r:function(){return l},bu:function(){return v},ju:function(){return f},kU:function(){return m},t$:function(){return d}});var r=t(7762),a=t(5861),c=t(3144),i=t(5671),o=t(4687),u=t.n(o),s=t(2388);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var p="9d6e6ee2eca71a277d41288e53d88a97",l=(0,c.Z)((function n(){(0,i.Z)(this,n),this.searchTrendingMovies=function(){var n=(0,a.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="trending/movie/week?api_key=".concat(p,"&page=").concat(e),n.prev=1,n.next=4,s.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),this.searchMovies=function(){var n=(0,a.Z)(u().mark((function n(e,t){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="search/movie?api_key=".concat(p,"&query=").concat(t,"&page=").concat(e),n.prev=1,n.next=4,s.Z.get(r);case 4:return a=n.sent,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}(),this.searchMovieDetails=function(){var n=(0,a.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"?api_key=").concat(p),n.prev=1,n.next=4,s.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),this.searchMovieCredits=function(){var n=(0,a.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/credits?api_key=").concat(p),n.prev=1,n.next=4,s.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),this.searchMovieReviews=function(){var n=(0,a.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/reviews?api_key=").concat(p),n.prev=1,n.next=4,s.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),this.searchGenres=(0,a.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="genre/movie/list?api_key=".concat(p),n.prev=1,n.next=4,s.Z.get(e);case 4:return t=n.sent,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))}));function f(n,e){return n||(e||"The best film in your life! :)")}function h(n,e){return n?n.slice(0,4):e?e.slice(0,4):"Coming soon! :)"}function v(n){return null==n?"https://via.placeholder.com/500x600.svg/000000/ffffff?text=Sorry+,+image+loading+is+failed":"https://image.tmdb.org/t/p/w500".concat(n)}function d(n,e){var t=[];if(!e)return"Other";var a,c=(0,r.Z)(e);try{var i=function(){var e=a.value,r=n.find((function(n){return n.id===e}));if(void 0===r)return"continue";t.push(r.name)};for(c.s();!(a=c.n()).done;)i()}catch(o){c.e(o)}finally{c.f()}return 0===t.length&&t.push("Other"),t.length>3?[t[0],t[1],"Other"].join(", "):t.join(", ")}function m(n){var e,t=[],a=(0,r.Z)(n);try{for(a.s();!(e=a.n()).done;){var c=e.value;t.push(c.name)}}catch(i){a.e(i)}finally{a.f()}return 0===t.length?"Other":t.length>3?[t[0],t[1],"Other"].join(", "):t.join(", ")}}}]);
//# sourceMappingURL=113.5e335430.chunk.js.map