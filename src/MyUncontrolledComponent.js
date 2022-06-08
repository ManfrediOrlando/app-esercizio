import React, {createRef} from "react";

export class MyUncontrolledComponent extends React.Component {
    _formRef = createRef()

    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })       
    }

    handleFormPrefill = () => {
        this._formRef.current.elements.username.value = "Billy" 
        this._formRef.current.elements.password.value = "Hello1212" 
        this._formRef.current.elements.remember.checked = true


    }
 
    render() {
        return (
            <div>
                <h1>My Uncontrolled form</h1>

                <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                    <input name="username" autoFocus/>
                    <input name="password" type="password"/>
                    <input name="remember" type="checkbox"/>

                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                    <button type="button" onClick={this.handleFormPrefill}>Prefill Form</button>


                </form>


            </div>
        )
    }
}