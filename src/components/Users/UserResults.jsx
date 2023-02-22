import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner'
import UserItem from './UserItem'


function UserResults() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasError, setError] = useState(null)

   



    useEffect(() => {
        getAllUsers()

    }, [])


    const getAllUsers = async() => {
      
      try {
        const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`,{
            headers:{
                Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`

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
        
    if(!loading){

      return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {
        users.map((user) => {
          return <UserItem key={user.id} user={user} />
        })
      }
      
    </div>
  )

    }

    else{
      return <div className='mx-auto w-48'>
      <Spinner />
      </div>
    }
            
        
        
  
}

export default UserResults
