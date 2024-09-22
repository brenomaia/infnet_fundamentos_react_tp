import { Component } from "react";
import DisplayCount from "./DisplayCount";

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
            < DisplayCount count={this.state.count} />
            <button onClick={this.inc}>Incrementar</button>
          </div>
        );
      }
}

export default Counter;