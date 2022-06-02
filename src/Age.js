import React from "react";

export class Age extends React.Component {
    render() {
        return ( 
            <div>
                {this.props.age
                ? <p>He is {this.props.age} years old</p>
                : <p></p>}
            </div>
        )
    }
}  