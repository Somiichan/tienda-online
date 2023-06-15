class Examen extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
      this.data = [];
      this.currentPage = 1;
      this.totalPages = null;
    }
  
    static get observedAttributes() {
      return ['url'];
    }
  
    async connectedCallback() {
        await this.loadData();
        await this.render();
    }
  
    async attributeChangedCallback(name, oldValue, newValue) {
      await this.loadData();
      await this.render();
    }
  
    loadData = async () => {
      try {
        let response = await fetch(`http://localhost:8080/api/tpv/productos/relations`);
        let data = await response.json();
        this.data = data.rows;
        this.currentPage = data.meta.currentPage;
        this.totalPages = data.meta.pages;
        console.log('Data:', data); // Log the retrieved data
      } catch (error) {
        console.log('Error:', error);
      }
    }
  
    loadFirstPage = async () => {
      this.currentPage = 1;
      await this.loadData();
      await this.render();
    };
  
    loadPrevPage = async () => {
      if (this.currentPage > 1) {
        this.currentPage = Number(this.currentPage) - 1;
  
        await this.loadData();
        await this.render();
      }
    };
  
    loadNextPage = async () => {
      if (this.currentPage < this.totalPages) {
        this.currentPage = Number(this.currentPage) + 1;
        await this.loadData();
        await this.render();
      }
    };
  
    loadLastPage = async () => {
      this.currentPage = this.totalPages;
      console.log('Current Page:', this.currentPage);
      await this.loadData();
      await this.render();
    };

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
                cursor: pointer;
            }
            
            .page button:hover {
                color: hsl(208, 13%, 25%);
            }
            
            .nextPageButton.inactive,
            .prevPageButton.inactive,
            .firstPageButton.inactive,
            .lastPageButton.inactive {
                opacity: 50%;
                cursor: default;
                pointer-events: none;
            }
            
            .nextPageButton.inactive:hover,
            .prevPageButton.inactive:hover,
            .firstPageButton.inactive:hover,
            .lastPageButton.inactive:hover {
                transform: none;
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


        let table = this.shadow.querySelector('.table');
        table.innerHTML = '';


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


            let properties = {
                nombre: 'nombre',
                'CategoriaProducto.nombre': 'Categoría',
                'PrecioProducto.precio_base': 'Precio Base',
                'PrecioProducto.PrecioIva.tipo': 'Tipo de IVA'
            };
          
            for (let [propertyPath, label] of Object.entries(properties)) {
                let propertyValue = getPropertyByPath(element, propertyPath);
                if (propertyValue) {
                  let li = document.createElement('li');
                  li.textContent = `${label}: ${propertyValue}`;
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

        let firstPageButton = this.shadow.querySelector('.firstPageButton');
        firstPageButton.addEventListener('click', () => this.loadFirstPage());

        let prevPageButton = this.shadow.querySelector('#prevPageButton');
        prevPageButton.addEventListener('click', () => this.loadPrevPage());

        let nextPageButton = this.shadow.querySelector('#nextPageButton');
        nextPageButton.addEventListener('click', () => this.loadNextPage());

        let lastPageButton = this.shadow.querySelector('.lastPageButton');
        lastPageButton.addEventListener('click', () => this.loadLastPage());

        if (this.currentPage == 1) {
            firstPageButton.classList.add('inactive');
            prevPageButton.classList.add('inactive');
        } else {
            firstPageButton.classList.remove('inactive');
            prevPageButton.classList.remove('inactive');
        }

        if (this.currentPage == this.totalPages || this.totalPages === 0) {
            nextPageButton.classList.add('inactive');
            lastPageButton.classList.add('inactive');
        } else {
            nextPageButton.classList.remove('inactive');
            lastPageButton.classList.remove('inactive');
        }

        function getPropertyByPath(obj, path) {
            let properties = path.split('.');
            let value = obj;
            for (let property of properties) {
              value = value[property];
              if (!value) {
                break;
              }
            }
            return value;
        }

    }
    
}

customElements.define('examen-component', Examen);