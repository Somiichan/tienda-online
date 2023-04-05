export default (() => {

    const allButtons = document.querySelectorAll('.plus-minus-button button');

        allButtons.forEach(button => {
            button.addEventListener('click', () => {
            const inputNumber = button.closest('.plus-minus-button').querySelector('input[type="number"]');
            const minusButton = button.parentElement.querySelector('.minus-button');
            const currentValue = parseInt(inputNumber.value);

            if (button.classList.contains('minus-button')) {
                if (currentValue > 1) {
                inputNumber.value = currentValue - 1;
                }
                if (inputNumber.value === '1') {
                minusButton.disabled = true;
                } else {
                minusButton.disabled = false;
                }
            } else if (button.classList.contains('plus-button')) {
                inputNumber.value = currentValue + 1;
                minusButton.disabled = false;
            }

        });

    });

})();