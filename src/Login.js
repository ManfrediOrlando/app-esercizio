import React from "react";

export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: "",
    }
    handleImputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === "checkbox" ? checked : value,
        })
    }

    handleResetState = () => {
        this.setState({
            username: "",
            password: "",
            remember: false,
        })
    }

    render() {

        let backgroundButton = {
            backgroundColor: this.state.password.length < 8 ? 'red'
                                                            : 'green'
        }

        return (
            <div>
                <h1>My form</h1>

                <div>
                    <button onClick={this.handleResetState}>Reset</button>
                </div>

                <div>
                <input placeholder= "username" name="username" value= {this.state.username} onChange={this.handleImputChange}/>
                <input placeholder= "password" name="password" type="password" value={this.state.password} onChange={this.handleImputChange}/>
                <input placeholder= "remember" name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleImputChange} />
                <div>
                    <button style={backgroundButton} onClick={this.handleResetState}>Submit</button>
                </div>
                </div>


            </div>
        )
    }
}