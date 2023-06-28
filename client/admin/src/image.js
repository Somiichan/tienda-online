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
                    justify-content: center;
                    position: relative;
                    width: 5rem;
                    height: 5rem;
                }

                .upload-button {
                    width: 5rem;
                    height: 5rem;
                    position: absolute;
                    left: 0;
                    cursor: pointer;
                    opacity: 1;
                    background-color: hsl(231, 93%, 58%);
                    border: 2px solid white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                }
                
                .plus-symbol {
                    color: white;
                    font-weight: bold;
                    font-size: 2rem;
                    font-weight: 300;
                    line-height: 4rem;
                }

                img.image {
                    border: 2px solid white;
                    position: absolute;
                    display: flex;
                    justify-content: flex-end;
                    right: 50%;
                    bottom: 55%;
                }
            </style>
            
            <div class="image-section">
                <button class="upload-button">
                    <span class="plus-symbol">+</span>
                </button>
            </div>
            <img class="image" src="" alt="" />
            
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
    }

}


customElements.define('image-component', Image);