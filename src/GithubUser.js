import { useGithubUser } from "./useGithubUser"

export function GithubUser({username}) {
    const {data} = useGithubUser(username)

    return  <div>
        {data && <h1>The name is: {data.name}</h1>}
        {data && <h1>number of repository: {data.public_repos}</h1>}
        {data && <h1>He has {data.followers} followers</h1>}
            </div>
}