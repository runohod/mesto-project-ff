// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardData, deleteOnButtonClick) {
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

  return cardTemplateContent;
}

// @todo: Функция удаления карточки
function deleteCard(elementToDelete) {
  elementToDelete.remove();
}
 

// @todo: Вывести карточки на страницу
initialCards.forEach(function(initialCardData)  {
  const newCard = createCard(initialCardData, deleteCard);
  cardsContainer.append(newCard);
});