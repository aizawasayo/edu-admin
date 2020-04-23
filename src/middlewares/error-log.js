import {
    Errlog
} from "../models/errlogs"
import fs from 'fs'

export default async (err, req, res, next) => {
    // const error_log = `
    // ====================================
    // 错误名：${err.name}
    // 错误消息：${err.message}
    // 错误堆栈：${err.stack}
    // 错误时间：${new Date()}
    // ====================================\n\n\n`
    await Errlog.create({
        name: err.name,
        message: err.message,
        stack: err.stack,
        time: new Date()
    })
    res.json({
        err_code: 500,
        message: err.message
    })
    // fs.appendFile('./err_log.txt', error_log, err => {
    //     res.writeHead(500, {})
    //     res.end('500 服务器正忙，请稍后重试')
    // })
}