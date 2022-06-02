import React from "react";

export class Welcome extends React.Component {
    render() {
        return ( 
            <div>
                {this.props.age >= 18
                ? <p>He is {this.props.age} years old</p>
                : <p> He is a child</p>}
            </div>
        )
    }
}  