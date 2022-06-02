import React from "react";

export class Welcome extends React.Component {
    render() {
        return ( 
            <div>
                {this.props.age && <p>Your age is {this.props.age}</p>}
            </div>
        )
    }
}  