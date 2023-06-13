class Filter extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                list-style: none;
            }

            .filter-section {
                position: relative;
                overflow: hidden;
            }

            .filter-button {
                width: 100%;
                display: flex;
                justify-content: center;
                cursor: pointer;
                background-color: white;
                transition: 0.5s;
            }

            .filter-button.active {
                margin-top: 10rem;
            }
            
            .filter-icon {
                transition: 0.5s
            }

            .filter-icon svg {
                width: 2rem;
                fill: rgba(109,183,243,255);  
            }

            .filter-icon:hover svg {
                transform: scale(110%);
            }

            .filter-form {
                width: 100%;
                position: absolute;
                z-index: -1
            }

            .filter-form.active {
                z-index: 0
            }

            hero {
                color: white;
                font-family: "Poppins", sans-serif;
                font-size: 1.5rem;
                font-weight: 500;
            }

            .filter-form form {
                padding: 1rem 0;
                display: flex;
                justify-content: center;
                gap: 4rem;
            }

            form label {
                color: white;
                font-family: "Poppins", sans-serif;
                font-size: 25px;
                font-weight: 500;
            }

            form input {
                width: 100%;
                font-size: 20px;
                color: black;
                padding: 0.2rem;
                padding-left: 1rem;
            }

            input[type="text"] {
                border: none;
                border-bottom: 1px solid white;
                background-color:  hsl(216, 94%, 67%);
                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
                width: 100%;
                height: 2.5rem;
                outline: none;
            }
        </style>
        
        <section class="filter-section">
            <div class="filter-form">
                <div>
                    <hero>Filtra los registros:</hero>
                </div>
                <form id="filter-form">
                    <div class="campo">
                        <label>Nombre</label>
                        <input name="name" type="text"></input>
                    </div>
                    <div class="campo">
                        <label>Email</label>
                        <input name="email" type="text"></input>
                    </div>
                </form>
            </div>
            <div class="filter-button">
                <div class="filter-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z" /></svg>
                </div>
            </div>
        </section>
        `;

        this.renderFilter()
    }

    renderFilter = () => {
        const filterButton = this.shadow.querySelector(".filter-button")

        filterButton.addEventListener("click", () => {
            const filterForm = this.shadow.querySelector(".filter-form")

            filterButton.classList.toggle("active")

            if(filterForm.classList.contains("active")) {
                    filterForm.classList.remove("active")
            }
            else {
                setTimeout(() => {
                    filterForm.classList.add("active")
                }, 300)
            }
        })

        filterButton.addEventListener("click", () => {
            if(!filterButton.classList.contains("active")) {
                const formFilter = this.shadow.querySelector("#filter-form")
                const formData = Object.fromEntries(new FormData(formFilter))
                const url = `http://localhost:8080/api/admin/users`
                fetch(url, {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                console.log(response)
            }
        })


    }

}

customElements.define('filter-component', Filter);