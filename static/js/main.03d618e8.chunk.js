(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,n){e.exports=n.p+"static/media/logo.21514315.jpg"},214:function(e,t,n){e.exports=n(364)},364:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),i=n.n(o),c=n(132),s=n(12),l=n(13),p=n(15),u=n(14),h=n(16),m=n(25),d=n(33),g=Object(a.createContext)(),f=g.Provider,b=g.Consumer,v=function(e){return function(t){return r.a.createElement(b,null,function(n){return r.a.createElement(e,Object.assign({},n,t))})}},E=function(e){var t=e.key,n=e.value;if("undefined"!==typeof Storage)return t&&n&&localStorage.setItem(t,n),localStorage.getItem(t)},k=function(e){return e.split(", ").map(function(e){return{tid:e.split(":")[0],title:e.split(":")[1]}})},y=n(32),O=n(133),j=n.n(O),w=n(2),L=n(24),S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={open:!0,canDie:!1},n.Transition=function(e){return r.a.createElement(w.t,Object.assign({direction:"up"},e))},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.minLiveTime?this.props.minLiveTime:800;console.log(t),setTimeout(function(){e.setState({canDie:!0})},t)}},{key:"componentDidUpdate",value:function(e){var t=this.props;e.open!==t.open&&this.setState({open:!1})}},{key:"render",value:function(){var e=this.props.classes,t=!(!this.state.open&&this.state.canDie);return r.a.createElement(w.d,{fullScreen:!0,open:t,TransitionComponent:this.Transition,transitionDuration:{enter:0,exit:250}},r.a.createElement(w.e,{className:e.paper},r.a.createElement("img",{src:j.a,className:e.logo,alt:"Wiki - Logo"}),r.a.createElement(w.k,{className:e.progress,color:"secondary"})))}}]),t}(a.Component),N=Object(L.withStyles)(function(e){var t;return{paper:{textAlign:"center",padding:e.spacing.unit,background:e.palette.primary.main},logo:(t={maxWidth:"100%"},Object(y.a)(t,e.breakpoints.up("sm"),{maxHeight:"600px"}),Object(y.a)(t,e.breakpoints.up("lg"),{maxHeight:"700px"}),t),progress:{},button:{margin:e.spacing.unit/2}}})(S),x=n(135),C=n.n(x),T=n(31),A=Object(d.e)(v(Object(L.withStyles)(function(e){return{search:Object(y.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(T.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(T.fade)(e.palette.common.white,.25)},marginLeft:2*e.spacing.unit,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:"48px",height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(y.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:"50px",transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(C.a,null)),r.a.createElement(w.j,{placeholder:"Search\u2026",onKeyPress:function(t){console.log("search",t.target.value);var n=e.history;"Enter"===t.key&&(e.handleSearch(t.target.value),t.target.value="",n.push("/search"))},classes:{root:t.inputRoot,input:t.inputInput}}))}))),D=n(140),M=n.n(D),H=n(137),R=n.n(H),B=n(138),I=n.n(B),U=n(40),F=n.n(U),q=n(139),W=n.n(q),G=[{title:"Home",icon:r.a.createElement(R.a,null),route:"/"},{title:"Tags",icon:r.a.createElement(I.a,null),route:"/tags"},{title:"Likes",icon:r.a.createElement(F.a,null),route:"/likes"},{title:"Recent",icon:r.a.createElement(W.a,null),route:"/recent"}],P=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={drawer:!1},n.toggleDrawer=function(e){return function(){n.setState({drawer:e})}},n.handleMenu=function(e){n.setState({anchorEl:e.currentTarget})},n.handleClose=function(){n.setState({anchorEl:null})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,n=r.a.createElement(w.l,{className:t.list},G.map(function(t){var n=t.icon;return"Likes"!==t.title?r.a.createElement(w.m,{button:!0,key:t.title,component:m.b,to:t.route},r.a.createElement(w.n,null,n),r.a.createElement(w.p,{primary:t.title})):r.a.createElement(w.m,{button:!0,key:t.title,component:m.b,to:t.route},r.a.createElement(w.n,null,r.a.createElement(w.b,{color:"secondary",badgeContent:e.props.likedArticles.length},n)),r.a.createElement(w.p,{primary:t.title}))}));return r.a.createElement("div",null,r.a.createElement(w.u,{className:t.drawer,open:this.state.drawer,onClose:this.toggleDrawer(!1),onOpen:this.toggleDrawer(!0)},r.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer(!1),onKeyDown:this.toggleDrawer(!1)},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(w.f,null),n)),r.a.createElement(w.a,{position:"static"},r.a.createElement(w.v,null,r.a.createElement(w.i,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:this.toggleDrawer(!0)},r.a.createElement(M.a,null)),r.a.createElement(w.w,{variant:"h6",color:"inherit",className:t.grow},"WIKI"),r.a.createElement(A,null)),this.props.isLoading&&r.a.createElement(w.k,{color:"secondary"})))}}]),t}(r.a.Component),K=v(Object(L.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},list:{width:250},toolbar:e.mixins.toolbar}})(P)),_="https://api.toabr.de",J=function(e,t){var n="".concat(_,"/api/articles/")+e.join("+");setTimeout(function(){X({requestUrl:n,cb:t})},500)},z=function(e,t){var n="".concat(_,"/api/search?_q=");X({requestUrl:n+e,cb:t})},V=function(e,t){var n="".concat(_,"/api/term/");X({requestUrl:n+e,cb:t})},X=function(e){var t=e.requestUrl,n=e.cb,a=null;fetch(t).then(function(e){return a=e,e.json()}).then(function(e){return n(e)}).catch(function(e){return console.log("GET ERROR:",e,a),n([])})},$=n(141),Q=n.n($),Y=n(60),Z=n.n(Y),ee=n(142),te=n.n(ee),ne=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null,liked:!1},n.checkLike=function(){return n.props.likedArticles.includes(n.props.nid)},n.handleClick=function(e){n.setState({anchorEl:e.currentTarget})},n.handleLike=function(){n.props.toggleLike(n.props.nid,n.props.match.path);var e=n.checkLike();n.setState({liked:e}),n.handleClose()},n.handleShare=function(){n.props.share(n.props.nid),n.handleClose()},n.handleClose=function(){n.setState({anchorEl:null})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.checkLike();this.setState({liked:e})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.anchorEl,o=t.liked,i=Boolean(n),c=o?r.a.createElement(F.a,null):r.a.createElement(Z.a,null),s=o?"Unlike":"Like";return r.a.createElement(a.Fragment,null,r.a.createElement(w.i,{"aria-label":"More","aria-owns":i?"long-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick},r.a.createElement(Q.a,null)),r.a.createElement(w.q,{id:"simple-menu",anchorEl:n,open:i,onClose:this.handleClose},r.a.createElement(w.r,{onClick:this.handleLike,className:e.menuItem},r.a.createElement(w.n,{className:e.icon},c),r.a.createElement(w.p,{classes:{primary:e.primary},inset:!0,primary:s})),r.a.createElement(w.r,{onClick:this.handleShare,className:e.menuItem},r.a.createElement(w.n,{className:e.icon},r.a.createElement(te.a,null)),r.a.createElement(w.p,{classes:{primary:e.primary},inset:!0,primary:"Share"}))))}}]),t}(a.Component),ae=Object(L.withStyles)(function(e){return{menuItem:{},primary:{},icon:{}}})(v(ne)),re=Object(d.e)(function(e){return r.a.createElement(ae,e)}),oe=Object(L.withStyles)(function(e){return{}})(function(e){e.classes;var t,n=e.node,a=k(n.tags).map(function(e,t,n){return r.a.createElement("small",{key:t}," ","#"+e.title," ")});return r.a.createElement(w.m,{button:!0,key:n.nid,component:m.b,to:"/article/".concat(n.nid)},r.a.createElement(w.p,{primary:n.title,secondary:r.a.createElement("span",null,(t=n.changed,new Date(1e3*t).toLocaleString()),r.a.createElement("br",null),a)}),r.a.createElement(w.o,null,r.a.createElement(re,{nid:n.nid})))}),ie=v(Object(L.withStyles)(function(e){return{paper:{color:e.palette.text.secondary}}})(function(e){var t=e.classes,n=e.nodes.map(function(e,t,n){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(oe,{node:e}),t!==n.length-1&&r.a.createElement(w.f,null))});return r.a.createElement(w.s,{className:t.paper},r.a.createElement(w.l,null," ",n," "))})),ce=v(function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.setHeadLine(""),this.props.loading(!0),J([],function(t){e.props.updateNodes(t),e.props.loading(!1)})}},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,!this.props.isLoading&&this.props.nodes.length>0&&r.a.createElement(ie,null))}}]),t}(a.Component)),se=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.setHeadLine("Likes"),0!==this.props.likedArticles.length?(this.props.updateNodes([]),this.props.loading(!0),J(this.props.likedArticles,function(t){e.props.updateNodes(t),e.props.loading(!1)})):this.props.updateNodes([])}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(a.Fragment,null,r.a.createElement(w.w,{component:"h2",variant:"h4",color:"textSecondary",className:e.headline},this.props.headLine),!this.props.isLoading&&this.props.nodes.length>0&&r.a.createElement(ie,null))}}]),t}(a.Component),le=v(Object(L.withStyles)(function(e){return{headline:{marginBottom:e.spacing.unit,marginTop:e.spacing.unit}}})(se)),pe=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.setHeadLine("Recent"),0!==this.props.recentArticles.length?(this.props.updateNodes([]),this.props.loading(!0),J(this.props.recentArticles,function(t){e.props.updateNodes(t),e.props.loading(!1)})):this.props.updateNodes([])}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(a.Fragment,null,r.a.createElement(w.w,{component:"h2",variant:"h4",color:"textSecondary",className:e.headline},this.props.headLine),!this.props.isLoading&&this.props.recentArticles.length>0&&r.a.createElement(ie,null))}}]),t}(a.Component),ue=v(Object(L.withStyles)(function(e){return{headline:{marginBottom:e.spacing.unit,marginTop:e.spacing.unit}}})(pe)),he=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.tid;V(t,function(t){return e.props.setHeadLine("#"+t[0].title)}),this.props.loading(!0),function(e,t){var n="".concat(_,"/api/tag/")+e;setTimeout(function(){X({requestUrl:n,cb:t})},500)}(t,function(t){e.props.updateNodes(t),e.props.loading(!1)})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(a.Fragment,null,r.a.createElement(w.w,{component:"h2",variant:"h4",color:"textSecondary",className:e.headline},this.props.headLine),!this.props.isLoading&&r.a.createElement(ie,null))}}]),t}(a.Component),me=v(Object(L.withStyles)(function(e){return{headline:{marginBottom:e.spacing.unit,marginTop:e.spacing.unit}}})(he)),de=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={tags:[]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.setHeadLine("Tags"),this.props.loading(!0),V("",function(t){e.setState({tags:t}),e.props.loading(!1)})}},{key:"render",value:function(){var e,t=this.props.classes,n=(e=this.state.tags,e.sort(function(e,t){var n=e.title.toUpperCase(),a=t.title.toUpperCase();return n<a?-1:n>a?1:0})).map(function(e){return r.a.createElement(w.c,{key:e.tid,variant:"contained",color:"secondary",className:t.button,component:m.b,to:"/tag/".concat(e.tid)},"#"+e.title)});return r.a.createElement(a.Fragment,null,r.a.createElement(w.w,{component:"h2",variant:"h4",color:"textSecondary",className:t.headline},this.props.headLine),!this.props.isLoading&&r.a.createElement(w.s,{className:t.paper},n))}}]),t}(a.Component),ge=v(Object(L.withStyles)(function(e){return{paper:{textAlign:"center",padding:e.spacing.unit},button:{margin:e.spacing.unit/2},headline:{marginBottom:e.spacing.unit,marginTop:e.spacing.unit}}})(de)),fe=function(e){var t=document.createElement("div");t.innerHTML=e;var n=t.getElementsByClassName("table-of-contents")[0];if(!n)return t.innerHTML;console.log("### generate table of contents");var a=!!n.classList.contains("alphabetical"),r=!!n.classList.contains("numerals"),o=t.getElementsByTagName("h3"),i=function(e){for(var t=[],n=0;n<e.length;n++){var a=e[n],r=document.createElement("a");r.classList.add("toc-link"),r.setAttribute("href","#toc-"+(n+1)),r.innerText=a,t.push(r)}return t}(function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n].innerText);return t}(o));!function(e){for(var t=0;t<e.length;t++)e[t].id="toc-"+(t+1)}(o),r&&function(e){for(var t=0;t<e.length;t++)e[t].innerText=t+1+". "+e[t].innerText}(o),function(e){for(var t=0;t<e.length;t++){var n=e[t];n.setAttribute("href","#toc-"+(t+1))}}(i),a&&i.sort(function(e,t){var n=e.innerText.toUpperCase(),a=t.innerText.toUpperCase();return n<a?-1:n>a?1:0}),console.dir(i);var c=function(e){for(var t=document.createElement("ul"),n=0;n<e.length;n++){var a=e[n],r=document.createElement("li");r.classList.add("toc-item"),r.append(a),t.append(r)}return t}(i);return c.addEventListener("click",function(e){e.preventDefault(),function(e){var t=document.getElementById(e.slice(1,e.length));if(t){var n=t.offsetTop+t.offsetParent.offsetTop;window.scrollTo({top:n,behavior:"smooth"})}}("href"in e.target?e.target.attributes.href.value:null)}),n.innerHTML="",n.append(c),t.innerHTML};var be=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={liked:!1},n.checkLike=function(){return n.props.likedArticles.includes(n.props.nid)},n.handleLike=function(){n.props.toggleLike(n.props.nid,n.props.match.path);var e=n.checkLike();n.setState({liked:e})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.checkLike();this.setState({liked:e})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.liked,n=t?r.a.createElement(F.a,null):r.a.createElement(Z.a,null),a=t?"Unlike":"Like",o=t?"default":"secondary";return r.a.createElement(w.g,{size:"large",color:o,"aria-label":a,onClick:this.handleLike,className:e.fab},n)}}]),t}(a.Component),ve=Object(L.withStyles)(function(e){return{fab:{position:"fixed",bottom:e.spacing.unit,right:2*e.spacing.unit}}})(v(be)),Ee=Object(d.e)(function(e){return r.a.createElement(ve,e)}),ke=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.setHeadLine(""),this.props.updateNodes([]),this.props.loading(!0),J([this.props.match.params.nid],function(t){e.props.updateNodes(t),e.props.loading(!1),e.props.addRecent(t[0].nid)})}},{key:"render",value:function(){var e=this.props.classes,t=this.props.nodes[0],n=t&&t.tags?k(t.tags).map(function(t){return r.a.createElement(w.c,{key:t.tid,variant:"contained",color:"secondary",className:e.button,component:m.b,to:"/tag/".concat(t.tid)},"#"+t.title)}):null;return r.a.createElement(a.Fragment,null,t&&r.a.createElement(w.s,{className:e.paper},r.a.createElement(Ee,{nid:t.nid}),r.a.createElement(w.w,{component:"h1",variant:"h4",className:e.heading,gutterBottom:!0},t.title),r.a.createElement(w.w,{variant:"body1",dangerouslySetInnerHTML:{__html:fe(t.body)}}),n),!this.props.isLoading&&!t&&r.a.createElement(w.w,{component:"h1",variant:"h4",color:"textSecondary",gutterBottom:!0},"No Result"))}}]),t}(a.Component),ye=v(Object(L.withStyles)(function(e){return{paper:{padding:2*e.spacing.unit,position:"relative"},button:{margin:e.spacing.unit/2}}})(ke)),Oe=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).search=function(){n.props.setHeadLine("search: ".concat(n.props.search)),""!==n.props.search&&(n.props.loading(!0),z(n.props.search,function(e){n.props.updateNodes(e),n.props.loading(!1)}))},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.search()}},{key:"componentDidUpdate",value:function(e){var t=this.props;e.search!==t.search&&(this.search(),console.log("new props"))}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(a.Fragment,null,r.a.createElement(w.w,{component:"h2",variant:"h4",color:"textSecondary",className:e.headline},this.props.headLine),!this.props.isLoading&&this.props.nodes.length>0&&r.a.createElement(ie,null))}}]),t}(a.Component),je=v(Object(L.withStyles)(function(e){return{headline:{marginBottom:e.spacing.unit,marginTop:e.spacing.unit}}})(Oe)),we=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={headLine:"Wiki",isLoading:!1,user:{id:0,name:"Guest"},nodes:[],likedArticles:[],recentArticles:[],search:"",renderSplashscreen:!0},n.updateNodes=function(e){n.setState({nodes:e})},n.loading=function(e){n.setState({isLoading:e})},n.addRecent=function(e){var t=n.state.recentArticles;t.push(e),t=t.filter(function(e,t,n){return n.indexOf(e)===t}),n.setState({recentArticles:t})},n.handleSearch=function(e){n.setState({search:e})},n.setHeadLine=function(e){n.setState({headLine:e})},n.toggleLike=function(e,t){var a=n.state.likedArticles,r=a.indexOf(e);r>=0?(a.splice(r,1),"/likes"===t&&n.removeNode(e)):a.push(e),E({key:"likes",value:a}),n.setState({likedArticles:a})},n.share=function(e){console.log("share",e)},n.getContext=function(){return Object(c.a)({addRecent:n.addRecent,handleSearch:n.handleSearch,loading:n.loading,removeNode:n.removeNode,updateNodes:n.updateNodes,setHeadLine:n.setHeadLine,toggleLike:n.toggleLike,share:n.share},n.state)},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("### App mountet"),setTimeout(function(){e.setState({renderSplashscreen:!1})},500);var t=E({key:"likes"});t&&(t=t.split(","),this.setState({likedArticles:t}))}},{key:"removeNode",value:function(e){console.log("remove",e);var t=this.state.nodes.filter(function(t){return t.nid!==e});this.setState({nodes:t})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(m.a,{basename:"/wiki"},r.a.createElement(N,{open:this.state.renderSplashscreen,minLiveTime:2e3}),!this.state.renderSplashscreen&&r.a.createElement(f,{value:this.getContext()},r.a.createElement(K,null),r.a.createElement(w.h,{container:!0,className:e.root},r.a.createElement(w.h,{item:!0,xs:12},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:ce}),r.a.createElement(d.a,{exact:!0,path:"/tags",component:ge}),r.a.createElement(d.a,{exact:!0,path:"/likes",component:le}),r.a.createElement(d.a,{exact:!0,path:"/recent",component:ue}),r.a.createElement(d.a,{path:"/tag/:tid",component:me}),r.a.createElement(d.a,{path:"/article/:nid",component:ye}),r.a.createElement(d.a,{path:"/search",component:je}),r.a.createElement(d.a,{path:"*",component:function(){return"404 NOT FOUND"}}))))))}}]),t}(a.Component),Le=Object(L.withStyles)(function(e){return{root:{maxWidth:800,margin:"auto",padding:e.spacing.unit},"@global":{"code, pre":{background:e.palette.grey[200],padding:3,overflowX:"auto",fontFamily:"source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace"},ul:{paddingLeft:"1.2em"}}}})(we);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(347);var Se=n(59),Ne=n.n(Se),xe=n(41),Ce=Object(L.createMuiTheme)({type:"dark",palette:{primary:{main:"#5300b8"},secondary:{main:xe.pink.A400},common:{black:"#fff",white:"#000"},background:{paper:xe.grey[50],default:xe.grey[400]},text:{}},shape:{borderRadius:3},spacing:{unit:8},typography:{useNextVariants:!0}});i.a.render(r.a.createElement(L.MuiThemeProvider,{theme:Ce},r.a.createElement(Ne.a,null),r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[214,1,2]]]);
//# sourceMappingURL=main.03d618e8.chunk.js.map