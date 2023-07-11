import { applyMiddleware, combineReducers, compose } from 'redux'
import { legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'

import { gameReducer } from './game.reducer'




const rootReducer = combineReducers({

    gameModule: gameReducer,
})



export default createStore(
    rootReducer,
    applyMiddleware(thunk)
)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

