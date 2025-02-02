import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import dogReducer from './dogs';
import breedReducer from './breeds';
import locationReducer from './locations';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    dogs: dogReducer,
    breeds: breedReducer,
    locations: locationReducer
});
  
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;