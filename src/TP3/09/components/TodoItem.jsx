const TodoItem = ({ task, onComplete, index, onTaskDelete, onEditClick, onEditChange, onEditConfirm}) => {

    return (
        <div>
        <li style={{ color: task.completed ?  "green" : "black"}} >
            {task.editable ? (
                <div>
                <input value={task.newName} onChange={(event) => onEditChange(event.target.value, index)}></input>
                <button onClick={() => onEditConfirm(index)}>Confimar</button>
                </div>
            ) : (
                <div>
                    {task.name}
                    <button style={{ color: task.completed ?  "green" : "black"}} onClick={() => onComplete(index)}>Concluir</button>

                    <button style={{ color: "red"}} onClick={() => onTaskDelete(index)}>Excluir</button>

                    <button onClick={() => onEditClick(index)}>Editar</button>
                </div>
            )}
        </li>
        </div>
    )
}

export default TodoItem;