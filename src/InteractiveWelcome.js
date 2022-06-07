import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = { username: "" }

    handleImputChange = (event) => {
           this.setState({username: event.target.value})
    }

    render() {
        return (
            <div>
                    <input
                        placeholder="name"
                        name="username" 
                        value={this.state.username}
                        onChange={this.handleImputChange}>
                    </input>
                    
                    <Welcome name = {this.state.username}/>
            </div>
        )
    }
}