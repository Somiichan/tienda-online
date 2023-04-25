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
            .header-logo{
                cursor: pointer;
            }
            img {
                border-style: none;
                object-fit: cover;
                max-width: 100%;
            }
        </style>
        <div class="header-logo">
            <img src="../images/header-logo.webp" alt="Header Logo">
        </div>
        `;

    }
}

customElements.define('logo-component', Logo);