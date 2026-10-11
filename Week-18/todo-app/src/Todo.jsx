import { useState } from "react"

export default function Todo() {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");

    function handleSubmit(ev) {
        ev.preventDefault();
        addTodo();
    }

    function addTodo() {
        setTodo((p) => [...p, input]);
        setInput("");
    }
    
    function deleteTodo(index){
        setTodo((p) => [...p].filter((_,i) => i !== index));
        
    }
    return <>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <div style={{ textAlign: "center" }}>
                <h1>Todo-App</h1>
                <form action="submit">
                    <input type="text" value={input} 
                    style={{ padding: 5, marginBottom: 10, marginRight: 5 }} 
                    placeholder="Enter a new todo.."
                    onChange={e => setInput(e.target.value)} />
                    <button style={{ padding: 5 }} onClick={handleSubmit}>Add Todo</button>
                </form>
                <div>
                    {todo.length == 0 ? (
                        <p>No todo added yet...</p>
                    ) :
                    <div>
                        {todo.map((t, index) => {
                            return <>
                            <div style={{height: "10", border: "solid", borderWidth: 1, borderColor: "black", padding: 5, marginTop: 5, marginRight:5}}>
                                {t}
                             <button style={{padding:4,marginLeft:5}}
                              >
                                Edit Todo
                            </button>
                             <button style={{padding:4,marginLeft:5}}
                             onClick={()=>deleteTodo(index)}>
                               Delete
                            </button>
                            
                            </div>
                            </>
                        })}
                    </div>}
                </div>
            </div>
        </div>
    </>
}