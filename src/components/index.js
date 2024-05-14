import '../pages/index.css'
import {initialCards} from './cards.js';
import {createCard, delCard, toggleCardLike} from "./card.js";
import {openModal, closeModal, setCloseClickListeners} from "./modal";

//DOM узлы
const cardsContainer = document.querySelector('.places__list');

const buttonOpenPopupProfile = document.querySelector('.profile__edit-button')
const popupOpenProfile = document.querySelector('.popup_type_edit');
const buttonCreateNewCard = document.querySelector('.profile__add-button')
const popupCreateNewCard = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardUrlInput = document.querySelector('.popup__input_type_url');

const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

const popupList = [popupOpenProfile, popupCreateNewCard, imagePopup]

// Вывести карточки на страницу
function renderCards(array, delCard, likeCard, onImageClick) {
  array.forEach(card => {
    cardsContainer.append(createCard(card, delCard, likeCard, onImageClick));
  });
}

renderCards(initialCards, delCard, toggleCardLike, onImageClick);
setCloseClickListeners(popupList)

// функция подставляет в открытую модалку фотографию
function onImageClick(image) {
  popupImage.src = image.src;
  popupImage.alt = image.alt;
  popupCaption.textContent = image.alt;
  openModal(imagePopup)
}

// вешаем обработчики на окно редактирования имени профили и на окно добавления карточки
buttonOpenPopupProfile.addEventListener('click', () => {
  // изменение имени профиля и добавление новой карточки
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileTitle.textContent;
  openModal(popupOpenProfile)
})

buttonCreateNewCard.addEventListener('click', () => {
  openModal(popupCreateNewCard)
})

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupOpenProfile);
}

function handleNewCardFormSubmit(evt) {
  evt.preventDefault()
  const newItem = {
    name: cardNameInput.value,
    link: cardUrlInput.value
  }
  cardsContainer.prepend(createCard(newItem, delCard, toggleCardLike, onImageClick));
  evt.target.reset()
  closeModal(popupCreateNewCard);
}

popupOpenProfile.addEventListener("submit", handleProfileFormSubmit);
popupCreateNewCard.addEventListener("submit", handleNewCardFormSubmit);

