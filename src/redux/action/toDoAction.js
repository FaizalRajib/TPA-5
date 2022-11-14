export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"

export function addTodo(todo){
    return{
        type: ADD_TODO,
        payload : todo
    }
}

export function deleteTodo(payload){
    return{
        type: DELETE_TODO,
        payload
    }
}