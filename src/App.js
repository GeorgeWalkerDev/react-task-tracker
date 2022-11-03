import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks'
import Form from './components/Form'

function App() {

  const [tasks, setTasks] = useState([])

const [displayForm, setDisplayForm] = useState(false)

//Delete tasks

  const onDelete = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter(task => task.id !== id))
  }

  // const onDelete = (id) => {
  //   setTasks(tasks.filter(task => task.id !== id))
  // }

  const toggleReminder = async(id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      } ,
      body: JSON.stringify(updTask)
    })
    const data = await res.json()
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])

  //Fetch tasks
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:8000/tasks')
    const data = await response.json()
    return data
  }

  //Fetch single task
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:8000/tasks/${id}`)
    const data = await response.json()
    return data
  }

  //Add task
  const saveTask = async (task) => {
    const res = await fetch('http://localhost:8000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
  }

  // const saveTask = (task) => {
  //   const id = Math.floor(Math.random() * 10000) + 1
  //   const newTask = {id, ...task}
  //   setTasks([...tasks, newTask])
  // }

  const toggleForm = () => {
    setDisplayForm(!displayForm)
  }

  return (
    <main className="container my-4 mx-auto p-4 border border-primary rounded">
      <Header toggleForm={toggleForm} displayForm={displayForm}/>
      <Form saveTask={saveTask} displayForm={displayForm}/>
      <Tasks tasks={tasks} onDelete={onDelete} toggleReminder={toggleReminder} />
    </main>
  );
}

export default App;
