// Импорт файлов
import '../pages/index.css'
import {initialCards} from './cards.js';
import {createCard, delCard, toggleCardLike} from "./card.js";
import {openModal, closeModal, setCloseClickListeners} from "./modal";
import { enableValidation, clearValidation, validationConfig } from "./validation.js";
import { getUserInfo, getInitialCards, editProfile, addNewCard, updateAvatar } from "./api.js";

//DOM узлы
const cardsContainer = document.querySelector('.places__list');

// Открытие модального окна редактирования профиля
const popupOpenProfile = document.querySelector(".popup_type_edit");
const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const buttonCloseList = document.querySelectorAll(".popup__close");

buttonOpenPopupProfile.addEventListener("click", () => {
  openModal(popupOpenProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  clearValidation(popupOpenProfile, validationConfig);
});

// Закрытие попапов
buttonCloseList.forEach((btn) => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => closeModal(popup));
  popup.addEventListener("mousedown", setCloseClickListeners);
});

// Редактирование имени и информации в профиле
const profileForm = document.forms["edit-profile"];
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileSaveButton = popupProfileEdit.querySelector(".popup__button");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  changeButtonText(true, profileSaveButton);
  editProfile(nameValue, jobValue)
    .then((profileData) => {
      profileTitle.textContent = profileData.name;
      profileDescription.textContent = profileData.about;
      closeModal(popupProfileEdit);
    })
    .catch(console.error)
    .finally(() => {
      changeButtonText(false, profileSaveButton);
    });
};
profileForm.addEventListener("submit", handleProfileFormSubmit);

// Открытие попапа "Новое место"
const popupCreateNewCard = document.querySelector(".popup_type_new-card");
const buttonCreateNewCard = document.querySelector(".profile__add-button");

buttonCreateNewCard.addEventListener("click", () => {
  newCardForm.reset();
  clearValidation(popupCreateNewCard, validationConfig);
  openModal(popupCreateNewCard);
});

// Добавление карточек на страницу
const newCardForm = document.forms["new-place"];
const newCardSaveButton = popupNewCard.querySelector(".popup__button");
const cardNameInput = document.querySelector(".popup__input_type_card-name");
const cardUrlInput = newCardForm.querySelector(".popup__input_type_url");

const handleAddForm = (evt) => {
  evt.preventDefault();

  const cardValue = cardNameInput.value;
  const linkValue = cardUrlInput.value;

  changeButtonText(true, newCardSaveButton);

  addNewCard(cardValue, linkValue)
    .then((cardData) => {
      const cardElement = createCard(cardData, delCard, toggleCardLike, openPopupImg, profileId);
      cardsContainer.prepend(cardElement);
      closeModal(popupNewCard);
    })
    .catch(console.error)
    .finally(() => {
      changeButtonText(false, newCardSaveButton);
    });
};
newCardForm.addEventListener("submit", handleAddForm);

// Открытие попапа с картинкой
const imagePopup = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

function openPopupImg({ name, link }) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
  openModal(imagePopup);
}

// Открытие попапа редактирования аватара
const popupEditAvatar = document.querySelector(".popup_type_avatar");
const avatarImageButton = document.querySelector(".profile__image-cover");
avatarImageButton.addEventListener("click", () => {
  editAvatarForm.reset();
  clearValidation(popupEditAvatar, validationConfig);
  openModal(popupEditAvatar);
});

// Изменение изображения аватара
const editAvatarForm = document.forms["edit-avatar"];
const AvatarSaveButton = popupEditAvatar.querySelector(".popup__button");
const avatarLinkInput = popupEditAvatar.querySelector(".popup__input_type_url");
const avatarImage = document.querySelector(".profile__image");

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  const linkValue = avatarLinkInput.value;
  changeButtonText(true, AvatarSaveButton);
  updateAvatar(linkValue)
    .then((res) => {
      avatarImage.style.backgroundImage = `url('${res.avatar}')`;
      closeModal(popupEditAvatar);
    })
    .catch(console.error)
    .finally(() => {
      changeButtonText(false, AvatarSaveButton);
    });
}
editAvatarForm.addEventListener("submit", handleAvatarFormSubmit);

// Включение валидации форм
enableValidation(validationConfig);

// Изменение текста кнопки пока данные загружаются
const changeButtonText = (isLoading, button) => {
  button.textContent = isLoading ? "Сохранение..." : "Сохранить";
};

//Получение информации о пользователе и карточках с сервера и заполнение ими страницы
let profileId;
Promise.all([getUserInfo(), getInitialCards()])
  .then(([profileData, cardsData]) => {
    profileId = profileData._id;
    avatarImage.style.backgroundImage = `url(\\${profileData.avatar})`;
    profileTitle.textContent = profileData.name;
    profileDescription.textContent = profileData.about;
    cardsData.forEach((item) => {
      cardsContainer.append(createCard(cardData, delCard, toggleCardLike, openPopupImg, profileId));
    });
  })
  .catch(console.error);  



