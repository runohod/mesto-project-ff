//функция открытия модального окна 
export function openPopup(evt) {
    evt.classList.add('popup_is-animated');
    evt.classList.add('popup_is-opened');
    document.addEventListener("keydown", handleEscKey)
};

setTimeout(openPopup, 1000);

//функция закрытия модального окна 
export function closedPopup(evt) {
    evt.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscKey);
};

//закрытие по клику на Esc
export function handleEscKey(event) {
    if (event.key === "Escape") {
        closedPopup();
    }
};

//сброс формы 
function resetForm {
nameInput.Value = nameElement.textContent;
descriptionInput.value = descriptionElement.textContent;
};

//закрытие по клику на крестик 
closeButton.addEventListeener("click", () => {
    closeModal (editModal)
    resetForm ();
});

//закрытие по клику на оверлэй 
editModal.addEventListeener("click", (event) => {
    if (event.target === editModal) {
        closeModal (editModal);
        resetForm ();
    }
}); 