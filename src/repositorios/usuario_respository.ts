import EntityNotFound from '../erros/EntityNotFound';
import Usuario from '../tabelas/usuario_table';

interface IAddressRepo {
  create(usuario: Usuario): Promise<Usuario>;
  update(usuario: Usuario): Promise<Usuario>;
  delete(CPF: string): Promise<void>;
  getAll(): Promise<Usuario[]>;
  getById(CPF: string): Promise<Usuario>;
}

class UsuarioRepos implements IAddressRepo {
  async create(usuario: Usuario) {
    const {
      cpf,
      senha,
      nome,
      nivelPermissao
    } = usuario;

    return await Usuario.create({
        cpf,
        senha,
        nome,
        nivelPermissao
    });
  }

  async update(usuario: Usuario) {
    const antigaUsuario = await Usuario.findByPk(usuario.cpf);
    if(!antigaUsuario) {
      throw new EntityNotFound('Usuario');
    }

    const {
      cpf,
      senha,
      nome,
      nivelPermissao
    } = usuario;

    antigaUsuario.cpf = cpf;
    antigaUsuario.senha = senha;
    antigaUsuario.nome = nome;
    antigaUsuario.nivelPermissao = nivelPermissao;

    return await antigaUsuario.save();
  }

  async delete(cpf: string) {
    const antigaUsuario = await Usuario.findByPk(cpf);

    if(!antigaUsuario) {
      throw new EntityNotFound('Address');
    }

    await antigaUsuario.destroy();
  }

  async getAll() {
    return await Usuario.findAll();
  }

  async getById(cpf:  string) {
    const usuario = await Usuario.findByPk(cpf);

    if(!usuario) {
      throw new EntityNotFound('Usuário');
    }

    return usuario;
  } 
}

export default new UsuarioRepos();