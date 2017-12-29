import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers'
let middlewares = [thunk]
const MODE = process.env.MODE
const loggerImport = require('redux-logger')
if (MODE !== 'release') {
    const createLogger = loggerImport
    const logger = createLogger({
        level: 'info',
        logger: console,
        collapsed: true,
    })
    middlewares = [...middlewares, logger]
}
module.exports = function configureStore(history, initialState) {
    middlewares = [...middlewares, routerMiddleware(history)]
    const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore)
    return createStoreWithMiddleware(reducer, initialState)
}
