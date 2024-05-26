  // Показать ошибку валидации
  
  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    if (inputElement && errorElement) {
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
    }
  };
  
  // Скрыть ошибку валидации
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    if (errorElement) {
      inputElement.classList.remove(inputErrorClass);
      errorElement.classList.remove(errorClass);
      errorElement.textContent = "";
    }
  };
  
  // Проверка валидности поля
  
  const checkInputValidity = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity("");
    }
  
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  // Проверка наличия невалидных полей
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  // Переключение состояние кнопки
  
  const toggleButtonState = (inputList, submitButton) => {
    if (hasInvalidInput(inputList)) {
      submitButton.disabled = true;
      submitButton.classList.add(inactiveButtonClass);
    } else if (submitButton) {
      submitButton.disabled = false;
      submitButton.classList.remove(inactiveButtonClass);
    }
  };
  
  // Установка обработчика событий
  const setEventListeners = (
    formElement,
    {
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass,
    }
  ) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, { inactiveButtonClass });
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement, {
          inputErrorClass,
          errorClass,
        });
        toggleButtonState(inputList, buttonElement, { inactiveButtonClass });
      });
    });
  }; 
  
  // Включение валидации
  const enableValidation = ({
    formSelector,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass,
  }) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => evt.preventDefault());
      setEventListeners(formElement, {
        formSelector,
        inputSelector,
        submitButtonSelector,
        inactiveButtonClass,
        inputErrorClass,
        errorClass,
      });
    });
  };
  
  // Сброс ошибок валидации
  const clearValidation = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const submitButton = formElement.querySelector(submitButtonSelector);
  
    toggleButtonState(inputList, submitButton);
  
    inputList.forEach((inputElement) => {hideInputError(formElement, inputElement);});
  };
  
  export { enableValidation, clearValidation};

  