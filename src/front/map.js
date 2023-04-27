class Map extends HTMLElement {

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

            .contact-map{
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: -100;
            }
        </style>
        <div class="contact-map">
            <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=2.623801231384278%2C39.563059541770635%2C2.6295948028564458%2C39.56668219672183"></iframe>
        </div>
        `;

    }
}

customElements.define('map-component', Map);