class CheckoutButton extends HTMLElement {

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
                --webkit-appearance: button;
            }

            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }

            .modal-checkout-button button{
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
            
            .modal-checkout-button button:hover{
                background: hsl(0, 0%, 20%);
            }
        </style>
        <div id="checkoutButton" class="modal-checkout-button swipeable-button">
            <button>CHECKOUT</button>
        </div>
        `;

    }
}

customElements.define('modal-checkout-button-component', CheckoutButton);