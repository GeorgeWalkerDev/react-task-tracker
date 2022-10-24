import Task from './Task'

const Tasks = ({ tasks, onDelete, toggleReminder, saveTask }) => {

    return (
        <ul className="list-group mt-4">
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} toggleReminder={toggleReminder}/>
            ))} 
        </ul>
    )
}

export default Tasks