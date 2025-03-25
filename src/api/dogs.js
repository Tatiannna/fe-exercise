
// GET /dogs/search
export const searchDogs = async(params) => {

    const url = 'https://frontend-take-home-service.fetch.com/dogs/search';

    try {
        const res = await fetch(url, {credentials: 'include'});
        
        if (!res.ok){
            throw new Error(res.status);
        }
        const json = await res.json();

    } catch (error){
        console.log(error.message);
    }
}


// POST /dogs
const getDog = async() => {

    const url = 'https://frontend-take-home-service.fetch.com/dogs';

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            // body: JSON.stringify({name: username, email: email})
        });
        
        if (!res.ok){
            throw new Error(res.status);
        }
        const json = await res.json();

    } catch (error){
        console.log(error.message);
    }
}


// POST /dogs/match
const matchDog = async() => {

    const url = 'https://frontend-take-home-service.fetch.com/dogs/match';

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            // body: JSON.stringify({name: username, email: email})
        });
        
        if (!res.ok){
            throw new Error(res.status);
        }
        const json = await res.json();

    } catch (error){
        console.log(error.message);
    }
}


// POST /locations
const getLocation = async() => {

    const url = 'https://frontend-take-home-service.fetch.com/dogs/locations';

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            // body: JSON.stringify({name: username, email: email})
        });
        
        if (!res.ok){
            throw new Error(res.status);
        }
        const json = await res.json();

    } catch (error){
        console.log(error.message);
    }


}


// POST /locations/search
const searchLocation = async() => {
    const url = 'https://frontend-take-home-service.fetch.com/dogs/locations/search';

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            // body: JSON.stringify({name: username, email: email})
        });
        
        if (!res.ok){
            throw new Error(res.status);
        }
        const json = await res.json();

    } catch (error){
        console.log(error.message);
    }


}

module.exports = { getBreeds };

