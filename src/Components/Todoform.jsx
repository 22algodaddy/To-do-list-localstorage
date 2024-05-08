import { useState } from "react"
import { UseToDo } from "../Context/"
export default function Todoform(){
    const [todo,Settodo]  = useState("")
    const {addtodo} = UseToDo()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!todo)return
        else{
            addtodo({todo,completed:false})
            Settodo("") //for clean-up
        }
    }
    
    return(
       
                <form  className="flex" onSubmit={handleSubmit}>
                    <input
                        value={todo}
                        type="text"
                        placeholder="Write Todo..."
                        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                        onChange={(e)=>Settodo(e.target.value)}
                    />
                    <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                        Add
                    </button>
                </form>
        
        
    )
}