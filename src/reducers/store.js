import { combineReducers, createStore, applyMiddleware} from 'redux';
import { getRandomUsersReducer } from './getRandomUsersReducer';
import thunk from 'redux-thunk';

const reducer=combineReducers({
    randomUsers: getRandomUsersReducer('https://randomuser.me/api/?results=10')
});
const store = createStore(reducer,applyMiddleware(thunk));
export default store; 