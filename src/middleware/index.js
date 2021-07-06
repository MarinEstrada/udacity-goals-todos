//Index middleware file

import checker from './checker'
import logger from './logger'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'

//handles combining all middleware for store creation
//middleware called in order named
export default applyMiddleware(
    thunk,
    checker,
    logger,
)
