import { createContext, useReducer, useState } from "react";
import githubReducer from "./githubReducer";

const GITHUB_uRL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN


const GithubContext = createContext()


export const GithubProvider = ({children}) => {

  
    const initialState = {
        users: [], 
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


   

    const getAllUsers = async() => {

        setLoading()

        
        
        try {
            const response = await fetch(`${GITHUB_uRL}/users`)

            const data = await response.json()
            if(response.status === 200){
                dispatch({
                    type: "GET_USERS",
                    payload: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    // SET LOADING FUNC
    
    const setLoading = () => dispatch({type: "SET_LOADING"})


    



        return <GithubContext.Provider value={{

        users: state.users,
        loading: state.loading,
        getAllUsers,

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