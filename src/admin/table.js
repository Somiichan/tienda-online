class Table extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            li {
                font-family: "Poppins", sans-serif;
                margin-bottom: 2px;
            }

            ul {
                list-style: none;
                padding-left: 0;
            }
            
            .contact-list{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 2rem;
            }
            
            .user-contact{
                background-color:hsl(216, 94%, 67%);
                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
            }
            
            .contact-edit{
                display: flex;
                justify-content: flex-end;
                background-color: hsl(204, 85%, 69%);
            }
            
            .contact-edit svg{
                width: 2.5rem;
                fill: white;
                cursor: pointer;
            }
            
            .contact-info{
                padding: 0 1rem;
            }
            
            .contact-info ul li{
                color: white;
                font-size: 1rem;
            }
        </style>
        <div class="contact-list">
            <div class="user-contact">
                <div class="contact-edit">
                    <div class="edit-pencil"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg></div>
                    <div class="edit-delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg></div>
                </div>
                <div class="contact-info">
                    <ul>
                        <li>Email: superlopez@gmail.com</li>
                        <li>Nombre: CARLOS</li>
                        <li>Apellidos: LÓPEZ VIDAL</li>
                    </ul>
                </div>
            </div>
            <div class="user-contact">
                <div class="contact-edit">
                    <div class="edit-pencil"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg></div>
                    <div class="edit-delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg></div>
                </div>
                <div class="contact-info">
                    <ul>
                        <li>Email: cupichan_93@hotmail.com</li>
                        <li>Nombre: MARTA MARÍA</li>
                        <li>Apellidos: PÉREZ PEÑA</li>
                    </ul>
                </div>
            </div>
            <div class="user-contact">
                <div class="contact-edit">
                    <div class="edit-pencil"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg></div>
                    <div class="edit-delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg></div>
                </div>
                <div class="contact-info">
                    <ul>
                        <li>Email: champujabon@hotmail.com</li>
                        <li>Nombre: SOPHIE</li>
                        <li>Apellidos: VÁZQUEZ TERSIGNI</li>
                    </ul>
                </div>
            </div>
            <div class="user-contact">
                <div class="contact-edit">
                    <div class="edit-pencil"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg></div>
                    <div class="edit-delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg></div>
                </div>
                <div class="contact-info">
                    <ul>
                        <li>Email: correudenjoan@gmail.com</li>
                        <li>Nombre: JOAN</li>
                        <li>Apellidos: MARIMÓN MIR</li>
                    </ul>
                </div>
            </div>
        </div>
        `;

    }
}

customElements.define('table-component', Table);