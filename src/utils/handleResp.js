const NULL = Object.create(null)
const SUCCESS = '0000'

export default function (resp, callback, context) {
    if (resp.success && resp.errcode === SUCCESS) {
        typeof callback === 'function' && callback.call(context || NULL)
    } else {
        console.error(`[${resp.errcode}]: ${resp.msg}`)
    }
}
