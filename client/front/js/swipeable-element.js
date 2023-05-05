export default (() => {
    
    const swipeButtons = document.querySelectorAll('.swipeable-button');
    
    swipeButtons.forEach(swipeButton => {
        swipeButton.addEventListener('click', () => {
            swipeButton.closest('.swipeable-element').classList.toggle('active');
        });
    });

})();