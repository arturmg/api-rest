// Este módulo importa cada modelo de dados (tabela) e ativa a conexão com o banco.
// Ele também verifica se existe o método associate e ativa a sua conexão.

import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
