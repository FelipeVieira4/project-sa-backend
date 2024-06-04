import Aluno from '../tabelas/aluno_table';

interface IAddressRepo {
  create(aluno: Aluno): Promise<Aluno>;
  update(aluno: Aluno): Promise<Aluno>;
  delete(CPF: string): Promise<void>;
  getAll(): Promise<Aluno[]>;
  getById(CPF: string): Promise<Aluno>;
}

class Aluno implements IAddressRepo {
  async create(aluno: Aluno) {
    const {
      cpf,
      senha,
      nome,
      nivelPermissao
    } = aluno;

    return await Aluno.create({
        cpf,
        senha,
        nome,
        nivelPermissao
    });
  }

  async update(address: Address) {
    const oldAddress = await Address.findByPk(address.id);

    if(!oldAddress) {
      throw new EntityNotFound('Address');
    }

    const {
      state,
      city,
      district,
      street,
      complement,
      cep
    } = address;

    oldAddress.state = state;
    oldAddress.city = city;
    oldAddress.district = district;
    oldAddress.street = street;
    oldAddress.complement = complement;
    oldAddress.cep = cep;

    return await oldAddress.save();
  }

  async delete(id: number) {
    const oldAddress = await Address.findByPk(id);

    if(!oldAddress) {
      throw new EntityNotFound('Address');
    }

    await oldAddress.destroy();
  }

  async getAll() {
    return await Address.findAll();
  }

  async getById(id: number) {
    const address = await Address.findByPk(id);

    if(!address) {
      throw new EntityNotFound('Address');
    }

    return address;
  } 
}

export default new AddressRepo();