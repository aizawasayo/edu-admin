import express from 'express'
import index from './index/index'

const router = express.Router()

// router.get('/', (req, res, next) => {
//   res.render("index.html")
// })

router.get('/', index)

export default router