class FlipCard extends HTMLElement {

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

            .contact{
                height: 60vh;
                position: relative;
            }
            
            .contact-flipbox.flip-card{
                width: 30%;
                height: 40vh;
                position: absolute;
                left: 33%;
                top: 10%;
                z-index: 2;
            }
        </style>
        <div class="contact" id="contact">
            <slot name="map"></slot>
            <div class="contact-flipbox flip-card">
                <slot name="front"></slot>
                <slot name="back"></slot>
            </div>
        </div>
        `;

    }
}

customElements.define('flip-card-component', FlipCard);