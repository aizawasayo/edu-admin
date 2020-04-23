import Advert from "../../models/advert"
import formidable from "formidable"
import config from "../../config"
import {
  basename
} from 'path'

export default (req, res, next) => {
  // 1. 接收表单提交的数据
  const body = req.body

  const form = formidable({
    multiples: true,
    keepExtensions: true,
    uploadDir: config.uploadDir
  })
  // form.uploadDir = config.uploadDir // 配置 formidable 文件上传接收路径
  // form.keepExtensions = true // 配置保持文件原始的扩展名

  form.parse(req, (err, fields, files) => {
    //res.writeHead(200, { "content-type": "application/json" })
    //res.end(JSON.stringify({ fields, files }, null, 2))
    if (err) {
      next(err);
      return;
    }

    const body = fields
    console.log(body)

    // 2. 操作数据库
    const advert = new Advert({
      title: body.title,
      image: basename(files.image.path),
      link: body.link,
      start_time: body.start_time,
      end_time: body.end_time,
    })

    advert.save((err, result) => {
      if (err) {
        return next(err)
      }
      res.json({
        err_code: 0,
      })
    })
  })

}