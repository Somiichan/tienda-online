export default (() => {

    const flipButton = document.querySelector('.contact-flipbox');

    flipButton.addEventListener('click', () => {
        flipButton.classList.toggle('flipped');
        console.log("hola");
    });
  
})();