

const githubReducer = (state, action) => {
    console.log(state)

    switch(action.type){

        case "GET_USERS": return {
            ...state,  users: action.payload,
            loading: false

        }
        default: return state
    }

}


export default githubReducer