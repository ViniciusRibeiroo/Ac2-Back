import { Request, Response } from 'express';
import Aviao from '../models/Aviao';


class AviaoController {

  async listAll(request: Request, response: Response) {
    const avioes = await Aviao.find();
    response.json(avioes);
  }

  async deleteAll(req: Request, res: Response) {
    try {
      await Aviao.deleteMany({});

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir todos as Aeronaves' });
    }
  }

  async get(request: Request, response: Response) {
    const { id } = request.params;
    
    const aviao = await Aviao.findById(id);
    if (aviao)
    return response.status(201).json(aviao);
    return response.status(404).json({
      message: `Avião ${id} não encontrado`
    })
  }
  
  async create(request: Request, response: Response) {
    // return response.status(500).json({
    //   message: "Não foi dessa vez"
    // });
    // 646bf40602ce3f9161498e71

    const { name, preco, consumo, velocidade, jetA, jetA1, jetB } = request.body;
    const aviao = await Aviao.create({ name: name, preco: preco, consumo: consumo, velocidade: velocidade,
    jetA: jetA, jetA1: jetA1, jetB: jetB });
    response.status(201).json(aviao);
  }
  
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    Aviao.findByIdAndDelete(id).then((aviao) => {
      if (aviao)
        return response.sendStatus(204);
      return response.sendStatus(404);
    })
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, preco, consumo, velocidade, jetA, jetA1, jetB } = request.body;
    Aviao.findByIdAndUpdate(id, {name: name, preco: preco, consumo: consumo, velocidade: velocidade,
    jetA: jetA, jetA1: jetA1, jetB: jetB}, {new: true})
      .then((aviao) => {
        if (aviao) 
          return response.status(201).json(aviao);
        return response.status(404).json({ message: `Avião ${id} não encontrado!` });
      });
  }

}

export default new AviaoController();
