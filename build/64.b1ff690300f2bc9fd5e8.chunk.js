(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"7119ba69913d994c152f":function(e,n,o){"use strict";o.r(n);var r,a=o("8af190b70a6bc55c6f1b"),t=(o("8a2d1b95e05b6a321e74"),o("0b3cb19af78752326f59")),i=o("a1895c404fc8fc69d8a6"),c=o.n(i),l=o("eea5afc28cb2e623bc03"),f=o.n(l);function u(e,n,o,a){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var t=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),n&&t)for(var c in t)void 0===n[c]&&(n[c]=t[c]);else n||(n=t||{});if(1===i)n.children=a;else if(i>1){for(var l=new Array(i),f=0;f<i;f++)l[f]=arguments[f+3];n.children=l}return{$$typeof:r,type:e,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var o=[],r=!0,a=!1,t=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(o.push(i.value),!n||o.length!==n);r=!0);}catch(e){a=!0,t=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw t}}return o}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=Object(t.c)(c.a).withConfig({displayName:"AvatarUpload__Wrapper",componentId:"sc-15jnpmm-0"})(["&&{z-index:1001;}"]),s=t.c.div.withConfig({displayName:"AvatarUpload__Inner",componentId:"sc-15jnpmm-1"})(["padding:2rem 4rem;background-color:#fff;border-radius:8px;.fileContainer{box-shadow:none;.chooseFileButton{background-color:",";}}"],function(e){return e.theme.colors.blue});n.default=function(e){var n=e.closeCallback,o=e.selectImageCallback,r=p(Object(a.useState)(!0),2),t=r[0],i=r[1],c=function(){i(!1),n()};return u(d,{open:t,onClick:c},void 0,u(s,{onClick:function(e){return e.stopPropagation()}},void 0,u(f.a,{withIcon:!0,onChange:function(e,n){o({pictureFile:e,pictureData:n}),c()},imgExtension:[".jpg",".jpeg",".gif",".png",".gif"],maxFileSize:1048576,singleImage:!0,label:"Please upload a profile image."})))}}}]);