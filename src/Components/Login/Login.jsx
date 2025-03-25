import './Login.css';
import { useState } from 'react';
import { login } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        login(username, email);
        navigate('/search');
    }

    return (
        <>
            <h1> Login </h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Name'onChange={(e) => setUsername(e.target.value)}></input>
                <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
                <button>Login</button>
            </form>
        </>
    );
}

export default Login;