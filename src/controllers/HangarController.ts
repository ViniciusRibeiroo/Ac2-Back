import { Request, Response } from 'express';
import Hangar from '../models/Hangar';


class AviaoController {

  async listAll(request: Request, response: Response) {
    const hangares = await Hangar.find();
    response.json(hangares);
  }

  async deleteAll(req: Request, res: Response) {
    try {
      await Hangar.deleteMany({});

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir todos os hangares' });
    }
  }

  async get(request: Request, response: Response) {
    const { id } = request.params;
    
    const hangar = await Hangar.findById(id);
    if (hangar)
    return response.status(201).json(hangar);
    return response.status(404).json({
      message: `Hangar ${id} não encontrado`
    })
  }
  
  async create(request: Request, response: Response) {
    // return response.status(500).json({
    //   message: "Não foi dessa vez"
    // });
    // 646bf40602ce3f9161498e71

    const { name, cep, logradouro, numero, bairro, area, valor, hora } = request.body;
    const hangar = await Hangar.create({ 
        name: name,
        cep: cep, 
        logradouro: logradouro, 
        numero: numero, 
        bairro: bairro,
        area: area,
        valor: valor, 
        hora: hora 
    });
    response.status(201).json(hangar);
  }
  
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    Hangar.findByIdAndDelete(id).then((hangar) => {
      if (hangar)
        return response.sendStatus(204);
      return response.sendStatus(404);
    })
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, cep, logradouro, numero, bairro, area, valor, hora } = request.body;
    Hangar.findByIdAndUpdate(id, {
        name: name,
        cep: cep, 
        logradouro: logradouro, 
        numero: numero, 
        bairro: bairro,
        area: area,
        valor: valor, 
        hora: hora },
        {new: true})
      .then((hangar) => {
        if (hangar) 
          return response.status(201).json(hangar);
        return response.status(404).json({ message: `Hangar ${id} não encontrado!` });
      });
  }

}

export default new AviaoController();
