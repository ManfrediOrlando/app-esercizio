import React from "react";

export class TodoList extends React.Component {
    state = {
        add: "",
        items: ['Morte', 'Pestilenza', 'Carestia', 'Guerra']
    }

    pushItem = (event) =>{
        this.setState({ items: [...this.state.items, this.state.add] })
        
    }

    handleAdd = (event) =>{
        this.setState({
            add: event.target.value, 
        })
    }

    reset = (event) =>{
        this.setState({
            add: " ",
        })
    }

    ResetArray = (event) =>{
        this.setState({
            items: [],
        })
    }

    render() {
        return(
            <div>
                 <ul>
                     {this.state.items.map((item, index) => 

                     <li key={item + index}>{item}</li>)}

                     <input value={this.state.add} type="text" onChange={this.handleAdd} />
                     <button onClick={() => { this.pushItem(); this.reset();}}>send</button>
                     <button onClick={this.ResetArray}>Reset</button>
                 </ul>
            </div>
        )
    }
}