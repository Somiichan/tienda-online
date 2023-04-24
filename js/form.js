export default (() => {
    
    const sendButtons = document.querySelectorAll(".send-button");

    sendButtons.forEach( sendButton => {
        sendButton.addEventListener("click", event => {
            event.preventDefault();
            const form = sendButton.closest("form");
            validateForm(form.elements);
        });
    });
})();

let validateForm = (elements) => {

    let validForm = true;
    
    let validators = {
        "only-letters": {
          regex: /^[a-zA-Z\s]+$/g,
          message: "Please enter only letters"
        },
        "only-numbers": {
          regex: /\d+/g,
          message: "Please enter only numbers"
        },
        "telephone": {
          regex: /^\d{9}$/g,
          message: "Please enter a valid telephone number"
        },
        "address": {
          regex: /^[a-zA-Z0-9\s\.,'-]+$/g,
          message: "Please enter a valid address"
        },
        "email": {
          regex: /\w+@\w+\.\w+/g,
          message: "Please enter a valid email address"
        },
        "web": {
          regex: /^(http|https):\/\/\w+\.\w+/g,
          message: "Please enter a valid website URL"
        },
        "password": {
          regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
          message: "Please enter a valid password"
        },
        "date": {
          regex: /^\d{4}-\d{2}-\d{2}$/g,
          message: "Please enter a valid date in the format yyyy-mm-dd"
        },
        "time": {
          regex: /^\d{2}:\d{2}$/g,
          message: "Please enter a valid time in the format hh:mm"
        }
    };

    for (let i = 0; i < elements.length; i++) {

        if (elements[i].dataset.validate) {
            
            if(elements[i].value.match(validators[elements[i].dataset.validate].regex) == null) {
                elements[i].classList.add('invalid');
                validForm = false;
            }else{
                elements[i].classList.remove('invalid');
            }
        }
    }

    if(!validForm){
        document.dispatchEvent(new CustomEvent('message', {
            detail: {
                text: 'Some input fields are not valid!',
                type: 'error'
            }
        }));
    }
    
};

