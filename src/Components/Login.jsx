import './Login.css';
import { useState } from 'react';

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const login = () => {

        
    }

    return (
        <>
            <h1> Login </h1>

            <form onSubmit={login}>
                <input type='text' placeholder='Name'></input>
                <input type='email' placeholder='Email'></input>
                <button>Login</button>
            </form>
        </>
    );
}

export default Login;