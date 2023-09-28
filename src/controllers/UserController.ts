import { Request, Response } from 'express';
import User from '../models/User';


class UserController {

  async listAll(request: Request, response: Response) {
    const usuarios = await User.find();
    response.json(usuarios);
  }

  async deleteAll(req: Request, res: Response) {
    try {
      await User.deleteMany({});

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir todos os usuários' });
    }
  }

  async get(request: Request, response: Response) {
    const { id } = request.params;
    
    if (id.length != 24) {
      return response.status(422).json({
        message: `Usuário não encontrado`
      })
    }
    
    const user = await User.findById(id);
    if (user)
    return response.status(201).json(user);
    return response.status(404).json({
      message: `Usuário ${id} não encontrado`
    })
  }
  
  async create(request: Request, response: Response) {
    // return response.status(500).json({
    //   message: "Não foi dessa vez"
    // });
    // 646bf40602ce3f9161498e71

    const { name, email, senha, cpf, numero } = request.body;
    const user = await User.create({ name: name, email: email, senha: senha, cpf: cpf, numero: numero, });
    response.status(201).json(user);
  }
  
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    User.findByIdAndDelete(id).then((user) => {
      if (user)
        return response.sendStatus(204);
      return response.sendStatus(404);
    })
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, senha, cpf, numero } = request.body;
    User.findByIdAndUpdate(id, { name: name, email: email, senha: senha, cpf: cpf, numero: numero },{new: true})
      .then((user) => {
        if (user) 
          return response.status(201).json(user);
        return response.status(404).json({ message: `Usuário ${id} não encontrado!` });
      });
  }

}

export default new UserController();
