import Advert from '../../models/advert'
export default (req, res, next) => {
    Advert.find((err, docs) => {
        if (err) {
            return next(err)
        }
        res.json({
            err_code: 0,
            result: docs
        })
    })
}