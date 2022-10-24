import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, toggleReminder}) => {
  return (
    <li onDoubleClick={() => toggleReminder(task.id)} className={`list-group-item ${task.reminder ? 'reminder' : ''}`} style={{cursor: 'pointer'}}>
        <h4 className="d-flex justify-content-between">{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{color: 'red', cursor: 'pointer'}} /></h4>
        <p>{task.date}</p>
    </li>
  )
}

export default Task