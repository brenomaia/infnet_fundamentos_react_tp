import { useState } from "react";

const TodoItem = ({ task, key }) => {

    const [completed, setCompleted] = useState(false);

    const taskCompleted = () => {
        setCompleted(true);
    }

    return (
        <li style={{ color: completed ?  "green" : "black"}}>{task} <button style={{ color: completed ?  "green" : "black"}} onClick={taskCompleted}>Concluir</button></li>
    )
}

export default TodoItem;