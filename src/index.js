import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Reducers from './reducers'
import {createStore} from 'redux'
import { Provider } from 'react-redux'



const store = createStore(Reducers);

ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>, 
    document.getElementById('root'))