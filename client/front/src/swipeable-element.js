class SwipeableElement extends HTMLElement {

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

            .modal-details{
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                position: absolute;
                transition: left 0.5s;
                margin-left: 0.5rem;
            }
            
            .modal-details.active{
                left: 50%;
            }
        </style>
        <div class="modal-details swipeable-element active">
            <slot name="primary-swipe-content"></slot>
            <slot name="secondary-swipe-content"></slot>
        </div>
        `;

    }
}

customElements.define('modal-swipeable-element-component', SwipeableElement);