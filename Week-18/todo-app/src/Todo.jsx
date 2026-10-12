import React,{ useState } from "react"

export default function Todo() {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);

    function handleSubmit(ev) {
        ev.preventDefault();

        const task = input.trim();
        if(!task) return;

        if(editingIndex !== null){
            updateTodo();
        } else {
            addTodo();
        }
    }

    function addTodo() {
            setTodo((p) => [...p , input.trim()]);
            setInput("");
    }
    
    function deleteTodo(index){
        setTodo((p) => [...p].filter((_,i) => i !== index));
    }
    
    function updateTodo(){
        // setTodo(p=>[...p].map((_,index)=>(
        //     index === editingIndex ? todo[index] = input : todo[index]
        // )))  
        setTodo((prev)=>{
            return prev.map((value,index)=> index === editingIndex ? input.trim() : value)
        })
        setEditingIndex(null);
        setInput("");
    }
    return <>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <div style={{ textAlign: "center" }}>
                <h1>Todo-App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={input} 
                    style={{ padding: 5, marginBottom: 10, marginRight: 5 }} 
                    placeholder="Add a task..."
                    onChange={e => setInput(e.target.value)} />
                    <button style={{ padding: 5 }} type="submit"> {editingIndex !== null ? "Update" : "Add Todo"}</button>
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
                              onClick={()=>{
                                setEditingIndex(index);
                                setInput(todo[index]);
                                }} >
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