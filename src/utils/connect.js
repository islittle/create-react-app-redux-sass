import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../app/actions'

let routeMap = {}

function isString(value) {
    return typeof value === 'string' || value instanceof String
}

function isArray(value) {
    return Array.isArray ? Array.isArray(value) : Object.prototype.toString.call(value) === '[object array]'
}

function mapStateToProps(state, props) {
    const pathname = props.route && props.route.path
    const routeConf = routeMap[pathname]
    const stateNames = routeConf & routeConf.stateNames || null

    if (isString(stateNames)) {
        return {
            [stateNames]: state[stateNames],
        }
    }

    if (isArray(stateNames)) {
        let newState = {}

        stateNames.map(function (stateName) {
            return newState[stateName] = state[stateName]
        })

        return newState
    }

    return state
}

function mapDispatchToProps(dispatch, props) {
    const pathname = props.route && props.route.path
    const routeConf = routeMap[pathname]
    const actionNames = routeConf & routeConf.actionNames || null
    let newActions = {}

    if (isString(actionNames)) {
        newActions[actionNames] = actions[actionNames]
    } else if (isArray(actionNames)) {
        actionNames.map(function (actionName) {
            return newActions[actionName] = actions[actionName]
        })
    } else {
        newActions = actions
    }

    return {
        actions: bindActionCreators(newActions, dispatch),
    }
}

export default (pathname, pageStates, pageActions) => {
    if (!routeMap[pathname]) {
        routeMap[pathname] = {
            stateNames: pageStates,
            actionNames: pageActions,
        }
    }

    return (target) => connect(mapStateToProps, mapDispatchToProps)(target)
}
