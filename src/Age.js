import React from "react";
import { Welcome } from "./Welcome";

export class Age extends React.Component {
    render() {
        return ( 
            <div>
                {<Welcome name = "John" age = {30}/>}
            </div>
        )
    }
}  