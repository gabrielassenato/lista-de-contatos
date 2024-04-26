import { createSlice } from '@reduxjs/toolkit'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: {
    itens: [
      {
        id: 1,
        nome: 'Gabriel',
        email: 'gabriel@gmail.com',
        telefone: '55998887743'
      }
    ]
  },
  reducers: {
    adicionar: (state, action) => {
      const novoContato = {
        id: state.itens.length + 1,
        ...action.payload
      }
      state.itens.push(novoContato)
    },
    remover: (state, action) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action) => {
      const indexDoContato = state.itens.findIndex(
        (con) => con.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { adicionar, remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
