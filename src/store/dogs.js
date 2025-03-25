
const RECEIVE_DOGS = "/dogs/RECEIVE_DOGS";
const RECEIVE_DOG = "/dogs/RECEIVE_DOG";
const REMOVE_DOGS = "/dogs/REMOVE_DOGS";

export const receiveDogs = (dogs) => {
    return {
        type: RECEIVE_DOGS,
        dogs
    }
}

export const receiveDog = (dog) => {
    return {
        type: RECEIVE_DOG,
        dog
    }
}

export const removeDogs = () => {
    return ({
        type: REMOVE_DOGS
    })
}

// GET /dogs/search
export const searchDogs = (filter = {}) => async dispatch => {

    let url = 'https://frontend-take-home-service.fetch.com/dogs/search?';

    if(filter.breeds){
        for(let i = 0; i < filter.breeds.length; i++){
            url += `breeds=${filter.ageMax[i]}&`;
        }
    }
    if(filter.zipCodes){
        for(let i = 0; i < filter.zipCodes.length; i++){
            url += `zipCodes=${filter.ageMax[i]}&`;
        }
    }
    if(filter.ageMin){
        url += `ageMin=${filter.ageMin}&`;
    }
    if(filter.ageMax){
        url += `ageMax=${filter.ageMax}&`;
    }

    // if(filter.size){
    //     url += `size=${filter.size}&`;
    // }
    // if(filter.from){
    //     url+= `from=${filter.from}`;
    // }


    try {
        let res = await fetch(url, {
            credentials: 'include'
        });
    
        let dogData = await res.json();
        let dogIds = dogData.resultIds;

        if (res.ok){
            dispatch(getDogs(dogIds));
        }else{
            throw new Error(res.status);
        }
    }catch(error) {
        console.log(error.message);
    }
}


// POST /dogs
export const getDogs = (ids = []) => async dispatch => {
    
    let url = 'https://frontend-take-home-service.fetch.com/dogs';

    if (ids.length > 100){
        ids = ids.slice(0,100);
    }
    console.log("in post method")
    console.log(ids);
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(ids),
        });
        
        const data = await res.json();

        if (res.ok){
            dispatch(receiveDogs(data));
        }else{
            throw new Error(res.status);
        }

    } catch (error){
        console.log(error.message);
    }
}


// // POST /dogs/match
const matchDog = (ids = []) => async dispatch => {

    let url = 'https://frontend-take-home-service.fetch.com/dogs';

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: ids
        });
        
        const data = await res.json();

        if (res.ok){
            dispatch(receiveDog(data));
        }else{
            throw new Error(res.status);
        }

    } catch (error){
        console.log(error.message);
    }
}


const dogReducer = (state = {}, action) => {
    let newState = {...state};

    switch(action.type) {
        case RECEIVE_DOGS:
            return action.dogs;
        case RECEIVE_DOG:
            newState[action.dog.id] = action.dog;
            return action.dog
        case REMOVE_DOGS:
            return {}
        default:
            return state;
    }
}


export default dogReducer;