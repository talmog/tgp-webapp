(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"10d90001f2aaa290cff0":function(e,a,t){"use strict";t.d(a,"b",function(){return d});var n=t("7edf83707012a871cdfb"),r=t("aaef8dcf9f24590d7c1e");function c(e){return function(e){if(Array.isArray(e)){for(var a=0,t=new Array(e.length);a<e.length;a++)t[a]=e[a];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d={candidates:!1,users:!1,loading:!1,error:!1,articlesFeedback:!1,candidate:!1};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;return Object(n.a)(e,function(t){switch(a.type){case r.a.LOAD_CANDIDATES:t.candidates=!1,t.loading=!0,t.error=!1;break;case r.a.LOAD_CANDIDATES_SUCCESS:t.candidates=a.candidates,t.loading=!1,t.error=!1;break;case r.a.LOAD_CANDIDATES_ERROR:t.candidates=!1,t.loading=!1,t.error=a.error;break;case r.a.LOAD_ALL_USERS:t.users=!1,t.loading=!0,t.error=!1;break;case r.a.LOAD_ALL_USERS_SUCCESS:t.users=a.users,t.loading=!1,t.error=!1;break;case r.a.LOAD_ALL_USERS_ERROR:t.users=!1,t.loading=!1,t.error=a.error;break;case r.a.UPDATE_CANDIDATE_SUCCESS:for(var n=c(e.candidates),d=a.candidate,i=0;i<n.length;i++){var o=n[i];if(o.id===d.id&&o.isIncumbent===d.isIncumbent){n[i]=d;break}}t.candidates=n,t.candidate=d,t.loading=!1;break;case r.a.EDIT_CANDIDATE_SUCCESS:t.candidate=a.candidate,t.loading=!1;break;case r.a.LOAD_ARTICLES_FEEDBACK_SUCCESS:t.articlesFeedback=a.articlesFeedback;break;case r.a.LOAD_CANDIDATE:t.candidate=!1,t.loading=!0,t.error=!1;break;case r.a.LOAD_CANDIDATE_SUCCESS:t.candidate=a.candidate,t.loading=!1,t.error=!1;break;case r.a.UPDATE_CANDIDATE_IMAGE:t.loading=!0}})}},"7c1e37d9d9530f9a4cc7":function(e,a,t){"use strict";t.r(a);var n,r=t("8af190b70a6bc55c6f1b"),c=t.n(r),d=(t("8a2d1b95e05b6a321e74"),t("d7dd51e1bf6bfc2c9c3d")),i=t("0d7f0986bcd2f33d8a2a"),o=t("a28fc3c963a1d4d1a2e5"),s=t("ab4cb61bcb2dc161defb"),l=t("3aced5b508e7389026da"),u=t("0b3cb19af78752326f59"),A=t("63bac7d5ea40ecc9ba06"),b=t.n(A),f=t("d5a0dc4d1b196c09179e"),p=t.n(f),C=t("af7460c9ffe2a1fce8fc"),S=t.n(C),E=t("5ad45c8355a3e886d138"),D=t.n(E),m=t("c82f135c42c3c148fae5"),_=t.n(m),g=t("083d6914129797192aa6"),O=t.n(g),h=t("5e56989cfce2721faf6e"),v=t.n(h),L=t("420b1aa2e7ffc94c529d"),I=t.n(L),k=t("40f6a07dbcf635c24195"),x=t.n(k),U=t("9db51d926aa86b97d057"),T=t.n(U),y=t("29c7a63563300ae90b56"),R=t("0e3eab9fe12a0cc7b2ce"),j=t("c552c8159555a669ceef"),w=t("40a861cdeb2870896bab"),N=t.n(w),P=t("3ed81f8d24b90b29f580"),F=Object(P.a)(function(){return Promise.all([t.e(0),t.e(5),t.e(9),t.e(18),t.e(59)]).then(t.bind(null,"e9dcc76ce24adc312559"))}),W=Object(P.a)(function(){return Promise.all([t.e(0),t.e(5),t.e(9),t.e(22),t.e(62)]).then(t.bind(null,"2aea4b9b05a2653c836d"))}),M=Object(P.a)(function(){return Promise.all([t.e(5),t.e(9),t.e(58)]).then(t.bind(null,"1148763b8661a5535e99"))}),z=Object(P.a)(function(){return Promise.all([t.e(0),t.e(5),t.e(12),t.e(13),t.e(34)]).then(t.bind(null,"550ca7dfa2d84f5260f1"))});function B(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=[],n=!0,r=!1,c=void 0;try{for(var d,i=e[Symbol.iterator]();!(n=(d=i.next()).done)&&(t.push(d.value),!a||t.length!==a);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function K(e,a,t,r){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,d=arguments.length-3;if(a||0===d||(a={children:void 0}),a&&c)for(var i in c)void 0===a[i]&&(a[i]=c[i]);else a||(a=c||{});if(1===d)a.children=r;else if(d>1){for(var o=new Array(d),s=0;s<d;s++)o[s]=arguments[s+3];a.children=o}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}var G,$=u.c.div.withConfig({displayName:"AdminWrapper__Wrapper",componentId:"sc-1tz7p5s-0"})(["min-height:calc(100vh - 50px);display:flex;flex-direction:row;padding-top:18px;"]),H=u.c.div.withConfig({displayName:"AdminWrapper__LeftPanel",componentId:"sc-1tz7p5s-1"})(["width:250px;box-shadow:0px 0px 32px rgba(0,0,0,0.07),0px 0px 12px rgba(0,0,0,0.08),0px 0px 16px rgba(0,0,0,0.12);overflow-x:hidden;transition:0.3s width;&.close{width:48px;}"]),J=Object(u.c)(b.a).withConfig({displayName:"AdminWrapper__LeftMenuItem",componentId:"sc-1tz7p5s-2"})(["&&{padding:16px 12px;border-bottom:solid 1px ",";color:",";&.selected{background-color:",";}}"],function(e){return e.theme.colors.grayE},function(e){return e.theme.colors.blue},function(e){return e.theme.colors.lighterBlue}),q=u.c.div.withConfig({displayName:"AdminWrapper__CloseWrapper",componentId:"sc-1tz7p5s-3"})(["width:100%;text-align:right;"]),Q=u.c.span.withConfig({displayName:"AdminWrapper__Icon",componentId:"sc-1tz7p5s-4"})(["margin-right:12px;"]),V=Object(u.c)(j.d).withConfig({displayName:"AdminWrapper__IconLabel",componentId:"sc-1tz7p5s-5"})(["display:inline-block;"]),X=u.c.div.withConfig({displayName:"AdminWrapper__MainPanel",componentId:"sc-1tz7p5s-6"})(["flex:1;"]),Y=u.c.div.withConfig({displayName:"AdminWrapper__MainPanelPlaceholder",componentId:"sc-1tz7p5s-7"})(["height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;"]),Z=u.c.img.withConfig({displayName:"AdminWrapper__Heart",componentId:"sc-1tz7p5s-8"})(["width:80px;height:auto;margin-top:12px;"]),ee=[{icon:K(p.a,{}),label:"Presidential Candidates"},{icon:K(S.a,{}),label:"Senate Candidates"},{icon:K(D.a,{}),label:"House Candidates"},{icon:K(I.a,{}),label:"Users"},{icon:K(x.a,{}),label:"Articles"},{icon:K(T.a,{}),label:"User Stats"}],ae=K(Y,{},void 0,K(j.g,{},void 0,"Loading"),K(_.a,{})),te=K(Y,{},void 0,K(j.g,{},void 0,"Admin Dashboard"),K(Z,{src:N.a})),ne=K(Y,{},void 0,K(j.g,{},void 0,"Admin Dashboard"),K(Z,{src:N.a})),re=K(R.a,{}),ce=K(y.a,{}),de=K(O.a,{}),ie=K(v.a,{}),oe=function(e){var a=e.user,t=e.candidates,n=e.users,c=e.articles,d=e.loadCandidatesCallback,i=e.updateCandidateCallback,o=e.loadAllUsersCallback,s=e.loadArticleFeedbackCallback,l=e.loading,u=(e.error,e.content),A=B(Object(r.useState)(!1),2),b=A[0],f=A[1],p=B(Object(r.useState)(!1),2),C=p[0],S=p[1],E=function(e){return 0===e?"presidential":1===e?"senate":2===e?"house":null},D=K(W,{users:n}),m=K(M,{articles:c,content:u}),_=K(z,{users:n});return K("div",{style:{backgroundColor:"#FFF"}},void 0,re,ce,a&&a.isAdmin&&K($,{},void 0,K(H,{className:C?"open":"close"},void 0,K(J,{onClick:function(){S(!C)}},void 0,K(q,{},void 0,C?de:ie)),ee.map(function(e,a){return K(J,{onClick:function(){!function(e){if(f(e),0===e||1===e||2===e){var a=E(e);d(a)}3!==e&&5!==e||n||o(),4===e&&s()}(a)},className:b===a?"selected":""},e.label,K(Q,{},void 0,e.icon),K(V,{},void 0,e.label))})),K(X,{},void 0,function(){if(l)return ae;if(!1===b)return te;if(b<3){var e=E(b);return K(F,{candidates:t,updateCandidateCallback:i,chamber:e})}return 3===b?D:4===b?m:5===b?_:ne}())))},se=t("adc20f99e57c573c589c"),le=t("d95b0cf107403b178365"),ue=t("f012149f8ddad6f00e17"),Ae=t("10d90001f2aaa290cff0"),be=t("9d8e664f32be90a660b8"),fe=t("9d68b76431f812f2be72"),pe=t("a08b6f3095f8d186887e"),Ce=t("6542cd13fd5dd1bcffd4");function Se(e,a,t,n){G||(G="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,c=arguments.length-3;if(a||0===c||(a={children:void 0}),a&&r)for(var d in r)void 0===a[d]&&(a[d]=r[d]);else a||(a=r||{});if(1===c)a.children=n;else if(c>1){for(var i=new Array(c),o=0;o<c;o++)i[o]=arguments[o+3];a.children=i}return{$$typeof:G,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}t.d(a,"AdminPage",function(){return De});var Ee=Se(i.Helmet,{},void 0,Se("title",{},void 0,"Admin Dashboard"),Se("meta",{name:"description",content:"Admin Dashboard"}));function De(e){var a=e.adminState,t=e.loadCandidatesCallback,n=e.updateCandidateCallback,d=e.loadAllUsersCallback,i=e.loadArticleFeedbackCallback,o=e.userState,s=e.content,u=e.dispatch;Object(le.a)({key:"adminPage",reducer:Ae.a}),Object(se.a)({key:"adminPage",saga:be.a});var A=o.user;Object(r.useEffect)(function(){A&&!A.isAdmin&&u(Object(l.push)("/"))});var b={candidates:a.candidates,users:a.users,articles:a.articlesFeedback,loadCandidatesCallback:t,updateCandidateCallback:n,loadAllUsersCallback:d,loadArticleFeedbackCallback:i,loading:a.loading,error:a.error,user:A,content:s};return Se("div",{},void 0,Ee,c.a.createElement(oe,b))}var me=Object(o.b)({adminState:Object(ue.a)(),userState:Object(pe.a)(),content:Object(Ce.b)()});var _e=Object(d.connect)(me,function(e){return{dispatch:e,loadCandidatesCallback:function(a){return e(fe.a.loadCandidates(a))},updateCandidateCallback:function(a,t,n,r){e(fe.a.updateCandidate(a,t,n,r))},loadAllUsersCallback:function(){e(fe.a.loadAllUsers())},loadArticleFeedbackCallback:function(){e(fe.a.loadArticlesFeedback())}}});a.default=Object(s.compose)(_e)(De)},"9d68b76431f812f2be72":function(e,a,t){"use strict";var n=t("aaef8dcf9f24590d7c1e");a.a={loadCandidates:function(e){return{type:n.a.LOAD_CANDIDATES,chamber:e}},loadCandidatesSuccess:function(e){return{type:n.a.LOAD_CANDIDATES_SUCCESS,candidates:e}},loadCandidatesError:function(e){return{type:n.a.LOAD_CANDIDATES_ERROR,error:e}},loadAllUsers:function(){return{type:n.a.LOAD_ALL_USERS}},loadAllUsersSuccess:function(e){return{type:n.a.LOAD_ALL_USERS_SUCCESS,users:e}},loadAllUsersError:function(e){return{type:n.a.LOAD_ALL_USERS_ERROR,error:e}},updateCandidate:function(e,a,t,r){var c=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return{type:n.a.UPDATE_CANDIDATE,id:e,updatedFields:a,chamber:t,isIncumbent:r,isEdit:c}},updateCandidateSuccess:function(e){return{type:n.a.UPDATE_CANDIDATE_SUCCESS,candidate:e}},editCandidateSuccess:function(e){return{type:n.a.EDIT_CANDIDATE_SUCCESS,candidate:e}},updateCandidateImage:function(e,a,t){return{type:n.a.UPDATE_CANDIDATE_IMAGE,base64:e,candidate:a,chamber:t}},loadArticlesFeedback:function(){return{type:n.a.LOAD_ARTICLES_FEEDBACK}},loadArticlesFeedbackSuccess:function(e){return{type:n.a.LOAD_ARTICLES_FEEDBACK_SUCCESS,articlesFeedback:e}},loadCandidateAction:function(e,a,t){return{type:n.a.LOAD_CANDIDATE,id:e,chamber:a,isIncumbent:t}},loadCandidateActionSuccess:function(e){return{type:n.a.LOAD_CANDIDATE_SUCCESS,candidate:e}}}},"9d8e664f32be90a660b8":function(e,a,t){"use strict";t.d(a,"a",function(){return g});var n=t("d782b72bc5b680c7122c"),r=t("7cda43955e52d47d5c0c"),c=t("c761e2b09ff3a8846743"),d=t("73f72b4cdcac1e382fee"),i=t("aaef8dcf9f24590d7c1e"),o=t("9d68b76431f812f2be72"),s=regeneratorRuntime.mark(C),l=regeneratorRuntime.mark(S),u=regeneratorRuntime.mark(E),A=regeneratorRuntime.mark(D),b=regeneratorRuntime.mark(m),f=regeneratorRuntime.mark(_),p=regeneratorRuntime.mark(g);function C(e){var a,t,i,l,u;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(n.put)(d.a.showSnakbarAction("Loading Candidates"));case 3:return a=e.chamber,t=c.a.admin.candidates,i={chamber:a},s.next=8,Object(n.call)(r.a,t,i);case 8:return l=s.sent,u=l.candidates,s.next=12,Object(n.put)(o.a.loadCandidatesSuccess(u));case 12:s.next=21;break;case 14:return s.prev=14,s.t0=s.catch(0),console.log(s.t0),s.next=19,Object(n.put)(d.a.showSnakbarAction("Error Loading Candidates","error"));case 19:return s.next=21,Object(n.put)(o.a.loadCandidatesError(s.t0));case 21:case"end":return s.stop()}},s,null,[[0,14]])}function S(){var e,a,t;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(n.put)(d.a.showSnakbarAction("Loading Users"));case 3:return e=c.a.admin.allUsers,i.next=6,Object(n.call)(r.a,e,null);case 6:return a=i.sent,t=a.users,i.next=10,Object(n.put)(o.a.loadAllUsersSuccess(t));case 10:i.next=19;break;case 12:return i.prev=12,i.t0=i.catch(0),console.log(i.t0),i.next=17,Object(n.put)(d.a.showSnakbarAction("Error Loading Users","error"));case 17:return i.next=19,Object(n.put)(o.a.loadAllUsersError(i.t0));case 19:case"end":return i.stop()}},l,null,[[0,12]])}function E(){var e,a,t;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(n.put)(d.a.showSnakbarAction("Loading Articles Feedback"));case 3:return e=c.a.admin.articlesFeedback,i.next=6,Object(n.call)(r.a,e,null);case 6:return a=i.sent,t=a.articles,i.next=10,Object(n.put)(o.a.loadArticlesFeedbackSuccess(t));case 10:i.next=17;break;case 12:return i.prev=12,i.t0=i.catch(0),console.log(i.t0),i.next=17,Object(n.put)(d.a.showSnakbarAction("Error Loading Articles","error"));case 17:case"end":return i.stop()}},u,null,[[0,12]])}function D(e){var a,t,i,s,l,u,b,f,p;return regeneratorRuntime.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,Object(n.put)(d.a.showSnakbarAction("Updating Candidate"));case 3:return a=e.id,t=e.updatedFields,i=e.chamber,s=e.isIncumbent,l=e.isEdit,u=c.a.admin.updateCandidate,b={id:a,updatedFields:t,chamber:i,isIncumbent:s},A.next=8,Object(n.call)(r.a,u,b);case 8:if(f=A.sent,p=f.candidate,!l){A.next=15;break}return A.next=13,Object(n.put)(o.a.editCandidateSuccess(p));case 13:A.next=17;break;case 15:return A.next=17,Object(n.put)(o.a.updateCandidateSuccess(p));case 17:A.next=26;break;case 19:return A.prev=19,A.t0=A.catch(0),console.log(A.t0),A.next=24,Object(n.put)(d.a.showSnakbarAction("Error Updating Candidate","error"));case 24:return A.next=26,Object(n.put)(o.a.loadCandidatesError(A.t0));case 26:case"end":return A.stop()}},A,null,[[0,19]])}function m(e){var a,t,i,s,l,u,A,f;return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,b.next=3,Object(n.put)(d.a.showSnakbarAction("Updating Candidate Image"));case 3:return a=e.base64,t=e.candidate,i=(i=e.chamber).replace("-i",""),s=t.id,l=t.isIncumbent,u=c.a.admin.updateCandidateImage,A={base64:a,id:s,chamber:i,isIncumbent:l},b.next=10,Object(n.call)(r.a,u,A);case 10:return f=b.sent,b.next=13,Object(n.put)(o.a.editCandidateSuccess(f.candidate));case 13:b.next=22;break;case 15:return b.prev=15,b.t0=b.catch(0),console.log(b.t0),b.next=20,Object(n.put)(d.a.showSnakbarAction("Error Upading Candidate Iamge","error"));case 20:return b.next=22,Object(n.put)(o.a.loadCandidatesError(b.t0));case 22:case"end":return b.stop()}},b,null,[[0,15]])}function _(e){var a,t,d,i,s,l;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,a=c.a.findCandidate,t=e.id,d=e.chamber,i=e.isIncumbent,s={id:t,chamber:d,isIncumbent:i},u.next=6,Object(n.call)(r.a,a,s);case 6:return l=u.sent,u.next=9,Object(n.put)(o.a.loadCandidateActionSuccess(l));case 9:u.next=16;break;case 11:return u.prev=11,u.t0=u.catch(0),console.log(u.t0),u.next=16,Object(n.put)(o.a.loadCandidateActionError(u.t0));case 16:case"end":return u.stop()}},f,null,[[0,11]])}function g(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(n.takeLatest)(i.a.LOAD_CANDIDATES,C);case 2:return e.sent,e.next=5,Object(n.takeLatest)(i.a.LOAD_ALL_USERS,S);case 5:return e.next=7,Object(n.takeLatest)(i.a.LOAD_ARTICLES_FEEDBACK,E);case 7:return e.next=9,Object(n.takeLatest)(i.a.UPDATE_CANDIDATE,D);case 9:return e.sent,e.next=12,Object(n.takeLatest)(i.a.UPDATE_CANDIDATE_IMAGE,m);case 12:return e.sent,e.next=15,Object(n.takeLatest)(i.a.LOAD_CANDIDATE,_);case 15:e.sent;case 16:case"end":return e.stop()}},p)}},aaef8dcf9f24590d7c1e:function(e,a,t){"use strict";a.a={LOAD_CANDIDATES:"@@tgpAdminPage/LOAD_CANDIDATES",LOAD_CANDIDATES_SUCCESS:"@@tgpAdminPage/LOAD_CANDIDATES_SUCCESS",LOAD_CANDIDATES_ERROR:"@@tgpAdminPage/LOAD_CANDIDATES_ERROR",LOAD_ALL_USERS:"@@tgpAdminPage/LOAD_ALL_USERS",LOAD_ALL_USERS_SUCCESS:"@@tgpAdminPage/LOAD_ALL_USERS_SUCCESS",LOAD_ALL_USERS_ERROR:"@@tgpAdminPage/LOAD_ALL_USERS_ERROR",UPDATE_CANDIDATE:"@@tgpAdminPage/UPDATE_CANDIDATE",UPDATE_CANDIDATE_SUCCESS:"@@tgpAdminPage/UPDATE_CANDIDATE_SUCCESS",UPDATE_CANDIDATE_IMAGE:"@@tgpAdminPage/UPDATE_CANDIDATE_IMAGE",UPDATE_CANDIDATE_IMAGE_SUCCESS:"@@tgpAdminPage/UPDATE_CANDIDATE_IMAGE_SUCCESS",EDIT_CANDIDATE_SUCCESS:"@@tgpAdminPage/EDIT_CANDIDATE_SUCCESS",LOAD_ARTICLES_FEEDBACK:"@@tgpAdminPage/LOAD_ARTICLES_FEEDBACK",LOAD_ARTICLES_FEEDBACK_SUCCESS:"@@tgpAdminPage/LOAD_ARTICLES_FEEDBACK_SUCCESS",LOAD_CANDIDATE:"@@tgpAdminPage/LOAD_CANDIDATE",LOAD_CANDIDATE_SUCCESS:"@@tgpAdminPage/LOAD_CANDIDATE_SUCCESS"}},f012149f8ddad6f00e17:function(e,a,t){"use strict";var n=t("a28fc3c963a1d4d1a2e5"),r=t("10d90001f2aaa290cff0"),c=function(e){return e.adminPage||r.b};a.a=function(){return Object(n.a)(c,function(e){return e})}}}]);