import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {tasks: ["Comprar arroz", "Fritar Carne", "Fazer TPs do Infnet"]};
    }

    render() {
        return (
            <>
                <h3>Lista de Tarefas</h3>
                <ul>
                    {this.state.tasks.map((task, idx) => (
                        < TodoItem task={task} key={idx} />
                    ))}
                </ul>
            </>
        );
    }
}

export default TodoList;