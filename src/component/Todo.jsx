import Listtodo from "./Listtodo";
import { useState } from "react"

export default function Todo(){
    const [todo,setTodo]=useState("");
    const [todolist,setTodolist]=useState([]);

    const handlechange=(event)=>{
        setTodo(event.target.value);
        
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
        let templist = todolist;
        templist.push(todo);
        setTodolist(templist);
        console.log(todolist);
        setTodo("");
    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" value={todo} onChange={handlechange}></input>
                <button type="submit">Add Note</button>
            </form>
            {todolist.map((ele)=>(
                    <Listtodo key={ele} name={ele} ></Listtodo>
            ))
                }
        </div>
    )
}