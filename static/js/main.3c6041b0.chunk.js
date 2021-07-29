(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{37:function(n,e,t){},79:function(n,e,t){"use strict";t.r(e);var a,r,o,i,c,s,l=t(0),p=t.n(l),d=t(28),u=t.n(d),g=(t(37),t(16)),h=t(10),b=t.n(h),m=t(11),x=t(6),f=t(7),j=t(9),y=t(8),v=t(17),w=t(4),O=t(5),k=O.a.li(a||(a=Object(w.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n    0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  .ImageGalleryItem-image {\n    width: 100%;\n    height: 260px;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .ImageGalleryItem-image:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),S=t(1),I=function(n){var e=n.id,t=n.tags,a=n.webformatURL,r=n.largeImageURL,o=n.addLargeImg;return Object(S.jsx)(k,{className:"ImageGalleryItem",children:Object(S.jsx)("img",{src:a,id:e,alt:t,className:"ImageGalleryItem-image",onClick:function(){return o(r)}})},e)},L=O.a.ul(r||(r=Object(w.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),M=function(n){var e=n.images,t=n.addLargeImg;return Object(S.jsx)(L,{children:e.map((function(n){return Object(S.jsx)(I,Object(v.a)(Object(v.a)({},n),{},{addLargeImg:t}),n.id)}))})},C=O.a.header(o||(o=Object(w.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: cornflowerblue;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),z=O.a.form(i||(i=Object(w.a)(['\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n\n  .SearchForm-button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n\n  .SearchForm-button:hover {\n    opacity: 1;\n  }\n\n  .SearchForm-button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  .SearchForm-input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n\n  .SearchForm-input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n']))),F=function(n){Object(j.a)(t,n);var e=Object(y.a)(t);function t(){var n;Object(x.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={query:"",page:1},n.handleSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state.query),n.setState({query:""})},n.handleInputChange=function(e){n.setState({query:e.currentTarget.value})},n}return Object(f.a)(t,[{key:"render",value:function(){return Object(S.jsx)(C,{className:"Searchbar",children:Object(S.jsxs)(z,{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(S.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(S.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(S.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleInputChange})]})})}}]),t}(l.Component),N=O.a.button(c||(c=Object(w.a)(["\n  display: inline-block;\n  margin: 0 auto;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: cornflowerblue;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  .Button:hover,\n  .Button:focus {\n    background-color: cornflowerblue;\n  }\n"]))),q=function(n){var e=n.loadMore;return Object(S.jsx)(N,{type:"button",onClick:e,children:"Load more"})},U=t(32),B=t.n(U),D=function(n){Object(j.a)(t,n);var e=Object(y.a)(t);function t(){return Object(x.a)(this,t),e.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return Object(S.jsx)(B.a,{type:"Puff",color:"cornflowerblue",height:100,width:100,timeout:3e3,className:"loader"})}}]),t}(l.Component),E=O.a.div(s||(s=Object(w.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n\n  .Modal {\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n  }\n"]))),G=function(n){Object(j.a)(t,n);var e=Object(y.a)(t);function t(){var n;Object(x.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).handelKeyDown=function(e){"Escape"===e.code&&n.props.onClose()},n.handelBackdrop=function(e){if(e.currentTarget!==e.target)return!1;n.props.onClose()},n}return Object(f.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handelKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handelKeyDown)}},{key:"render",value:function(){return Object(S.jsx)(E,{className:"Overlay",onClick:this.handelBackdrop,children:Object(S.jsx)("div",{className:"Modal",children:Object(S.jsx)("img",{src:this.props.url,alt:"Large img"})})})}}]),t}(l.Component),R=t(13),A=t.n(R);A.a.defaults.baseURL="https://pixabay.com/api/";var K,T=function(){var n=Object(m.a)(b.a.mark((function n(e){var t,a,r=arguments;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.prev=1,n.next=4,A.a.get(A.a.defaults.baseURL+"?q=".concat(e,"&page=").concat(t,"&key=").concat("22384514-a4280542ebcdb73106bba1593","&image_type=photo&orientation=horizontal&per_page=12"));case 4:return a=n.sent,n.abrupt("return",a.data);case 8:n.prev=8,n.t0=n.catch(1),console.log("error",n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),J=O.a.div(K||(K=Object(w.a)(["\n  \n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 16px;\n    padding-bottom: 24px;\n  \n"]))),_=function(n){Object(j.a)(t,n);var e=Object(y.a)(t);function t(){var n;Object(x.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={images:[],page:1,query:"sea",largeImage:"",isLoading:!1,showModal:!1},n.findImage=function(){var e=Object(m.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:a=e.sent,n.setState({query:t,images:a.hits,page:2});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n.addLargeImg=function(e){console.log("largeImgUrl",e),n.setState({largeImage:e,showModal:!0})},n.loadMore=function(){n.setState({isLoading:!0}),console.log("load","load"),T(n.state.query,n.state.page).then((function(e){n.setState((function(n){return{images:[].concat(Object(g.a)(n.images),Object(g.a)(e.hits)),page:n.page+1}}))})).catch((function(n){return console.log("error",n)})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),n.setState({isLoading:!1})}))},n.toggleModal=function(e){e||(e=null),n.setState({showModal:!n.state.showModal,largeImage:""})},n}return Object(f.a)(t,[{key:"render",value:function(){var n=this.state,e=n.showModal,t=n.images,a=n.isLoading,r=n.largeImage;return Object(S.jsxs)(J,{className:"Main",children:[Object(S.jsx)(F,{onSubmit:this.findImage}),e&&Object(S.jsx)(G,{onClose:this.toggleModal,url:r}),Object(S.jsx)(M,{images:this.state.images,addLargeImg:this.addLargeImg}),!!t.length&&!a&&Object(S.jsx)(q,{loadMore:this.loadMore}),a&&Object(S.jsx)(D,{})]})}}]),t}(l.Component),H=function(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(_,{})})};t(78);u.a.render(Object(S.jsx)(p.a.StrictMode,{children:Object(S.jsx)(H,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.3c6041b0.chunk.js.map