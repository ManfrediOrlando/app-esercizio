import React from "react";
import { Routes, Route } from "react-router-dom";
import { GithubUser } from "./GithubUser";
import { GithubUsers } from "./GithubUsers";
import { Welcome } from "./Welcome";


export class App extends React.Component{
    render(){
        return(
                <div>
                    <Routes>
                        <Route path="/" element={<Welcome/>}/>
                        <Route path='users' element={<GithubUsers/>}>
                            <Route path=":username" element={<GithubUser/>}></Route>
                        </Route>
                     </Routes>
                    
                </div>
        )
    }
}