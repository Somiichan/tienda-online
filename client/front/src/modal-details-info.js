class ProductInfo extends HTMLElement {

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

            .modal-details-info {
                position: absolute;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                width: 45%;
                height: 100%;
                padding-left: 1rem;
                top: 0;
                left: 50%;
            }
        </style>
        <div class="modal-details-info">
            <slot name="product"></slot>
            <slot name="tabs"></slot>
            <slot name="plus-minus"></slot>
            <slot name="product-checkout"></slot>
        </div>
        `;

    }
}

customElements.define('modal-details-info-component', ProductInfo);