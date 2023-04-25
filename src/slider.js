class Slider extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            button {
                line-height: 1.15;
                text-transform: none;
                overflow: visible;
            }

            h2, p, button{
                font-family: "Poppins", sans-serif;
                margin: 0;
                text-decoration: none;
            }

            img {
                object-fit: cover;
                max-width: 100%;
                border-style: none;
            }

            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }

            .slider{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 3rem;
                height: 100vh;
                position: relative;
                width: 100%;
            }
            
            .slider-background-image{
                width: 100%;
                position: absolute;
                bottom: 0;
            }
            
            .slider-background-image img{
                width: 100%;
                background-repeat: no-repeat;
                background-attachment: fixed;
            }
            
            .slider-title{
                position: absolute;
                top: 15%;
            }
            
            .slider-title h2{
                color: hsl(208, 13%, 25%);
                font-weight: 600;
                font-size: 5rem;
                letter-spacing: -3px;
            }
            
            .slider-description{
                position: absolute;
                top: 30%;
                width: 50%;
            }
            
            .slider-description p{
                color: hsl(207, 5%, 56%);
                font-weight: 300;
                font-size: 1.7rem;
                letter-spacing: -.2px;
                text-align: center;
            }
            
            .slider-button{
                position: absolute;
                top: 45%;
            }
            
            .slider-button button{
                border: none;
                position: relative;
                display: inline-block;
                padding: 1rem 5.5rem;
                cursor: pointer;
                border-radius: 60px;
                font-weight: 500;
                font-size: 1.7rem;
                color: white;
                background-color: hsl(209, 100%, 50%);
                text-align: center;
            }
            
            .slider-button button:hover{
                background-color: hsl(0, 0%, 20%);
            }
            
            .slider-image{
                bottom: 5%;
                position: absolute;
                width: max-content;
            }
        </style>
        <div class="slider" id="product">
            <div class="slider-background-image">
                <img src="../images/header-background.webp" alt="Slider Background">
            </div>
            <div class="slider-title">
                <h2>The future of tech is here</h2>
            </div>
            <div class="slider-description">
                <p>Holisticly incentivize revolutionary collaboration and idea sharing before cost effective users. Actual focused services before highly efficient human capital.</p>
            </div>
            <div class="slider-button">
                <button class="modal-button">BUY WITH PAYPAL</button>
            </div>
            <div class="slider-image">
                <img src="../images/slider-image.webp" alt="Slider Image">
            </div>
        </div>
        `;

    }
}

customElements.define('slider-component', Slider);