class ImageModal extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    connectedCallback() {
        document.addEventListener('openImageModal', () => {
            this.shadow.querySelector('.modal').classList.toggle('active');
        });
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .modal{
                background-color: hsla(0, 0%, 100%, 0.541);
                height: 100vh;
                position: fixed;
                left: 0;
                opacity: 0;
                top: 0;
                transition: all 0.2s ease-in-out;
                width: 100%;
                z-index: -1;
            }
            
            .modal.active{
                opacity: 1;
                z-index: 2000;
            }
            
            .image-box{
                position: absolute;
                height: 90%;
                width: 90%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                box-shadow: 0 0 62px hsla(0, 0%, 0%, 0.3);
                align-items: center;
                background-color: hsl(0, 0%, 100%);
                border: 2px solid hsl(216, 94%, 67%);
            }

            .close-button {
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
            }
            
            .close-button svg {
                fill: hsl(0, 0%, 40%);
                width: 1.5rem;
                height: 1.5rem;
            }
            
            .close-button:hover svg {
                fill: hsl(0, 0%, 0%);
            } 
        </style>
        <div class="modal">
            <div class="image-box">
                <tabs-component></tabs-component>
                <div class="close-button modal-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                </div>
            </div>
        </div>
        `;

        const modalButtons = this.shadow.querySelectorAll('.modal-button');
        const modal = this.shadow.querySelector('.modal');

        modalButtons.forEach((modalButton) => {
            modalButton.addEventListener('click', () => {
                modal.classList.toggle('active');
            });
        });
    }
}

customElements.define('image-modal-component', ImageModal);