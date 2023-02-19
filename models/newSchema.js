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


/* db.address.insertOne({
    _id: 101,
    teklifId: "MYK-898",
    targetFirm: "KAUS",
    ownedFirm: "STA",
    discount: 10,
    date: "20-02-2023"
})

db.employee.insertOne({
    moduleName: "Celik Kaynak",
    moduleLastname: "MAG",
    amount: 5,
    unitPrice: 3000,
    certPrice: 300,
    DoB: new Date('Mar 24, 2011'),
    address: 101
}) */

//module.exports = mongoose.model('MYK', mykSchema)