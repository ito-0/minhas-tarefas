import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { setTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar contatos"
              value={termo}
              onChange={(evento) => dispatch(setTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.NORMAL}
                criterio="status"
                legenda="Normal"
              />
              <FiltroCard
                valor={enums.Status.FAVORITOS}
                criterio="status"
                legenda="Favoritos"
              />
              <FiltroCard
                valor={enums.Prioridade.TRABALHO}
                criterio="prioridade"
                legenda="Trabalho"
              />
              <FiltroCard
                valor={enums.Prioridade.FAMILIA}
                criterio="prioridade"
                legenda="Família"
              />
              <FiltroCard
                valor={enums.Prioridade.PESSOAL}
                criterio="prioridade"
                legenda="Pessoal"
              />
              <FiltroCard criterio="todos" legenda="Total" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar a lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
