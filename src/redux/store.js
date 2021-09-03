import { createStore, applyMiddleware } from 'redux'
// import reducer from './reducers.js'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
// export default createStore(reducer, composeWithDevTools())

let enhancer = composeWithDevTools(applyMiddleware(thunk))
const reduxStore = createStore(reducers, enhancer)

export default reduxStore
