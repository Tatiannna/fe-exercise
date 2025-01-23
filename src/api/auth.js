
export const login = async (username, email) => {

    const url = 'https://frontend-take-home-service.fetch.com/auth/login';

    try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // credentials: 'include',
                body: JSON.stringify({name: username, email: email})
            });
            
            if (!res.ok){
                throw new Error(res.status);
            }

            const json = await res.json();

    } catch (error){
        console.log(error.message);
    }
}

// POST /auth/logout
export const logout = async (e) => {

    e.preventDefault();

    const url = 'https://frontend-take-home-service.fetch.com/auth/logout';

    try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            });
            
            if (!res.ok){
                throw new Error(res.status);
            }

            const json = await res.json();

    } catch (error){
        console.log(error.message);
    }
}