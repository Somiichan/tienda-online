(()=>{var n={468:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            .admin-panel{\n                display: flex;\n                flex-direction: column;\n            }\n            \n            .panel-filter {\n                background-color: white;\n                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);\n                display: flex;\n                justify-content: center;\n            }\n            \n            .panel-filter svg {\n                width: 2rem;\n                padding: 0.5rem;\n                fill: hsl(216, 94%, 67%);\n                cursor: pointer;\n            }\n        </style>\n        <div class="panel-filter">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>\n        </div>\n        '}}customElements.define("filter-component",n)},434:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            *{\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n\n            button {\n                width: 100%;\n                height: 100%;\n                cursor: pointer;\n                background-color: transparent;\n                border: none;\n            }\n\n            button:hover svg {\n                transform: scale(110%);\n            }\n\n            svg {\n                width: 2.5rem;\n                cursor: pointer;\n            }\n\n            label, input {\n                font-family: "Poppins", sans-serif;\n            }\n\n            .form-section {\n                width: 100%;\n                display: flex;\n                flex-direction: column;\n                gap: 2rem;\n            }\n            \n            .form-section .form-selector {\n                width: 100%;\n                height: 5vh;\n                background-color: white;\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n            }\n            \n            .form-selector .selector {\n                display: flex;\n                height: 100%;\n            }\n            \n            .selector div {\n                height: 100%;\n                width: 100%;\n                padding: 0 1rem;\n            }\n            \n            .selector div p {\n                color: hsl(208, 13%, 25%);\n                font-family: "Poppins", sans-serif;\n                margin: 0;\n                font-size: 1rem;\n                font-weight: 600;\n            }\n            \n            .selector div.active {\n                background-color: rgba(109,183,243,255);\n            }\n            \n            .selector div.active p {\n                color: white;\n            }\n            \n            .form-selector .options {\n                height: 100%;\n                display: flex;\n                gap: 1rem;\n                align-items: center;\n                margin-right: 10px;\n            }\n            \n            .options div {\n                height: 2.5rem;\n                width: 2.5rem;\n                display: flex;\n            }\n            \n            .options div button {\n                width: 100%;\n                height: 100%;\n            }\n            \n            .options div svg {\n                fill: rgba(109,183,243,255);\n            }\n            \n            .profile-form {\n                display: none;\n            }\n            \n            .profile-form.active {\n                display: grid;\n                grid-template-columns: 1fr 1fr;\n                width: 100%;\n                gap: 1rem;\n            }\n            \n            form div {\n                display: flex;\n                flex-direction: column;\n                gap: 0.5rem;\n            }\n            \n            form div label {\n                color: white;\n                font-size: 25px;\n                font-weight: 500;\n                margin-bottom: 1rem;\n            }\n            \n            form div input {\n                width: 100%;\n                background-color: rgba(113,139,224,255);\n                font-size: 20px;\n                color: black;\n                border: none;\n                border-bottom: 1px solid white;\n                padding: 0.2rem;\n                padding-left: 1rem;\n            }\n\n            input[type="text"] {\n                border: none;\n                border-bottom: 1px solid white;\n                background-color:  hsl(216, 94%, 67%);\n                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);\n                width: 100%;\n                height: 2.5rem;\n                outline: none;\n            }  \n        </style>\n        \n        <section class="form-section">\n            <div class="form-selector">\n                <div class="selector">\n                    <div class="active" data-form="principal">\n                        <button>\n                            <p>Principal</p>\n                        </button>\n                    </div>\n                    <div data-form="image">\n                        <button>\n                            <p>Imágenes</p>\n                        </button>\n                    </div>\n                </div>\n                <div class="options">\n                    <div>\n                        <button type="button" id="resetButton">\n                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>                        </button>\n                    </div>\n                    <div>\n                        <button type="submit" id="submitButton">\n                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class="form-container">\n                <form id="form">\n                    <div class="profile-form active" data-form="principal" id="form-principal">\n                            <div>\n                                <label>Nombre</label>\n                                <input name="name" type="text"></input>\n                            </div>\n                            <div>\n                                <label>Email</label>\n                                <input name="email" type="text"></input>\n                            </div>\n                            <div>\n                                <label>Contraseña</label>\n                                <input name="password" type="text"></input>\n                            </div>\n                            <div>\n                                <label>Confirme contraseña</label>\n                                <input name="passwordConfirmed" type="text"></input>\n                            </div>\n                    </div>\n                    <div class="profile-form" data-form="image">\n                        <div class="input-image">\n                            <label>Seleccione una imagen</label>\n                            \n                        </div>\n                    </div>\n                </form>\n            </div>\n        </section>\n        ';const n=this.shadow.querySelector(".form-container").querySelectorAll(".profile-form"),e=this.shadow.querySelector("#form"),t=this.shadow.querySelector("#resetButton"),o=this.shadow.querySelector("#submitButton"),s=this.shadow.querySelector(".selector").querySelectorAll("div");t.addEventListener("click",(()=>{e.reset()})),s.forEach((e=>{const t=e.dataset.form,o=new CustomEvent("show-form",{detail:t});e.addEventListener("click",(()=>{document.dispatchEvent(o);for(let n=0;n<s.length;n++)s[n].classList.remove("active");e.classList.add("active"),n.forEach((n=>{n.dataset.form==t?n.classList.add("active"):n.classList.remove("active")}))}))})),o.addEventListener("click",(()=>{const n=Object.fromEntries(new FormData(e));n.password===n.passwordConfirmed?(delete n.passwordConfirmed,fetch("http://localhost:8080/api/admin/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json())).then((n=>{const e=new CustomEvent("refresh-table");document.dispatchEvent(e)})).catch((n=>console.error(n)))):console.log("No se pudo realizar la petición ya que las contraseñas no coinciden"),e.reset()}))}}customElements.define("form-component",n)},18:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            h1 {\n                color: hsl(0, 0%, 100%);\n                font-family: "Poppins", sans-serif;\n                font-size: 2.5rem;\n                font-weight: 600;\n                margin: 0;\n                text-decoration: none;\n            }\n\n            .panel-header {\n                display: flex;\n                justify-content:space-between;\n                align-items: center;\n                margin-top: 2rem;\n            }\n\n            .header-logo {\n                cursor: pointer;\n            }\n        </style>\n        <div class="header-logo">\n            <h1>Detectib</h1>\n        </div>\n        '}}customElements.define("logo-component",n)},83:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            svg {\n                width: 2.5rem;\n                fill:hsl(0, 0%, 100%);\n            }\n\n            h1 {\n                color: hsl(0, 0%, 100%);\n                font-family: "Poppins", sans-serif;\n                font-size: 2.5rem;\n                font-weight: 600;\n                margin: 0;\n                text-decoration: none;\n            }\n\n            .panel-header {\n                display: flex;\n                justify-content:space-between;\n                align-items: center;\n                margin-top: 2rem;\n            }\n\n            .hamburger-button {\n                cursor: pointer;\n            }\n\n            .hamburger-button.active {\n                background-color: hsl(0, 0%, 100%);\n                height: 100vh;\n                position: fixed;\n                left: 0;\n                opacity: 0;\n                top: 0;\n                transition: all 0.2s ease-in-out;\n                width: 100%;\n                z-index: -1;\n            }\n        </style>\n        <div class="hamburger-button">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>\n        </div>\n        '}}customElements.define("menu-component",n)},982:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){document.addEventListener("open-modal",(n=>{this.shadow.querySelector(".modal").classList.toggle("active")}))}render(){this.shadow.innerHTML='\n        <style>\n            .modal{\n                background-color: hsla(0, 0%, 100%, 0.541);\n                height: 100vh;\n                position: fixed;\n                left: 0;\n                opacity: 0;\n                top: 0;\n                transition: all 0.2s ease-in-out;\n                width: 100%;\n                z-index: -1;\n            }\n            \n            .modal.active{\n                opacity: 1;\n                z-index: 2000;\n            }\n            \n            .message-box{\n                position: absolute;\n                height: 15vh;\n                width: 25%;\n                top: 30%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                box-shadow: 0 0 62px hsla(0, 0%, 0%, 0.3);\n                align-items: center;\n                background-color: hsl(0, 0%, 100%);\n                border: 2px solid hsl(34, 91%, 68%);\n            }\n            \n            .message-box h5{\n                position: relative;\n                text-align: center;\n                margin-top: 2rem;\n                font-size: 1rem;\n                font-family: "Poppins", sans-serif;\n                font-weight: 500;\n                \n            }\n            \n            .buttons {\n                display: flex;\n                justify-content: center;\n                gap: 2rem;\n                margin-top: 2rem;\n            }\n            \n            .buttons button {\n                padding: 0.5rem 2rem;\n                border: none;\n                border-radius: 5px;\n                cursor: pointer;\n                font-size: 1rem;\n                font-family: "Poppins", sans-serif;\n            }\n            \n            .buttons button.yes {\n                background-color: hsl(134, 61%, 41%);\n                color: hsl(0, 0%, 100%);\n            }\n            \n            .buttons button.no {\n                background-color: hsl(354, 70%, 54%);\n                color: hsl(0, 0%, 100%);\n            }\n            \n            .close-button {\n                position: absolute;\n                top: 10px;\n                right: 10px;\n                cursor: pointer;\n            }\n            \n            .close-button svg {\n                fill: hsl(0, 0%, 40%);\n                width: 1.5rem;\n                height: 1.5rem;\n            }\n            \n            .close-button:hover svg {\n                fill: hsl(0, 0%, 0%);\n            } \n        </style>\n        <div class="modal">\n            <div class="message-box">\n                <h5>¿Seguro que quieres eliminar los datos?</h5>\n                <div class="buttons">\n                    <button type="button" class="yes">Sí</button>\n                    <button type="button" class="no">No</button>\n                </div>\n                <div class="close-button modal-button">\n                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>\n                </div>\n            </div>\n        </div>\n        ';const n=this.shadow.querySelector(".modal");this.shadow.querySelectorAll(".modal-button").forEach((e=>{e.addEventListener("click",(()=>{n.classList.toggle("active")}))}))}}customElements.define("modal-component",n)},700:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.data=[]}static get observedAttributes(){return["url"]}async connectedCallback(){document.addEventListener("refresh-table",(async()=>{await this.loadData(),await this.render()}))}async attributeChangedCallback(n,e,t){await this.loadData(),await this.render()}loadData=async()=>{try{const n=await fetch("http://127.0.0.1:8080/api/admin/users");this.data=await n.json()}catch(n){console.log(n)}};render(){this.shadow.innerHTML='\n        <style>\n            li {\n                font-family: "Poppins", sans-serif;\n                margin-bottom: 2px;\n            }\n\n            ul {\n                list-style: none;\n                padding-left: 0;\n            }\n            \n            .table{\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n                gap: 2rem;\n            }\n            \n            .table-element{\n                background-color:hsl(216, 94%, 67%);\n                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);\n            }\n            \n            .table-buttons{\n                display: flex;\n                justify-content: flex-end;\n                background-color: hsl(204, 85%, 69%);\n            }\n            \n            .table-buttons svg{\n                width: 2.5rem;\n                fill: white;\n                cursor: pointer;\n            }\n\n            .table-buttons svg:hover{\n                transform: scale(110%);\n            }\n            \n            .table-info{\n                padding: 0 1rem;\n            }\n            \n            .table-info ul li{\n                color: white;\n                font-size: 1rem;\n            }\n        </style>\n        <div class="table"></div>\n        ';const n=this.shadow.querySelector(".table");this.data.rows.forEach((e=>{let t=document.createElement("div");t.classList.add("table-element"),n.appendChild(t);let o=document.createElement("div");o.classList.add("table-buttons"),t.appendChild(o);let s=document.createElement("div");s.classList.add("edit-button"),s.dataset.id=e.id,o.appendChild(s),s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>';let i=document.createElement("div");i.classList.add("delete-button"),i.dataset.id=e.id,o.appendChild(i),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>';let a=document.createElement("div");a.classList.add("table-info"),t.appendChild(a);let r=document.createElement("ul");a.appendChild(r);for(const[n,t]of Object.entries(e))if("id"!==n){const e=document.createElement("li");e.textContent=`${n}: ${t}`,r.appendChild(e)}})),this.shadow.querySelectorAll(".delete-button").forEach((n=>{n.addEventListener("click",(()=>{const e=n.dataset.id;console.log(e),document.dispatchEvent(new CustomEvent("open-modal",{detail:{registroId:e}}))}))}))}}customElements.define("table-component",n)},397:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            h1 {\n                color: hsl(0, 0%, 100%);\n                font-family: "Poppins", sans-serif;\n                font-size: 2.5rem;\n                font-weight: 600;\n                margin: 0;\n            }\n\n            .panel-header {\n                display: flex;\n                justify-content:space-between;\n                align-items: center;\n                margin-top: 2rem; \n            }\n\n            .header-title {\n                cursor: pointer;\n            }\n        </style>\n        <div class="header-title">\n            <h1>Clientes</h1>\n        </div>\n        '}}customElements.define("title-component",n)}},e={};function t(o){var s=e[o];if(void 0!==s)return s.exports;var i=e[o]={exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{"use strict";t(18),t(397),t(83),t(468),t(700),t(434),t(982)})()})();