import React from "react";

export class Welcome extends React.Component {
    render() {
        return <h2 className="welcome">Hello, {this.props.name}</h2>
    }
}  