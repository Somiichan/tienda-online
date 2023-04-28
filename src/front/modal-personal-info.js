class PersonalInfo extends HTMLElement {

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
            
            .modal-personal-info {
                position: absolute;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                width: 45%;
                height: 100%;
                padding-left: 1rem;
                top: 0;
                left: 0;
            }
        </style>
        <div class="modal-personal-info">
            <slot name="back-button"></slot>
            <slot name="form"></slot>
        </div>
        `;

    }
}

customElements.define('modal-personal-info-component', PersonalInfo);