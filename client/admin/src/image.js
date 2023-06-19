class Image extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render()
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
            </style>
            
            <div class="image-section">
                <button class="upload-button">
                    <span class="plus-symbol">+</span>
                </button>
            </div>
            
        `

        this.renderImage()
    }

    renderImage = () => {
        const uploadButton = this.shadow.querySelector('.upload-button');
    
        uploadButton.addEventListener('click', () => {
            console.log('hola')
            document.dispatchEvent(new CustomEvent('openImageModal'));
        });
    };
}


customElements.define('image-component', Image);