(()=>{var e={866:()=>{},547:()=>{}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r](u,u.exports,n),u.exports}(()=>{"use strict";function e(e){e.remove()}function t(e){e.classList.toggle("card__like-button_is-active")}function r(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",o)}function o(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}function u(e){e.target===e.currentTarget&&c(e.target)}function a(e){e.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(){return c(e)})),e.addEventListener("click",u)}))}function c(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",o)}document.querySelector("#card-template").content;var i=n(547),l=n(866);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=document.querySelector(".places__list"),f=document.querySelector(".popup_type_edit"),s=document.querySelector(".profile__edit-button"),v=document.querySelectorAll(".popup__close");s.addEventListener("click",(function(){r(f),b.value=y.textContent,g.value=m.textContent,(0,i.clearValidation)(f,i.validationConfig)})),v.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return c(t)})),t.addEventListener("mousedown",a)}));var _=document.forms["edit-profile"],y=document.querySelector(".profile__title"),m=document.querySelector(".profile__description"),S=popupProfileEdit.querySelector(".popup__button"),b=document.querySelector(".popup__input_type_name"),g=document.querySelector(".popup__input_type_description");_.addEventListener("submit",(function(e){e.preventDefault();var t=b.value,n=g.value;N(!0,S),(0,l.editProfile)(t,n).then((function(e){y.textContent=e.name,m.textContent=e.about,c(popupProfileEdit)})).catch(console.error).finally((function(){N(!1,S)}))}));var q=document.querySelector(".popup_type_new-card");document.querySelector(".profile__add-button").addEventListener("click",(function(){h.reset(),(0,i.clearValidation)(q,i.validationConfig),r(q)}));var h=document.forms["new-place"],C=popupNewCard.querySelector(".popup__button"),E=document.querySelector(".popup__input_type_card-name"),L=h.querySelector(".popup__input_type_url");h.addEventListener("submit",(function(n){n.preventDefault();var r=E.value,o=L.value;N(!0,C),(0,l.addNewCard)(r,o).then((function(n){var r=addCard(n,e,t,A,V);d.prepend(r),c(popupNewCard)})).catch(console.error).finally((function(){N(!1,C)}))}));var k=document.querySelector(".popup_type_image"),x=document.querySelector(".popup__image"),w=document.querySelector(".popup__caption");function A(e){var t=e.name,n=e.link;x.src=n,x.alt=t,w.textContent=t,r(k)}var I=document.querySelector(".popup_type_avatar");document.querySelector(".profile__image-cover").addEventListener("click",(function(){j.reset(),(0,i.clearValidation)(I,i.validationConfig),r(I)}));var j=document.forms["edit-avatar"],D=I.querySelector(".popup__button"),O=I.querySelector(".popup__input_type_url"),P=document.querySelector(".profile__image");j.addEventListener("submit",(function(e){e.preventDefault();var t=O.value;N(!0,D),(0,l.updateAvatar)(t).then((function(e){P.style.backgroundImage="url('".concat(e.avatar,"')"),c(I)})).catch(console.error).finally((function(){N(!1,D)}))})),(0,i.enableValidation)(i.validationConfig);var V,N=function(e,t){t.textContent=e?"Сохранение...":"Сохранить"};Promise.all([(0,l.getUserInfo)(),(0,l.getInitialCards)()]).then((function(n){var r,o,u=(o=2,function(e){if(Array.isArray(e))return e}(r=n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u,a,c=[],i=!0,l=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=u.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(r,o)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=u[0],c=u[1];V=a._id,P.style.backgroundImage="url(\\".concat(a.avatar,")"),y.textContent=a.name,m.textContent=a.about,c.forEach((function(n){d.append(addCard(cardData,e,t,A,V))}))})).catch(console.error)})()})();