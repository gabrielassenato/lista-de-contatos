import { Provider } from 'react-redux'
import ContatosSalvos from './container/ContatosSalvos'
import ListaDeContatos from './container/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <ListaDeContatos />
        <ContatosSalvos />
      </Container>
    </Provider>
  )
}

export default App
