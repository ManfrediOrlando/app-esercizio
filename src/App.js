import React from "react";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { LoginForm } from "./LoginForm";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";



export function App(){  
        return(
                <div>
                    <Routes>
                        <Route path="/" element={<Welcome/>}/>
                        <Route path="/:name" element={<Welcome/>}/>
                        <Route path="/login" element={<LoginForm/>}/>
                        <Route path="/counter" element={<Counter/>}/>

                        <Route path='/users/:username' element={<ShowGithubUser/>}/>

                    </Routes>
                </div>
        )
}