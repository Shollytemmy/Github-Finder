import { createContext, useEffect, useState } from "react";

const GITHUB_uRL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN


const GithubContetext = createContext()


export const GithubProvider = (children) => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)


   

    const getAllUsers = async() => {
        try {
            const response = await fetch(`${GITHUB_uRL}/users`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                }
            })

            const data = await response.json()
            if(response.status === 200){
                setLoading(false)
                setUsers(data)
            }
        } catch (error) {
            console.log(error)
        }
    }






    return <GithubContetext.Provider value={{

        users,
        loading

    }}>
        {children}
    </GithubContetext.Provider>
}

export default GithubContetext