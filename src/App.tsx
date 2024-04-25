import { Provider } from 'react-redux'
<<<<<<< HEAD
import ContatosSalvos from './container/ContatosSalvos'
import ListaDeContatos from './container/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

import store from './store'
=======
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'

import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])
>>>>>>> e198a2f8845ed72961a48620ba6294ef4080b9ba

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
<<<<<<< HEAD
        <ListaDeContatos />
        <ContatosSalvos />
=======
        <RouterProvider router={rotas} />
>>>>>>> e198a2f8845ed72961a48620ba6294ef4080b9ba
      </Container>
    </Provider>
  )
}

export default App
