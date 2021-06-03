import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Antonieta',
      email: 'antonieta@email.com',
      idade: 69,
      peso: 65,
      altura: 1.55,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
