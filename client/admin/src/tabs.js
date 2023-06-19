class Tabs extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            h3, p {
                font-family: "Poppins", sans-serif;
                font-weight: 500;
                margin: 0;
            }

            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }

            .tabs {
                margin: 5rem;
                display: flex;
                flex-direction: column;
                padding: 0 1rem 1rem;
            }
            
            .tab-header {
                display: flex;
                justify-content: flex-start;
                align-items: center;
            } 
            
            .tab {
                color: hsl(0, 0%, 100%);
                background-color: white;
                border: 1px solid hsl(216, 94%, 67%);
                position: relative;
                padding: 0.5rem 1rem;
                cursor: pointer;
            }
            
            .tab:hover {
                background-color: hsla(32, 97%, 61%, 0.822);
            }
            
            .tab h3 {
                color: black;
                display: inline-block;
                padding: 0.5rem;
                cursor: pointer;
                z-index: 2;
            }
            
            .tab.active {
                background-color: hsl(231, 93%, 58%);
            }
            
            .tab:not(.active) {
                background-color: hsl(216, 94%, 67%);
            }
            
            .tab-content {
                background-color: hsl(231, 93%, 58%);
                border: 1px solid hsl(216, 94%, 67%);
                height: 60vh;
                padding-top: 1rem;
                padding-left: 1rem;
                text-align: start;
                width: 100%;
            }
            
            .tab-content .content {
                overflow: hidden;
            }
            
            .tab-content .content:not(.active) {
                display: none;
            }
            
            .content p{
                color: hsl(0, 0%, 100%);
                font-weight: 400;
                font-size: 1rem;
            }
            
            .tab-content .content.active {
                display: block;
            }
        </style>
        <div class="tabs">
            <div class="tab-header">
                <div class="tab active">
                    <h3>Imágenes</h3>
                </div>
                <div class="tab">
                    <h3>Galería</h3>
                </div>
            </div>
            <div class="tab-content">
                <div class="content active">
                    <p>Dolor cum minima, asperiores rerum repellendus officia dolorum tempore nostrum hic est amet dicta consequuntur laudantium, laboriosam in dolore assumenda aspernatur ipsam!</p>
                </div>
                <div class="content">
                    <p>Asperiores rerum repellendus officia dolorum tempore nostrum hic est amet dicta consequuntur laudantium, laboriosam in dolore assumenda aspernatur ipsam!</p>
                </div>
            </div>
        </div>
        `;

        const tabs = this.shadow.querySelectorAll('.tab');
        const contents = this.shadow.querySelectorAll('.content');

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabs.forEach(tab => tab.classList.remove('active'));
                contents.forEach(content => content.classList.remove('active'));
                tabs[index].classList.add('active');
                contents[index].classList.add('active');
            });
        });

    }
}

customElements.define('tabs-component', Tabs);