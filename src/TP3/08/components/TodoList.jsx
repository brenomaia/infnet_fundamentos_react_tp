import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {tasks: [], newTask: ""};
    };

    addTask = (event) => {
        this.setState((currState) => ({
            tasks: [...currState.tasks, currState.newTask],
            newTask: ""
        }));
    };

    handleInputChange = (event) => {
        this.setState({ newTask: event.target.value });
    };

    render() {
        return (
            <>
                <h3>Lista de Tarefas</h3>
                <input onChange={this.handleInputChange}></input> 
                <button onClick={this.addTask}>Adicionar</button>
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