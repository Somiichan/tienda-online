export default (() => {

    const flipButtons = document.querySelectorAll('.flip-button');

    flipButtons.forEach((flipButton) => {
        flipButton?.addEventListener('click', () => {
            flipButton.closest('.flip-card').classList.toggle('active');
        });
    });
})();