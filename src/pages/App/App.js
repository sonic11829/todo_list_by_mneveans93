import { useState, useEffect } from 'react'
import NewEntryField from '../../components/NewEntryField/NewEntryField'
import ToDoList from '../../components/ToDoList/ToDoList'
import handleFetch from '../../utilities/handle-fetch'

export default function App() {
  const [toDos, setToDos] = useState([])
  const [foundToDo, setFoundToDo] = useState(null)
  const [newToDo, setNewToDo] = useState({
    title: '',
    completed: false
  })

  // pull all to-dos array from the database when the app loads
  useEffect(() => {
    getToDos()
  }, [])

  // update the all to-dos array whenever a to-do is created or modified
  useEffect(() => {
    getToDos()
  }, [foundToDo])

  // index
  const getToDos = async() => {
    try {
      setToDos(await handleFetch('/api/todos', 'GET', false, ''))
    } catch (error) {console.error(error)}
  }
  // delete
  const deleteToDo = async(id) => {
    try {
      setFoundToDo(await handleFetch(`/api/todos/${id}`, 'DELETE', false, ''))
    } catch (error) {console.error(error)}
  }
  // update
  const updateToDo = async(id) => {
    try {
      setFoundToDo(await handleFetch(`/api/todos/${id}`, 'PUT', true, {completed: true}))
    } catch (error) {console.error(error)}
  }
  // create
  const createToDo = async() => {
    try {
      setFoundToDo(await handleFetch('/api/todos', 'POST', true, {...newToDo}))
      setNewToDo({
        title: '',
        completed: false
      })
    } catch (error) {console.error(error)}
  }

  const handleChange = (event) => {
    setNewToDo({...newToDo, [event.target.name]: event.target.value})
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <NewEntryField newToDo={newToDo} handleChange={handleChange} handleSubmit={createToDo}/>
      <ToDoList toDos={toDos} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
    </div>
  );
}
