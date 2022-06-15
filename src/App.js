import React from "react";
import { GithubUser } from "./GithubUser";
import { HookCounter } from "./HookCounter";

export class App extends React.Component{
    render(){
        return(
                <div>
                            <HookCounter initialValue={0}/>
                            <GithubUser username="manfrediorlando"/>
                </div>
        )
    }
}