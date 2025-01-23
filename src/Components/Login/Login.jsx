import './Login.css';
import { useState } from 'react';
import { login } from '../../api/auth';

const Login = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        login(username, email);
    }

    return (
        <>
            <h1> Fetch </h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Name'onChange={(e) => setUsername(e.target.value)}></input>
                <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
                <button>Login</button>
            </form>
        </>
    );
}

export default Login;