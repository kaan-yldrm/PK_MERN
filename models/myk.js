const mongoose = require('mongoose')
const schemaTik = mongoose.Schema

const mykSchema = new schemaTik({
    title: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true
    }
    
}, { timestamps: true}
)

module.exports = mongoose.model('MYK', mykSchema)