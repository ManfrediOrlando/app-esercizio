import React from "react";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { LoginForm } from "./LoginForm";
import { Counter } from "./Counter";


export function App(){  
        return(
                <div>
                    <Routes>
                        <Route path="/" element={<Welcome name="Manfredi"/>}/>
                        <Route path="/login" element={<LoginForm/>}/>
                        <Route path="/counter" element={<Counter/>}/>
                    </Routes>
                </div>
        )
}