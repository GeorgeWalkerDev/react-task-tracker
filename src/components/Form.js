
import {useState} from 'react'

const Form = ({saveTask, displayForm}) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text){
            alert('Please add task')
            return
        }

        saveTask({text, date, reminder})
        setText('')
        setDate('')
        setReminder(false)
    }

  return (
    <form style={{display: `${displayForm ? 'none' : 'block'}`}} onSubmit={e => onSubmit(e)}>
        <div className="mb-3">
            <label htmlFor="taskText" className="form-label">Task</label>
            <input type="text" className="form-control" id="taskText" placeholder="Enter task" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="taskDate" className="form-label">Day & Time</label>
            <input type="text" className="form-control" placeholder="Enter date" value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" checked={reminder} className="form-check-input" id="reminder" value={reminder} onChange={(e) => setReminder(e.target.checked)}/>
            <label className="form-check-label" htmlFor="reminder">Set Reminder</label>
        </div>
        <div className="d-grid gap-2">
            <button className="btn btn-dark" type="submit">Save Task</button>
        </div> 
    </form>
  )
}

export default Form