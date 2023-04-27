class Form extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            h3 {
                color: hsl(208, 13%, 25%);
                font-family: "Poppins", sans-serif;
                margin: 0;
            }

            label, input {
                font-family: "Poppins", sans-serif;
            }

            input {
                font-size: 100%;
                line-height: 1.15;
                margin: 0;
                overflow: visible;
            }
            
            .form-menu{
                display: flex;
                align-items: center;
                background-color: white;
                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
                justify-content: space-between;
            }
            
            .form-menu div{
                height: 3rem;
            }
            
            .form-selector{
                display: flex;
                align-items: center;
            }
            
            .form-selector div{
                display: flex;
                align-items: center;
                padding: 0 1rem;
            }
            
            .principal-tab{
                background-color: hsl(204, 85%, 69%);
                cursor: pointer;
            }
            
            .principal-tab h3{
                color: white;
                text-align: center;
            }
            
            .image-tab{
                cursor: pointer;
            }
            
            .image-tab h3{
                text-align: center;
            }
            
            .form-editor{
                display:flex;
                gap: 0.5rem;
            }
            
            .form-editor div{
                display: flex;
                align-items: center;
            }
            
            .form-editor svg{
                fill:hsl(204, 85%, 69%);
                width: 2.5rem;
                cursor: pointer;
            }
            
            .editor-save{
                padding: 0 0.5rem;
            }
            
            .principal-form{
                display: flex;
                align-items: flex-start;
                justify-content: space-evenly;
                gap: 1rem;
                padding-top: 2rem;
            }
            
            .user-data{
                display:flex;
                flex-direction: column;
                justify-content: space-around;
                gap: 2rem;
            }
            
            .user-pwd{
                display:flex;
                flex-direction: column;
                justify-content: space-around;
                gap: 2rem;
            }
            
            label {
                font-size: 1.5rem;
                font-weight: 500;
                color: white;
                display: block;
                margin-bottom: 1rem;
            }
            
            input[type="text"],
            input[type="password"] {
                border: none;
                border-bottom: 1px solid white;
                background-color:  hsl(216, 94%, 67%);
                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
                width: 25rem;
                height: 2rem;
                outline: none;
            }           
        </style>
        <div class="contact-form">
            <div class="form-menu">
                <div class="form-selector">
                    <div class="principal-tab">
                        <h3>Principal</h3>
                    </div>
                    <div class="image-tab">
                        <h3>Imágenes</h3>
                    </div>
                </div>
                <div class="form-editor">
                    <div class="editor-eraser">
                        <div class="broom-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg></div>
                    </div>
                    <div class="editor-save">
                        <div class="submit-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg></div>
                    </div>
                </div>
            </div>
            <div class="principal-form">
                <div class="user-data">
                    <div class="nombre">
                        <label>Nombre</label>
                        <input type="text" />
                    </div>
                    <div class="email">
                        <label>E-mail</label>
                        <input type="text" />
                    </div>
                </div>
                <div class="user-pwd">
                    <div class="password">
                        <label>Contraseña</label>
                        <input type="password" />
                    </div>
                    <div class="confirm-password">
                        <label>Confirmar Contraseña</label>
                        <input type="password" />
                    </div>
                </div>
            </div>
            <div class="imagenes-form"></div>
        </div>
        `;

    }
}

customElements.define('form-component', Form);