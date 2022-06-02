import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        return <div>
                  <p>Welcome, {this.props.name || "Mortale"}!</p>
                  {/* <p>Your age is {this.props.age}</p>  */}
                  <Age age = "30"/>
               </div>

    }
}  