class CopyrightFooterContainer extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            p {
                font-family: "Poppins", sans-serif;
                margin: 0;
            }

            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }

            .copyright-footer-container p{
                color: hsl(0, 0%, 64%);
                font-size: 0.8rem;
                text-align: center;
                
            }
        </style>
        <div class="copyright-footer-container">
            <p>Copyright ©Ninetheme. Proland. All rights reserved</p>
        </div>
        `;

    }
}

customElements.define('copyright-footer-container-component', CopyrightFooterContainer);