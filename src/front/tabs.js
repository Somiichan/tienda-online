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
                margin: 0;
            }

            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }

            .tabs {
                border-bottom: 0.5px solid hsla(0, 0%, 72%, 0.747);
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
                background-color: hsl(32, 97%, 61%);
                border-radius: 5px 5px 0 0;
                border-top-right-radius: 60px 30px;
                position: relative;
                padding: 0.5rem 1rem;
                cursor: pointer;
            }
            
            .tab:hover {
                background-color: hsla(32, 97%, 61%, 0.822);
            }
            
            .tab h3 {
                color: hsl(0, 0%, 100%);
                display: inline-block;
                padding: 0.5rem;
                cursor: pointer;
                z-index: 2;
            }
            
            .tab.active {
                background-color: hsl(251, 97%, 61%);
            }
            
            .tab:not(.active) {
                box-shadow: inset 2px 0 4px hsla(0, 0%, 0%, 0.200);
            }
            
            .tab-content {
                background-color: hsl(251, 97%, 61%);
                border-top-right-radius: 20px;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;
                height: 10vh;
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
                    <h3>Description</h3>
                </div>
                <div class="tab">
                    <h3>Features</h3>
                </div>
                <div class="tab">
                    <h3>Opinions</h3>
                </div>
            </div>
            <div class="tab-content">
                <div class="content active">
                    <p>Dolor cum minima, asperiores rerum repellendus officia dolorum tempore nostrum hic est amet dicta consequuntur laudantium, laboriosam in dolore assumenda aspernatur ipsam!</p>
                </div>
                <div class="content">
                    <p>Asperiores rerum repellendus officia dolorum tempore nostrum hic est amet dicta consequuntur laudantium, laboriosam in dolore assumenda aspernatur ipsam!</p>
                </div>
                <div class="content">
                    <p>Officia dolorum tempore nostrum hic est amet dicta consequuntur laudantium, laboriosam in dolore assumenda aspernatur ipsam!</p>
                </div>
            </div>
        </div>
        `;

    }
}

customElements.define('tabs-component', Tabs);