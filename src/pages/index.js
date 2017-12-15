import React from 'react'

import ReactDom from 'react-dom'
// minimizing bundle size of react-router
import { Router, Route, useRouterHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { createHistory } from 'history'
// import {cache} from '../utils'
import objectAssign from 'object-assign'
import registerServiceWorker from './registerServiceWorker'
import configureStore from '../app/store/configureStore'
import asyncComponent from './AsyncComponent.js'
import './index.scss'
const Home = asyncComponent(() => import(/* webpackChunkName: "home" */"./home"));
const Center = asyncComponent(() => import(/* webpackChunkName: "center" */"./center"));
const OrderList = asyncComponent(() => import(/* webpackChunkName: "orderList" */"./orderList"));


Object.assign = objectAssign

const routes = (history) => (
    <Router history={history}>
        <Route path="/" component={Home} />
        <Route path="/center" component={Center} />
        <Route path="/orderlist" component={OrderList} />
        <Route path="*" component={Home} />
    </Router>
)

const store = configureStore()
const appHistory = useRouterHistory(createHistory)()
const history = syncHistoryWithStore(appHistory, store)

ReactDom.render(
    <Provider store={store}>
        { routes(history) }
    </Provider>, document.getElementById('root')
)
registerServiceWorker()

