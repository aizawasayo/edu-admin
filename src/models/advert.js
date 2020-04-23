//引进mongoose第三方模块
import mongoose from 'mongoose';

//创建广告集合规则，设计数据结构和约束
const advertSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true
    },
    start_time: { //开始时间
        type: Date,
        required: true,
    },
    end_time: { //结束时间
        type: Date,
        required: true
    },
    create_time: {
        type: Date,
        default: Date.now
    },
    last_modified: {
        type: Date,
        default: Date.now
    }
})

//创建集合
const Advert = mongoose.model('Advert', advertSchema);

//将广告集合作为模块成员进行导出
export default Advert