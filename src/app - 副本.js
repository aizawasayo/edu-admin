import express from 'express'
// import config from './config'
// import { foo, num } from './config'
// import * as config from './config'

// 通过 export 导出的成员必须通过解构赋值按需加载
//     或者通过 * as 变脸名 的形式加载所有通过 export 关键字导出的接口成员
// 通过 export default 加载导出的成员必须通过 import 变量名 from '模块标识' 进行加载
// export 和 export default 可以共存

// 这种方式会去找被加载模块中通过 export default 导出的成员
import defaultConfig from './config'
import {
    foo
} from './config'
import * as allConfig from './config'

console.log(`default: ${defaultConfig}, foo: ${foo}, all: ${allConfig}`)

const app = express()

// app.set('views', )

// app.get('/', (req, res) => {

// })

// app.listen(3000, () => {
//   console.log('server is running at port 3000...')
// })