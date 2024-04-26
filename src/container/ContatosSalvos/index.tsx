import { useSelector } from 'react-redux'
import { useState } from 'react'

import * as S from './styles'
import Contato from '../../components/Contato'

import { RootReducer } from '../../store'

const ContatosSalvos = () => {
  const [filtro, setFiltro] = useState('')

  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const filtraContatos = () => {
    if (!filtro.trim()) {
      return itens
    }

    const contatosFiltrados = itens.filter((contato) =>
      contato.nome.toLowerCase().includes(filtro.trim().toLowerCase())
    )

    return contatosFiltrados
  }

  const filtraNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(event.target.value)
  }

  return (
    <main>
      <S.Container>
        <S.Titulo>Contatos salvos</S.Titulo>
        <S.Formulario>
          <S.Inputs
            type="text"
            placeholder="Buscar contato"
            value={filtro}
            onChange={filtraNome}
          />
        </S.Formulario>
        <S.Salvos>
          <ul>
            {filtraContatos().map((contato) => (
              <li key={contato.id}>
                <Contato
                  id={contato.id}
                  nome={contato.nome}
                  email={contato.email}
                  telefone={contato.telefone}
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
