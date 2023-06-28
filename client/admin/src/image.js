import { URL } from '../config/config.js'

class Image extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render()
        this.imageSelectionListener();
    }

    imageSelectionListener() {
        document.addEventListener('imageSelected', (event) => {
            console.log(event.detail.image)
            this.imageSelected(event.detail.image)
        });
    }

   
    render() {

        this.shadow.innerHTML =
        `
            <style>
                .image-section {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto;
                    max-width: 100%;
                }

                .upload-button {
                    width: 5rem;
                    height: 5rem;
                    left: 0;
                    cursor: pointer;
                    opacity: 1;
                    background-color: hsl(231, 93%, 58%);
                    border: 2px solid white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                    margin-right: 2rem;
                }
                
                .plus-symbol {
                    color: white;
                    font-weight: bold;
                    font-size: 2rem;
                    font-weight: 300;
                    line-height: 4rem;
                }

                img.image {
                    max-width: 100%;
                    max-height: 100%;
                }
            </style>
            
            <div class="image-section">
                <button class="upload-button">
                    <span class="plus-symbol">+</span>
                </button>
                <img class="image" src="" alt="" />
            </div>
            
        `

        this.renderImage()

    }

    renderImage = () => {
        const uploadButton = this.shadow.querySelector('.image-section .upload-button');
    
        uploadButton.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('openImageModal'));
        });
    };

    imageSelected(imageUrl) {
        const imageElement = this.shadow.querySelector('.image');
        imageElement.setAttribute('src', imageUrl);
        imageElement.style.border = '2px solid white';
    }

}


customElements.define('image-component', Image);