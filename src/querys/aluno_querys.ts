import { Request, Response } from 'express';
import Usuario from '../tabelas/usuario_table';
import UsuarioRepository from '../repositorios/usuario_respository';
import usuario_respository from '../repositorios/usuario_respository';
import { errorHandler } from '../erros/EntityNotFound';

class UsuarioController {
  async create(req: Request, res: Response) {
    try {
      const {
        cpf,
        senha,
        nome,
        nivelPermissao
      } = req.body;
      
      const novoUsuario = new Usuario({
        cpf,
        senha,
        nome,
        nivelPermissao
      });

      const data = await UsuarioRepository.create(novoUsuario);

      return res.status(200).json({
        status: 'Criado!',
        message: 'Usuário!',
        data
      });
    } catch(err: unknown) {
      const {
        code,
        status,
        message,
        errors,
        cause
      } = errorHandler(err);

      return res.status(code).json({
        status,
        message,
        errors,
        cause
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const {
        cpf,
        senha,
        nome,
        nivelPermissao
      } = req.body;

      const usuarioAtualizado = new Usuario({
        cpf,
        senha,
        nome,
        nivelPermissao
      });

      const data = await usuario_respository.update(usuarioAtualizado);

      return res.status(200).json({
        status: 'Atualizado!',
        message: 'Usuário atualizado com sucesso!',
        data
      });
    } catch(err: unknown) {
      const {
        code,
        status,
        message,
        errors,
        cause
      } = errorHandler(err);

      return res.status(code).json({
        status,
        message,
        errors,
        cause
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await usuario_respository.delete(req.params.cpf);

      return res.status(200).json({
        status: 'Deleted!',
        message: 'This address has been deleted successfully!'
      });
    } catch(err: unknown) {
      const {
        code,
        status,
        message,
        errors,
        cause
      } = errorHandler(err);

      return res.status(code).json({
        status,
        message,
        errors,
        cause
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const todosUsuarios = await usuario_respository.getAll();

      return res.status(200).json({
        status: 'Ok!',
        message: 'Todos usuários no back-end pego!',
        data: todosUsuarios
      });
    } catch(err: unknown) {
      const {
        code,
        status,
        message,
        errors,
        cause
      } = errorHandler(err);

      return res.status(code).json({
        status,
        message,
        errors,
        cause
      });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const usuario = await usuario_respository.getById(req.params.cpf);

      return res.status(200).json({
        status: 'Ok!',
        message: 'Usuário pego com sucesso do back-end',
        data: usuario
      });
    } catch(err: unknown) {
      const {
        code,
        status,
        message,
        errors,
        cause
      } = errorHandler(err);

      return res.status(code).json({
        status,
        message,
        errors,
        cause
      });
    }
  }
}

export default new UsuarioController();
