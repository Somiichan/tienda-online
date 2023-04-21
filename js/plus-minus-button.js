export default (() => {

    document.querySelectorAll('.plus-minus-button button').forEach(button => {
        button.addEventListener('click', () => {
          const inputNumber = button.closest('.plus-minus-button').querySelector('input[type="number"]');
          const minusButton = button.parentElement.querySelector('.minus-button');
          const currentValue = parseInt(inputNumber.value);
          const isMinusButton = button.classList.contains('minus-button');
      
          if (isMinusButton && currentValue > 1) {
            inputNumber.value = currentValue - 1;
      
            document.dispatchEvent(new CustomEvent('message', {
              detail: {
                text: 'Product removed from cart!',
                type: 'remove'
              }
            }));
      
          } else if (button.classList.contains('plus-button')) {
            inputNumber.value = currentValue + 1;
      
            document.dispatchEvent(new CustomEvent('message', {
              detail: {
                text: 'Product added to cart!',
                type: 'add'
              }
            }));
          }
      
          minusButton.disabled = inputNumber.value === '1';
        });
      });
})();



