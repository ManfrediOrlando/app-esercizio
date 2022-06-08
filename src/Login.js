import React from "react";

export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: "",
        disabled: "disabled",
    }
    handleImputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === "checkbox" ? checked : value,
        })

        this.setState({
            disabled: this.state.username === "" && this.state.password === ""  ? "disabled" : ""
        })
    }

    onLogin = () =>{
        console.log(this.state) 

        
    }

    handleResetState = () => {
        this.setState({
            username: "",
            password: "",
            remember: false,
        })
    }

    render() {
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
                <button disabled={this.state.disabled} onClick={this.onLogin}>Login</button>
                </div>


            </div>
        )
    }
}