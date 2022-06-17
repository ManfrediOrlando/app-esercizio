import { useState } from "react"
import {Link} from "react-router-dom";

export function LoginForm(){
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false,

    })
    
    function handleInputChange(event){
        const { name, type, value, checked } = event.target

        setData((data) => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value,
            }

        })

    }

    return (
        <div>
            <input onChange={handleInputChange} value={data.username} name="username" />
            <input onChange={handleInputChange} value={data.password} type="password" name="password" />
            <input onChange={handleInputChange} checked={data.remember} type="checkbox" name="remember" />
            <Link to="/">Back</Link>
        </div>
    )
}