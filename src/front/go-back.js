class GoBack extends HTMLElement {

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

            .go-back-button{
                text-align: center;
                vertical-align: middle;
            }
            
            .go-back-button button{
                border: 1px solid hsl(0, 0%, 80%);
                background-color: transparent;
                color: hsl(0, 0%, 80%);
                padding: 8px 2rem;
                border-radius: 20px;
                font-size: 0.8rem;
                cursor: pointer;
                transition: 0.5s;
            }
            
            .go-back-button button:hover{
                background: hsl(0, 0%, 20%);
                color: hsl(0, 0%, 100%);
                cursor: pointer;
            }
        </style>
        <div class="go-back-button swipeable-button">
            <button>Go Back</button>
        </div>
        `;

    }
}

customElements.define('go-back-button-component', GoBack);