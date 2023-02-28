import { createContext, useReducer } from "react";
import githubReducer from "./githubReducer";

const GITHUB_uRL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN


const GithubContext = createContext()


export const GithubProvider = ({children}) => {

  
    const initialState = {
        users: [], 
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


   

    const searchUsers = async(text) => {

        setLoading()

        
const params =  new URLSearchParams({
    q: text
})
        
        
        try {
            const response = await fetch(`${GITHUB_uRL}/search/users?q=${text}`)

            const {items} = await response.json()
            if(response.status === 200){
                dispatch({
                    type: "GET_USERS",
                    payload: items
                })
            }
        } catch (error) {
            console.log(error)
        }
    }


    const fetchSingleUser = async(login) => {
       try {
         const response = await fetch(`${GITHUB_uRL}/users/${login}`)
         const data = await response.json()
        //  console.log(data)
         if(response.status === 200){
            dispatch({
                type: "FETCH_SINGLE_USER",
                payload: data
            })
         }
        
       } catch (error) {
        
       }
    }


    const getRepos = async(login) => {

        const params = new URLSearchParams({
            sort: "created",
            per_page: 10
        })

        setLoading()
        const response = await fetch(`${GITHUB_uRL}/users/${login}/repos?${params}`)

        const data = await response.json()

        dispatch({
            type: "GET_REPOS",
            payload: data
        })

    
    }

    // SET LOADING FUNC
    
    const setLoading = () => dispatch({type: "SET_LOADING"})

    const clear = () => {
        dispatch({
            type: "CLEAR"
        })
    }


    



        return <GithubContext.Provider value={{

        users: state.users,
        loading: state.loading,
        searchUsers,
        fetchSingleUser,
        getRepos,
        user: state.user,
        repos: state.repos,

        clear

    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext

/**
 *   headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                }
 */