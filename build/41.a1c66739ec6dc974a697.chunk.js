(window.webpackJsonp=window.webpackJsonp||[]).push([[41,18],{"26312ce1bad8433afe4d":function(e,t,n){"use strict";n("8af190b70a6bc55c6f1b");var a,r=n("0b3cb19af78752326f59"),c=(n("8a2d1b95e05b6a321e74"),n("2aea235afd5c55b8b19b")),o=n.n(c),i=n("c26c999145b031a82ff2");var u=Object(r.c)(o.a).withConfig({displayName:"BlueButton__StyledButton",componentId:"sc-137i1cs-0"})(["&&{border-radius:30px;padding:12px 18px;font-family:",";letter-spacing:0.2px;background-color:",";color:#fff;}"],i.a.typography.fontFamily,function(e){return e.theme.colors.blue});t.a=function(e){var t=e.fullWidth,n=void 0!==t&&t,r=e.onClick,c=e.children,o=e.disabled,i=void 0!==o&&o,s=e.style;return function(e,t,n,r){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&c)for(var i in c)void 0===t[i]&&(t[i]=c[i]);else t||(t=c||{});if(1===o)t.children=r;else if(o>1){for(var u=new Array(o),s=0;s<o;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:a,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}(u,{color:"primary",fullWidth:n,onClick:r,variant:"contained",disabled:i,style:void 0===s?{}:s},void 0,c)}},"277e5244b4cd13318e84":function(e,t,n){"use strict";var a=n("26312ce1bad8433afe4d");n.d(t,"a",function(){return a.a});var r=n("c3743a2796be2e661537");n.d(t,"c",function(){return r.a});var c=n("5f3bcc156425ba0909d6");n.d(t,"b",function(){return c.a})},"38044a12be402a16ee8e":function(e,t,n){"use strict";n.d(t,"a",function(){return E});var a=n("d782b72bc5b680c7122c"),r=n("3aced5b508e7389026da"),c=n("7cda43955e52d47d5c0c"),o=n("0c6b62fc7959a6726a38"),i=(n("b846cd21cedd46042c6a"),n("3199ff5014c73b717f1d")),u=(n("a08b6f3095f8d186887e"),n("73f72b4cdcac1e382fee")),s=n("c761e2b09ff3a8846743"),d=n("3277302d2a7eb6ec78c0"),l=n("825cd8f1970472078412");function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){b(e,t,n[t])})}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=regeneratorRuntime.mark(w),m=regeneratorRuntime.mark(j),v=regeneratorRuntime.mark(k),g=regeneratorRuntime.mark(A),h=regeneratorRuntime.mark(C),y=regeneratorRuntime.mark(S),F=regeneratorRuntime.mark(_),x=regeneratorRuntime.mark(D),O=regeneratorRuntime.mark(E);function w(e){var t,n,i,d,f;return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,t=e.zip,n=e.redirect,i=s.a.zipToDistrict,d={zip:t},b.next=6,Object(a.call)(c.a,i,d);case 6:return f=b.sent,b.next=9,Object(a.put)(l.a.loadZipActionSuccess(f));case 9:if(!n){b.next=12;break}return b.next=12,Object(a.put)(Object(r.push)("/elections/district/".concat(t)));case 12:Object(o.g)("zip",JSON.stringify(f)),b.next=22;break;case 15:return b.prev=15,b.t0=b.catch(0),console.log(b.t0),b.next=20,Object(a.put)(l.a.loadZipActionError(b.t0));case 20:return b.next=22,Object(a.put)(u.a.showSnakbarAction("Invalid Zip Code","error"));case 22:case"end":return b.stop()}},p,null,[[0,15]])}function j(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(e=Object(o.d)("zip"))){t.next=5;break}return t.next=5,Object(a.put)(l.a.loadZipActionSuccess(JSON.parse(e)));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},m,null,[[0,7]])}function k(){var e,t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=s.a.allPresidential,r.next=4,Object(a.call)(c.a,e,null);case 4:return t=r.sent,n=t.presidential,r.next=8,Object(a.put)(l.a.loadAllPresidentialActionSuccess(n));case 8:r.next=15;break;case 10:return r.prev=10,r.t0=r.catch(0),console.log(r.t0),r.next=15,Object(a.put)(l.a.loadAllPresidentialActionError(r.t0));case 15:case"end":return r.stop()}},v,null,[[0,10]])}function A(e){var t,n,r,o,i;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,t=e.state,n=e.districtNum,r=s.a.houseCandidates,o={state:t,district:n},u.next=6,Object(a.call)(c.a,r,o);case 6:return i=u.sent,u.next=9,Object(a.put)(l.a.loadHouseCandidatesActionSuccess(i.houseCandidates));case 9:u.next=16;break;case 11:return u.prev=11,u.t0=u.catch(0),console.log(u.t0),u.next=16,Object(a.put)(l.a.loadHouseCandidatesActionError(u.t0));case 16:case"end":return u.stop()}},g,null,[[0,11]])}function C(e){var t,n,r,o;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,t=e.state,n=s.a.senateCandidates,r={state:t},i.next=6,Object(a.call)(c.a,n,r);case 6:return o=i.sent,i.next=9,Object(a.put)(l.a.loadSenateCandidatesActionSuccess(o.senateCandidates));case 9:i.next=16;break;case 11:return i.prev=11,i.t0=i.catch(0),console.log(i.t0),i.next=16,Object(a.put)(l.a.loadDistrictCandidatesActionError(i.t0));case 16:case"end":return i.stop()}},h,null,[[0,11]])}function S(e){var t,n,r,o,i;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,t=e.shortState,n=e.districtNumber,r=s.a.userCounts,o={},t&&(o.shortState=t),n&&(o.districtNumber=n),u.next=8,Object(a.call)(c.a,r,o);case 8:return i=u.sent,u.next=11,Object(a.put)(l.a.userCountsActionSuccess(i));case 11:u.next=16;break;case 13:u.prev=13,u.t0=u.catch(0),console.log(u.t0);case 16:case"end":return u.stop()}},y,null,[[0,13]])}function _(e){var t,n,r,o;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,t=e.bloc,n=s.a.findBlocCandidate,r={bloc:t},i.next=6,Object(a.call)(c.a,n,r);case 6:return o=i.sent,i.next=9,Object(a.put)(l.a.loadBlocCandidateActionSuccess(o));case 9:i.next=14;break;case 11:i.prev=11,i.t0=i.catch(0),console.log(i.t0);case 14:case"end":return i.stop()}},F,null,[[0,11]])}function D(e){var t,n,d,b,p,m,v,g,h,y;return regeneratorRuntime.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.prev=0,t=e.coords,n="".concat(t.latitude,",").concat(t.longitude),d="https://maps.googleapis.com/maps/api/geocode/json?key=".concat(i.c,"&latlng=").concat(n),b={url:d,method:"GET"},F.next=7,Object(a.call)(c.a,b,null);case 7:if(!(p=F.sent)||"OK"!==p.status){F.next=30;break}return m=p.results[0].formatted_address,v=s.a.fullAddressToDistrict,g={address:JSON.stringify(m)},F.next=14,Object(a.call)(c.a,v,g);case 14:if(h=F.sent,!(y=h.zip)){F.next=24;break}return F.next=19,Object(a.put)(Object(r.push)("/elections/district/".concat(y)));case 19:return F.next=21,Object(a.put)(l.a.geolocationToDistrictActionSuccess(h));case 21:Object(o.g)("geoAddress",JSON.stringify(f({},h))),F.next=28;break;case 24:return F.next=26,Object(a.put)(u.a.showSnakbarAction("An Error occurred while looking for your geoLocation","error"));case 26:return F.next=28,Object(a.put)(l.a.geolocationToDistrictActionError({message:"err"}));case 28:F.next=32;break;case 30:return F.next=32,Object(a.put)(l.a.geolocationToDistrictActionError({message:"err"}));case 32:F.next=39;break;case 34:return F.prev=34,F.t0=F.catch(0),console.log(F.t0),F.next=39,Object(a.put)(l.a.geolocationToDistrictActionError(F.t0));case 39:case"end":return F.stop()}},x,null,[[0,34]])}function E(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.takeLatest)(d.a.LOAD_ZIP,w);case 2:return e.sent,e.next=5,Object(a.takeLatest)(d.a.LOAD_ALL_PRESIDENTIAL,k);case 5:return e.next=7,Object(a.takeLatest)(d.a.LOAD_HOUSE_CANDIDATES,A);case 7:return e.sent,e.next=10,Object(a.takeLatest)(d.a.LOAD_SENATE_CANDIDATES,C);case 10:return e.sent,e.next=13,Object(a.takeLatest)(d.a.LOAD_COOKIE_ZIP,j);case 13:return e.next=15,Object(a.takeLatest)(d.a.GEOLOCATION_TO_DISTRICT,D);case 15:return e.sent,e.next=18,Object(a.takeLatest)(d.a.USERS_COUNTS,S);case 18:return e.sent,e.next=21,Object(a.takeLatest)(d.a.LOAD_BLOC_CANDIDATE,_);case 21:e.sent;case 22:case"end":return e.stop()}},O)}},"55d397a4e13f4e86ccad":function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return o});var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?("number"!==typeof e&&(e=parseFloat(e)),t?o(100*e):(100*e).toFixed(2)):e},r=function(e){if(!e)return"";var t=e;"string"===typeof e&&(t=parseInt(e,10));var n=t%10,a=t%100;return"".concat(t,1===n&&11!==a?"st":2===n&&12!==a?"nd":3===n&&13!==a?"rd":"th")},c=function(e){return e?("number"!==typeof e&&(e=parseFloat(e)),"".concat(e.toFixed(0).replace(/./g,function(e,t,n){return t&&"."!==e&&(n.length-t)%3===0?",".concat(e):e}))):e},o=function(e){return e?parseFloat(e.toPrecision(2)):e}},"82200bd66e2aaffb2fb1":function(e,t,n){"use strict";n.r(t);var a,r=n("8af190b70a6bc55c6f1b"),c=n.n(r),o=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),i=n("0d7f0986bcd2f33d8a2a"),u=n("ab4cb61bcb2dc161defb"),s=n("3aced5b508e7389026da"),d=n("adc20f99e57c573c589c"),l=n("d95b0cf107403b178365"),f=n("a08b6f3095f8d186887e"),b=n("b89e9de4c18a239d2ec9"),p=n("ce1f99bfa2a056d9bb4e"),m=n("967734c1469b288bf3b9"),v=n("a28fc3c963a1d4d1a2e5"),g=n("38044a12be402a16ee8e"),h=n("6c8edef765907e64b542"),y=n("825cd8f1970472078412"),F=n("0b3cb19af78752326f59"),x=n("e95a63b25fb92ed15721"),O=n("1f1eb6ee9b99b33d3627"),w=n("c552c8159555a669ceef"),j=n("c3743a2796be2e661537"),k=n("98d88e79290ddc2bd52e"),A=n.n(k),C=n("c547a992e5d069e9c58d"),S=n("bc801a7aaebd2cf27076");function _(e,t,n,r){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&c)for(var i in c)void 0===t[i]&&(t[i]=c[i]);else t||(t=c||{});if(1===o)t.children=r;else if(o>1){for(var u=new Array(o),s=0;s<o;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:a,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var D,E=F.c.div.withConfig({displayName:"YouWrapper__InnerWrapper",componentId:"nklbss-0"})(["display:flex;flex-direction:column;justify-content:flex-end;align-items:center;min-height:calc(100vh);min-height:calc(var(--vh,1vh) * 100 - 150px);@media only screen and (min-width:","){justify-content:flex-start;min-height:auto;}"],function(e){return e.theme.breakpoints.md}),I=F.c.div.withConfig({displayName:"YouWrapper__Login",componentId:"nklbss-1"})(["padding:16px;color:",";cursor:pointer;text-align:right;@media only screen and (min-width:","){position:static;text-align:right;width:100%;margin-top:-20px;}"],function(e){return e.theme.colors.blue},function(e){return e.theme.breakpoints.md}),N=F.c.img.withConfig({displayName:"YouWrapper__Img",componentId:"nklbss-2"})(["width:calc(100% - 100px);max-width:350px;height:auto;"]),T=Object(F.c)(w.i).withConfig({displayName:"YouWrapper__H3Title",componentId:"nklbss-3"})(["text-align:center;margin-top:26px;"]),P=Object(F.c)(w.i).withConfig({displayName:"YouWrapper__H3Body",componentId:"nklbss-4"})(["text-align:center;margin-top:16px;font-weight:400;"]),L=Object(F.c)(x.Link).withConfig({displayName:"YouWrapper__ButtonWrapper",componentId:"nklbss-5"})(["margin:24px 0;width:100%;"]),R=_(I,{},void 0,_(x.Link,{to:"?register=true","data-cy":"sign-up"},void 0,"Sign-Up"),"\xa0\xa0|\xa0\xa0",_(x.Link,{to:"login","data-cy":"log-in"},void 0,"Login")),z=_(E,{},void 0,_(N,{src:A.a,alt:"Capital","aria-label":"Capital"}),_(T,{"data-cy":"title"},void 0,"Create a profile and get counted!"),_(P,{"data-cy":"description"},void 0,"First we count the people needed for a good indy candidate to win, then we all vote to get them in."),_(L,{to:"?register=true","data-cy":"count-in"},void 0,_(j.a,{active:!0,fullWidth:!0},void 0,"COUNT ME IN!"))),W=_(S.a,{}),$=function(e){var t=e.articles;return _(O.a,{white:!0},void 0,R,z,_(C.a,{articles:t}),W)},U=n("3ed81f8d24b90b29f580"),q=Object(U.a)(function(){return Promise.all([n.e(0),n.e(7),n.e(8),n.e(10),n.e(48)]).then(n.bind(null,"93cd4748ddca5101db91"))}),M=n("0c6b62fc7959a6726a38"),Q=n("b846cd21cedd46042c6a"),Y=n("1aac94bd3e10538ef651"),B=n("91011c2d2e9afcdb0160"),G=n("117b3e988b2d7212e60c"),H=n("6542cd13fd5dd1bcffd4");function J(e,t,n,a){D||(D="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,c=arguments.length-3;if(t||0===c||(t={children:void 0}),t&&r)for(var o in r)void 0===t[o]&&(t[o]=r[o]);else t||(t=r||{});if(1===c)t.children=a;else if(c>1){for(var i=new Array(c),u=0;u<c;u++)i[u]=arguments[u+3];t.children=i}return{$$typeof:D,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}n.d(t,"YouPage",function(){return K});var Z=J(i.Helmet,{},void 0,J("title",{"data-cy":"page-title"},void 0,"You | The Good Party"),J("meta",{name:"description",content:"You | The Good Party"}));function K(e){var t=e.userState,n=e.districtState,a=e.dispatch,o=e.signoutCallback,i=e.content,u=e.rankingObj,f=e.changePasswordCallback,v=e.verifyEmailCallback;Object(l.a)({key:"user",reducer:b.a}),Object(d.a)({key:"user",saga:p.a}),Object(l.a)({key:"zipFinderPage",reducer:h.a}),Object(d.a)({key:"zipFinderPage",saga:g.a});var F=t.user,x=t.crewPreview,O=t.crewCount,w=t.ranking,j=n.houseCandidates,k=n.senateCandidates;Object(r.useEffect)(function(){var e=Object(M.e)();if(e&&(a(Object(s.push)(e.route)),Object(M.c)()),F&&!x&&a(m.a.crewAction(!0)),F){var t=F.shortState,n=Object(Q.g)(F);t&&n&&a(y.a.loadHouseCandidatesAction(t,n)),t&&a(y.a.loadSenateCandidatesAction(t)),w||a(m.a.userRankingAction())}},[F]);var A=[];i&&i.faqArticles&&(A=Object(Y.a)(i.faqArticles,"party"));var C=Object(B.b)(k),S=Object(B.b)(j),_={articles:A,user:F,crewPreview:x,crewCount:O,signoutCallback:o,houseCandidatesCount:S,senateCandidatesCount:C,rankingObj:u,changePasswordCallback:f,verifyEmailCallback:v},D={articles:A};return J("div",{},void 0,Z,F?c.a.createElement(q,_):c.a.createElement($,D))}var V=Object(v.b)({userState:Object(f.a)(),districtState:Object(G.a)(),content:Object(H.b)(),rankingObj:Object(f.b)()}),X=Object(o.connect)(V,function(e){return{dispatch:e,signoutCallback:function(){e(m.a.signoutAction()),e(Object(s.push)("/"))},changePasswordCallback:function(t,n,a){e(a?m.a.changePasswordAction(t,n):m.a.addPasswordAction(t))},verifyEmailCallback:function(t){e(m.a.resendEmailAction(t))}}});t.default=Object(u.compose)(X)(K)},"91011c2d2e9afcdb0160":function(e,t,n){"use strict";n.d(t,"h",function(){return r}),n.d(t,"a",function(){return c}),n.d(t,"e",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"d",function(){return u}),n.d(t,"g",function(){return s}),n.d(t,"b",function(){return d}),n.d(t,"c",function(){return l});var a=n("55d397a4e13f4e86ccad"),r=function(e,t,n){return"presidential"===e?"":"senate"===e?n||"":"".concat(n,"-").concat(t)},c=function(e){var t;try{t=e?decodeURI(e):null}catch(n){t=e}return t},o=function(e,t){var n=t.raised||t.combinedRaised,r=(n-t.smallContributions)/n;r=Object(a.d)(r);var c={name:t.name,raised:n,bigFundsPerc:r,isFakeIncumbent:t.isFakeIncumbent};return c.xTimes=(n/e).toFixed(2),c.relativePerc=(100*e/n).toFixed(2),c.xTimes=Object(a.d)(n/e),c.relativePerc=Object(a.d)(100*e/n),c.bigMoneyFunds=n*r,c},i=function(e){return e?"top funded candidate":"incumbent"},u=function(e,t){var n=e.reportDate,a=e.outsideReportDate;return n||a||t&&t.reportDate||"02/12/2020"},s=function(e,t){var n=t.openSecretsId,a=t.uuid,r=t.isIncumbent,c="https://www.opensecrets.org/";if("presidential"===e)c+="2020-presidential-race/candidate?id=".concat(n);else if(r)c+="members-of-congress/summary?cycle=2020&type=C&cid=".concat(n);else if(a){var o=a.split("_")[1];c+="races/candidates?cycle=2020&id=".concat(o,"&spec=N")}return c},d=function(e){var t=0;return e&&"undefined"!==typeof e.good&&(t=e.good.length+e.notGood.length+e.unknown.length),t},l=function(e){var t,n;if(!e)return"";var a,r="President";if("senate"===(null===(t=e.chamber)||void 0===t?void 0:t.toLowerCase()))r="U.S. Senate from ".concat(null===(a=e.state)||void 0===a?void 0:a.toUpperCase());else if("house"===(null===(n=e.chamber)||void 0===n?void 0:n.toLowerCase())){var c;r="U.S. House from ".concat(null===(c=e.state)||void 0===c?void 0:c.toUpperCase(),"-").concat(e.id<0?Math.abs(e.id):e.district)}return r}},"98d88e79290ddc2bd52e":function(e,t,n){e.exports=n.p+"f87bb2dc737c530e95fd097578315827.svg"},bc801a7aaebd2cf27076:function(e,t,n){"use strict";var a,r=n("8af190b70a6bc55c6f1b"),c=n.n(r),o=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),i=n("ab4cb61bcb2dc161defb"),u=n("0b3cb19af78752326f59"),s=n("c7fd554010f79f6c0ef8"),d=n.n(s),l=n("b7b65aa1d20dfd20253b"),f=n.n(l),b=n("e727e731a9bed8ec3c2a"),p=n.n(b),m=n("435859b6b76fb67a754a"),v=n.n(m),g=n("c552c8159555a669ceef"),h=n("277e5244b4cd13318e84");function y(e,t,n,r){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&c)for(var i in c)void 0===t[i]&&(t[i]=c[i]);else t||(t=c||{});if(1===o)t.children=r;else if(o>1){for(var u=new Array(o),s=0;s<o;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:a,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var x=Object(u.c)(g.a).withConfig({displayName:"Ama__AskQuestion",componentId:"sc-18zyjea-0"})(["cursor:pointer;color:",";margin-top:28px;padding-bottom:28px;font-weight:700;"],function(e){return e.theme.colors.blue}),O=Object(u.c)(d.a).withConfig({displayName:"Ama__StyleTextField",componentId:"sc-18zyjea-1"})(["&&{margin-top:20px;}"]),w=Object(u.c)(v.a).withConfig({displayName:"Ama__FormGrid",componentId:"sc-18zyjea-2"})(["&&{margin-top:20px;}"]),j=u.c.a.withConfig({displayName:"Ama__AmaSubmit",componentId:"sc-18zyjea-3"})(["width:100%;padding-left:1rem;"]),k=Object(u.c)(p.a).withConfig({displayName:"Ama__TgpDialog",componentId:"sc-18zyjea-4"})(["&&{.MuiDialog-paper{width:100vw;max-width:",";margin:12px !important;}}"],function(e){return e.theme.breakpoints.contentMax}),A=u.c.div.withConfig({displayName:"Ama__CloseWrapper",componentId:"sc-18zyjea-5"})(["text-align:right;"]),C=Object(u.c)(f.a).withConfig({displayName:"Ama__TopClose",componentId:"sc-18zyjea-6"})(["font-size 24px;cursor:pointer;"]),S=u.c.div.withConfig({displayName:"Ama__Wrapper",componentId:"sc-18zyjea-7"})(["padding:12px;@media only screen and (min-width:","){padding:24px;}"],function(e){return e.theme.breakpoints.md}),_=Object(u.c)(g.i).withConfig({displayName:"Ama__Title",componentId:"sc-18zyjea-8"})(["padding:0 16px;"]),D=y("span",{role:"img","aria-label":"thinker"},void 0,"\ud83e\udd14"),E=y("span",{role:"img","aria-label":"light-bulb"},void 0,"\ud83d\udca1"),I=y(_,{"data-cy":"ama-dialog-title"},void 0,y("span",{role:"img","aria-label":"thinker"},void 0,"\ud83e\udd14")," ","Ask a Question or"," ",y("span",{role:"img","aria-label":"light-bulb"},void 0,"\ud83d\udca1"),"Give a Suggestion"),N=function(e){var t,n=e.sendAmaCallback,a=F(Object(r.useState)(!1),2),o=a[0],i=a[1],u=F(Object(r.useState)(""),2),s=u[0],l=u[1],f=F(Object(r.useState)(""),2),b=f[0],p=f[1],m=function(){return i(!1)},g=function(){""!==s&&(n(s,b),m())};return c.a.createElement(c.a.Fragment,null,y(x,{onClick:function(){return i(!0)},"data-cy":"ama"},void 0,D," ","Ask a Question or"," ",E,"Give a Suggestion"),y(k,{onClose:m,open:o},void 0,y(S,{},void 0,y(A,{},void 0,y(C,{onClick:m,"data-cy":"ama-dialog-close"})),I,y("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),g()}},void 0,y(O,{rows:4,multiline:!0,fullWidth:!0,autoFocus:!0,placeholder:"Enter your question or suggestion here",onChange:function(e){l(e.target.value)},variant:"outlined"}),y(w,{container:!0},void 0,y(v.a,{item:!0,xs:7,p:1},void 0,y(d.a,{fullWidth:!0,placeholder:"For reply: Enter your Email (Optional)",onChange:function(e){p(e.target.value)},variant:"outlined"})),y(v.a,{item:!0,xs:5,p:1,style:{alignItems:"center",display:"flex"}},void 0,y(j,{"data-cy":"ama-dialog-submit"},void 0,y(h.c,{fullWidth:!0,active:""!==s&&(""===b||(t=b,/(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(String(t).toLowerCase()))),onClick:g},void 0,"Send"))))))))},T=n("adc20f99e57c573c589c"),P=n("d782b72bc5b680c7122c"),L=n("7cda43955e52d47d5c0c"),R=n("c761e2b09ff3a8846743"),z=n("73f72b4cdcac1e382fee"),W={SEND_AMA:"@@tgp/AmaContainer/SEND_AMA"},$=regeneratorRuntime.mark(q),U=regeneratorRuntime.mark(M);function q(e){var t,n,a,r;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t=e.message,n=e.replyEmail,a=R.a.sendAma,r={message:t,replyEmail:n},c.next=6,Object(P.call)(L.a,a,r);case 6:return c.next=8,Object(P.put)(z.a.showSnakbarAction("Thank you for reaching out."));case 8:c.next=13;break;case 10:c.prev=10,c.t0=c.catch(0),console.log(c.t0);case 13:case"end":return c.stop()}},$,null,[[0,10]])}function M(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.takeLatest)(W.SEND_AMA,q);case 2:e.sent;case 3:case"end":return e.stop()}},U)}var Q={sendAma:function(e,t){return{type:W.SEND_AMA,message:e,replyEmail:t}}};function Y(e){var t=e.sendAmaCallback;Object(T.a)({key:"amaContainer",saga:M});var n={sendAmaCallback:t};return c.a.createElement(N,n)}n.d(t,"a",function(){return Y});var B=Object(o.connect)(null,function(e){return{sendAmaCallback:function(t,n){e(Q.sendAma(t,n))}}});t.b=Object(i.compose)(B,r.memo)(Y)},c547a992e5d069e9c58d:function(e,t,n){"use strict";n("8af190b70a6bc55c6f1b");var a,r=n("0b3cb19af78752326f59"),c=n("e95a63b25fb92ed15721"),o=(n("8a2d1b95e05b6a321e74"),n("c552c8159555a669ceef"));function i(e,t,n,r){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&c)for(var i in c)void 0===t[i]&&(t[i]=c[i]);else t||(t=c||{});if(1===o)t.children=r;else if(o>1){for(var u=new Array(o),s=0;s<o;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:a,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var u=r.c.div.withConfig({displayName:"TopQuestions__Wrapper",componentId:"sc-126nsoa-0"})(["margin-top:50px;"]),s=r.c.div.withConfig({displayName:"TopQuestions__Row",componentId:"sc-126nsoa-1"})(["display:flex;flex-direction:row;align-items:baseline;justify-content:space-between;"]),d=Object(r.c)(o.d).withConfig({displayName:"TopQuestions__SeeFaq",componentId:"sc-126nsoa-2"})(["cursor:pointer;color:",";"],function(e){return e.theme.colors.blue}),l=Object(r.c)(o.a).withConfig({displayName:"TopQuestions__ArticleTitle",componentId:"sc-126nsoa-3"})(["cursor:pointer;color:",";margin-top:28px;&.first:{margin-top:18px;}"],function(e){return e.theme.colors.blue}),f=i(s,{},void 0,i(o.i,{"data-cy":"faqs"},void 0,"Top Questions"),i(c.Link,{to:"/party/faqs","data-cy":"faqs-link"},void 0,i(d,{className:"blue"},void 0,"See FAQ")));t.a=function(e){var t=e.articles;return i(u,{},void 0,f,t&&t.map(function(e,t){return i(c.Link,{to:"?article=".concat(e.id),"data-cy":"faq"},e.id,i(l,{className:0===t?"first":"","data-cy":"faq-title"},void 0,e.title))}))}}}]);