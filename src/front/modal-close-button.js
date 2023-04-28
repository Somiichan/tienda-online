class ModalCloseButton extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }

            .modal-close-button{
                cursor: pointer;
                right: 1rem;
                top: 1rem;
                position: absolute;
            }
            
            .modal-close-button svg{
                fill: hsl(203, 15%, 78%);
                width: 2rem;
                height: 2rem;
                transition: 0.3s;
            }
            
            .modal-close-button svg:hover{
                fill: hsl(210, 1%, 33%);
            }
        </style>
        <div class="modal-close-button modal-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
        </div>
        `;

    }
}

customElements.define('modal-close-button-component', ModalCloseButton);