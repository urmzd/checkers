import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Game from './components/game'
import rootReducer from './reducers'
import './index.css'

const store = configureStore({
    reducer: rootReducer,
})

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Game />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
