const mongoose = require('mongoose')
const dbSchema = mongoose.Schema

const brandNewSchema = new dbSchema({ 
    
    firmName: { // firma adı
        type: String,
        required: true
    },
    about: { // myk veya pk teklifi
        type: String,
        required: true
    },
    proposalId: { // teklif id'si
        type: String,
        required: true
    },
    proposalDetails: {  // teklif detayı array'i
        type: Array,
        required: true,
        categoryID: {   // Meslek id'si
            type: Number,
            required: true
        },
        unitID: {       // Meslek birimi id'si
            type: Number,
            required: true
        },
        unitMainName: {     // Meslek birimi adı
            type: String,
            required: true
        },
        unitMainQuantity: { // Meslek ana birimi fiyatı
            type: Number,
            required: true
        },
        unitPrice: {    // Meslek birimi fiyatı
            type: Number,
            required: true
        },
        subUnitDetails:{
            type: Array,
            required: false,
            unitSubId: {     // Meslek alt birimi adı
                type: Number,
                required: false
            },
            unitSubName: {     // Meslek alt birimi adı
                type: String,
                required: false
            },
            unitSubPrice: { // Meslek alt birimi fiyatı
                type: Number,
                required: false
            }        
        }
    },
    proposalPrice: {    // Teklif toplam tutarı
        type: Number,
        required: true
    },
    proposalDiscount: {     // Teklif iskonto miktarı
        type: Number,
        required: false
    },
    issuedDate: {   // oluşturma tarihi
        type: Date,
        required: false
    },

},
{ timestamps: true}
)

module.exports = mongoose.model('mDB', brandNewSchema)