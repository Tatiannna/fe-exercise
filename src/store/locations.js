
const RECEIVE_LOCATIONS = 'locations/RECEIVE_LOCATIONS';

const receiveLocations = (locations) => {
    return( {
        type: RECEIVE_LOCATIONS,
        locations
    })
}

// POST /getLocations
const getLocations = (zipCodes = []) => async dispatch => {

    let url = 'https://frontend-take-home-service.fetch.com/locations';

    if (zipCodes.length > 100){
        zipCodes = zipCodes.slice(0,100);
    }

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: zipCodes
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



// GET /locations/search
export const searchLocations = (filter = {}) => async dispatch => {

    let url = 'https://frontend-take-home-service.fetch.com/locations/search?';

    // if(filter.states){
    //     for(let i = 0; i < filter.states.length; i++){
    //         url += `states=${filter.ageMax[i]}&`;
    //     }
    // }
    // if(filter.city){
    //     url += `city=${filter.city}&`;
    // }

    try {
        let res = await fetch(url, {
            method: POST,
            credentials: 'include',
            body: {
                city: filter.city,
                states: filter.states,
                geoBoundingBox: {
                    top: filter.geoBoundingBox.top,
                    left: filter.geoBoundingBox.left,
                    bottom: filter.geoBoundingBox.bottom,
                    right: filter.geoBoundingBox.right,
                    bottom_left: filter.geoBoundingBox.bottom_left,
                    top_left: filter.geoBoundingBox.top_left
                },
                size: filter.size,
                from: filter.number
            }
        });
    
        let data = await res.json();
    
        if (res.ok){
            dispatch(receiveDogs);
        }else{
            throw new Error(res.status);
        }
    }catch(error) {
        console.log(error.message);
    }
    
}

const locationReducer = (state = {}, action) => {
    let newState = {...state};

    switch(action.type) {
        case RECEIVE_LOCATIONS:
            return action.locations;
        default:
            return state;
    }
}

export default locationReducer;