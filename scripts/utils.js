const openImageModel = imageModal.querySelector('.popup__figure');
export const imagePopup = imageModal.querySelector('.popup__image');
export const captionPopup = imageModal.querySelector('.popup__caption');
export const imageModal = document.querySelector('.popup_type_image');

const closeModalWithEscape = (evt) => {
  const openedModal = document.querySelector('.popup_opened');
  if (openedModal && evt.key === 'Escape') {
    toggleModal(openedModal);
  };
};


const closeModalWithOverlay = (evt) =>  {
  const openedModal = document.querySelector('.popup_opened');
  if (openedModal === evt.target) {
    toggleModal(openedModal);
  };
};


export function toggleModal(popup) {

  popup.classList.toggle('popup_opened');

  if (!popup.classList.contains('popup_opened')) {
    popup.removeEventListener('click', closeModalWithOverlay);
    document.removeEventListener('keydown', closeModalWithEscape);
  } else {
    document.addEventListener('keydown', closeModalWithEscape);
    popup.addEventListener('click', closeModalWithOverlay);
  };
};
