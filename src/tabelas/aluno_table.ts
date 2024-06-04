import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table, Unique} from 'sequelize-typescript';

@Table({
  tableName: 'alunos'
})
export default class Address extends Model {
    @PrimaryKey
    @AllowNull(false)
    @Unique
    @Column(DataType.STRING)
    cpf!: string;

    @AllowNull(false)
    @Column(DataType.STRING(20))
    senha!: string;

    @AllowNull(false)
    @Column(DataType.STRING(60))
    nome!: string;

    @AllowNull(false)
    @Column(DataType.NUMBER)
    nivelPermissao!: number;
}