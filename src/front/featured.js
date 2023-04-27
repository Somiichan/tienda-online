class Featured extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            img {
                border-style: none;
                object-fit: cover;
                max-width: 100%;
            }

            h2, h3, p {
                font-family: "Poppins", sans-serif;
                text-decoration: none;
                margin: 0;
            }

            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }

            .featured{
                background-color:hsl(0, 7%, 97%);
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 10vh 10%;
            }
            
            .featured-title{
                gap: 2rem;
            }
            
            .featured-title h2{
                color: hsl(208, 13%, 23%);
                text-transform: uppercase;
                font-weight: 600;
                font-size: 3rem;
            }
            
            .featured-description{
                margin-bottom: 10rem;
            }
            
            .featured-description::after{
                background-color: hsl(0, 0%, 72%);
                content: " ";
                display: block;
                height: 0.3rem;
                margin: 0 auto;
                width: 10%;
            }
            
            .featured-description p{
                color: hsl(210, 6%, 58%);
                text-align: center;
                margin-top: 1rem;
                margin-bottom: 1rem;
                height: 5vh;
                font-weight: 300;
                font-size: 1.3rem;
                padding: 0 6rem 0;
            }
            
            .featured-containers{
                display: flex;
                gap: 1rem;
            }
            
            .featured-container{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 33%;
            }
            
            .container-image{
                margin-bottom: 1rem;
                max-width: 100%;   
            }
            
            .container-text-title{
                margin-bottom: 1rem;
            }
            
            .container-text h3{
                color: hsl(208, 13%, 25%);
                font-weight: 600;
                font-size: 1.7rem;
                text-align: center;
            }
            
            .container-text-description{
                padding: 0 2rem;
            }
            
            .container-text-description p{
                color: hsl(204, 4%, 53%);
                font-weight: 300;
                font-size: 1.1rem;
                letter-spacing: -.2px;
                text-align: center;
            }
        </style>
        <div class="featured" id="features">
            <div class="featured-title">
                <h2>HOW IT WORKS</h2>
            </div>
            <div class="featured-description">
                <p>Everybody loves tech gadgets, But our's is different. Here is how it works. It should be simple. Add how easy is to install your product.</p>
            </div>
            <div class="featured-containers">
                <div class="featured-container">
                    <div class="container-image">
                        <img src="../images/connect-image.webp" alt="Connect Image">
                    </div>
                    <div class="container-text">
                        <div class="container-text-title">
                            <h3>Connect Device</h3>
                        </div>
                        <div class="container-text-description">
                            <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                        </div>
                    </div>
                </div>
                <div class="featured-container">
                    <div class="container-image">
                        <img src="../images/config-image.webp" alt="Config Image">
                    </div>
                    <div class="container-text">
                        <div class="container-text-title">
                            <h3>Configure it</h3>
                        </div>
                        <div class="container-text-description">
                            <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                        </div>
                    </div>
                </div>
                <div class="featured-container">
                    <div class="container-image">
                        <img src="../images/done-image.webp" alt="Done Image">
                    </div>
                    <div class="container-text">
                        <div class="container-text-title">
                            <h3>Yay! Done.</h3>
                        </div>
                        <div class="container-text-description">
                            <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

    }
}

customElements.define('featured-component', Featured);