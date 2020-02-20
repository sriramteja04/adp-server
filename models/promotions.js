const mongoose = require('mongoose')

const promoSchema = mongoose.Schema({
    // _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
})

promoSchema.method({
    getName: function () {
       console.log(this)
    }
})

const promo = mongoose.model('promotions',promoSchema)
module.exports = promo