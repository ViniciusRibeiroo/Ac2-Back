import mongoose from 'mongoose';

const AviaoSchema = new mongoose.Schema({
  name: { type: String, required: true,},
  preco: { type: Number, required: true,},
  consumo: { type: Number, required: true,},
  velocidade: { type: Number, required: true,},
  jetA: { type: Boolean, required: true,},
  jetA1: { type: Boolean, required: true,},
  jetB: { type: Boolean, required: true,},
})

export default mongoose.model('Aviao', AviaoSchema);
