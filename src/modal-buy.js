(() => { const refs = { openModalBtn: document.querySelector('.buy'), closeModalBtn:
document.querySelector('.close-button'), modal: document.querySelector('.backdrop'), };

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() { refs.modal.classList.toggle('is-hidden'); }
})();