"use strict";(self.webpackChunkfirst=self.webpackChunkfirst||[]).push([[301],{5301:function(e,s,n){n.r(s),n.d(s,{default:function(){return O}});var t=n(4165),r=n(5861),o=n(8687),a=n(6962),i=n(2791),u=n(8683),l=n(5987),c="User_user__20IvY",f="User_ava__v1Mzt",d="User_img__AdOZk",g="User_btn__VMzAG",_="User_info__lOtrV",h="User_descr__yTXpA",p="User_name__PHvZF",m="User_location__3G6cf",P=n(3504),w=n(184),v=function(e){return(0,w.jsxs)("div",{className:c,children:[(0,w.jsxs)("div",{className:f,children:[(0,w.jsx)(P.OL,{to:"/profile/".concat(e.id),children:(0,w.jsx)("img",{className:d,src:e.photos.small?e.photos.small:"https://www.directivegroup.com/wp-content/uploads/2017/03/smile-9047-9380-hd-wallpapers-1.jpg",alt:"ava"})}),e.followed?(0,w.jsx)("button",{disabled:e.isButtonPress.some((function(s){return s===e.id})),onClick:function(){e.unfollow(e.id)},className:g,children:"Unfollow"}):(0,w.jsx)("button",{disabled:e.isButtonPress.some((function(s){return s===e.id})),onClick:function(){e.follow(e.id)},className:g,children:"Follow"})]}),(0,w.jsxs)("div",{className:_,children:[(0,w.jsxs)("div",{className:h,children:[(0,w.jsx)("div",{className:p,children:e.name}),e.status?e.status:"No status:("]}),(0,w.jsxs)("div",{className:m,children:["City,",(0,w.jsx)("br",{}),"Country"]})]})]})},x="Users_users__FKhmt",j="Users_preloader__gSNl5",N=n(8992),U=n(885),C="Paginator_paginator__lgqxg",z="Paginator_page__ANOQz",S="Paginator_page_active__Fntw7",b="Paginator_btn__vSy2M",k=function(e){for(var s=e.totalUsersCount,n=e.pageSize,t=e.currentPage,r=e.onPageChanged,o=e.portionSize,a=Math.ceil(s/n),u=[],l=1;l<=a;l++)u.push(l);var c=Math.ceil(a/o),f=(0,i.useState)(1),d=(0,U.Z)(f,2),g=d[0],_=d[1],h=(g-1)*o+1,p=g*o;return(0,w.jsxs)("div",{className:C,children:[g>1&&(0,w.jsx)("button",{onClick:function(){_(g-1),r((g-1)*o)},className:b,children:"Prev"}),u.filter((function(e){return e>=h&&e<=p})).map((function(e){return(0,w.jsx)("span",{onClick:function(){r(e)},className:"".concat(z," ").concat(t===e?S:""),children:e},e)})),c>g&&(0,w.jsx)("button",{onClick:function(){_(g+1),r(g*o+1)},className:b,children:"Next"})]})},Z=["users","isButtonPress","follow","unfollow","isFetching"],F=function(e){var s=e.users,n=e.isButtonPress,t=e.follow,r=e.unfollow,o=e.isFetching,a=(0,l.Z)(e,Z),i=s.map((function(e){return(0,w.jsx)(v,{isButtonPress:n,follow:t,unfollow:r,photos:e.photos,id:e.id,followed:e.followed,name:e.name,status:e.status,location:e.location},e.id)}));return(0,w.jsxs)("div",{className:x,children:[(0,w.jsx)("h1",{children:"Users"}),(0,w.jsx)(k,(0,u.Z)((0,u.Z)({},a),{},{portionSize:10})),o?(0,w.jsx)("div",{className:j,children:(0,w.jsx)(N.Z,{})}):i]})},B=function(e){return e.usersPage.pageSize},y=function(e){return e.usersPage.totalUsersCount},M=function(e){return e.usersPage.currentPage},q=function(e){return e.usersPage.isFetching},A=function(e){return e.usersPage.isFollowingInProgress},O=(0,o.$j)((function(e){return{users:(s=e,s.usersPage.users),pageSize:B(e),totalUsersCount:y(e),currentPage:M(e),isFetching:q(e),isButtonPress:A(e)};var s}),{follow:a.ZN,unfollow:a.fv,requestUsers:a.D7,setCurrentPage:a.D4})((function(e){var s=e.requestUsers;(0,i.useEffect)((function(){s(e.currentPage,e.pageSize)}),[e.currentPage,e.pageSize,s]);var n=function(){var s=(0,r.Z)((0,t.Z)().mark((function s(n){return(0,t.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:e.unfollow(n);case 1:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}();return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(F,{isButtonPress:e.isButtonPress,onPageChanged:function(s){e.setCurrentPage(s),e.requestUsers(s,e.pageSize)},users:e.users,follow:function(s){e.follow(s)},unfollow:n,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage})})}))}}]);
//# sourceMappingURL=301.702773ef.chunk.js.map