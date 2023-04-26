class Details extends HTMLElement {

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

            h2, h3, h4, p {
                font-family: "Poppins", sans-serif;
                text-decoration: none;
                margin: 0;
            }

            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }

            .details{
                display: flex;
                flex-direction: row;
                gap: 5rem;
                justify-content: center;
                padding: 5rem 0;
                margin: 2rem 0;
            }
            
            .details-column{
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                width:20%
            }
            
            .details-item{
                display: flex;
                gap: 2rem;
            }
            
            .details-item-icon{
                display: flex;
            }
            
            .details-item-icon svg{
                fill: hsl(209, 100%, 50%);
                height: 4vh;
                width: 2rem;
            }
            
            .details-item-text{
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            
            .details-item-text-title{
                font-weight: 300;
                font-size: 1.5rem;
                font-family: 'Poppins', sans-serif;
            }

            .details-item-text-title h4{
                color: hsl(208, 13%, 25%);
                font-weight: 600;
            }
            
            .details-item-text-description{
                font-weight: 300;
                font-size: 1rem;
                font-family: 'Poppins', sans-serif;
            }
            
            .details-item-text-description p{
                text-align: justify;
            }
            
            .details-image{
                width: auto;
                padding: 0 2rem;
            }
        </style>
        <div class="details" id="details">
            <div class="details-column">
                <div class="details-item">
                    <div class="details-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>key-variant</title><path d="M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14A6,6 0 0,1 2,8A6,6 0 0,1 8,2A6,6 0 0,1 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z" /></svg>
                    </div>
                    <div class="details-item-text">
                        <div class="details-item-text-title">
                            <h4>Fast and secure</h4>
                        </div>
                        <div  class="details-item-text-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </div>
                    </div>
                </div>
                <div class="details-item">
                    <div class="details-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>bullhorn</title><path d="M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z" /></svg>
                    </div>
                    <div class="details-item-text">
                        <div class="details-item-text-title">
                            <h4>Voice Assistant</h4>
                        </div>
                        <div  class="details-item-text-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </div>
                    </div>
                </div>
                <div class="details-item">
                    <div class="details-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>diamond-stone</title><path d="M16,9H19L14,16M10,9H14L12,17M5,9H8L10,16M15,4H17L19,7H16M11,4H13L14,7H10M7,4H9L8,7H5M6,2L2,8L12,22L22,8L18,2H6Z" /></svg>
                    </div>
                    <div class="details-item-text">
                        <div class="details-item-text-title">
                            <h4>Apps you love</h4>
                        </div>
                        <div  class="details-item-text-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="details-image">
                <img src="../images/details-image.webp" alt="Details Image">
            </div>
            <div class="details-column">
                <div class="details-item">
                    <div class="details-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>thumb-up-outline</title><path d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z" /></svg>
                    </div>
                    <div class="details-item-text">
                        <div class="details-item-text-title">
                            <h4>Stay in touch</h4>
                        </div>
                        <div  class="details-item-text-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </div>
                    </div>
                </div>
                <div class="details-item">
                    <div class="details-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-outline</title><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" /></svg>
                    </div>
                    <div class="details-item-text">
                        <div class="details-item-text-title">
                            <h4>Designed for you</h4>
                        </div>
                        <div  class="details-item-text-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </div>
                    </div>
                </div>
                <div class="details-item">
                    <div class="details-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>watch</title><path d="M6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12M20,12C20,9.45 18.81,7.19 16.95,5.73L16,0H8L7.05,5.73C5.19,7.19 4,9.45 4,12C4,14.54 5.19,16.81 7.05,18.27L8,24H16L16.95,18.27C18.81,16.81 20,14.54 20,12Z" /></svg>
                    </div>
                    <div class="details-item-text">
                        <div class="details-item-text-title">
                            <h4>Precise timepiece</h4>
                        </div>
                        <div  class="details-item-text-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

    }
}

customElements.define('details-component', Details);