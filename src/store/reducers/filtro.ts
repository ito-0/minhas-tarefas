import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contato'

type FiltroState = {
  termo?: string
  criterio: 'prioridade' | 'status' | 'todos'
  valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    setTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    setFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { setTermo, setFiltro } = filtroSlice.actions

export default filtroSlice.reducer
