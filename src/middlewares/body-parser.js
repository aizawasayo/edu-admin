import queryString from 'querystring'

export default (req, res, next) => {
    //由于表单POST请求可能会携带大量数据，进行提交请求的时候可能会分成多次提交
    // 在Node中处理这种不确定的数据，使用事件的形式处理；
    // 可以通过监听req对象的data事件，然后通过回调用处理函数中的参数chunk拿到每一次的数据
    // 当数据接收完毕之后，会自动触发req的end事件，然后在这个事件的回调中使用接收到的数据即可
    if (req.method.toLowerCase() === 'get' || req.headers["content-type"].startsWith('multipart/form-data')) {
        // 如果是get请求，即没有请求体，不进行后面的处理
        return next()
    }

    //如果是普通表单进行如下处理，如果是有文件上传的则不处理


    let data = ""
    req.on("data", chunk => {
        data += chunk
    })
    req.on("end", () => {
        // 手动给req对象挂载一个body属性，值就是当前表单的请求体对象
        // 在后续的处理中间件中，就可以直接使用req.body了
        // 因为在同一个请求中，流通的都是同一个req和res对象
        req.body = queryString.parse(data)
        next()
    })
}