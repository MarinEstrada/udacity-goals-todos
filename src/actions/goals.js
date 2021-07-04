//goals actions file
import API from 'goals-todos-api'

// add variables for listeneres, this avoids posibility of typos
// export variables that they can be 'listened to' in reducers folder
export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

//action creators

function addGoal(goal){
    return{
        type: ADD_GOAL,
        goal,
    }
}

function removeGoal(id){
    return{
        type: REMOVE_GOAL,
        id,
    }
}

//asynchronus action creators
//Because asynchronus (will be used in other files)
//need to export

export function handleAddGoal(name, callback){
    return (dispatch) => {
        return API.saveGoal(name)
            .then((goal) => {
                dispatch(addGoal(goal))
                callback()
            })
            .catch(() =>{
                alert('An error occured! Try again.')
            })

    }
}

export function handleDeleteGoal(goal){
    return(dispatch) => {
        //removes item from UI
        dispatch(removeGoal(goal.id))

        //need to remove goal item from DB
        return API.deleteGoal(goal.id)
        //if failure to delete, add goal back in
            .catch(() => {
                dispatch(addGoal(goal))
                alert('An error occured! Try again.')
            })
    }
}

