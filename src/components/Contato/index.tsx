import { useState } from 'react'
import * as S from './styles'

type Props = {
  nome: string
  email: string
  telefone: string
}

const Contato = ({ nome, email, telefone }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Container>
      <S.Dados>
        <S.Dado>{nome}</S.Dado>
        <S.Dado>{email}</S.Dado>
        <S.Dado>{telefone}</S.Dado>
      </S.Dados>
      <S.BotoesContainer>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoExcluir onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoExcluir>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoExcluir>Excluir</S.BotaoExcluir>
          </>
        )}
      </S.BotoesContainer>
    </S.Container>
  )
}

export default Contato
