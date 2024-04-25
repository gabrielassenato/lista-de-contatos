import { useSelector } from 'react-redux'

import * as S from './styles'
import Contato from '../../components/Contato'

import { RootReducer } from '../../store'

const ContatosSalvos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)
  return (
    <main>
      <S.Container>
        <S.Titulo>Contatos salvos</S.Titulo>
        <S.Formulario>
          <S.Inputs type="text" placeholder="Buscar contato" />
        </S.Formulario>
        <S.Salvos>
          <ul>
            {contatos.map((con) => (
              <li key={con.nome}>
                <Contato
                  nome={con.nome}
                  email={con.email}
                  telefone={con.telefone}
                />
              </li>
            ))}
          </ul>
        </S.Salvos>
      </S.Container>
    </main>
  )
}

export default ContatosSalvos
