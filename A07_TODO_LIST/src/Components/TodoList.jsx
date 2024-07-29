import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

let line = {
    textDecorationLine: "line-through"
}

function TodoList(){
    let [todos, setTodos] = useState([{ task: "sample" , id:uuidv4() ,isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    function newTask(){
        setTodos((preTodos) => {
           return [...preTodos, {task:newTodo, id:uuidv4()} ]
        });
        setNewTodo("");
    }

    function updateVal(event){
        setNewTodo(event.target.value);
    }

    function deleteTask(id){
        let copy =  todos.filter((todo) => todo.id!= id);
        setTodos((prevTodos) => {
            return prevTodos = copy;
        });
    }

    // function upperAll(){
    //     setTodos(
    //         todos.map((todo) => {
    //             return{
    //                 ...todo,
    //                 task: todo.task.toUpperCase()
    //             }
    //         })
    //     )
    // }

    // function upperOne(id){
    //     setTodos(
    //         todos.map((todo) => {
    //             if(todo.id == id){
    //                 return{
    //                     ...todo,
    //                     task: todo.task.toUpperCase()
    //                 }
    //             }
    //             else return todo;
    //         })
    //     )
    // }

    function doneAll(){
        setTodos(
            todos.map((todo) => {
                return{
                    ...todo,
                    isDone : true
                }
            })
        )
    }

    function doneOne(id){
        setTodos(
            todos.map((todo) => {
                if(todo.id == id){
                    return{
                        ...todo,
                        isDone : true
                    }
                }
                else return todo;
            })
        )
    }

    return(
        <>
            <input value={newTodo} onChange={updateVal} type="text" placeholder="Add Task"/> <br/>
            <button onClick={newTask}>Add Task</button> <br/><br/><br/> <hr />

            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo) => 
                        <li key={todo.id}>
                            {/* <span>  {todo.task} </span> */}
                            {todo.isDone == true ? <span style={line}>  {todo.task} </span> : <span>  {todo.task} </span>}
                            <button onClick={() => deleteTask(todo.id)}>Delete</button>
                            <button onClick={() => doneOne(todo.id)}>Done</button>
                        </li>
                    )
                }
            </ul>

            <br />
            <button onClick={doneAll}>Done All</button>

        </>
    )
}

export default TodoList