class PlusMinus extends HTMLElement {

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
                font-size: 100%;
                line-height: 1.15;
                margin: 0;
                overflow: visible;
                text-transform: none;
                --webkit-appearance: button;
            }

            input {
                font-family: "Poppins", sans-serif;
                line-height: 1.15;
                margin: 0;
                overflow: visible;
                line-height: 1.15;
                margin: 0;
            }

            input::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }

            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }

            .plus-minus-button{
                display: flex;
                justify-content: center;
                align-items: center;
                
            }
            
            .plus-minus-button input{
                max-width: 5rem;
            }
            
            .plus-minus-button input[value]{
                text-align: center;
                
            }
            
            .plus-minus-button input, button{
                outline: none;
                box-sizing: border-box;
                border: 0.5px solid hsl(204, 14%, 86%);
                background-color: hsl(204, 56%, 98%);
                font-size: 1rem;
            }
            
            .plus-minus-button button:hover{
                background: hsl(0, 0%, 20%);
                color: hsl(0, 0%, 100%);
                cursor: pointer;
            }
        </style>
        <div class="plus-minus-button">
            <button class="minus-button">-</button>
            <input type="number" value="1"></input>
            <button class="plus-button">+</button>
        </div>
        `;

    }
}

customElements.define('plus-minus-button-component', PlusMinus);