class Logo extends HTMLElement {

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
                text-decoration: none;
            }

            .panel-header {
                display: flex;
                justify-content:space-between;
                align-items: center;
                margin-top: 2rem;
            }

            .header-logo {
                cursor: pointer;
            }
        </style>
        <div class="header-logo">
            <h1>Detectib</h1>
        </div>
        `;

    }
}

customElements.define('logo-component', Logo);