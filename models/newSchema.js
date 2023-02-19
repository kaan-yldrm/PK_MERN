const mongoose = require('mongoose')
const dbSchemaTik = mongoose.Schema

const dbSchema = new dbSchemaTik({
    date: {
        type: Date,
        required: true
    }, // always should be TODAY
    targetId: {
        type: String,
        required: true
    }, // Teklif ID'si
    targetFirm: {
        type: String,
        required: true
    }, // Teklif yapılan firma
    ownedFirm: {
        type: String,
        required: true
    }, // Teklifi veren firma
    moduleName: {
        type: String,
        required: true
    }, // Kalem adı
    moduleLastname: {
        type: String,
        required: false
    }, // Kalem ek adı
    amount: {
        type: Number,
        required: true
    }, // Adet miktarı
    unitPrice: {
        type: Number,
        required: true
    },
    certPrice: {
        type: Number,
        required: false
    },
    discount: {
        type: Number,
        required: false
    },



}, { timestamps: true}
)

//module.exports = mongoose.model('MYK', mykSchema)