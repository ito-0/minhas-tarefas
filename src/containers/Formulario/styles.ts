import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666;
  text-align: center;

  textarea {
    resize: none;
  }
`

export const Opcoes = styled.div`
  margin: 16px 0;
  text-align: center;

  p {
    margin: 8px 0;
  }

  label {
    margin-right: 16px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
