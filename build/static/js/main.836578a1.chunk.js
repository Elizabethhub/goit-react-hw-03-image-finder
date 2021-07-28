(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{28:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(22),c=a.n(o),s=(a(28),a(12)),i=a(8),l=a.n(i),u=a(9),d=a(4),h=a(5),g=a(7),m=a(6),b=a(13),p=a(0),j=function(e){var t=e.id,a=e.tags,n=e.webformatURL,r=e.largeImageURL,o=e.addLargeImg;return Object(p.jsx)("li",{className:"ImageGalleryItem",children:Object(p.jsx)("img",{src:n,id:t,alt:a,className:"ImageGalleryItem-image",onClick:function(){return o(r)}})},t)},f=function(e){var t=e.images,a=e.addLargeImg;return Object(p.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(p.jsx)(j,Object(b.a)(Object(b.a)({},e),{},{addLargeImg:a}),e.id)}))})},O=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",page:1},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e.handleInputChange=function(t){e.setState({query:t.currentTarget.value})},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"Searchbar",children:Object(p.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(p.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(p.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleInputChange})]})})}}]),a}(n.Component),v=function(e){var t=e.loadMore;return Object(p.jsx)("button",{type:"button",onClick:t,children:"Load more"})},y=a(23),w=a.n(y),x=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(p.jsx)(w.a,{type:"Puff",color:"cornflowerblue",height:100,width:100,timeout:3e3,className:"loader"})}}]),a}(n.Component),I=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handelKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handelBackdrop=function(t){if(t.currentTarget!==t.target)return!1;e.props.onClose()},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handelKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handelKeyDown)}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"Overlay",onClick:this.handelBackdrop,children:Object(p.jsx)("div",{className:"Modal",children:Object(p.jsx)("img",{src:this.props.url,alt:"Large img"})})})}}]),a}(n.Component),S=a(10),k=a.n(S);k.a.defaults.baseURL="https://pixabay.com/api/";var L=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:1,e.prev=1,e.next=4,k.a.get(k.a.defaults.baseURL+"?q=".concat(t,"&page=").concat(a,"&key=").concat("22384514-a4280542ebcdb73106bba1593","&image_type=photo&orientation=horizontal&per_page=12"));case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),C=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],page:1,query:"sea",largeImage:"",isLoading:!1,showModal:!1},e.findImage=function(){var t=Object(u.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(a);case 2:n=t.sent,e.setState({query:a,images:n.hits,page:2});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.addLargeImg=function(t){console.log("largeImgUrl",t),e.setState({largeImage:t,showModal:!0})},e.loadMore=function(){e.setState({isLoading:!0}),console.log("load","load"),L(e.state.query,e.state.page).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t.hits)),page:e.page+1}}))})).catch((function(e){return console.log("error",e)})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.setState({isLoading:!1})}))},e.toggleModal=function(t){t||(t=null),e.setState({showModal:!e.state.showModal,largeImageURL:t})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.images,n=e.isLoading,r=e.largeImage;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O,{onSubmit:this.findImage}),t&&Object(p.jsx)(I,{onClose:this.toggleModal,url:r}),Object(p.jsx)(f,{images:this.state.images,addLargeImg:this.addLargeImg}),!!a.length&&!n&&Object(p.jsx)(v,{loadMore:this.loadMore}),n&&Object(p.jsx)(x,{})]})}}]),a}(n.Component),M=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(C,{})})};a(69);c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.836578a1.chunk.js.map