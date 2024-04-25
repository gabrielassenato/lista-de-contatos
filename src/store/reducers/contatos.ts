import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatoSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato('Gabriel', 'gabriel@gmail.com', '5598876542', 1),
    new Contato('Giovana', 'giovana@gmail.com', '5598546542', 2),
    new Contato('Isadora', 'isadora@gmail.com', '5598877642', 3)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatoSlice.actions

export default contatoSlice.reducer
