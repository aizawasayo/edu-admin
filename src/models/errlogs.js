//引进mongoose第三方模块
const mongoose = require('mongoose');

//创建用户集合规则，设计数据结构和约束
const errlogSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    },
    stack: { //错误堆栈
        type: String,
        required: true
    },
    time: { //发生时间:
        type: Date,
        default: Date.now
    }
})

//创建集合
const Errlog = mongoose.model('Errlog', errlogSchema);

//测试代码
// errlog.create({
//         errlogname: 'itheima',
//         email: '102827990@qq.com',
//         password: '123456',
//         role: 'admin',
//         state: 0
//     })
//     .then(() => console.log('用户创建成功'))
//     .catch(() => console.log('用户创建失败'))

//将用户集合作为模块成员进行导出
module.exports = {
    Errlog, //相当于 Errlog: Errlog，键值相等的情况
};