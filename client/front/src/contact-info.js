class ContactInfo extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            h2, h3, h4, h5, p {
                font-family: "Poppins", sans-serif;
                text-decoration: none;
                margin: 0;
            }

            button, [type=submit] {
                --webkit-appearance: button;
            }

            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }

            .contact-flipbox-front{
                background-color: hsl(0, 0%, 100%);
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
                height: 100%;
                gap: 3rem;
                padding: 2rem;
                position: relative;
                backface-visibility: hidden;
                transform: perspective(1000px) rotateY(0deg);
                transition: 1s;
            }
            
            .contact-flipbox.active .contact-flipbox-front{
                transform: perspective(1000px) rotateY(180deg);
            }
            
            .contact-flipbox-title{
                font-weight: 300;
                font-size: 2rem;
            }
            
            .contact-flipbox-title h2{
                color: hsl(208, 13%, 25%);
                font-size: 2rem;
                font-weight: 600;
                text-align: center;
                text-transform: uppercase;
            }
            
            .contact-flipbox-item{
                display: flex;
                align-items: flex-start;
                gap: 1rem;
            }
            
            .contact-flipbox-item-icon{
                align-items: left;
            }
            
            .contact-flipbox-item-icon svg{
                color:hsl(207, 5%, 56%);
                height: 1rem;
                width: 1rem;
            }
            
            .contact-flipbox-item-description p{
                color: hsl(0, 0%, 50%);
            }
            
            .contact-flipbox-front-button{
                width: 100%;
                height: 4rem;
            }
            .contact-flipbox-front-button button{
                background: hsl(209, 100%, 50%);
                color: hsl(0, 0%, 100%);
                border: none;
                font-family: "Poppins", sans-serif;
                font-weight: 600;
                font-size: 2rem;
                padding: 1rem 0;
                text-transform: uppercase;
                width: 100%;
                cursor: pointer;
                line-height: 1.15;
                overflow: visible;
                margin: 0;
                
            }
            
            .contact-flipbox-front-button button:hover{
                background-color: hsl(0, 0%, 20%);
            }
        </style>
        <div class="contact-flipbox-front">
            <div class="contact-flipbox-title">
                <h2>Get in touch</h2>
            </div>
            <div class="contact-flipbox-item">
                <div class="contact-flipbox-item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
                </div>
                <div class="contact-flipbox-item-description">
                    <p>523 Sylvan Ave, 5th Floor<br>
                    Mountain View, CA 94041USA</p>
                </div>
            </div>
            <div class="contact-flipbox-item">
                <div class="contact-flipbox-item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
                </div>
                <div class="contact-flipbox-item-description">
                    <p>+1(234)56789 +1 987 654 3210</p>
                </div>
            </div>
            <div class="contact-flipbox-item">
                <div class="contact-flipbox-item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
                </div>
                <div class="contact-flipbox-item-description">
                    <p>support@watchland.com</p>
                </div>
            </div>
            <div class="contact-flipbox-front-button">
                <button class="flip-button">Contact us</button>
            </div>
        </div>
        `;

    }
}

customElements.define('contact-info-component', ContactInfo);