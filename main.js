(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-13",headers:{authorization:"fb5cc2b8-f098-4873-a829-99399ab469a7","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))},n=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then((function(e){return t(e)}))},r=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))},o=document.querySelector("#card-template").content;function c(e,t,n,r,c){var a=o.querySelector(".card").cloneNode(!0),u=a.querySelector(".card__delete-button"),i=a.querySelector(".card__like-button"),l=a.querySelector(".card__image"),s=a.querySelector(".card__title"),d=a.querySelector(".card__like-counter");return l.src=e.link,l.alt=e.name,s.textContent=e.name,l.loading="lazy",e.likes.some((function(e){return e._id===c}))&&i.classList.toggle("card__like-button_is-active"),d.textContent=e.likes.length,e.owner._id===c?u.style.display="block":u.style.display="none",u.addEventListener("click",(function(){return t(a,e)})),i.addEventListener("click",(function(){return n(e,i,d)})),l.addEventListener("click",(function(){return r({name:e.name,link:e.link})})),a}var a=function(n,r){var o;(o=r._id,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))).then((function(){return n.remove()})).catch((function(e){console.log(e)}))},u=function(e,t,o){(t.classList.contains("card__like-button_is-active")?r:n)(e._id).then((function(e){o.textContent=e.likes.length,t.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))};function i(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",l)}function l(e){"Escape"===e.key&&p(document.querySelector(".popup_is-opened"))}function s(e){e.target===e.currentTarget&&p(e.target)}function d(e){e.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(){return p(e)})),e.addEventListener("click",s)}))}function p(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",l)}var f=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));r&&(t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent="")},_=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t&&(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},y=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);_(n,r,t),n.forEach((function(n){f(e,n,t)}))};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=document.querySelector(".places__list"),h=document.querySelector(".popup_type_edit"),S=document.querySelector(".profile__edit-button"),b=document.querySelectorAll(".popup__close");S.addEventListener("click",(function(){i(h),L.value=g.textContent,A.value=k.textContent,y(h,q)}));var q={formSelector:".popup",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};b.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return p(t)})),t.addEventListener("mousedown",d)}));var E=document.forms["edit-profile"],g=document.querySelector(".profile__title"),k=document.querySelector(".profile__description"),C=popupProfileEdit.querySelector(".popup__button"),L=document.querySelector(".popup__input_type_name"),A=document.querySelector(".popup__input_type_description");E.addEventListener("submit",(function(n){n.preventDefault();var r,o,c=L.value,a=A.value;V(!0,C),(r=c,o=a,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then((function(e){return t(e)}))).then((function(e){g.textContent=e.name,k.textContent=e.about,p(popupProfileEdit)})).catch(console.error).finally((function(){V(!1,C)}))}));var x=document.querySelector(".popup_type_new-card");document.querySelector(".profile__add-button").addEventListener("click",(function(){w.reset(),y(x,q),i(x)}));var w=document.forms["new-place"],U=popupNewCard.querySelector(".popup__button"),T=document.querySelector(".popup__input_type_card-name"),j=w.querySelector(".popup__input_type_url");w.addEventListener("submit",(function(n){n.preventDefault();var r,o,i=T.value,l=j.value;V(!0,U),(r=i,o=l,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r,link:o})}).then((function(e){return t(e)}))).then((function(e){var t=c(e,a,u,D,H);v.prepend(t),p(popupNewCard)})).catch(console.error).finally((function(){V(!1,U)}))}));var O=document.querySelector(".popup_type_image"),P=document.querySelector(".popup__image"),B=document.querySelector(".popup__caption");function D(e){var t=e.name,n=e.link;P.src=n,P.alt=t,B.textContent=t,i(O)}var N=document.querySelector(".popup_type_avatar");document.querySelector(".profile__image-cover").addEventListener("click",(function(){I.reset(),y(N,q),i(N)}));var I=document.forms["edit-avatar"],M=N.querySelector(".popup__button"),J=N.querySelector(".popup__input_type_url"),z=document.querySelector(".profile__image");I.addEventListener("submit",(function(n){n.preventDefault();var r,o=J.value;V(!0,M),(r=o,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then((function(e){return t(e)}))).then((function(e){z.style.backgroundImage="url('".concat(e.avatar,"')"),p(N)})).catch(console.error).finally((function(){V(!1,M)}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);_(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?f(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t&&o&&(t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass))}(e,t,t.validationMessage,n)}(e,o,t),_(n,r,t)}))}))}(t,e)}))}(q);var H,V=function(e,t){t.textContent=e?"Сохранение...":"Сохранить"};Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return t(e)})),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return t(e)}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];H=o._id,z.style.backgroundImage="url(\\".concat(o.avatar,")"),g.textContent=o.name,k.textContent=o.about,i.forEach((function(e){v.append(c(cardData,a,u,D,H))}))})).catch(console.error)})();