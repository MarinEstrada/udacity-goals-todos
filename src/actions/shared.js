// shared actions file
import API from 'goals-todos-api'

// add variables for listeneres, this avoids posibility of typos
// export variables that they can be 'listened to' in reducers folder
export const RECEIVE_DATA = 'RECEIVE_DATA'

//action creator

function receiveData(todos, goals){
    return{
        type: RECEIVE_DATA,
        todos,
        goals,
    }
}

//asynchronus action creators
//Because asynchronus (will be used in other files)
//need to export

export function handleInitialData(){
    return (dispatch) => {
        //Promise.all() waits until all promises are completed
        return Promise.all([
            API.fetchTodos(),
            API.fetchGoals(),
        ]).then(([ todos, goals ]) => {
            dispatch(receiveData(todos, goals))
        })

    }
}

