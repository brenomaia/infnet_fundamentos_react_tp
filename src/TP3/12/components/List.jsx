import { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = { items: props.items };
    };


    render() {
        return (
            <div>
                {this.state.items.length == 0 ? (
                    <p>Lista vazia.</p>
                ) : (
                    <div>
                    <h3>Lista</h3>
                    <ul>
                        {this.state.items.map((item) => (
                            <li><p>{item}</p></li>
                        ))}
                    </ul>
                    </div>
                )}
            </div>
        )
    }
}

export default List;