import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import dogReducer from './dogs';
import breedReducer from './breeds';
import locationReducer from './locations';

const rootReducer = combineReducers({
    dogs: dogReducer,
    breeds: breedReducer,
    locations: locationReducer
});
  
const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;