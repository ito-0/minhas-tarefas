import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer, Titulo, Info } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltradas = itens

    if (termo !== undefined) {
      contatosFiltradas = contatosFiltradas.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        contatosFiltradas = contatosFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        contatosFiltradas = contatosFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return contatosFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltrada = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todos') {
      mensagem = `Resultado da busca | ${quantidade} contato(s) encontrada(s) como: Total ${complementacao}`
    } else {
      mensagem = `Resultado da busca | ${quantidade} contato(s) encontrada(s) como: ${valor} ${complementacao}`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltrada(contatos.length)

  return (
    <MainContainer>
      <Titulo>AGENDA DE CONTATOS</Titulo>
      <Info as="p">{mensagem}</Info>
      <ul>
        {contatos.map((t) => (
          <li key={t.nome}>
            <Contato
              id={t.id}
              apelido={t.apelido}
              nome={t.nome}
              status={t.status}
              prioridade={t.prioridade}
              email={t.email}
              celular={t.celular}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
