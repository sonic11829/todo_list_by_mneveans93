import ToDoItem from '../ToDoItem/ToDoItem'
import { useState, useEffect } from 'react'

export default function ToDoList(props) {
    const [toDoArray, setToDoArray] = useState([])
    const [completeArray, setCompleteArray] = useState([])
    useEffect(() => {
        // generate to-do and completed arrays
        const tempToDoArray = []
        const tempCompleteArray = []
        props.toDos.forEach((item) => {
          if (item.completed === false) {
            tempToDoArray.push(item)
          } else {tempCompleteArray.push(item)}
        })
        setToDoArray([...tempToDoArray])
        setCompleteArray([...tempCompleteArray])
      }, [props.toDos])
    
    return (
        <>
            <h2>To-Do Items</h2>
            {toDoArray.length ? (
                <ul>
                    {toDoArray.map((el) => {
                        return (
                            <ToDoItem buttonFn={props.updateToDo} key={el._id} id={el._id} title={el.title} buttonText="COMPLETE"/>
                        )
                    })}
                </ul>
            ) : ''}
            <h2>Completed Items</h2>
            {completeArray.length ? (
                <ul>
                    {completeArray.map((el) => {
                        return (
                            <ToDoItem buttonFn={props.deleteToDo} key={el._id} id={el._id} title={el.title} buttonText="REMOVE"/>
                        )
                    })}
                </ul>
            ) : ''}
        </>
    )
}