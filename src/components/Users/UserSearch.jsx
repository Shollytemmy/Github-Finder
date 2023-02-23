import React, { useState, useContext} from 'react'
import GithubContext from '../../context/GitHub/GithubContext'
import AlertContext from '../../context/Alert/AlertContext'

function UserSearch() {

    const [query, setQuery] = useState("")
    const {users, searchUsers, clear} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)

    const handleChange = (e) => {
        setQuery(e.target.value)

    }

    const handleFormSubmit = e =>{
        e.preventDefault()

        if(query === ""){
            setAlert("Pease type something ", "error")
        } else{

            searchUsers(query)


            setQuery("")
        }
    }




  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
     <div>
        <form onSubmit={handleFormSubmit}>
            <div className="form-control">
                <div className="relative">
                    <input
                     type="text"
                     placeholder='search'
                      className="w-full input input-lg bg-gray-200 pr-40 text-black"
                      value={query}
                      onChange={handleChange}
                       />
                       
                    <button type='submit' className="absolute top-0 right-0 w-36 btn btn-lg rounded-l-none">Go</button>
                </div>
            </div>

        </form>

     </div>
     {users.length > 0 && (
        <div>
        <button className="btn btn-ghost btn-lg" onClick={clear}>clear</button>
     </div>
     )}


     
    </div>
  )
}

export default UserSearch
//className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'