import React from 'react'
import Todoitem from './Todoitem'
import Todolist from './Todolist'
import { useState } from 'react'
import Todoinput from './Todoinput'
import { v4 as uuidv4 } from 'uuid';
import styles from './input.module.css'
import Todocompleted from './Todocompleted'
import Todocompitem from './Todocompitem'
import { Button } from '@chakra-ui/react'



const Todo = () => {
   
    const [todos, setTodo] = useState([])
    const [comp, setComp] = useState([])
    const [showres, setShowres] = useState(false)
    
    const addTodo=(newtodo)=>{
        setTodo([...todos,{
            
            id: uuidv4(),
            value: newtodo,
        },
    ])
        console.log(todos);
    }
    
    const handleCompleted = (completed)=>{
        console.log(comp)
        setComp([...comp,{
            
            id: uuidv4(),
            value: completed,
        },
    ])
    }

    const deleteTodo=(value)=>{
        
        setTodo(todos.filter((ele)=>ele.id !== value))
    }
    const deleteTodocomp=(value)=>{
        
        setComp(comp.filter((ele)=>ele.id !== value))
    }
  return (
    <div >
       <div className={styles.container}>
        <Todoinput addTodo={addTodo} />
        <Todolist>
            {todos.map((ele)=>{
              return <Todoitem id={ele.id} key={ele.id} value={ele.value} deleteTodo={deleteTodo} handleCompleted={handleCompleted}  />
        })}
        </Todolist>
        
         
    </div>

        <Button mt='10' onClick={()=>{
            setShowres(!showres)
            
        }} >{ showres ? "Hide Completed To-do's" : "Show Completed To-do's"}</Button>
    {showres ? <div className={styles.completed}>
        <Todocompleted>
            {comp.map((ele)=>{
                return <Todocompitem id={ele.id} key={ele.id} value={ele.value} deleteTodocomp={deleteTodocomp}/>
            })}

            
        </Todocompleted>
    </div> : null }
    
    </div>
  )
}

export default Todo