//Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

//Функция создания карточки
function createCard(cardData, delCard, likeCard, onImageClick) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  cardImage.loading = 'lazy'


  deleteButton.addEventListener('click', function() {
    delCard(cardElement);
  });

  likeButton.addEventListener('click', function() {
    likeCard(likeButton);
  });

  cardImage.addEventListener('click', function() {
    onImageClick(cardImage);
  });

  return cardElement;
};

function delCard(cardElement) {
  cardElement.remove();
};

function toggleCardLike(likeButton) {
  likeButton.classList.toggle('card__like-button_is-active');
};

export {createCard, delCard, toggleCardLike};

