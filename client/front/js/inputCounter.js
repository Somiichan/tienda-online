export default (() => {  

    const inputCounterEvent = new Event("inputCounter");

    document.querySelectorAll('.charCount').forEach((charCount) => {
        const input = charCount.previousElementSibling;

        input.addEventListener("input", function() {
            if (input.value.length >= 0) {
            input.dispatchEvent(inputCounterEvent);
            } 
        });

        input.addEventListener("inputCounter", (event) => {
            const textLength = event.target.value.length;

            if (textLength >= 30) {
            event.target.value = event.target.value.slice(0, 30);
            charCount.textContent = "30/30 char";
            charCount.classList.add("max-char");
            } else {
            charCount.textContent = textLength + "/30 char";
            charCount.classList.remove("max-char");
            }
        });
        
        input.closest('form').addEventListener("submit", () => {
            input.dispatchEvent(inputCounterEvent);
        });
    });

})();