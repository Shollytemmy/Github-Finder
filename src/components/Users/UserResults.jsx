
import React, { useContext } from 'react'
import GithubContext from '../../context/GitHub/GithubContext'
import Spinner from '../Spinner'
import UserItem from './UserItem'


function UserResults() {
  
 
  const {users, loading} = useContext(GithubContext)


   



    


    
        
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
