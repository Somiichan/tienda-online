export default (() => {
    
    const acordeonButtons = document.querySelectorAll('.faqs-question');
    acordeonButtons.forEach((acordeonButton) => {
        acordeonButton.addEventListener('click', () => {
            const faqParent = acordeonButton.closest(".faqs-description-item");
            const faqAnswer = faqParent.querySelector(".faqs-answer");
            acordeonButton.classList.toggle('active');
            faqAnswer.classList.toggle('active');
        });
    });  
})();