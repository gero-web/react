(this.webpackJsonpfronted=this.webpackJsonpfronted||[]).push([[0],{192:function(e,t,a){},193:function(e,t,a){},371:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(0),c=a(28),s=a.n(c),i=(a(192),a.p,a(193),a(194),a(21)),l=a(32),o=a(29),u="REGISTER_SUCCESS",j="REGISTER_FAIL",d="LOGIN_SUCCESS",b="LOGIN_FAIL",m="LOGOUT",O="SET_MESSAGE",h="SET_MESSAGE_EMAIL",p="SET_MESSAGE_PASSWORD",g="CLEAR_MESSAGE",f=a(61),x=a.n(f),v="https://peaceful-castle-65198.herokuapp.com/";var y={registration_user:function(e,t){return x.a.post(v+"register/",{user:{email:e,password:t}})},logout:function(){localStorage.removeItem("user")},login:function(e,t){return x.a.post(v+"login/",{user:{email:e,password:t}}).then((function(e){var t;t=e.data,localStorage.setItem("user",JSON.stringify(t))}))}},k=function(e){return e.password},S=function(e){return e.email},I=function(e,t){return function(a){return y.login(e,t).then((function(e){return a({type:d,payload:{user:e}}),Promise.resolve()}),(function(n){var r=n.response&&n.response.data&&n.response.data.errors;return console.log(JSON.stringify(r)),a({type:b}),e in r&&a({type:h,payload:S(r)}),t in r&&a({type:p,payload:k(r)}),a({type:O,payload:r.error}),Promise.reject()}))}},E=function(){return{type:m}},N=a(379),_=a(380),w=a(375),C=a(378),T=a(91),P=a(55),L=a(377),F=function(e){var t=e.history,a=e.title,r=e.style;return Object(n.jsx)(L.a,{style:r||{padding:"0 50px",margin:"-30px 0 0 0"},className:"site-page-header",onBack:function(){return t.goBack()},title:a,subTitle:""})},A={labelCol:{span:8},wrapperCol:{span:16}},q={wrapperCol:{offset:8,span:16}},R=function(e){var t=e.history,a=Object(r.useState)(""),c=Object(l.a)(a,2),s=c[0],d=c[1],b=Object(r.useState)(""),m=Object(l.a)(b,2),g=m[0],f=m[1],x=Object(o.c)((function(e){return e.auth_reducers})).isLoggindIn,v=Object(o.c)((function(e){return e.message_reducers})),I=v.messageEmail,E=v.messagePass,L=v.message,R=Object(o.b)();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(F,{style:{padding:"0 50px",margin:"-30px 0 0 0"},history:t,title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),!x&&Object(n.jsxs)(n.Fragment,{children:[L&&Object(n.jsx)(_.b,{children:void N.b.error(L)}),Object(n.jsxs)(w.a,Object(i.a)(Object(i.a)({},A),{},{name:"basic",initialValues:{remember:!0},children:[Object(n.jsx)(w.a.Item,{label:"email",name:"email",rules:[{required:!0,message:I||"Please input your email!"}],children:Object(n.jsx)(C.a,{onChange:function(e){var t=e.target.value;console.log(t),d(t)},value:s})}),Object(n.jsx)(w.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:E||"Please input your password!"}],children:Object(n.jsx)(C.a.Password,{onChange:function(e){var t=e.target.value;f(t)},value:g})}),Object(n.jsx)(w.a.Item,Object(i.a)(Object(i.a)({},q),{},{name:"remember",valuePropName:"checked",children:Object(n.jsx)(T.a,{children:"Remember me"})})),Object(n.jsx)(w.a.Item,Object(i.a)(Object(i.a)({},q),{},{children:Object(n.jsx)(P.a,{type:"primary",onClick:function(e){e.preventDefault(),R(function(e,t){return function(a){return y.registration_user(e,t).then((function(e){return a({type:u}),a({type:O,payload:e.data.message}),Promise.resolve()}),(function(e){var t=e.response&&e.response.data&&e.response.data.errors;return a({type:j}),a({type:h,payload:S(t)}),a({type:p,payload:k(t)}),Promise.reject()}))}}(s,g)).then((function(){t.push("/login")})).catch((function(){}))},htmlType:"submit",children:"Submit"})}))]}))]})]})},D=function(e){var t=e.history,a=Object(r.useState)(""),c=Object(l.a)(a,2),s=c[0],u=c[1],j=Object(r.useState)(""),d=Object(l.a)(j,2),b=d[0],m=d[1],O=Object(o.c)((function(e){return e.auth_reducers})).isLoggindIn,h=Object(o.c)((function(e){return e.message_reducers})),p=h.messageEmail,g=h.messagePass,f=h.message,x=Object(o.b)();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(F,{style:{padding:"0 50px",margin:"-30px 0 0 0"},history:t,title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),!O&&Object(n.jsxs)(n.Fragment,{children:[f&&Object(n.jsx)(_.b,{children:void N.b.error(f)}),Object(n.jsxs)(w.a,Object(i.a)(Object(i.a)({},A),{},{name:"basic",initialValues:{remember:!0},children:[Object(n.jsx)(w.a.Item,{label:"email",name:"email",rules:[{required:!0,message:p||"Please input your username!"}],children:Object(n.jsx)(C.a,{onChange:function(e){var t=e.target.value;u(t)},value:s})}),Object(n.jsx)(w.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:g||"Please input your password!"}],children:Object(n.jsx)(C.a.Password,{onChange:function(e){var t=e.target.value;m(t)},value:b})}),Object(n.jsx)(w.a.Item,Object(i.a)(Object(i.a)({},q),{},{name:"remember",valuePropName:"checked",children:Object(n.jsx)(T.a,{children:"Remember me"})})),Object(n.jsx)(w.a.Item,Object(i.a)(Object(i.a)({},q),{},{children:Object(n.jsx)(P.a,{type:"primary",onClick:function(e){e.preventDefault(),x(I(s,b)).then((function(){t.push("/")})).catch((function(){}))},htmlType:"submit",children:"Submit"})}))]}))]})]})};function G(){var e=localStorage.key("user")?JSON.parse(localStorage.getItem("user")).user:void 0;return e&&e.token?{Authorization:"token "+e.token}:{}}var M=function(e,t){return x.a.put(v+"profile/",{user:{email:e,password:t}},{headers:G()})},B=a(173),J=a.n(B),U=a(131),V=a.n(U),z=a(174),H=a.n(z),W=a(175),K=function(e){if(!e)return Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},Q=function(e){if(!Object(W.isEmail)(e))return Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid email."})},X=function(e){if(e.length<6||e.length>40)return Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The password must be between 6 and 40 characters."})},Y=function(e){var t=e.history,a=Object(r.useRef)(),c=Object(r.useRef)(),s=Object(r.useState)(""),i=Object(l.a)(s,2),u=i[0],j=i[1],d=Object(r.useState)(""),b=Object(l.a)(d,2),m=b[0],O=b[1],h=Object(r.useState)(!1),p=Object(l.a)(h,2),g=p[0],f=p[1],x=Object(o.c)((function(e){return e.auth_reducers})).isLoggindIn,v=Object(o.c)((function(e){return e.message_reducers})),y=v.messageEmail,k=v.messagePass,S=v.message,N=Object(o.b)(),_=Object(o.c)((function(e){return e.auth_reducers})).user;Object(r.useEffect)((function(){_&&_.user?(j(_.user.email),O(_.user.password)):t.push("/")}),[_]);return Object(n.jsx)("div",{className:"col-md-12",children:Object(n.jsx)("div",{className:"card card-container",children:Object(n.jsxs)(J.a,{onSubmit:function(e){e.preventDefault(),a.current.validateAll(),0===c.current.context._errors.length&&M(u,m).then((function(e){N(E),N(I(u,m)),f(!0)})).catch((function(e){f(!1)}))},ref:a,children:[x&&Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email"}),Object(n.jsx)(V.a,{type:"text",className:"form-control",name:"email",value:u,onChange:function(e){var t=e.target.value;j(t)},validations:[K,Q]}),y&&Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("div",{className:g?"alert alert-success":"alert alert-danger",role:"alert",children:y})})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"password",children:"Password"}),Object(n.jsx)(V.a,{type:"password",className:"form-control",name:"password",value:m,onChange:function(e){var t=e.target.value;O(t)},validations:[K,X]}),k&&Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("div",{className:g?"alert alert-success":"alert alert-danger",role:"alert",children:k})})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("button",{className:"btn btn-primary btn-block",children:"Sign Up"})})]}),S&&Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("div",{className:g?"alert alert-success":"alert alert-danger",role:"alert",children:S})}),Object(n.jsx)(H.a,{style:{display:"none"},ref:c})]})})})},Z=a(27),$=a(48),ee=a(36),te=Object(ee.a)(),ae=x.a.create({baseURL:"https://peaceful-castle-65198.herokuapp.com",headers:{}});var ne={getAllTask:function(){return ae.get("task/",{headers:G()})},getTask:function(e){return ae.get("detail_task/".concat(e),{headers:G()})},updateTask:function(e,t){return ae.put("update_task/".concat(e),t,{headers:G()})},delateTask:function(e){return ae.delete("delate_task/".concat(e),{headers:G()})},create_task:function(e){return ae.post("create_task/",e,{headers:G()})}},re=a(374),ce=function(e){var t=e.history,a=Object(o.c)((function(e){return e.auth_reducers})).isLoggindIn,c=[{title:"\u0417\u0430\u0434\u0430\u0447\u0430",dataIndex:"name",key:"name"},{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",dataIndex:"desctiption",key:"desctiption"},{title:"Action",key:"action",render:function(e,t){return Object(n.jsxs)(_.b,{size:"middle",children:[a&&Object(n.jsx)($.b,{to:{pathname:"/edit",query:t},children:"Edit "}),Object(n.jsx)($.b,{to:{pathname:"/detail",query:{name:t.name,desc:t.desctiption}},children:"Detail "}),Object(n.jsx)("a",{onClick:function(e){e.preventDefault(),ne.delateTask(t.pk).then((function(e){window.location.reload()})).catch((function(e){console.log(e)}))},children:"Delete"})]})}}],s=Object(r.useState)([]),u=Object(l.a)(s,2),j=u[0],d=u[1];Object(r.useEffect)((function(){ne.getAllTask().then((function(e){d(e.data.map((function(e,t){return Object(i.a)(Object(i.a)({},e),{},{key:e.pk})})))}))}),[]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(F,{style:{padding:"0 50px",margin:"-30px 0 0 0"},title:"Home",history:t}),Object(n.jsx)(P.a,{onClick:function(){t.push("/add")},type:"link",size:"large",children:"Create!"}),Object(n.jsx)(re.a,{columns:c,dataSource:j})]})},se=function(e){var t=e.id,a=e.name,c=e.desk,s=e.onhandleTask,o=Object(r.useState)(""),u=Object(l.a)(o,2),j=u[0],d=u[1],b=Object(r.useState)(""),m=Object(l.a)(b,2),O=m[0],h=m[1],p=Object(r.useState)(t),g=Object(l.a)(p,2),f=g[0];g[1];Object(r.useEffect)((function(){a&&c&&(d(a),h(c))}),[]);return Object(n.jsx)("div",{style:{minHeight:"400vh",maxWidth:"952px"},children:Object(n.jsxs)(w.a,Object(i.a)(Object(i.a)({},A),{},{name:"basic",initialValues:{remember:!0},children:[Object(n.jsx)(w.a.Item,{label:"\u0417\u0430\u0434\u0430\u0447\u0430",name:"Task",rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443!"}],children:Object(n.jsx)(C.a,{onChange:function(e){var t=e.target.value;d(t)},value:j,defaultValue:a})}),Object(n.jsx)(w.a.Item,{label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",name:"desck",rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435!"}],children:Object(n.jsx)(C.a,{onChange:function(e){var t=e.target.value;h(t)},value:O,defaultValue:c})}),Object(n.jsx)(w.a.Item,Object(i.a)(Object(i.a)({},q),{},{name:"remember",valuePropName:"checked",children:Object(n.jsx)(T.a,{children:"Remember me"})})),Object(n.jsx)(w.a.Item,Object(i.a)(Object(i.a)({},q),{},{children:Object(n.jsx)(P.a,{type:"primary",onClick:function(e){e.preventDefault(),j&&O&&s(f,j,O)},htmlType:"submit",children:"Submit"})}))]}))})},ie=function(e){var t=e.history,a=e.location,r=a.query?a.query:t.goBack(),c=r.pk,s=r.name,i=r.desctiption;return Object(n.jsxs)("div",{children:[Object(n.jsx)(F,{style:{padding:"0 50px",margin:"-30px 0 0 0"},title:"Edit",history:t}),Object(n.jsx)(se,{id:c,name:s,desk:i,history:t,onhandleTask:function(e,a,n){ne.updateTask(e,{task:{name:a,desctiption:n}}).then((function(e){t.push("/home")})).catch((function(e){console.log(e)}))}})]})},le=function(e){var t=e.history;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(F,{style:{padding:"0 50px",margin:"-30px 0 0 0"},title:"Create",history:t}),Object(n.jsx)(se,{id:"",name:"",desk:"",history:t,onhandleTask:function(e,a,n){ne.create_task({task:{name:a,desctiption:n}}).then((function(e){t.push("/home")})).catch((function(e){console.log(e)}))}})]})},oe=a(376),ue=function(e){var t=e.history,a=e.location,c=Object(r.useState)(""),s=Object(l.a)(c,2),i=s[0],o=s[1],u=Object(r.useState)(""),j=Object(l.a)(u,2),d=j[0],b=j[1];return Object(r.useEffect)((function(){a.query?(o(a.query.name),b(a.query.desc)):t.goBack()}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(F,{style:{padding:"0 50px",margin:"-30px 0 0 0"},title:"Detail",history:t}),Object(n.jsx)(oe.a,{title:"\u0417\u0430\u0434\u0430\u0447\u0430",children:Object(n.jsx)(oe.a,{type:"inner",title:i,children:d})})]})},je=a(373),de=a(51);var be=function(){var e=Object(o.c)((function(e){return e.auth_reducers})),t=e.isLoggindIn,a=(e.user,Object(o.b)()),c=je.a.Header,s=je.a.Content;return Object(r.useEffect)((function(){te.listen((function(e){return a({type:g,payload:""})}))}),[a]),Object(n.jsx)(Z.b,{history:te,children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(je.a,{className:"layout",children:[Object(n.jsxs)(c,{children:[Object(n.jsx)("div",{className:"logo"}),Object(n.jsxs)(de.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:[Object(n.jsx)(de.a.Item,{children:Object(n.jsx)($.b,{to:"/home",children:"Main"})},"1"),!t&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(de.a.Item,{children:Object(n.jsx)($.b,{to:"/login",children:"Login"})},"2"),Object(n.jsx)(de.a.Item,{children:Object(n.jsx)($.b,{to:"/register",children:"Sign Up"})},"3")]}),t&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(de.a.Item,{children:Object(n.jsx)($.b,{to:"/profile",className:"nav-link",children:"profile"})},"4"),Object(n.jsx)(de.a.Item,{children:Object(n.jsx)($.b,{onClick:function(e){e.preventDefault(),a(E())},to:"/",className:"nav-link",children:"Logout"})},"5")]})]})]}),Object(n.jsx)(s,{style:{padding:"0 50px",margin:"50px 0 0 0"},children:Object(n.jsx)("div",{className:"site-layout-content",children:Object(n.jsxs)(Z.c,{children:[Object(n.jsx)(Z.a,{exact:!0,path:"/",component:ce}),Object(n.jsx)(Z.a,{exact:!0,path:"/home",component:ce}),Object(n.jsx)(Z.a,{exact:!0,path:"/login",component:D}),Object(n.jsx)(Z.a,{exact:!0,path:"/register",component:R}),Object(n.jsx)(Z.a,{exact:!0,path:"/profile",component:Y}),Object(n.jsx)(Z.a,{exact:!0,path:"/detail",component:ue}),Object(n.jsx)(Z.a,{exact:!0,path:"/edit",component:ie}),Object(n.jsx)(Z.a,{exact:!0,path:"/add",component:le})]})})})]})})})},me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,381)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},Oe=a(60),he=a(179),pe=a(180),ge=JSON.parse(localStorage.getItem("user")),fe=ge?{isLoggindIn:!0,user:ge}:{isLoggindIn:!1,user:null};var xe={messagePass:"",messageEmail:"",message:""};var ve=Object(Oe.combineReducers)({auth_reducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case u:return Object(i.a)(Object(i.a)({},e),{},{isLoggindIn:!1});case j:return Object(i.a)(Object(i.a)({},e),{},{isLoggingdIn:!1});case d:return Object(i.a)(Object(i.a)({},e),{},{isLoggindIn:!0,user:n.user});case b:return Object(i.a)(Object(i.a)({},e),{},{isLoggindIn:!1,user:null});case m:return y.logout(),Object(i.a)(Object(i.a)({},e),{},{isLoggindIn:!1,user:null});default:return e}},message_reducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case O:return{message:n};case p:return Object(i.a)(Object(i.a)({},e),{},{messagePass:n});case h:return Object(i.a)(Object(i.a)({},e),{},{messageEmail:n});case g:return{messagePass:"",messageEmail:"",message:""};default:return e}}}),ye=[pe.a],ke=Object(Oe.createStore)(ve,Object(he.composeWithDevTools)(Oe.applyMiddleware.apply(void 0,ye)));s.a.render(Object(n.jsx)(o.a,{store:ke,children:Object(n.jsx)($.a,{children:Object(n.jsx)(be,{})})}),document.getElementById("root")),me()}},[[371,1,2]]]);
//# sourceMappingURL=main.52684113.chunk.js.map