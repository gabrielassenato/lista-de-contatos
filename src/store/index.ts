import { configureStore } from '@reduxjs/toolkit'
<<<<<<< HEAD

import contatosReducer from './reducers/contatos'

const store = configureStore({
  reducer: {
    contatos: contatosReducer
=======
import tarefasReducer from './reducers/tarefas'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
>>>>>>> e198a2f8845ed72961a48620ba6294ef4080b9ba
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
