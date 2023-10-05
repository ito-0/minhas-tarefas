import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { remover, editar, alteraStatus } from '../../store/reducers/contatos'
import ContatoModel from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'
import * as enums from '../../utils/enums/Contato'

type Props = ContatoModel

const Contato = ({
  apelido: apelidoOriginal,
  prioridade,
  status,
  nome: nomeOriginal,
  id,
  email: emailOriginal,
  celular: celularOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [apelido, setApelido] = useState('')
  const [email, setEmail] = useState('')
  const [celular, setCelular] = useState('')
  const [nome, setNome] = useState('')

  useEffect(() => {
    if (apelidoOriginal.length > 0) {
      setApelido(apelidoOriginal)
      setEmail(emailOriginal)
      setCelular(celularOriginal)
      setNome(nomeOriginal)
    }
  }, [apelidoOriginal, emailOriginal, celularOriginal, nomeOriginal])

  const nomeContent = estaEditando ? (
    <S.Nome
      as="textarea"
      value={nome}
      onChange={(evento) => setNome(evento.target.value)}
    />
  ) : (
    nome
  )

  function cancelarEdicao() {
    setEstaEditando(false)
    setApelido(apelidoOriginal)
    setEmail(emailOriginal)
    setCelular(celularOriginal)
    setNome(nomeOriginal)
  }

  function alteraStatusContato(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id, finalizado: evento.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={nome}>
        <input
          type="checkbox"
          id={nome}
          checked={status === enums.Status.FAVORITOS}
          onChange={alteraStatusContato}
        />
        <S.Nome>{nomeContent}</S.Nome>
        <S.Tag parametro="status" status={status}>
          {status}
        </S.Tag>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.EditModeContainer>
        <label className={estaEditando ? '' : 'hidden'}>Apelido:</label>
        <S.Descricao
          disabled={!estaEditando}
          value={apelido}
          onChange={(evento) => setApelido(evento.target.value)}
        />
        <label className={estaEditando ? '' : 'hidden'}>E-mail:</label>
        <S.Email
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <label className={estaEditando ? '' : 'hidden'}>Celular:</label>
        <S.Celular
          disabled={!estaEditando}
          value={celular}
          onChange={(evento) => setCelular(evento.target.value)}
        />
      </S.EditModeContainer>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    apelido,
                    prioridade,
                    status,
                    nome,
                    id,
                    email,
                    celular
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarERemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarERemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarERemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarERemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
