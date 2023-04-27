class Menu extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            svg {
                width: 2.5rem;
                fill:hsl(0, 0%, 100%);
            }

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

            .header-hamburger {
                cursor: pointer;
            }
        </style>
        <div class="header-hamburger">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
        </div>
        `;

    }
}

customElements.define('menu-component', Menu);