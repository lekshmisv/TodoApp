import React, { useState } from 'react';

import Todo from '../../components/todolist';
import AddTodo from '../../components/todolist/addTodo';
const TodoList=[
    {id:1,title:'Learn React',done:true},
    {id:2,title:'Create a todo application',done:false},

]
   

const TodoContainer = () => {
    const [todos,setTodos]=useState(TodoList)
    const handleAddTodo=(newTodo)=>{
        const newTodoList=[...todos,newTodo]
        setTodos(newTodoList)
    }
    const handleRemoveTodo=(id)=>{
       const newTodoList=todos.filter(todo=>todo.id!==id)
        setTodos(newTodoList)
    }
    const handleCheckboxChange=(id)=>{
       const newTodoList=todos.map(todo=>
        {if(todo.id===id)
    return {...todo,done:!todo.done}
return todo;
})
setTodos(newTodoList)      //return same obj with opp val of done
    }
        return (
        <div style={{ margin: 20 }}>
           <h3 align="center">Todo Application</h3>
           {todos.length>0?todos.map((todo)=><Todo todo={todo}
           removeTodo={handleRemoveTodo} handleChange={handleCheckboxChange}/>)
           :<p align="center">no todo left</p>}
            <AddTodo addTodo={handleAddTodo}/>
        </div>
    )

}
export default TodoContainer;