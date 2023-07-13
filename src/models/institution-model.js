const mongoose = require('mongoose')

const InstitutionSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId()
    },
    name: {
      type: String, 
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
)

const Model = mongoose.model('Institution', InstitutionSchema)

module.exports = Model