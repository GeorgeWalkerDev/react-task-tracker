import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks'
import Form from './components/Form'

function App() {

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Do the washing',
        date: 'Feb 4th at 19:00',
        reminder: false
      },
      {
        id: 2,
        text: 'Food shopping',
        date: 'Mar 17th at 09:00',
        reminder: true
      },
      {
        id: 3,
        text: 'Complete react course',
        date: 'Oct 27th at 15:00',
        reminder: false
      }
    ]
  )

const [displayForm, setDisplayForm] = useState(false)

  const onDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  const saveTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

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
