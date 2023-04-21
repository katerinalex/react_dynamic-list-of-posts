(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var c,n=s(7),a=s.n(n),i=s(2),o=s(1),r=(s(13),s(14),s(15),s(3)),l=s.n(r),d=s(0),j=function(e){var t=e.posts,s=e.openedPostId,c=e.openPost;return Object(d.jsxs)("div",{"data-cy":"PostsList",children:[Object(d.jsx)("p",{className:"title",children:"Posts:"}),Object(d.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"has-background-link-light",children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"Post",children:[Object(d.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(d.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{type:"button","data-cy":"PostButton",className:l()("button","is-link",{"is-light":s!==e.id}),onClick:function(){return t=e.id,n=s===e.id,void c(n?null:t);var t,n},children:s===e.id?"Close":"Open"})})]},e.id)}))})]})]})},m=s(8),b=(s(17),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(d.jsx)("div",{className:"Loader__content"})})});!function(e){e.Name="name",e.Email="email",e.Body="body"}(c||(c={}));var u=function(e){var t=e.postId,s=e.addComment,n=e.isCommentsAdding,a=Object(o.useState)(""),r=Object(i.a)(a,2),j=r[0],m=r[1],b=Object(o.useState)(!1),u=Object(i.a)(b,2),h=u[0],O=u[1],x=Object(o.useState)(""),f=Object(i.a)(x,2),N=f[0],p=f[1],g=Object(o.useState)(!1),y=Object(i.a)(g,2),v=y[0],E=y[1],C=Object(o.useState)(""),S=Object(i.a)(C,2),P=S[0],k=S[1],w=Object(o.useState)(!1),L=Object(i.a)(w,2),I=L[0],T=L[1],F=function(e){switch(e.target.name){case c.Name:m(e.target.value),O(!1);break;case c.Email:p(e.target.value),E(!1);break;case c.Body:k(e.target.value),T(!1)}};return Object(d.jsxs)("form",{"data-cy":"NewCommentForm",children:[Object(d.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(d.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:l()("input",{"is-danger":h}),value:j,onChange:F}),Object(d.jsx)("span",{className:"icon is-small is-left",children:Object(d.jsx)("i",{className:"fas fa-user"})}),h&&Object(d.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),h&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(d.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(d.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:l()("input",{"is-danger":v}),value:N,onChange:F}),Object(d.jsx)("span",{className:"icon is-small is-left",children:Object(d.jsx)("i",{className:"fas fa-envelope"})}),v&&Object(d.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),v&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(d.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:l()("textarea",{"is-danger":I}),value:P,onChange:F})}),I&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(d.jsxs)("div",{className:"field is-grouped",children:[Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"submit",className:l()("button","is-link",{"is-loading":n}),onClick:function(e){(null===e||void 0===e||e.preventDefault(),j.trim())?N.trim()?P.trim()?s({postId:t,name:j,email:N,body:P}):T(!0):E(!0):O(!0)},children:"Add"})}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){m(""),p(""),k(""),O(!1),E(!1),T(!1)},children:"Clear"})})]})]})},h="https://mate.academy/students-api";function O(e){return new Promise((function(t){setTimeout(t,e)}))}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),O(300).then((function(){return fetch(h+e,c)})).then((function(e){return e.json()}))}var f,N=function(e){return x(e)},p=function(e,t){return x(e,"POST",t)},g=function(e){return x(e,"DELETE")};!function(e){e[e.None=0]="None",e[e.CommentsLoadingError=1]="CommentsLoadingError",e[e.NoCommentsError=2]="NoCommentsError"}(f||(f={}));var y,v=function(e){var t=e.openedPost,s=Object(o.useState)([]),c=Object(i.a)(s,2),n=c[0],a=c[1],r=Object(o.useState)(!1),l=Object(i.a)(r,2),j=l[0],h=l[1],O=Object(o.useState)(!1),x=Object(i.a)(O,2),y=x[0],v=x[1],E=Object(o.useState)(!1),C=Object(i.a)(E,2),S=C[0],P=C[1],k=Object(o.useState)(!1),w=Object(i.a)(k,2),L=w[0],I=w[1],T=Object(o.useState)(f.None),F=Object(i.a)(T,2),U=F[0],B=F[1],A=function(e){var t;(t=e,g("/comments/".concat(t))).then((function(){a((function(t){return t.filter((function(t){return t.id!==e}))})),B(f.None),n.length||(B(f.NoCommentsError),P(!1))})).catch((function(){B(f.CommentsLoadingError),setTimeout((function(){B(f.None)}),3e3)}))},D=function(e){v(!0),P(!1),function(e){return N("/comments?postId=".concat(e))}(e).then((function(e){a(e),P(!0),e.length||(B(f.NoCommentsError),P(!1))})).catch((function(){B(f.CommentsLoadingError),a([])})).finally((function(){v(!1)}))};return Object(o.useEffect)((function(){D(t.id)}),[t]),Object(d.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(d.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(d.jsxs)("div",{className:"block",children:[Object(d.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(d.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(d.jsxs)("div",{className:"block",children:[y&&Object(d.jsx)(b,{}),U===f.CommentsLoadingError&&Object(d.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),U===f.NoCommentsError&&Object(d.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),S&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"title is-4",children:"Comments:"}),n.map((function(e){return Object(d.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(d.jsxs)("div",{className:"message-header",children:[Object(d.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(d.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return A(e.id)},children:"delete button"})]}),Object(d.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]}),!j&&Object(d.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return h(!0)},children:"Write a comment"})]}),j&&Object(d.jsx)(u,{postId:t.id,addComment:function(e){var t;I(!0),(t=e,p("/comments",t)).then((function(e){a((function(t){return[].concat(Object(m.a)(t),[e])})),B(f.None),I(!1)})).catch((function(){B(f.CommentsLoadingError),I(!1),setTimeout((function(){B(f.None)}),3e3)}))},isCommentsAdding:L})]})})},E=function(e){var t=e.users,s=e.selectedUserId,c=e.setSelectedUserId,n=e.loadPostsOfUser,a=e.clearError,r=Object(o.useState)(!1),j=Object(i.a)(r,2),m=j[0],b=j[1],u=Object(o.useState)("Choose a user"),h=Object(i.a)(u,2),O=h[0],x=h[1];return Object(d.jsxs)("div",{"data-cy":"UserSelector",className:l()("dropdown",{"is-active":m}),children:[Object(d.jsx)("div",{className:"dropdown-trigger",children:Object(d.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){b((function(e){return!e}))},children:[Object(d.jsx)("span",{children:O}),Object(d.jsx)("span",{className:"icon is-small",children:Object(d.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(d.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",hidden:m,children:Object(d.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(d.jsx)("a",{href:"#user-".concat(e.id),className:l()("dropdown-item",{"is-active":e.id===s}),onClick:function(){return t=e.id,s=e.name,c(t),x(s),b(!1),n(t),void a();var t,s},children:e.name},e.id)}))})})]})};!function(e){e[e.None=0]="None",e[e.PostsLoadingError=1]="PostsLoadingError",e[e.NoPostsError=2]="NoPostsError"}(y||(y={}));var C=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(o.useState)([]),a=Object(i.a)(n,2),r=a[0],l=a[1],m=Object(o.useState)(null),u=Object(i.a)(m,2),h=u[0],O=u[1],x=Object(o.useState)(null),f=Object(i.a)(x,2),p=f[0],g=f[1],C=Object(o.useState)(null),S=Object(i.a)(C,2),P=S[0],k=S[1],w=Object(o.useState)(!1),L=Object(i.a)(w,2),I=L[0],T=L[1],F=Object(o.useState)(!1),U=Object(i.a)(F,2),B=U[0],A=U[1],D=Object(o.useState)(y.None),M=Object(i.a)(D,2),_=M[0],J=M[1];return Object(o.useEffect)((function(){N("/users").then((function(e){return c(e)})).catch((function(){c([])}))}),[]),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"tile is-ancestor",children:[Object(d.jsx)("div",{className:"tile is-parent",children:Object(d.jsxs)("div",{className:"tile is-child box is-success",children:[Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(E,{users:s,selectedUserId:h,setSelectedUserId:function(e){O(e)},loadPostsOfUser:function(e){T(!0),A(!1),function(e){return N("/posts?userId=".concat(e))}(e).then((function(e){l(e),A(!0),e.length||(J(y.NoPostsError),A(!1))})).catch((function(){J(y.PostsLoadingError),l([])})).finally((function(){T(!1)}))},clearError:function(){J(y.None)}})}),Object(d.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!h&&Object(d.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),I&&Object(d.jsx)(b,{}),_===y.PostsLoadingError&&Object(d.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),_===y.NoPostsError&&Object(d.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),B&&Object(d.jsx)(j,{posts:r,openPost:function(e){g(e),k(r.find((function(t){return t.id===e}))||null)},openedPostId:p})]})]})}),p&&Object(d.jsx)("div",{"data-cy":"Sidebar",className:"tile is-parent is-8-desktop Sidebar Sidebar--open",children:Object(d.jsx)("div",{className:"tile is-child box is-success ",children:P&&Object(d.jsx)(v,{openedPost:P})})})]})})})};a.a.render(Object(d.jsx)(C,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.aeb9e137.chunk.js.map