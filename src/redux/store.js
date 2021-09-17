import {createStore, combineReducers} from 'redux'
import MainReducer from './MainReducer'



let reducers = combineReducers({
    MainReducer:MainReducer

})

const store = createStore(reducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store;

export default store;
