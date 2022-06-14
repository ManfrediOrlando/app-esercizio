import React from "react";
import { HookCounter } from "./HookCounter";


export class App extends React.Component{
    render(){
        return(
                <div>
                    <HookCounter initialValue={0}/>
                </div>
        )
    }
}