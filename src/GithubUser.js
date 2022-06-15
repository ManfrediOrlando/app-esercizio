import { useEffect, useState } from "react"

export function GithubUser({username}) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            return response.json()
        })
        .then(json => {
            console.log(json)
            setData(json)
        })
    }, [username])

    return  <div>
        {data && <h1>The name is: {data.name}</h1>}
        {data && <h1>number of repository: {data.public_repos}</h1>}
        {data && <h1>He has {data.followers} followers</h1>}

            </div>
}