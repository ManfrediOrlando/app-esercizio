import { useGithubUsers } from "./useGithubUsers"

export function GithubUsers(){
    const {users, error, isLoading} = useGithubUsers()
    return (
           <div>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>an error has occurred</h3>}
            {users &&
                <ul>
                    {users.map((user) => (
                        <li key={user.login}>{user.login}</li>

                    ))}
                </ul>
            }

           </div> 
    ) 
}