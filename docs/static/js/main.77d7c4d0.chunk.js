(this["webpackJsonparena-canban"]=this["webpackJsonparena-canban"]||[]).push([[0],{31:function(e,t,n){e.exports={root:"page_root__2ya0W"}},33:function(e,t,n){e.exports={root:"board_root__3HvFF"}},34:function(e,t,n){e.exports={root:"card_root__1sGG3"}},37:function(e,t,n){e.exports=n(72)},42:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(42),n(2)),l=n.n(i),u=n(6),s=n(13),d=n(14),h={401:"Unauthorised",404:"Not found",500:"Server error",400:"Bad request"},f=function(){function e(t){var n=t.token;Object(s.a)(this,e),this.domain="https://api.are.na/v2/",this.headers=void 0,this.headers={"Content-Type":"application/json",Authorization:n?"Bearer ".concat(n):""}}return Object(d.a)(e,[{key:"me",value:function(){return this.getJson("me")}},{key:"channels",value:function(e){var t=e?this.paginationQueryString(e):"",n=(null===e||void 0===e?void 0:e.userId)?"users/".concat(e.userId,"/channels"):"channels/";return this.getJson("".concat(n,"?").concat(t))}},{key:"channelSort",value:function(e,t){return this.putJson("channels/".concat(e,"/sort"),{ids:t})}},{key:"channel",value:function(e,t){var n=t?this.paginationQueryString(t):"";return this.getJson("channels/".concat(e,"/?").concat(n))}},{key:"block",value:function(e){return this.getJson("blocks/".concat(e))}},{key:"connect",value:function(e,t,n){return this.postJson("channels/".concat(e,"/connections"),{connectable_type:n,connectable_id:t})}},{key:"remove",value:function(e,t){var n=t?"channels/".concat(e,"/blocks/").concat(t):"channels/".concat(e);return this.del(n)}},{key:"paginationQueryString",value:function(e){var t=e.page,n=e.per,a=[];return t&&a.push("page=".concat(t)),n&&a.push("per=".concat(n)),a.join(";")}},{key:"process",value:function(e){if(200===e.status)return e.json();throw h[e.status]||"unknown"}},{key:"getJson",value:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(this.domain).concat(t),{method:"GET",headers:this.headers}).then((function(e){if(200===e.status)return e.json();throw h[e.status]||"unknown"})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"putJson",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(this.domain).concat(t),{method:"PUT",headers:this.headers,body:n?JSON.stringify(n):void 0}).then((function(e){return console.log(e),e.json()})));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"postJson",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(this.domain).concat(t),{method:"POST",headers:this.headers,body:n?JSON.stringify(n):void 0}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"del",value:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(this.domain).concat(t),{method:"DELETE",headers:this.headers}).then(console.log));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),p=n(31),m=n.n(p);function v(e){var t=e.children;return r.a.createElement("div",{className:m.a.root},t)}var b=n(19),E=n(1),_=n(15),g=n(5);function y(e){var t=e.forValue,n=e.children,a=e.Placeholder,c=e.Error;switch(t.type){case"success":return r.a.createElement(r.a.Fragment,null,n);case"empty":return null;case"pending":return a?r.a.createElement(a,null):r.a.createElement("div",null,"Pending");case"failed":return c?r.a.createElement(c,null):r.a.createElement("div",null,"Failed")}}function k(e){var t=Object(g.useRecoilValue)(e.forValue);return r.a.createElement(y,Object.assign({},e,{forValue:t}))}function O(e){var t=e.forValue,n=e.children,a=e.Placeholder,c=e.Error;return Object(g.isRecoilValue)(t)?r.a.createElement(k,{forValue:t,Placeholder:a,Error:c,children:n}):r.a.createElement(y,{forValue:t,Placeholder:a,Error:c,children:n})}function j(e){var t=e.state,n=t.useChannelState().fetch;return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello"),r.a.createElement("p",null,"List of Channels"),r.a.createElement("button",{onClick:n},"Press"),r.a.createElement(O,{forValue:t.info},r.a.createElement("div",null,"Gotten!!!")))}var w=n(32),P=n(33),S=n.n(P),R=n(8),C=n(9),A=n.n(C),I=n(34),T=n.n(I),x=n(36);function J(e,t){return r.a.forwardRef((function(n,a){return r.a.createElement(e,Object(x.a)({},n,{className:(c=t,o=null===n||void 0===n?void 0:n.className,o?"".concat(c," ").concat(o):c),ref:a}));var c,o}))}var N=J("div",T.a.root),V=function(e){var t=e.title,n=e.provided;return r.a.createElement(N,Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps),r.a.createElement("div",null,t),r.a.createElement("div",null))},H=J("div",A.a.root),U=J("div",A.a.header),B=J("h4",A.a.title),L=J("div",A.a.list),D=J("div",A.a.scrollContainer),F=J("div",A.a.dropZone);function K(e){var t=e.items;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(R.b,{key:e.id,draggableId:e.id,index:t},(function(t,n){return r.a.createElement(V,{title:e.title,provided:t})}))})))}function z(e){var t=e.listId,n=e.listType,a=e.items;return r.a.createElement(R.c,{droppableId:t,type:n},(function(e,t){return r.a.createElement(L,Object.assign({ref:e.innerRef},e.droppableProps),r.a.createElement(D,null,r.a.createElement(F,null,r.a.createElement(K,{items:a}),e.placeholder)))}))}function G(e){var t=e.title,n=e.index,a=e.items;return r.a.createElement(R.b,{draggableId:t,index:n},(function(e,n){return r.a.createElement(H,Object.assign({ref:e.innerRef},e.draggableProps),r.a.createElement(U,e.dragHandleProps,r.a.createElement(B,null,t)),r.a.createElement(z,{listId:t,listType:"BLOCK",items:a}))}))}var Q=J("div",S.a.root);function W(e){Object(w.a)(e);var t=r.a.useCallback(console.log,[]),n=["a","b"],a={a:{title:"A list",items:[{id:"1",title:"Hellao"},{id:"2",title:"Heai"}]},b:{title:"B list",items:[{id:"3",title:"Hello"},{id:"4",title:"Hei"}]}};return r.a.createElement(R.a,{onDragEnd:t},r.a.createElement(R.c,{droppableId:"board",type:"COLUMN",direction:"horizontal"},(function(e){return r.a.createElement(Q,Object.assign({ref:e.innerRef},e.droppableProps),n.map((function(e,t){return r.a.createElement(G,{key:e,title:e,index:t,items:a[e].items})})),e.placeholder)})))}function M(e){var t=e.state,n=Object(E.f)().channelId,c=t.useChannelState(),o=(c.fetch,c.setId);return Object(a.useEffect)((function(){console.log("channelId",n),o(n)}),[n]),r.a.createElement(O,{forValue:t.info},r.a.createElement(W,null))}function Z(e){var t=Object(g.atom)({key:"channel-id",default:null}),n=Object(g.atom)({key:"channel-info",default:{type:"empty"}});Object(g.selector)({key:"new-key",get:function(e){var t=(0,e.get)(n);return t&&"success"===t.type?t.value:null}});return{useChannelState:function(){var c=Object(g.useRecoilState)(t),o=Object(_.a)(c,2),i=o[0],s=o[1];console.log("update id",i);var d=function(e,t){var n=Object(g.useRecoilState)(t),a=Object(_.a)(n,2),c=(a[0],a[1]);return r.a.useCallback(Object(u.a)(l.a.mark((function t(){var n=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:"pending"}),e.apply(void 0,n).then((function(e){c({type:"success",value:e})})).catch((function(e){c({type:"failed",error:e})}));case 2:case"end":return t.stop()}}),t)}))),[e,c])}(Object(a.useCallback)(Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=console,t.next=3,e.me();case 3:if(t.t1=t.sent,t.t0.log.call(t.t0,t.t1),t.t2=i,!t.t2){t.next=12;break}return t.t3=console,t.next=10,e.channel(i);case 10:t.t4=t.sent,t.t3.log.call(t.t3,t.t4);case 12:return console.log("id",i),t.abrupt("return","ok");case 14:case"end":return t.stop()}}),t)}))),[i]),n);return Object(a.useEffect)((function(){d()}),[d,i]),{fetch:d,setId:s,id:i}},info:n}}var q=function(){function e(t,n,a){Object(s.a)(this,e),this.applicationId=t,this.applicationSecret=n,this.redirectUrl=a,this.BASE_URL="https://dev.are.na/oauth"}return Object(d.a)(e,[{key:"login",value:function(){window.location.href="".concat(this.BASE_URL,"/authorize?client_id=").concat(this.applicationId,"&redirect_uri=").concat(this.redirectUrl,"&response_type=code")}},{key:"authorise",value:function(e){return fetch("".concat(this.BASE_URL,"/token?client_id=").concat(this.applicationId,"&client_secret=").concat(this.applicationSecret,"&code=").concat(e,"&grant_type=authorization_code&redirect_uri=").concat(this.redirectUrl),{method:"POST"}).then((function(e){return e.json()})).then((function(e){return e.access_token}))}}]),e}(),X=function(){var e=window.localStorage.getItem("token");if(e){var t=Z(new f({token:e}));return function(){return r.a.createElement(g.RecoilRoot,null,r.a.createElement(v,null,r.a.createElement(b.a,null,r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/:channelId"},r.a.createElement(M,{state:t})),r.a.createElement(E.a,{path:"/"},r.a.createElement(j,{state:t}))))))}}console.log("token",Object({NODE_ENV:"production",PUBLIC_URL:"/nabnak",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_ARENA_APP_ID:"2f92409c89d6a2712af2217c2049da896624356b88ff0b536430f86851027a0b",REACT_APP_ARENA_APP_SECRET:"19ca277c6205a7329902c5d6420f02b044d0c890aa585a8915092d3128185097",REACT_APP_ARENA_APP_REDIRECT:"https://e-e-e.github.io/nabnak/"}));var n="2f92409c89d6a2712af2217c2049da896624356b88ff0b536430f86851027a0b",a="19ca277c6205a7329902c5d6420f02b044d0c890aa585a8915092d3128185097",c=new q(n,a,"https://e-e-e.github.io/nabnak/"),o=window.location.search.match(/\?code=(\w+)/);console.log("here");var i=o&&o[1];i?c.authorise(i).then(console.log):(console.log("here"),c.login())}();X&&o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root"))},9:function(e,t,n){e.exports={root:"channel_root__3aiuM",header:"channel_header__2r_H8",title:"channel_title__cARcd",list:"channel_list__2y60Q",scrollContainer:"channel_scrollContainer__3sX_V",dropZone:"channel_dropZone__TgumK"}}},[[37,1,2]]]);
//# sourceMappingURL=main.77d7c4d0.chunk.js.map