class InformationFooterContainer extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            a {
                background-color: transparent;
                color: hsl(208, 13%, 25%);
                font-weight: 600;
                text-decoration: none;
                transition: 300ms;
                margin: 0;
            }

            a, li {
                font-family: "Poppins", sans-serif;
            }

            ul {
                list-style: none;
                padding-left: 0;
            }

            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }

            .information-footer-container{
                border-top: 1px solid  hsla(0, 0%, 54%, 0.226);
                width: 70%;
                margin-right: auto;
                margin-left: auto;
            }
            
            .information-footer-container ul{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 3rem;
                margin-right: auto;
                margin-left: auto;
            }
            
            .information-footer-container ul li a{
                opacity: 50%;
                font-size: 1rem;
                color: hsl(0, 0%, 35%);
            }
            
            .information-footer-container ul li a:hover{
                color: hsl(0, 0%, 13%);
            }
        </style>
        <div class="information-footer-container">
            <ul>
                <li>
                    <a href="#presskit">PressKit</a>
                </li>
                <li>
                    <a href="#mobile-app">Mobile App</a>
                </li>
                <li>
                    <a href="#privacy-policy">Privacy Policy</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#terms-of-use">Terms of Use</a>
                </li>
            </ul>
        </div>
        `;

    }
}

customElements.define('information-footer-container-component', InformationFooterContainer);