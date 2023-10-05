import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [apelido, setApelido] = useState('')
  const [email, setEmail] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.PESSOAL)
  const [celular, setCelular] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        prioridade,
        status: enums.Status.NORMAL,
        apelido,
        email,
        celular
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome completo"
        />
        <Campo
          value={apelido}
          onChange={({ target }) => setApelido(target.value)}
          type="text"
          placeholder="Apelido"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="e-mail"
        />
        <Campo
          value={celular}
          onChange={({ target }) => setCelular(target.value)}
          type="tel"
          placeholder="Telefone ou Celular"
        />
        <Opcoes>
          <p>Prioridade</p>

          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.PESSOAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
