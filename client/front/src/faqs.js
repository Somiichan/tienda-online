class Faqs extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            h2, h3, p {
                font-family: "Poppins", sans-serif;
                text-decoration: none;
                margin: 0;
            }

            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }

            .faqs{
                background-color:hsl(0, 0%, 94%);
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 10vh 10%;
            }
            
            .faqs-title{
                text-align: center;
                position: relative;
            }
            
            .faqs-title h2{
                color: hsl(208, 13%, 23%);
                text-transform: uppercase;
                font-weight: 600;
                font-size: 3rem;
                margin-bottom: 1rem;
            }
            
            .faqs-title p{
                color: hsl(210, 6%, 58%);
                font-weight: 300;
                font-size: 1.3rem;
                letter-spacing: -.2px;
                text-align: center;
                padding: 0 16rem 0;
                margin-bottom: 1rem;
            }
            
            .faqs-title::after{
                background-color: hsl(0, 0%, 72%);
                content: " ";
                display: block;
                height: 0.3rem;
                margin: 0 auto;
                width: 10%;
            }
            
            .faqs-description{
                display: flex;
                flex-direction: column;
                margin: 2rem 0 auto;
            }
            
            .faqs-description-item{
                margin: 1rem 0;
            }
            
            .faqs-question{
                display: flex;
                justify-content: space-between;
                padding: 1rem 0;
                position: relative;
            }
            
            .faqs-question::before {
                content: '+';
                color: hsl(200, 2%, 51%);
                cursor: pointer;
                position: absolute;
                top: 50%;
                right: -5px;
                font-size: 2rem;
                font-weight: 600;
                transform: translateY(-50%);
                transition: transform 0.5s ease-in-out;
            }
            
            .faqs-question.active::before{
                content: '–';
            }
            
            .faqs-question{
                border-bottom: 2px solid hsl(0, 1%, 64%);
            }
            
            .faqs-question h3{
                color:hsl(200, 2%, 51%);
                font-weight: 600;
                font-size: 1.8rem; 
            }
            
            .faqs-question.active h3{
                color: hsl(180, 1%, 30%);
                transition: 0.5s;
            }
            
            .faqs-answer{
                position: relative;
                overflow: hidden;
                max-height: 0;
            }
            
            .faqs-answer.active {
                max-height: 100%;
                @include fadeIn (0s,1s)
            }
            
            .faqs-answer p{
                color: hsl(210, 3%, 59%);
                font-weight: 300;
                font-size: 1.1rem;
                line-height: 150%;
                padding: 1rem 0;
            }
        </style>
        <div class="faqs">
            <div class="faqs-title">
                <h2>Bootstrap 5 FAQ</h2>
                <p>A lot of people don't appreciate the moment until it's passed. I'm not trying my hardest, and I'm not trying to do</p>
            </div>
            <div class="faqs-description">
                <div class="faqs-description-item">
                    <div class="faqs-question">
                        <h3>How do I order?</h3>
                    </div>
                    <div class="faqs-answer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium praesentium molestiae ex recusandae doloremque earum quaerat perferendis ipsum omnis eius in quas ab aut aliquid, porro explicabo deleniti quo nam.
                        Iste recusandae, atque a ab dolor nihil nisi laboriosam. A, voluptatem facilis. Mollitia molestiae totam repellat excepturi voluptatum dolorum corporis.</p>
                    </div>
                </div>
                <div class="faqs-description-item">
                    <div class="faqs-question">
                        <h3>How can i make the payment?</h3>
                    </div>
                    <div class="faqs-answer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium praesentium molestiae ex recusandae doloremque earum quaerat perferendis ipsum omnis eius in quas ab aut aliquid, porro explicabo deleniti quo nam.
                            Iste recusandae, atque a ab dolor nihil nisi laboriosam. A, voluptatem facilis. Mollitia molestiae totam repellat excepturi voluptatum dolorum corporis.</p>
                    </div>
                </div>
                <div class="faqs-description-item">
                    <div class="faqs-question">
                        <h3>How much time does it take to receive the order?</h3>
                    </div>
                    <div class="faqs-answer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium praesentium molestiae ex recusandae doloremque earum quaerat perferendis ipsum omnis eius in quas ab aut aliquid, porro explicabo deleniti quo nam.
                            Iste recusandae, atque a ab dolor nihil nisi laboriosam. A, voluptatem facilis. Mollitia molestiae totam repellat excepturi voluptatum dolorum corporis.</p>
                    </div>
                </div>
                <div class="faqs-description-item">
                    <div class="faqs-question">
                        <h3>Can I resell the products?</h3>
                    </div>
                    <div class="faqs-answer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium praesentium molestiae ex recusandae doloremque earum quaerat perferendis ipsum omnis eius in quas ab aut aliquid, porro explicabo deleniti quo nam.
                            Iste recusandae, atque a ab dolor nihil nisi laboriosam. A, voluptatem facilis. Mollitia molestiae totam repellat excepturi voluptatum dolorum corporis.</p>
                    </div>
                </div>
            </div>
        </div>
        `;

        const acordeonButtons = this.shadow.querySelectorAll('.faqs-question');
        acordeonButtons.forEach((acordeonButton) => {
            acordeonButton.addEventListener('click', () => {
                const faqParent = acordeonButton.closest(".faqs-description-item");
                const faqAnswer = faqParent.querySelector(".faqs-answer");
                acordeonButton.classList.toggle('active');
                faqAnswer.classList.toggle('active');
            });
        });  

    }
}

customElements.define('faqs-component', Faqs);