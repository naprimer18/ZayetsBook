import pkg from 'mongoose'
const { Schema, model } = pkg;

const user = new Schema({
  login: { type: 'string'},
  password: { type: 'string'}
})

export default model('User', user)