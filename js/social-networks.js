export default (() => {
    
    const hamburgerButtons = document.querySelectorAll('.hamburger-button');

    hamburgerButtons.forEach((hamburgerButton) => {
        hamburgerButton.addEventListener('click', () => {
            hamburgerButton.classList.toggle('active');
            hamburgerButton.parentElement.classList.toggle('active');
        });
    });  
})();