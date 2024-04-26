import { useState, useEffect } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import ContatoClass from '../../models/Contato'
import { remover, editar } from '../../store/reducers/contatos'

type Props = ContatoClass

const Contato = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  const ativaEdicao = () => {
    setEstaEditando(true)
  }

  const Salvar = () => {
    dispatch(
      editar({
        id,
        nome,
        email,
        telefone
      })
    )
  }

  const cancelarEdicao = () => {
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
    setEstaEditando(false)
  }

  return (
    <S.Container>
      <S.Dados>
        <S.Dado>
          {estaEditando ? (
            <input
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          ) : (
            nome
          )}
        </S.Dado>
        <S.Dado>
          {estaEditando ? (
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          ) : (
            email
          )}
        </S.Dado>
        <S.Dado>
          {estaEditando ? (
            <input
              type="text"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            />
          ) : (
            telefone
          )}
        </S.Dado>
      </S.Dados>
      <S.BotoesContainer>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={Salvar}>Salvar</S.BotaoSalvar>
            <S.BotaoExcluir onClick={cancelarEdicao}>Cancelar</S.BotaoExcluir>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={ativaEdicao}>Editar</S.BotaoEditar>
            <S.BotaoExcluir onClick={() => dispatch(remover(id))}>
              Excluir
            </S.BotaoExcluir>
          </>
        )}
      </S.BotoesContainer>
    </S.Container>
  )
}

export default Contato
