import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <>
                <h3>Lista de Tarefas</h3>
                <input onChange={this.props.handleInputChange} value={this.props.newTask}></input> 
                <button onClick={this.props.addTask}>Adicionar</button>
                <ul>
                    {this.props.tasks.map((task, index) => (
                        < TodoItem 
                        task={task}
                        key={index}
                        onComplete={this.props.onComplete}
                        index={index}
                        onTaskDelete={this.props.onTaskDelete}
                        onEditClick={this.props.onEditClick}
                        onEditChange={this.props.onEditChange}
                        onEditConfirm={this.props.onEditConfirm}
                        />
                    ))}
                </ul>
            </>
        );
    }
}

export default TodoList;