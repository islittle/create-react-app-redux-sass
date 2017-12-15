import * as types from '../constants/ActionTypes.js'
const initialState = {
    channels: {
        cinemaCount: 5900,
        dramaCount: 260,
    },
}
export default function receiveChannels(state = initialState, action) {
    switch (action.type) {
    case types.RECEIVE_CHANNELS:
        {
            return Object.assign({}, state, {
                channels: action.channels,
            })
        }
    default:
        return state
    }
}
