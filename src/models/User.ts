import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true,},
  email: { type: String, required: true,},
  senha: { type: String, required: true,},
  cpf: { type: String, required: true,},
  numero: { type: String, required: true,},
})

export default mongoose.model('User', UserSchema);
