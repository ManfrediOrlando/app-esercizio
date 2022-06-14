import React from "react";
import { HookCounter } from "./HookCounter";
import { LoginForm } from "./LoginForm";


export class App extends React.Component{
    render(){
        return(
                <div>
                    <LoginForm/>
                    <HookCounter initialValue={0}/>
                </div>
        )
    }
}