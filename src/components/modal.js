
function openModal(modal) {
    modal.classList.add('popup_is-opened')
    document.addEventListener('keydown', handleCloseEsc);
  }

//закрытие по клику на Esc
  function handleCloseEsc(evt) {
    if (evt.key === 'Escape') {
      const openedModal = document.querySelector('.popup_is-opened')
      closeModal(openedModal)
    }
  }

//закрытие кликом на оверлей
  function handleCloseOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      closeModal(evt.target)
    }
  } 

//закрытие при клике по крестику
function setCloseClickListeners(popupList) {
    popupList.forEach(popup => {
      // находим кнопку закрытия попапа
      const closeButton = popup.querySelector('.popup__close')
      // вешаем обработчик закрытия на кнопку, тут достаточно вызвать closeModal
      closeButton.addEventListener('click', () => closeModal(popup))
  
      // вешаем обработчик закрытия на оверлей
      popup.addEventListener('click', handleCloseOverlay)
    })
}

function closeModal(modal) {
    modal.classList.remove('popup_is-opened')
    document.removeEventListener('keydown', handleCloseEsc);
  }
 
export {openModal, closeModal, setCloseClickListeners}



