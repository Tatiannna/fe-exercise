
const RECEIVE_BREEDS = '/breeds/RECEIVE_BREEDS';
const REMOVE_BREEDS = '/breeds/REMOVE_BREEDS';

const receiveBreeds = (breeds) => {
    return {
        type: RECEIVE_BREEDS,
        breeds
    }
}

const removeBreeds = () => {
    return ({
        type: REMOVE_BREEDS
    })
}

const getBreeds = async () => async dispatch => {

    const url = 'https://frontend-take-home-service.fetch.com/dogs/breeds';

    try {
        const res = await fetch(url, {
            method: "GET", 
            credentials: 'include'
        });
        
        if (!res.ok){
            console.log("res not ok");
            throw new Error(res.status);
        }
        const json = await res.json();
        console.log(json);

    } catch (error){
        console.log(error.message);
    }
}

const deleteBreeds = async () => async dispatch => {

    const url = 'https://frontend-take-home-service.fetch.com/dogs/breeds';

    try {
        const res = await fetch(url, {
            method: "GET", 
            credentials: 'include'
        });
        
        if (!res.ok){
            console.log("res not ok");
            throw new Error(res.status);
        }
        const json = await res.json();
        console.log(json);

    } catch (error){
        console.log(error.message);
    }
}


const breedReducer = (state = {}. action) => {
    let newState = {...state};

    switch(action.type){
        case RECEIVE_BREEDS:
            return action.breeds;
        case REMOVE_BREEDS:
            return {};
        default:
            return state;
    }
}   

export default breedReducer;