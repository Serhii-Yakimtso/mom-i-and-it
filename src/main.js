(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    menuLink: document.querySelectorAll('.menu-modal-nav-link'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.menuLink.forEach(link => link.addEventListener('click', toggleModal));

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
