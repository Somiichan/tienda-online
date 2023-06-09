class Table extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.data = [];
    }

    static get observedAttributes () { return ['url'] }

    async connectedCallback() {

        document.addEventListener('refresh-table', async (event) => {
            await this.loadData();
            await this.render();
        });
    }
  
    async attributeChangedCallback (name, oldValue, newValue) {
        await this.loadData()
        await this.render()
    }

    loadData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8080/api/admin/users');
            const data = await response.json();
            this.data = data.rows;   
        } catch (error) {
            console.log(error);
        }
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
            
            .table{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 1.5rem;
            }
            
            .table-element{
                background-color:hsl(216, 94%, 67%);
                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
            }
            
            .table-buttons{
                display: flex;
                justify-content: flex-end;
                background-color: hsl(204, 85%, 69%);
            }
            
            .table-buttons svg{
                width: 2.5rem;
                fill: white;
                cursor: pointer;
            }

            .table-buttons svg:hover{
                transform: scale(110%);
            }
            
            .table-info{
                padding: 0 1rem;
            }
            
            .table-info ul li{
                color: white;
                font-size: 1rem;
            }

            .page {
                margin-top: 1rem;
                display: flex;
                justify-content: space-between;
            }

            .page button {
                color: hsl(211, 12%, 48%);
                background-color: white;
                padding: 5px;
                font-size: 1rem;
                font-weight: 500;
                font-family: "Poppins", sans-serif;
                border: 1px solid hsl(204, 85%, 80%);
                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
            }

            .page button:hover {
                cursor: pointer;
            }

            .nextPageButton.inactive {
                opacity: 50%;
                cursor: default;
            }

            .prevPageButton.inactive {
                opacity: 50%;
                cursor: default;
            }
        </style>
        <div class="table"></div>
        <div class="page">
            <button class="firstPageButton">Primera</button>
            <button id="prevPageButton" class="prevPageButton">Anterior</button>
            <button id="nextPageButton" class="nextPageButton">Siguiente</button>
            <button class="lastPageButton">Última</button>
        </div>

        `;

        const table = this.shadow.querySelector('.table');

    
        this.data.forEach(element => {

            let tableElement = document.createElement("div");
            tableElement.classList.add("table-element");
            table.appendChild(tableElement);
    
            let tableButtons = document.createElement("div");
            tableButtons.classList.add("table-buttons");
            tableElement.appendChild(tableButtons);
    
            let editButton = document.createElement("div");
            editButton.classList.add("edit-button");
            editButton.dataset.id = element.id;
            tableButtons.appendChild(editButton);
            editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>edit-content</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>`
    
    
            let deleteButton = document.createElement("div");
            deleteButton.classList.add("delete-button");
            deleteButton.dataset.id = element.id;
            tableButtons.appendChild(deleteButton);
            deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-content</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>`
    
            let tableInfo = document.createElement("div");
            tableInfo.classList.add("table-info");
            tableElement.appendChild(tableInfo);
    
            let tableInfoUl = document.createElement("ul");
            tableInfo.appendChild(tableInfoUl);

            

            for (const [key, value] of Object.entries(element)) {

                if (key !== "id") {
                    const li = document.createElement("li");
                    li.textContent = `${key}: ${value}`;
                    tableInfoUl.appendChild(li);
                }
            }  
        });

        let deleteButtons = this.shadow.querySelectorAll('.delete-button');

        deleteButtons.forEach(deleteButton => {
            deleteButton.addEventListener('click', () => {
                document.dispatchEvent(new CustomEvent('open-modal', {detail: {id : deleteButton.dataset.id }}));
            });
        });

        let editButtons = this.shadow.querySelectorAll('.edit-button');

        editButtons.forEach(editButton => {
            editButton.addEventListener('click', () => {
                document.dispatchEvent(new CustomEvent('loadData', {detail: {id : editButton.dataset.id }}));
            });
        });

    }
}

customElements.define('table-component', Table);