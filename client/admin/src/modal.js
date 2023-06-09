class Modal extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    connectedCallback() {
        document.addEventListener('open-modal', event => {
            const modal = this.shadow.querySelector('.modal');
            modal.classList.toggle('active');

            this.id = event.detail.id;
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
            
            .message-box{
                position: absolute;
                height: 15vh;
                width: 25%;
                top: 30%;
                left: 50%;
                transform: translate(-50%, -50%);
                box-shadow: 0 0 62px hsla(0, 0%, 0%, 0.3);
                align-items: center;
                background-color: hsl(0, 0%, 100%);
                border: 2px solid hsl(34, 91%, 68%);
            }
            
            .message-box h5{
                position: relative;
                text-align: center;
                margin-top: 2rem;
                font-size: 1rem;
                font-family: "Poppins", sans-serif;
                font-weight: 500;
                
            }
            
            .buttons {
                display: flex;
                justify-content: center;
                gap: 2rem;
                margin-top: 2rem;
            }
            
            .buttons button {
                padding: 0.5rem 2rem;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1rem;
                font-family: "Poppins", sans-serif;
            }
            
            .buttons button.yes {
                background-color: hsl(134, 61%, 41%);
                color: hsl(0, 0%, 100%);
            }
            
            .buttons button.no {
                background-color: hsl(354, 70%, 54%);
                color: hsl(0, 0%, 100%);
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
            <div class="message-box">
                <h5>¿Seguro que quieres eliminar los datos?</h5>
                <div class="buttons">
                    <button type="button" class="yes">Sí</button>
                    <button type="button" class="no modal-button">No</button>
                </div>
                <div class="close-button modal-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                </div>
            </div>
        </div>
        `;

        const modal = this.shadow.querySelector('.modal');
        const modalButtons = this.shadow.querySelectorAll('.modal-button');
        const deleteButton = this.shadow.querySelector('.yes');

        deleteButton.addEventListener('click', async () => {

            try {
                let response = await fetch(`http://127.0.0.1:8080/api/admin/users/${this.id}`, {
                    method: 'DELETE'
                });

                modal.classList.toggle('active');
                document.dispatchEvent(new CustomEvent('refresh-table'));

            } catch (error) {
                console.log(`Error al eliminar el registro con ID ${id}.`, error);
            }
        });

        modalButtons.forEach((modalButton) => {
            modalButton.addEventListener('click', () => {
                modal.classList.toggle('active');
            });
        });
    }
}

customElements.define('modal-component', Modal);