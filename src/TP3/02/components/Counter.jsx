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
    
      render() {
        return (
          <div>
            <p>Contador: {this.state.count}</p>
            <button onClick={this.inc}>Incrementar</button>
          </div>
        );
      }
}

export default Counter;