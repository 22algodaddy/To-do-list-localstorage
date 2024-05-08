import { useState, useEffect } from 'react'
import { ToDoProvider } from './Context/'
import { Todoform, Todolist } from './Components'
function App() {
  
  const [todos,Settodos]=useState([])
  const addtodo = (todo) => {
    Settodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      Settodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  const updatetodo=(id,todo)=>{
    Settodos((prev)=>prev.map((eachtodo)=>(eachtodo.id===id?eachtodo={id,todo}:eachtodo)))
  }
  const deletetodo=(id)=>{
    Settodos((prev)=>prev.filter((eachtodo)=>(eachtodo.id!==id)));
  }

  const toggleTodo=(id)=>{
    Settodos((prev)=>
                      prev.map((eachtodo)=>
                                            (eachtodo.id===id
                                              ?
                                              {...eachtodo,completed:!eachtodo.completed}
                                              :
                                              eachtodo)))
  }
  return (
    <ToDoProvider value={{todos,addtodo,updatetodo,deletetodo,toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Todoform/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((eachtodo)=>(
                          <div key={eachtodo.id}
                          className='w-full'>
                            <Todolist todo={eachtodo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </ToDoProvider>
    
  )
}

export default App
