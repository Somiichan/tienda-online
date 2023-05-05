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

            .hamburger-button {
                cursor: pointer;
            }

            .hamburger-button.active {
                background-color: hsl(0, 0%, 100%);
                height: 100vh;
                position: fixed;
                left: 0;
                opacity: 0;
                top: 0;
                transition: all 0.2s ease-in-out;
                width: 100%;
                z-index: -1;
            }
        </style>
        <div class="hamburger-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
        </div>
        `;
        
        const hamburgerButton = document.querySelector('.hamburger-button');

        hamburgerButton.addEventListener('click', () => {
            hamburgerButton.classList.toggle('active');
        });
    }
}

customElements.define('menu-component', Menu);