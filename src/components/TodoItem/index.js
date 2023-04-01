// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoObject, deleteFunc} = props
  const {id, title} = todoObject

  const onDelete = () => {
    deleteFunc(id)
  }

  return (
    <li className="list-item">
      <p>{title}</p>
      <button type="button" className="del-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
