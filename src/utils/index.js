import bind from './autobind.js'
import cache from './cache.js'
import connect from './connect.js'
import device from './device.js'
import handleResp from './handleResp.js'
// 基本每个页面都用到的export进来，其他的不需要，打包回导致公共文件变大
export {
    bind,
    cache,
    connect,
    device,
    handleResp,
}
