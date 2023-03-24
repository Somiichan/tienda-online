export default (() => {
    
    const modalButtons = document.querySelectorAll('.modal-button');

    modalButtons.forEach((modalButton) => {
        modalButton.addEventListener('click', () => {
            console.log('Hola');
        });
    });
})();