(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var s,c=n(8),a=n.n(c),r=n(2),i=n(1),o=(n(14),n(15),n(16),n(4)),l=n.n(o),d=n(0),m=function(e){var t=e.posts,n=e.openedPostId,s=e.openPost;return Object(d.jsxs)("div",{"data-cy":"PostsList",children:[Object(d.jsx)("p",{className:"title",children:"Posts:"}),Object(d.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"has-background-link-light",children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"Post",children:[Object(d.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(d.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{type:"button","data-cy":"PostButton",className:l()("button","is-link",{"is-light":n!==e.id}),onClick:function(){return t=e.id,c=n===e.id,void s(c?null:t);var t,c},children:n===e.id?"Close":"Open"})})]},e.id)}))})]})]})},j=n(9),u=(n(18),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(d.jsx)("div",{className:"Loader__content"})})}),b=n(3);!function(e){e.Name="name",e.Email="email",e.Body="body"}(s||(s={}));var h=function(e){var t=e.postId,n=e.addComment,c=e.isCommentsAdding,a=Object(i.useState)({name:"",email:"",comment:""}),o=Object(r.a)(a,2),m=o[0],j=o[1],u=Object(i.useState)({isNameError:!1,isEmailError:!1,isCommentError:!1}),h=Object(r.a)(u,2),O=h[0],f=h[1],N=function(e){switch(e.target.name){case s.Name:j((function(t){return Object(b.a)(Object(b.a)({},t),{},{name:e.target.value})})),f((function(e){return Object(b.a)(Object(b.a)({},e),{},{isNameError:!1})}));break;case s.Email:j((function(t){return Object(b.a)(Object(b.a)({},t),{},{email:e.target.value})})),f((function(e){return Object(b.a)(Object(b.a)({},e),{},{IsEmailError:!1})}));break;case s.Body:j((function(t){return Object(b.a)(Object(b.a)({},t),{},{comment:e.target.value})})),f((function(e){return Object(b.a)(Object(b.a)({},e),{},{IsCommentError:!1})}))}};return Object(d.jsxs)("form",{"data-cy":"NewCommentForm",children:[Object(d.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(d.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:l()("input",{"is-danger":O.isNameError}),value:m.name,onChange:N}),Object(d.jsx)("span",{className:"icon is-small is-left",children:Object(d.jsx)("i",{className:"fas fa-user"})}),O.isNameError&&Object(d.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),O.isNameError&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(d.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(d.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:l()("input",{"is-danger":O.isEmailError}),value:m.email,onChange:N}),Object(d.jsx)("span",{className:"icon is-small is-left",children:Object(d.jsx)("i",{className:"fas fa-envelope"})}),O.isEmailError&&Object(d.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),O.isEmailError&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(d.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:l()("textarea",{"is-danger":O.isCommentError}),value:m.comment,onChange:N})}),O.isCommentError&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(d.jsxs)("div",{className:"field is-grouped",children:[Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"submit",className:l()("button","is-link",{"is-loading":c}),onClick:function(e){if(null===e||void 0===e||e.preventDefault(),m.name.trim())if(m.email.trim())if(m.comment.trim()){var s={postId:t,name:m.name,email:m.email,body:m.comment};n(s),j((function(e){return Object(b.a)(Object(b.a)({},e),{},{comment:""})}))}else f((function(e){return Object(b.a)(Object(b.a)({},e),{},{IsCommentError:!0})}));else f((function(e){return Object(b.a)(Object(b.a)({},e),{},{isEmailError:!0})}));else f((function(e){return Object(b.a)(Object(b.a)({},e),{},{isNameError:!0})}))},children:"Add"})}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){j({name:"",email:"",comment:""}),f({isNameError:!1,isEmailError:!1,isCommentError:!1})},children:"Clear"})})]})]})},O="https://mate.academy/students-api";function f(e){return new Promise((function(t){setTimeout(t,e)}))}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return n&&(s.body=JSON.stringify(n),s.headers={"Content-Type":"application/json; charset=UTF-8"}),f(300).then((function(){return fetch(O+e,s)})).then((function(e){return e.json()}))}var x,p=function(e){return N(e)},E=function(e,t){return N(e,"POST",t)},g=function(e){return N(e,"DELETE")};!function(e){e[e.None=0]="None",e[e.CommentsLoadingError=1]="CommentsLoadingError",e[e.NoCommentsError=2]="NoCommentsError"}(x||(x={}));var v,y=function(e){var t=e.openedPost,n=Object(i.useState)([]),s=Object(r.a)(n,2),c=s[0],a=s[1],o=Object(i.useState)(!1),l=Object(r.a)(o,2),m=l[0],b=l[1],O=Object(i.useState)(!1),f=Object(r.a)(O,2),N=f[0],v=f[1],y=Object(i.useState)(!1),C=Object(r.a)(y,2),P=C[0],S=C[1],k=Object(i.useState)(!1),w=Object(r.a)(k,2),I=w[0],L=w[1],T=Object(i.useState)(x.None),F=Object(r.a)(T,2),U=F[0],B=F[1],A=function(e){var t;(t=e,g("/comments/".concat(t))).then((function(){a((function(t){return t.filter((function(t){return t.id!==e}))})),B(x.None),c.length||(B(x.NoCommentsError),S(!1))})).catch((function(){B(x.CommentsLoadingError),setTimeout((function(){B(x.None)}),3e3)}))},M=function(e){v(!0),S(!1),function(e){return p("/comments?postId=".concat(e))}(e).then((function(e){a(e),S(!0),e.length||(B(x.NoCommentsError),S(!1))})).catch((function(){B(x.CommentsLoadingError),a([])})).finally((function(){v(!1)}))};return Object(i.useEffect)((function(){M(t.id)}),[t]),Object(d.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(d.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(d.jsxs)("div",{className:"block",children:[Object(d.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(d.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(d.jsxs)("div",{className:"block",children:[N&&Object(d.jsx)(u,{}),U===x.CommentsLoadingError&&Object(d.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),U===x.NoCommentsError&&Object(d.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),P&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"title is-4",children:"Comments:"}),c.map((function(e){return Object(d.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(d.jsxs)("div",{className:"message-header",children:[Object(d.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(d.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return A(e.id)},children:"delete button"})]}),Object(d.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]}),!m&&Object(d.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return b(!0)},children:"Write a comment"})]}),m&&Object(d.jsx)(h,{postId:t.id,addComment:function(e){var t;L(!0),(t=e,E("/comments",t)).then((function(e){a((function(t){return[].concat(Object(j.a)(t),[e])})),B(x.None),L(!1)})).catch((function(){B(x.CommentsLoadingError),L(!1),setTimeout((function(){B(x.None)}),3e3)}))},isCommentsAdding:I})]})})},C=function(e){var t=e.users,n=e.selectedUserId,s=e.setSelectedUserId,c=e.loadPostsOfUser,a=e.clearError,o=Object(i.useState)(!1),m=Object(r.a)(o,2),j=m[0],u=m[1],b=Object(i.useState)("Choose a user"),h=Object(r.a)(b,2),O=h[0],f=h[1];return Object(d.jsxs)("div",{"data-cy":"UserSelector",className:l()("dropdown",{"is-active":j}),children:[Object(d.jsx)("div",{className:"dropdown-trigger",children:Object(d.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){u((function(e){return!e}))},children:[Object(d.jsx)("span",{children:O}),Object(d.jsx)("span",{className:"icon is-small",children:Object(d.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(d.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",hidden:j,children:Object(d.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(d.jsx)("a",{href:"#user-".concat(e.id),className:l()("dropdown-item",{"is-active":e.id===n}),onClick:function(){return t=e.id,n=e.name,s(t),f(n),u(!1),c(t),void a();var t,n},children:e.name},e.id)}))})})]})};!function(e){e[e.None=0]="None",e[e.PostsLoadingError=1]="PostsLoadingError",e[e.NoPostsError=2]="NoPostsError"}(v||(v={}));var P=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(i.useState)([]),a=Object(r.a)(c,2),o=a[0],l=a[1],j=Object(i.useState)(null),b=Object(r.a)(j,2),h=b[0],O=b[1],f=Object(i.useState)(null),N=Object(r.a)(f,2),x=N[0],E=N[1],g=Object(i.useState)(!1),P=Object(r.a)(g,2),S=P[0],k=P[1],w=Object(i.useState)(!1),I=Object(r.a)(w,2),L=I[0],T=I[1],F=Object(i.useState)(v.None),U=Object(r.a)(F,2),B=U[0],A=U[1],M=Object(i.useMemo)((function(){return o.find((function(e){return e.id===x}))||null}),[x]);return Object(i.useEffect)((function(){p("/users").then((function(e){return s(e)})).catch((function(){s([])}))}),[]),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"tile is-ancestor",children:[Object(d.jsx)("div",{className:"tile is-parent",children:Object(d.jsxs)("div",{className:"tile is-child box is-success",children:[Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(C,{users:n,selectedUserId:h,setSelectedUserId:function(e){O(e),E(null)},loadPostsOfUser:function(e){k(!0),T(!1),function(e){return p("/posts?userId=".concat(e))}(e).then((function(e){l(e),T(!0),e.length||(A(v.NoPostsError),T(!1))})).catch((function(){A(v.PostsLoadingError),l([])})).finally((function(){k(!1)}))},clearError:function(){A(v.None)}})}),Object(d.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!h&&Object(d.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),S&&Object(d.jsx)(u,{}),B===v.PostsLoadingError&&Object(d.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),B===v.NoPostsError&&Object(d.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),L&&Object(d.jsx)(m,{posts:o,openPost:function(e){E(e)},openedPostId:x})]})]})}),x&&Object(d.jsx)("div",{"data-cy":"Sidebar",className:"tile is-parent is-8-desktop Sidebar Sidebar--open",children:Object(d.jsx)("div",{className:"tile is-child box is-success ",children:M&&Object(d.jsx)(y,{openedPost:M})})})]})})})};a.a.render(Object(d.jsx)(P,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ae69103b.chunk.js.map