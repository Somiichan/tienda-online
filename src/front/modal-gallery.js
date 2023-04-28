class ModalGallery extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            img {
                border-style: none;
                object-fit: cover;
                max-width: 100%;
            }

            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }

            .modal-gallery{
                background-color: hsl(0, 0%, 100%);
                box-shadow: inset 0 0 62px hsla(0, 0%, 0%, 0.3);
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                z-index: 2000;
            }
        </style>
        <div class="modal-gallery">
            <div class="modal-gallery-carrousel">
                <img src="../images/the-watch-1.webp" alt="Blue Watch">
            </div>
        </div>
        `;

    }
}

customElements.define('modal-gallery-component', ModalGallery);