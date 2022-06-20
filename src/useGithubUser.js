import useSWR from "swr";

export function useGithubUser(username){
    const {data, error, mutate} = useSWR(username !== null ? `https://api.github.com/users/${username}`: null)

    function fetchGithubUser(){
        mutate()
    }

    return {data, error, loading: !data && !error, onFetchUser: fetchGithubUser}
}
