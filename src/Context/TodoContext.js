import { useContext, createContext } from "react";
export const ToDoContext = createContext({
    todos:[{
        id:1,
        todo:"test",    
        completed:false
    }],
    addtodo:    (todo)=>{},
    updatetodo: (id,todo)=>{},
    deletetodo: (id)=>{},
    toggleTodo: (id)=>{} 
});
export const UseToDo = ()=>{
    return(useContext(ToDoContext))
}
export const ToDoProvider=ToDoContext.Provider