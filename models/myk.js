const mongoose = require('mongoose')
const schemaTik = mongoose.Schema

const mykSchema = new schemaTik({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
    
}, { timestamps: true}
)

module.exports = mongoose.model('MYK', mykSchema)