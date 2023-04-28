class ModalForm extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            button {
                font-family: "Poppins", sans-serif;
                line-height: 1.15;
                margin: 0;
                overflow: visible;
                text-transform: none;
            }

            button, [type=submit] {
                --webkit-appearance: button;
            }

            input {
                font-family: "Poppins", sans-serif;
                overflow: visible;
                line-height: 1.15;
                margin: 0;
            }

            select {
                font-family: "Poppins", sans-serif;
                line-height: 1.15;
                margin: 0;
                text-transform: none;
            }

            p {
                font-family: "Poppins", sans-serif;
                margin: 0;
            }

            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }

            .modal-form{
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                gap: 2rem;
            }
            
            .modal-form .name{
                display: flex;
                gap: 2rem;
            }
            
            .modal-form .personal-data{
                display: flex;
                gap: 2rem;
            }
            
            .address-line{
                display: flex;
                flex-direction: column;
            }
            
            .modal-form .state{
                display: flex;
                gap: 2rem;
            }
            
            .modal-form input{
                outline: none;
                box-sizing: border-box;
                width: 100%;
                border: 0.5px solid hsl(206, 29%, 91%);
                background-color: hsl(204, 56%, 98%);
                padding: 10px 10px;
                font-size: 1rem;
            }
            
            .modal-form .charCount {
                font-size: 14px;
                color: hsl(206, 29%, 91%);
                margin-top: 5px;
            }
            
            .modal-form .charCount.max-char {
                color: hsla(0, 100%, 50%, 0.568);
                font-weight: bold;
            }
            
            .modal-form input::placeholder {
                color: rgba(203,212,217,255); 
                position: absolute;
            }
            
            .modal-form input:focus::placeholder {
                color: transparent;
            }
            
            .modal-form input:not(:focus)::placeholder {
                color: rgba(203,212,217,255); 
            }
            
            *input:focus{
                border: 0.5px solid hsl(209, 100%, 50%);
            }
            
            input.invalid {
                border: 0.5px solid red;
            }
            
            .country select{
                outline: none;
                cursor: pointer;
                color: hsl(0, 0%, 43%);
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                border: 0.5px solid hsl(206, 29%, 91%);
                background-color: hsl(204, 56%, 98%);
                padding: 10px 10px;
                font-size: 1rem;
            }
            
            *select:focus{
                border: 0.5px solid hsl(209, 100%, 50%);
            }
            
            .form-button button{
                background: hsl(209, 100%, 50%);
                color: hsl(0, 0%, 100%);
                border: none;
                border-radius: 5px;
                font-weight: 600;
                font-size: 1.6rem;
                padding: 1.5rem;
                width: 100%;
                cursor: pointer;
                transition: 0.3s;
            }
            
            .form-button button:hover{
                background: hsl(0, 0%, 20%);
            }
        </style>
        <form class="modal-form">
            <div class="name">
                <input type="text" data-validate="only-letters" placeholder="First Name">
                <input type="text" data-validate="only-letters" placeholder="Last Name">
            </div>
            <div class="email">
                <input type="text" data-validate="email" placeholder="E-mail adress">
            </div>
            <div class="personal-data">
                <div class="telephone">
                    <input type="text" data-validate="telephone" placeholder="Telephone">
                </div>
                <div class="address-line">
                    <input type="text" class="myInput" data-validate="address" placeholder="Address Line">
                    <p class="charCount">0/30 char</p>
                </div>
            </div>
            <div class="state">
                <input type="text" data-validate="only-letters" placeholder="State">
                <input type="text" data-validate="only-numbers" placeholder="Zip Code">
            </div>
            <div class="country">
                <select name="country" id="country-input">
                    <option value="default">-Please choose an option-</option>
                    <option value="America">America</option> 
                    <option value="England">England</option>
                    <option value="Kurdistan">Kurdistan</option>
                    <option value="Arabia">Arabia</option>
                    <option value="Japan">Japan</option>
                </select>
            </div>
            <div class="form-button">
                <button class="send-button" type="submit">FINISH PURCHASE</button>
            </div>
        </form>
        `;

    }
}

customElements.define('modal-form-component', ModalForm);