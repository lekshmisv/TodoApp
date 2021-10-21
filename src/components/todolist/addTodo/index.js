import React,{useState} from "react";

const AddTodo=({addTodo})=>{
    const addTodostyle={
        position:"fixed",
        bottom:10,
        display:"block",
        width:"100%"

    }
    const[title,setTitle]=useState()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newTodo={id:Math.random(),title:title,done:false}
        AddTodo(newTodo)
       // alert(title);
        setTitle("")
    }

    return(<div style={addTodostyle}>
        <form onSubmit={handleSubmit}>
            <input type="text"value={title} 
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Enter list"
             style={{width:"70%",padding:10}} required/>
             {/* <button>Submit</button> */}
            <input type="Submit" style={{width:80,
                padding:10}}/>
        </form>
    </div>)
}
export default AddTodo;