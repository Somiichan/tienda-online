import { URL } from '../config/config.js'

class Return extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render()
    }

    returnToLogin = () => {
        window.location.href = 'http://127.0.0.1:5500/client/admin/login.html'
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .return-button-container {
                width: 3rem;
                position: absolute;
                bottom: 0;
                right: 0;
                margin: 2rem 4rem
            }

            .return-button-container button {
                width: 100%;
                background-color: transparent;
                cursor: pointer;
                border: none;
                padding: 0;
                transition: background-color 0.3s;
                outline: none;
            }
            
            .return-button-container button:active {
                transform: scale(0.9);
            }

            .return-button-container button:focus {
                outline: none;
                box-shadow: 0 0 0 3px hsl(231, 93%, 58%);
            }
            
            .return-button-container button svg {
                fill: hsl(0, 0%, 100%);
            }
        </style>
        
        <div class="return-button-container">
            <button id="return-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z" /></svg>
            </button>
        </div> 
        
        `;

        const returnButton = this.shadow.querySelector("#return-button")
        returnButton.addEventListener("click", () => {
            this.returnToLogin()
        })
    }
}

customElements.define('return-component', Return);