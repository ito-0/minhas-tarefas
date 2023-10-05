import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contato'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.TRABALHO)
      return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.FAMILIA) return variaveis.azul
    if (props.prioridade === enums.Prioridade.PESSOAL) return variaveis.amarelo
  } else {
    if (props.status === enums.Status.FAVORITOS) return variaveis.verde
  }
  return '#ccc'
}

export const Card = styled.div`
  bacground-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Tag = styled.span<TagProps>`
  padding: 6px 8px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

const SharedTextareaStyle = `
  color: #8b8b8b;
  font-size: 14px;
  line-height: 16px;
  font-family: Roboto Mono, monospace;
  display: block;
  width: 100%;
  margin: 8px 0;
  resize: none;
  border: none;
  background-color: transparent;
  border-radius: 4px;
`

export const Nome = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin: 0 8px;
  width: 100%;

  textarea {
    resize: none;
    border: none;
    margin-top: 20px;
    line-height: 14px;
  }
`

export const Descricao = styled.textarea`
  ${SharedTextareaStyle}
`

export const Email = styled.textarea`
  ${SharedTextareaStyle}
`

export const Celular = styled.textarea`
  ${SharedTextareaStyle}
`

export const EditModeContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  label {
    margin: 4px 0;
    &.hidden {
      display: none;
    }
  }
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarERemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
