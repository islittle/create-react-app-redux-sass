// import cache from 'utils/cache'
import * as types from '../constants/ActionTypes'
// import reqwest from 'reqwest'
import { handleResp } from '../../utils'

export default function fetchChannels() {
    return (dispatch) => {
        // const url = apiURL
        setTimeout(function () {
            var resp = {
                errcode: "0000",
                msg: "成功",
                success: true,
                retval: {
                    citycode: "310000",
                    dramaCount: 260,
                    cinemaCount: 6500,
                },
            }

            handleResp(resp, () => {
                // alert('请求模拟')
                dispatch(receiveChannels(resp.retval))
            })
        },1000)
        // return reqwest(url)
        //     .then(resp => {
        //         handleResp(resp, () => {
        //             alert(0)
        //             dispatch(receiveChannels(resp.retval))
        //         })
        //         return resp
        //     })
    }
}

function receiveChannels(channels) {
    return {
        type: types.RECEIVE_CHANNELS,
        channels,
    }
}
