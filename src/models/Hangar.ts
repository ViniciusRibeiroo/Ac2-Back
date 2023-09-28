import mongoose from 'mongoose';

const HangarSchema = new mongoose.Schema({
    name: { type: String, required: true,},
    cep: { type: String, required: true,},
    logradouro: { type: String, required: true,},
    numero: { type: String, required: true,},
    bairro: { type: String, required: true,},
    area: { type: String, required: true,},
    valor: { type: String, required: true,},
    hora: { type: String, required: true,},
})

export default mongoose.model('Hangar', HangarSchema);
