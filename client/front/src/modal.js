class Modal extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    connectedCallback () {
        document.addEventListener('modal', event => {
          this.shadow.querySelector('.modal').classList.add('active')
        })
    
        this.render()
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .modal{
                background-color: hsla(0, 0%, 100%, 0.8);
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
        </style>
        <div class="modal">
            <slot></slot>
        </div>
        `;

    }
}

customElements.define('modal-component', Modal);