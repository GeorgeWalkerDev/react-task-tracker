
export const Button = ({ style, text, toggleForm }) => {
  return (
    <button style={style} className='btn btn-success' onClick={toggleForm}>{text}</button>
  )
}

Button.defaultProps = {
    text: 'Add Task'
}

export default Button