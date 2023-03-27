export default (() => {
    
    const modalButtons = document.querySelectorAll('.modal-button');
    const modal = document.querySelector('.modal');

    modalButtons.forEach((modalButton) => {
        modalButton.addEventListener('click', () => {
            modal.classList.toggle('active');
        });
    });
})();