(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{zY:()=>c,AH:()=>a});var r={baseUrl:"https://nomoreparties.co/v1/wff-cohort-13",headers:{authorization:"9461d58f-ab6e-4d09-b9bf-af27ed341fdd","Content-Type":"application/json"}},n=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))},o=document.querySelector("#card-template").content;function c(e,t,r,n,c){var a=o.querySelector(".card").cloneNode(!0),u=a.querySelector(".card__delete-button"),i=a.querySelector(".card__like-button"),l=a.querySelector(".card__image"),s=a.querySelector(".card__title"),d=a.querySelector(".card__like-counter");return l.src=e.link,l.alt=e.name,s.textContent=e.name,l.loading="lazy",e.likes.some((function(e){return e._id===c}))&&i.classList.toggle("card__like-button_is-active"),d.textContent=e.likes.length,e.owner._id===c?u.style.display="block":u.style.display="none",u.addEventListener("click",(function(){return t(a,e)})),i.addEventListener("click",(function(){return r(e,i,d)})),l.addEventListener("click",(function(){return n({name:e.name,link:e.link})})),a}var a=function(e,t){var o;(o=t._id,fetch("".concat(r.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:r.headers}).then((function(e){return n(e)}))).then((function(){return e.remove()})).catch((function(e){console.log(e)}))};function u(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",i)}function i(e){"Escape"===e.key&&d(document.querySelector(".popup_is-opened"))}function l(e){e.target===e.currentTarget&&d(e.target)}function s(e){e.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(){return d(e)})),e.addEventListener("click",l)}))}function d(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i)}var p={formSelector:".popup",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},f=function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));n&&(t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent="")},y=function(e,t,r){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t&&(t.disabled=!1,t.classList.remove(r.inactiveButtonClass)):(t.disabled=!0,t.classList.add(r.inactiveButtonClass))},m=function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);y(r,n,t),r.forEach((function(r){f(e,r,t)}))};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=document.querySelector(".places__list"),h=document.querySelector(".popup_type_edit"),S=document.querySelector(".profile__edit-button"),b=document.querySelectorAll(".popup__close");S.addEventListener("click",(function(){u(h),L.value=g.textContent,k.value=E.textContent,m(h,p)})),b.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return d(t)})),t.addEventListener("mousedown",s)}));var q=document.forms["edit-profile"],g=document.querySelector(".profile__title"),E=document.querySelector(".profile__description"),C=popupProfileEdit.querySelector(".popup__button"),L=document.querySelector(".popup__input_type_name"),k=document.querySelector(".popup__input_type_description");q.addEventListener("submit",(function(e){e.preventDefault();var t,o,c=L.value,a=k.value;J(!0,C),(t=c,o=a,fetch("".concat(r.baseUrl,"/users/me"),{method:"PATCH",headers:r.headers,body:JSON.stringify({name:t,about:o})}).then((function(e){return n(e)}))).then((function(e){g.textContent=e.name,E.textContent=e.about,d(popupProfileEdit)})).catch(console.error).finally((function(){J(!1,C)}))}));var A=document.querySelector(".popup_type_new-card");document.querySelector(".profile__add-button").addEventListener("click",(function(){w.reset(),m(A,p),u(A)}));var w=document.forms["new-place"],x=popupNewCard.querySelector(".popup__button"),O=document.querySelector(".popup__input_type_card-name"),j=w.querySelector(".popup__input_type_url");w.addEventListener("submit",(function(e){e.preventDefault();var o,u,i=O.value,l=j.value;J(!0,x),(o=i,u=l,fetch("".concat(r.baseUrl,"/cards"),{method:"POST",headers:r.headers,body:JSON.stringify({name:o,link:u})}).then((function(e){return n(e)}))).then((function(e){var r=c(e,a,t.toggleCardLike,B,H);v.prepend(r),d(popupNewCard)})).catch(console.error).finally((function(){J(!1,x)}))}));var P=document.querySelector(".popup_type_image"),T=document.querySelector(".popup__image"),U=document.querySelector(".popup__caption");function B(e){var t=e.name,r=e.link;T.src=r,T.alt=t,U.textContent=t,u(P)}var D=document.querySelector(".popup_type_avatar");document.querySelector(".profile__image-cover").addEventListener("click",(function(){M.reset(),m(D,p),u(D)}));var M=document.forms["edit-avatar"],N=D.querySelector(".popup__button"),I=D.querySelector(".popup__input_type_url"),z=document.querySelector(".profile__image");M.addEventListener("submit",(function(e){e.preventDefault();var t,o=I.value;J(!0,N),(t=o,fetch("".concat(r.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:r.headers,body:JSON.stringify({avatar:t})}).then((function(e){return n(e)}))).then((function(e){z.style.backgroundImage="url('".concat(e.avatar,"')"),d(D)})).catch(console.error).finally((function(){J(!1,N)}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);y(r,n,t),r.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,r){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?f(e,t,r):function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error"));t&&o&&(t.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass))}(e,t,t.validationMessage,r)}(e,o,t),y(r,n,t)}))}))}(t,e)}))}(p);var H,J=function(e,t){t.textContent=e?"Сохранение...":"Сохранить"};Promise.all([fetch("".concat(r.baseUrl,"/users/me"),{headers:r.headers}).then((function(e){return n(e)})),fetch("".concat(r.baseUrl,"/cards"),{headers:r.headers}).then((function(e){return n(e)}))]).then((function(e){var r,n,o=(n=2,function(e){if(Array.isArray(e))return e}(r=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c,a,u=[],i=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=c.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(r,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=o[0],i=o[1];H=u._id,z.style.backgroundImage="url(\\".concat(u.avatar,")"),g.textContent=u.name,E.textContent=u.about,i.forEach((function(e){v.append(c(cardData,a,t.toggleCardLike,B,H))}))})).catch(console.error)})();