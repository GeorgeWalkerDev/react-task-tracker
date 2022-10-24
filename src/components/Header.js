import Button from './Button'

function Header({ toggleForm, displayForm }) {
    return (
        <header className='d-flex justify-content-between'>
            <h1>Task Tracker</h1>
            <Button style={{backgroundColor: `${displayForm ? 'green' : 'black'}`}} text={displayForm ? 'Add Task' : 'Close'} toggleForm={toggleForm}/>
        </header >
    )
}

export default Header