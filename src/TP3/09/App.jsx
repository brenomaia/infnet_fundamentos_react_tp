import { Component } from "react";
import TodoList from "./components/TodoList"

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {name: "fritar ovo", newName: "fritar ovo", completed: false, editable: false}, 
                {name: "ir ao mercado", newName: "ir ao mercado", completed: true, editable: false}
            ],
            newTask: ""
        }
    };

    handleInputChange = (event) => {
        this.setState({ newTask: event.target.value });
    };

    addTask = () => {
        this.setState((currState) => ({
            tasks: [...currState.tasks, {name: currState.newTask, completed: false}],
            newTask: ""
        }));
    };

    onComplete = (index) => {
        console.log(index);
        this.setState((state) => {
            let updated = [...state.tasks];
            updated[index].completed = true;
            
            return { tasks: updated }
        });
    }

    onEditClick = (index) => {
        this.setState((state) => {
            let updated = [...state.tasks]
            updated[index].editable = true;

            return { tasks: updated }
        });
    }

    onEditInputChange = (newName, index) => {
        console.log(newName);
        this.setState((state) => {
            let updated = [...state.tasks]
            updated[index].newName = newName 

            return { tasks: updated }
        });
    }

    onEditConfirm = (index) => {
        console.log(index);
        this.setState((state) => {
            let updated = [...state.tasks]
            updated[index].name = updated[index].newName;
            updated[index].editable = false;

            return { tasks: updated }
        });
    };

    onTaskDelete = (index) => {
        console.log(index);
        this.setState((state) => {
            state.tasks.splice(index, 1);
            return { tasks: state.tasks }
        })
    };

    render() {
        return (
            <div>
                < TodoList 
                tasks={this.state.tasks} 
                newTask={this.state.newTask}
                handleInputChange={this.handleInputChange}
                addTask={this.addTask}
                onComplete={this.onComplete}
                onTaskDelete={this.onTaskDelete}
                onEditClick={this.onEditClick}
                onEditChange={this.onEditInputChange}
                onEditConfirm={this.onEditConfirm}
                />
            </div>
        )
    }
}

export default App;