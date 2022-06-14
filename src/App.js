import React from "react";
import { Sum } from "./Sum";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    
    render(){

        return(
                <div>
                    <Welcome/>
                    <Sum numbers={[1,2,3,4,5]}/>
                    
                </div>
        )
    }
}

// What happens if the numbers prop of the Sum component is not set? How can you set a default value for this prop?
// non renderizza nulla 