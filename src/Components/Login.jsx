import './Login.css';
import { useState } from 'react';

const Login = () => {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const login = async (e) => {

        e.preventDefault();

        const url = 'https://frontend-take-home-service.fetch.com/auth/login';

        try {
                const res = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: 'include',
                    body: JSON.stringify({name: userName, email: userEmail})
                });
                
                if (!res.ok){
                    throw new Error(res.status);
                }

                const json = await res.json();
                console.log(json);

        } catch (error){
            console.log(error.message);
        }
    }

    return (
        <>
            <h1> Fetch </h1>

            <form onSubmit={login}>
                <input type='text' placeholder='Name'onChange={(e) => setUserName(e.target.value)}></input>
                <input type='email' placeholder='Email' onChange={(e) => setUserEmail(e.target.value)}></input>
                <button>Login</button>
            </form>
        </>
    );
}

export default Login;