"use strict";(self.webpackChunkfirst=self.webpackChunkfirst||[]).push([[68],{5068:function(e,s,t){t.r(s),t.d(s,{default:function(){return W}});var n="Messages_messages__yyyg5",a="Messages_messages__wrapper__LVa-s",r="Messages_messages__dialogs__k8Z6l",i="Messages_messages__dialog__WCzB4",o="Messages_messages__content__fghZY",c="Messages_messages__title__YthfW",u="Messages_messages__add__eGeuD",_="Messages_messages__area__HI96-",l="Messages_messages__button__5V7Pb",m="Message_message__MVBtK",g="Message_message__img__RsdRz",f="Message_message__text__rFiQd",d="Message_message__name__GaAu7",h=t(184),p=function(e){return(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)("img",{className:g,src:e.img,alt:"img"}),(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)("div",{className:d,children:e.name}),e.text]})]})},v={user__img:"DialogItem_user__img__Q-1d6",img:"DialogItem_img__SnreG",user__link:"DialogItem_user__link__5VrwC",link:"DialogItem_link__Cg3Qh",user__link_active:"DialogItem_user__link_active__c+SUL",activeLink:"DialogItem_activeLink__YNuWW",activeImg:"DialogItem_activeImg__BpbH4"},j=t(3504),x=function(e){return(0,h.jsx)("div",{className:v.user,children:(0,h.jsxs)(j.OL,{className:function(e){return(e.isActive?v.user__link_active:"")+" "+v.user__link},to:"/messages/".concat(e.id),children:[(0,h.jsx)("img",{className:v.user__img,src:e.img,alt:"User:"}),e.name]})})},y=t(2791),b=t(6139),M=t(704),N=t(2272),k=t(5304),w=(0,k.DT)(100),D=(0,M.Z)({form:"newMessage"})((function(e){return(0,h.jsxs)("form",{onSubmit:e.handleSubmit,className:u,children:[(0,h.jsx)(b.Z,{validate:[k.C1,w],element:"textarea",component:N.a,name:"messageText",className:_,placeholder:"your message..."}),(0,h.jsx)("button",{type:"submit",className:l,children:"Send"})]})})),I=function(e){var s=e.state.dialogs.map((function(e){return(0,h.jsx)(x,{img:e.img,name:e.name,id:e.id},e.id)})),t=e.state.messages.map((function(e){return(0,h.jsx)(p,{name:e.name,img:e.img,text:e.message},e.id)}));return(0,h.jsx)("div",{className:n,children:(0,h.jsxs)("div",{className:a,children:[(0,h.jsxs)("div",{className:r,children:[(0,h.jsx)("h1",{className:c,children:"Messages"}),s]}),(0,h.jsxs)("div",{className:i,children:[(0,h.jsx)("div",{className:o,children:t}),(0,h.jsx)(D,{onSubmit:function(s){e.sendMessage(s.messageText)}})]})]})})},O=t(3115),C=t(8687),Z=t(8683);function L(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}var R=t(3144),S=t(9611);function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var A=t(1002);function T(e,s){if(s&&("object"===(0,A.Z)(s)||"function"===typeof s))return s;if(void 0!==s)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=P(e);if(s){var a=P(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return T(this,t)}}var E=t(6871),V=t(8992),W=(0,t(7781).qC)((0,C.$j)((function(e){return{state:e.messagesPage}}),{sendMessage:O.b}),(function(e){var s=function(s){!function(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),s&&(0,S.Z)(e,s)}(n,s);var t=B(n);function n(){var e;L(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isLoaded:!1},e.componentDidMount=function(){e.setState({isLoaded:!0})},e}return(0,R.Z)(n,[{key:"render",value:function(){return this.state.isLoaded?this.props.isAuth?(0,h.jsx)(e,(0,Z.Z)({},this.props)):(0,h.jsx)(E.Fg,{to:"/login"}):(0,h.jsx)(V.Z,{})}}]),n}(y.Component);return(0,C.$j)((function(e){return{isAuth:e.auth.isAuth}}),{})(s)}))(I)}}]);
//# sourceMappingURL=68.e1d78f2b.chunk.js.map