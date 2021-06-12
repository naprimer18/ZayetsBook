import pkg from 'mongoose'
const { Schema, model } = pkg;

const schema = new Schema({
  message: { type: 'string' }
})

export default model('Message', schema)