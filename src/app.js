// const express = require('express')
import express from "express"
// import { foo, f } from './config'
// import * as config from './config'
import config from "./config" //这种方式会去找模块中 export default 导出的成员
import nunjucks from "nunjucks"
// import router from './router'
import indexRouter from "./routes/index"
import advertRouter from "./routes/advert"
import errlog from "./middlewares/error-log"

import bodyParser from "./middlewares/body-parser"
import "./models/connect"

const app = express()

// console.log(config)
app.use("/node_modules", express.static(config.node_modules_path))
app.use("/public", express.static(config.public_path))

nunjucks.configure(config.viewPath, {
  autoescape: true,
  express: app,
  noCache: true,
})
// nunjucks.render('index.html', { foo: 'bar' });
// app.set('views', config.viewPath)
// app.set('view engine', 'ejs')

// 挂载解析表单POST请求体中间件
app.use(bodyParser)

//挂载路由容器
app.use(indexRouter)
app.use(advertRouter)

app.use(errlog)

app.listen(3333, () => {
  console.log("server is running at port 3333")
})
