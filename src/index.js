import '../src/pages/index.css'
import {initialCards} from './cards.js';
import {openCrdPopup} from "..";


//Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

//DOM узлы
const cardsContainer = document.querySelector('.places__list');

//Функция создания карточки
export function createCard(cardData, deleteOnButtonClick, likeCallBack, openCardCallBack) {
  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);
  const likeButton = cardElement.quarySelector(".card__like-button"); 

  const cardTemplateContent = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardTemplateContent.querySelector('.card__image');
  const cardTitle = cardTemplateContent.querySelector('.card__title');
  const cardDeleteButton = cardTemplateContent.querySelector('.card__delete-button');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardDeleteButton.addEventListener('click', function() {
    deleteOnButtonClick(cardTemplateContent);
  })

  likeButton.addEventListener('click', function() {
    cardlike(likeButton);
  })

  return cardTemplateContent;
}

//Функция удаления карточки
export function deleteCard(elementToDelete) {
  elementToDelete.remove();
}
 
//Вывести карточки на страницу
initialCards.forEach(function(initialCardData) {
  const newCard = createCard(initialCardData, deleteCard);
  cardsContainer.append(newCard);
});

//функция лайка карточки 
export function cardLike(evt) {
  evt.classList.toggle("card__like-button_is-active");
}
