export default (() => {  

    const myInputs = document.querySelectorAll('.myInput');
    const inputCounterEvent = new Event("inputCounter");

    document.querySelectorAll('.charCount').forEach((charCount) => {
        const input = charCount.previousElementSibling;
        
        myInputs.forEach((input) => {

            input.addEventListener("input", function() {
                if (input.value.length >= 0) {
                input.dispatchEvent(inputCounterEvent);
                } 
            });

            input.addEventListener("inputCounter", (event) => {
                const textLength = event.target.value.length;

                if (textLength >= 20) {
                event.target.value = event.target.value.slice(0, 20);
                charCount.textContent = "20/20 char";
                charCount.classList.add("max-char");
                } else {
                charCount.textContent = textLength + "/20 char";
                charCount.classList.remove("max-char");
                }
            });
        });

    });

})();