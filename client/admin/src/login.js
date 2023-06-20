class Login extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
        .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            margin-top: 5rem;
        }
        
        .login-box {
            width: 20%;
            height: 50%;
            padding: 2rem;
            background-color: hsla(206, 100%, 50%, 1);
            border-radius: 10px;
            box-shadow: 0 0 5px hsl(0, 0%, 100%);
            color: hsl(0, 0%, 100%);
        }
        
        h2 {
            font-family: 'Poppins', sans-serif;
            text-align: center;
            margin-bottom: 2.5rem;
            font-size: 2.5rem;
            font-weight: 600;
            text-shadow: 0 0 5px hsl(0,0%,79.2%); 
        }
        
        .form-group {
            width: 100%;
            margin-bottom: 1rem;
        }
        
        label {
            display: block;
            font-weight: 300;
        }
        
        input[type="text"],
        input[type="password"] {
            display: flex;
            flex-direction: column;
            width: 88%;
            padding: 15px;
            border-radius: 1em;
            border: 2px solid hsl(0,0%,32.5%);
        }
        
        button {
            display: block;
            width: 100%;
            min-height: 50px;
            margin-top: 40px;
            background-color: hsla(206, 100%, 30%, 1);
            color: hsl(0, 0%, 100%);
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            border: none;
            border-radius: 1em;
            cursor: pointer;
            box-shadow: 0 0 5px hsl(0, 0%, 100%); 
        }
        
        button:hover {
            color: rgb(223, 223, 223);
            box-shadow: 0 0 5px hsl(0, 0%, 100%); 
        }
        </style>
        <div class="login-container">
            <div class="login-box">
                <h2>Login</h2>
                <form id="loginForm">
                    <div class="form-group">
                        <input type="text" id="email" name="email" placeholder="EMAIL">
                    </div>
                    <div class="form-group">
                        <input type="password" id="password" name="password" placeholder="PASSWORD">
                    </div>
                    <button type="submit" id="submitButton">Submit</button>
                </form>
            </div>
        </div>
        `;

        const submitForm = this.shadow.querySelector('#submitButton');
        const loginForm = this.shadow.querySelector('#loginForm');

        submitForm.addEventListener('click', async (event) => {
        event.preventDefault();

        const formData = new FormData(loginForm);
        const url = 'http://localhost:8080/api/auth/users/signin';

        fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
            })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                sessionStorage.setItem("accessToken", data.accessToken);
            })
            .catch((error) => {
            console.error('Error:', error);
            });

            loginForm.reset();
        });
    }
}

customElements.define('login-component', Login);