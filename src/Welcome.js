import React from "react";

export class Welcome extends React.Component {
    render() {
        return ( 
            <div>
                {this.props.age > 18 && this.props.age < 65 && this.props.name === "John"
                ? <p>He is {this.props.name} and He is {this.props.age} years old</p>
                : <p></p>}
            </div>
        )
    }
}  