import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    
      inc = () => {
        this.setState((state) => ({
          count: state.count + 1
        }));
      };

      reset = () => {
        this.setState((state) => ({
          count: 0
        }));
      }
    
      render() {
        return (
          <div>
            <p>Contador: {this.state.count}</p>
            <button onClick={this.inc}>Incrementar</button>
            <button onClick={this.reset}>Reset</button>
          </div>
        );
      }
}

export default Counter;