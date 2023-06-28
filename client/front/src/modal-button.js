class ModalButton extends HTMLElement {

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
                --webkit-appearance: button;
                text-transform: none;
                overflow: visible;
                line-height: 1.15;
                margin: 0;
            }

            .header-checkout-button button{
                background-color: hsl(18, 100%, 57%);
                border-radius: 150px;
                border: none;
                color: white;
                cursor: pointer;
                font-weight: 500;
                font-size: 1.1rem;
                padding: 0.5rem 2rem;
            }
            
            .header-checkout-button button:hover{
                background-color: hsl(208, 13%, 25%);
            }
            
            .header-checkout-button button:active{
                background-color: hsl(35, 84%, 45%);
            }
        </style>
        <div class="header-checkout-button">
            <button class="modal-button">BUY IT NOW</button>
        </div>
        `;

        const modalButton = this.shadow.querySelector('.modal-button')
        const modal = this.shadow.querySelector('.modal')

        modalButton.addEventListener('click', () => {
            modal.classList.toggle('active')
        })
    }
}

customElements.define('modal-button-component', ModalButton);