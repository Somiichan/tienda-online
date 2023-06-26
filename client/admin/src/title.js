import { URL } from '../config/config.js'

class Title extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            h1 {
                color: hsl(0, 0%, 100%);
                font-family: "Poppins", sans-serif;
                font-size: 2.5rem;
                font-weight: 600;
                margin: 0;
            }

            .panel-header {
                display: flex;
                justify-content:space-between;
                align-items: center;
                margin-top: 2rem; 
            }

            .header-title {
                cursor: pointer;
            }
        </style>
        <div class="header-title">
            <h1>Clientes</h1>
        </div>
        `;

    }
}

customElements.define('title-component', Title);