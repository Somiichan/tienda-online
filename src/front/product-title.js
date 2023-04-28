class ProductTitle extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            h2, h3, h4, h5, h6 {
                font-family: "Poppins", sans-serif;
                margin: 0;
                text-decoration: none;
            }

            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }

            .product-title{
                display: flex;
                flex-direction: column;
                border-bottom: 0.5px solid hsla(0, 0%, 72%, 0.747);
                padding: 1rem;
                gap: 0.5rem;
                align-items: flex-start;
            }
            
            .product-name h4{
                color: hsl(210, 5%, 50%);
                font-weight: 300;
                font-size: 1.3rem;
            }
            
            .product-edition h2{
                color: hsl(208, 13%, 25%);
                font-weight: 700;
                font-size: 2rem;
            }
            
            .product-model h5{
                color: hsl(207, 8%, 55%);
                font-weight: 300;
                font-size: 1rem;
            }
            
            .product-facture{
                align-items: center;
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
            }
            
            .old-price{
                color: hsl(210, 5%, 50%);
            }
            
            .old-price h3{
                color: hsl(210, 5%, 50%);
                font-weight: 300;
                font-size: 1.3rem;
            }
            
            .new-price h3{
                color: hsl(209, 100%, 50%);
                font-weight: 600;
                font-size: 2rem;
            }
            
            .offer-tag h6{
                background-color: hsl(32, 100%, 50%);
                color: hsl(0, 0%, 100%);
                padding: 0.1rem;
                font-weight: 500;
                font-size: 1rem;
            }
        </style>
        <div class="product-title">
            <div class="product-name">
                <h4>SMART WATCH</h4>
            </div>
            <div class="product-edition">
                <h2>WATCH LIMITED EDITION</h2>
            </div>
            <div class="product-model">
                <h5>MODEL AS1500</h5>
            </div>
            <div class="product-facture">
                <del class="old-price">
                    <h3>$299</h3>
                </del>
                <div class="new-price">
                    <h3>$290</h3>
                </div>
                <div class="offer-tag">
                    <h6>EARLY BIRD OFFER</h6>
                </div>
            </div>
        </div>
        `;

    }
}

customElements.define('product-title-component', ProductTitle);