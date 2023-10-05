import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/Contato'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      apelido: 'Conts 1',
      prioridade: enums.Prioridade.PESSOAL,
      status: enums.Status.FAVORITOS,
      nome: 'Contato 1',
      email: 'ex@contato.com',
      celular: '(00) 0 0000-0000'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDaContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaContato !== -1) {
        state.itens[indexDaContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoExiste) {
        alert('Já existe um contato com este nome')
      } else {
        const ultimaContato = state.itens[state.itens.length - 1]
        const contatoNova = {
          ...action.payload,
          id: ultimaContato ? ultimaContato.id + 1 : 1
        }
        state.itens.push(contatoNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaContato !== -1) {
        state.itens[indexDaContato].status = action.payload.finalizado
          ? enums.Status.FAVORITOS
          : enums.Status.NORMAL
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } =
  contatosSlice.actions

export default contatosSlice.reducer
