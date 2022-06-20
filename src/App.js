import React from "react";
import { Routes, Route } from "react-router-dom";
import { GithubUsers } from "./GithubUsers";
import { Welcome } from "./Welcome";


export class App extends React.Component{
    render(){
        return(
                <div>
                    <Routes>
                        <Route path="/" element={<Welcome/>}/>
                        <Route path='users' element={<GithubUsers/>}/>
                    </Routes>
                    
                </div>
        )
    }
}