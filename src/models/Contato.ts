import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  prioridade: enums.Prioridade
  status: enums.Status
  apelido: string
  id: number
  email: string
  celular: string

  constructor(
    nome: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    apelido: string,
    id: number,
    email: string,
    celular: string
  ) {
    this.nome = nome
    this.prioridade = prioridade
    this.status = status
    this.apelido = apelido
    this.id = id
    this.email = email
    this.celular = celular
  }
}

export default Contato
