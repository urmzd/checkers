import { combineReducers } from 'redux'
import boardReducer from '../features/board'
import sourceReducer from '../features/source'
import destinationReducer from '../features/destination'
import turnReducer from '../features/turn'

export default combineReducers({
    board: boardReducer,
    source: sourceReducer,
    destination: destinationReducer,
    turn: turnReducer,
})
