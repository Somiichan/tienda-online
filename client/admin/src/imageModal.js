import { URL } from '../config/config.js'

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
                height: 80%;
                width: 80%;
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

            * {
                font-family: "Poppins", sans-serif; 
            }

            h3, p {
                font-weight: 500;
                margin: 0;
            }

            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }

            .tabs {
                margin: 6rem;
                display: flex;
                flex-direction: column;
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
                height: 50vh;
                padding: 1rem;
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

            .image-form {
                display: flex;
                flex-direction: column;
                align-items: center; 
                gap: 2rem;
                width: 100%;
                height: 100%; 
                margin-top: 12.5rem;
            }

            .image-form button {
                padding: 0.5rem 0;
                background-color: hsl(206.87deg 84.81% 69.02%);
                border: none;
                font-size: 1rem;
                color: white;
                font-weight: 500;
                width: 50%;
                cursor: pointer;
                max-width: 60%; 
                margin: 0; 
            }

            .file-input {
                display: none;
            }
        </style>
        <div class="modal">
            <div class="image-box">
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
                            <form class="image-form" id="image-form" enctype="multipart/form-data">
                                <input type="file"  class="file-input" multiple="false" name="image"/>
                                <button>Añadir Imagen</button>
                            </form>
                        </div>
                        <div class="content"></div>
                    </div>
                </div>
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

        const fileInput = this.shadow.querySelector('.file-input');
        const addButton = this.shadow.querySelector('button');

        addButton.addEventListener('click', (event) => {
            event.preventDefault();
            fileInput.click();
        });

        fileInput.addEventListener('change', (event) => {
            event.preventDefault();
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            fetch(`${URL}/images`, {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const galleryContent = this.shadow.querySelector('.tab-content .content:last-child');
                
                data.files.forEach(filename => {
                    const imageDiv = document.createElement('div');
                    imageDiv.classList.add('image');
                    
                    const imageElement = document.createElement('img');
                    imageElement.src = `${URL}/images/` + filename;
                    
                    imageDiv.appendChild(imageElement);
                    galleryContent.prepend(imageDiv);
                });
            })
            .catch(error => {
            console.error(error);
            });
        });
    }
}

customElements.define('image-modal-component', ImageModal);