import { useEffect, useState } from "react"
import {Link} from "react-router-dom";

export function GithubUser({username}) {
    const [data, setData] = useState("")

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())

        .then(json => {setData(json)})}, [username])

    return  <div>
        {data && <h1>The name is: {data.name}</h1>}
        {data && <h1>number of repository: {data.public_repos}</h1>}
        {data && <h1>He has {data.followers} followers</h1>}
        <Link to="/">Back</Link>

            </div>
}




