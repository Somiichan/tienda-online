class Table extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.data = [];
    }

    static get observedAttributes () { return ['url'] }

    async connectedCallback() {

        document.addEventListener('refresh-table',  async () => {
            await this.loadData()
            await this.render()
        })
    }
  
    async attributeChangedCallback (name, oldValue, newValue) {
        await this.loadData()
        await this.render()
    }

    loadData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8080/api/admin/users');
            this.data = await response.json();   
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
                gap: 2rem;
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
        </style>
        <div class="table"></div>
        `;

        const table = this.shadow.querySelector('.table');

    
        this.data.rows.forEach(element => {

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
            editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>`
    
    
            let deleteButton = document.createElement("div");
            deleteButton.classList.add("delete-button");
            deleteButton.dataset.id = element.id
            tableButtons.appendChild(deleteButton);
            deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>`
    
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
                const id = deleteButton.dataset.id;
                console.log(id)
                document.dispatchEvent(new CustomEvent('open-modal', {detail: {registroId : id }}));
            });
        });

    }
}

customElements.define('table-component', Table);