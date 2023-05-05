class Menu extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            ul {
                padding-left: 0;
            }

            li {
                font-family: "Poppins", sans-serif;
            }

            .header-menu ul{
                display: flex;
                gap: 1.5rem;
                list-style: none;
            }
            
            .header-menu ul li a{
                color: hsl(210, 7%, 59%);
                font-size: 1rem;
                font-weight: 500;
                text-transform: uppercase;
                text-decoration: none;
            }

            .header-menu a:hover,
            .header-menu a:active{
                color:hsl(210, 6%, 33%);
            }
        </style>
        <div class="header-menu"> 
            <ul>
                <li>
                    <a href="#header">HOME</a>
                </li>
                <li>
                    <a href="#product">PRODUCT</a>
                </li>
                <li>
                    <a href="#features">FEATURES</a>
                </li>
                <li>
                    <a href="#details">DETAILS</a>
                </li>
                <li>
                    <a href="#team">TEAM</a>
                </li>
                <li>
                    <a href="#contact">CONTACT</a>
                </li>
                <li>
                    <a href="#social">SOCIAL</a>
                </li>
            </ul>
        </div>
        `;

    }
}

customElements.define('menu-component', Menu);