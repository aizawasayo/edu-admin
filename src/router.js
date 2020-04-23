import express from "express"
import mongoose from "mongoose"
import {
  Advert
} from './models/advert'

// 路由容器中组织了网站功能处理路由中间件
const router = express.Router()

mongoose
  .connect("mongodb://aizawasayo:123456@localhost:27017/edu", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("数据库连接成功"))
  .catch((err) => console.log("数据库连接失败", err))
// 将所有的路由中间件挂载给该路由容器
router.get("/", (req, res, next) => {
  // res.end('hello edu')
  // fs.readFile('fake.txt', (err, data) => {
  //   if (err) {
  //     return next(err)
  //   }
  //   res.end('success')
  // })
  res.render("index.html")
})

router.get('/json', (req, res, next) => {
  try {
    JSON.parse('{jsjs')
  } catch (e) {
    next(e)
  }
})

// 新增广告
router.post("/advert/add", (req, res, next) => {
  // 1. 接口客户端提交的数据
  // 2. 操作数据库
  // 3. 发送响应消息
  const data = req.body

  // console.log(data)
  const advert = new Advert({
    title: data.title,
    image: data.image,
    link: data.link,
    start_time: data.start_time,
    end_time: data.end_time,
  })

  advert.save((err, result) => {
    if (err) return next(err)
    res.json({
      'err_code': 0
    })
  })
  // res.end()和 write() 只能接收字符串和二进制数据两种类型
  // 发送响应的数据，本质上都是字符。即便传送的是字符串，在进行发送的时候还是要转成二进制去发送
  res.sendJson = function (obj) {
    res.end(JSON.stringify(obj, null, "  "))
  }
  // 以上就是res.json()的封装

})
// 查询广告列表
router.get('/advert/list', (req, res, next) => {
  Advert.find((err, res) => {
    if (err) return next(err)
    res.json({
      err_code: 0,
      result: res
    })
  })
})

// 根据ID查询特定广告
router.get('/advert/search/:id', (req, res, next) => {
  Advert.findById(req.params.id, (err, result) => {
    if (err) return next(err)
    res.json({
      err_code: 0,
      result: result
    })
  })
})

// 根据ID更新特定广告
router.post('/advert/edit', (req, res, next) => {
  // Advert.findOneAndUpdate(query, { name: 'jason bourne' }, options, callback)
  Advert.findById(req.body._id, (err, advert) => {
    if (err) return next(err)
    const data = req.body
    advert.title = data.title
    advert.image = data.image
    advert.link = data.link
    advert.start_time = data.start_time
    advert.end_time = data.end_time
    advert.last_modified = Date.now()
    advert.save((err, result) => {
      if (err) return next(err)
      res.json({
        err_code: 0,
      })
    })

  })
})

router.get('/advert/remove/:advertId', (req, res, next) => {
  Advert.remove({
    _id: req.params.advertId
  }, err => {
    if (err) {
      return next(err)
    }
    res.json({
      err_code: 0
    })
  })
})

export default router