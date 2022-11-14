import { createStore, combineReducers } from 'redux'
import toDoReducer from '../reducer/toDoReducer'

const allReducer = combineReducers({
    todo: toDoReducer
})

const store = createStore(allReducer)

export default store