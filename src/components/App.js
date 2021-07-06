//App component

import React from 'react'
import {connect} from 'react-redux'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import {
    handleInitialData,
} from '../actions/shared'

class App extends React.Component {
    componentDidMount(){
        const {dispatch} = this.props

        dispatch(handleInitialData())

    }
    render(){

        if(this.props.loading === true){
            return <h3>Loading...</h3>
        }

        return(
            <div>
                <ConnectedTodos />
                <ConnectedGoals />
            </div>
        )
    }
}

//Connect invocation for component
//Is Context.Consumer abstraction
//and is passed in current state of the store
//Note how not creating Connect variable, instead we
//just export as the default variable of connect because
//there is only one connect invocation in this file
export default connect((state) => ({
    loading: state.loading
}))(App)//app is the component we need to render

