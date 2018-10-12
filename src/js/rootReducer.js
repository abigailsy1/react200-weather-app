import { combineReducers } from 'redux';
import search from './Components/SearchBar/searchBarReducer';

const rootReducer = combineReducers({
    search
});

export default rootReducer;