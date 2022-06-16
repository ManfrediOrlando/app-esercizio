import { useGithubUser } from "./useGithubUser"

export function GithubUser({username}) {
    const {data, loading, error, onFetchUser} = useGithubUser(username)

    function handleGetUserData(){
        onFetchUser(username)
    }



    return  <div>
                <button onClick={handleGetUserData} >Load user data</button>
                {loading && <h1>Loading...</h1>}
                {error && <h1>There has been an error</h1>}
                {data && <h1>The name is: {data.name}</h1>}
                {data && <h1>number of repository: {data.public_repos}</h1>}
                {data && <h1>He has {data.followers} followers</h1>}
            </div>
}