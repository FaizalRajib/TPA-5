import { ADD_TODO, DELETE_TODO } from "../action/toDoAction"


const initialState = {
    data:[]
}

function toDoReducer(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            return{
                data: [...state.data, action.payload]
            };
        case DELETE_TODO:
            const todosFilter = state.data.findIndex(
                (item) => item === action.payload
            )
            const dataFilter = state.data.splice(todosFilter, 1)
            return{
                data: [...state.data]
            }
        default: 
            return state
    }
}

export default toDoReducer

