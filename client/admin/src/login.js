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
            width: 25em;
            height: 22em;
            padding: 20px;
            background-color: hsla(206, 100%, 50%, 1);
            border-radius: 1em;
            box-shadow: 0 0 5px #fff;
            color: #ffffff;
        }
        
        h2 {
            font-family: 'Montserrat', sans-serif;
            text-align: center;
            margin-bottom: 45px;
            font-size: 200%;
            text-shadow: 0 0 5px #cacaca; 
        }
        
        p {
            margin-top: 18px;
            font-family: 'Montserrat', sans-serif;
            text-align: center;
            margin-bottom: 45px;
            font-size: 70%;
            text-shadow: 0 0 5px #cacaca; 
        }
        
        .form-group {
            width: 100%;
            margin-bottom: 10px;
            margin-top: 0px;
        }
        
        label {
            display: block;
            font-weight: bold;
        }
        
        input[type="text"],
        input[type="password"] {
            display: flex;
            flex-direction: column;
            width: 90%;
            padding: 15px;
            border-radius: 1em;
            border: 2px solid #535353;
        }
        
        button {
            display: block;
            width: 100%;
            min-height: 50px;
            margin-top: 40px;
            background-color: hsla(206, 100%, 30%, 1);
            color: #fff;
            font-family: 'Montserrat', sans-serif;
            border: none;
            border-radius: 1em;
            cursor: pointer;
            box-shadow: 0 0 5px #fff; 
        }
        
        button:hover {
            color: rgb(223, 223, 223);
            box-shadow: 0 0 5px #fff; 
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
            console.log(response);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error: ' + response.status);
            }
            })
            .then((data) => {
            console.log(data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });

            loginForm.reset();
        });
    }
}

customElements.define('login-component', Login);