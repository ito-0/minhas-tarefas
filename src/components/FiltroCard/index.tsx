import { useDispatch, useSelector } from 'react-redux'
import { setFiltro } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todos'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCeiterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCeiterio && mesmoValor
  }

  const contarContatos = () => {
    if (criterio === 'todos') return contatos.itens.length
    if (criterio === 'prioridade') {
      return contatos.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return contatos.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      setFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarContatos()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
