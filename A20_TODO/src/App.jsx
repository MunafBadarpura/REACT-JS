import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
   
    if(todo.length > 1) {
      setTodos([...todos, {id:uuidv4(), todo, isCompleted: false}]);
      setTodo("");
    }
  }

  const handleEdit = (id) => {
    const copy = todos.find(item => id === item.id);
    setTodo(copy.todo);

    // filter todos
    const copyDelete = todos.filter(item => item.id != id);
    setTodos(copyDelete);
  }

  const handleDelete = (id) => {
    const copy = todos.filter(item => item.id != id);
    setTodos(copy);
  }

  const handleChanges = (event) => {
    setTodo(event.target.value);  
  }

  const handleCheckbox = (id) => {
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  return (
    <>
      <Navbar/>

      <div className='container rounded-xl bg-violet-100 my-5 p-5 mx-auto min-h-[80vh] max-w-[95%]'>

          <div className="add-todo my-5 w-[100%]">
                <h2 className='text-lg font-bold my-2'>Add a todo</h2>
                <div className='flex w-[80%]'>
                <input onChange={handleChanges} value={todo} className='w-[70%] p-2 rounded-md border border-black' type="text"/>
                <button onClick={handleAdd} className='bg-violet-700 hover:bg-violet-900  text-white p-3 py-1 mx-6 rounded-lg'>Add</button>
              </div>
          </div>

          <h2 className='text-lg font-bold'>Your todos</h2>
  
          <div className="todos w-[100%]">
            {todos.length === 0 && <div className='my-5 opacity-0.4'>No Todos</div> }
            {todos.map(item => {

              return <div key={item.id} className="todo flex justify-between">
              <div className='flex gap-5'>
                <input onChange={() => handleCheckbox(item.id)} type="checkbox" />
                <div className={item.isCompleted? "line-through" : ""}>
                  <div className='my-2'>
                    {item.todo}
                  </div>
              </div>

              </div>
              <div className="buttons">
                  <button onClick={() => handleEdit(item.id)} className='bg-violet-700 hover:bg-violet-900  text-white p-3 py-1 mx-2 rounded-lg'>Edit</button>
                  <button onClick={() => handleDelete(item.id)} className='bg-violet-700 hover:bg-violet-900  text-white p-3 py-1 mx-2 rounded-lg'>Delete</button>
              </div>
            </div>

            })}
          </div>

      </div>
    </>
  )
}

export default App
