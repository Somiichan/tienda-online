class ModalContent extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .modal-box{
                position: absolute;
                height: 70vh;
                width: 60%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                box-shadow: 0 0 62px hsla(0, 0%, 0%, 0.3);
                align-items: center;
                background-color: hsl(0, 0%, 100%);
                overflow: hidden;
            }
        </style>
        <div class="modal-box">
            <slot name="product-gallery"></slot>
            <slot name="product-content"></slot>
            <slot name="close-button"></slot>
        </div>
        `;

    }
}

customElements.define('modal-box-component', ModalContent);