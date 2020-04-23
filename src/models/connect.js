import mongoose from 'mongoose';

mongoose.connect('mongodb://aizawasayo:123456@localhost:27017/edu', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
        console.log('数据库连接成功')
    },
    err => {
        /** handle initial connection error */
    }
);