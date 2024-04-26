import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/contatos'
import * as S from './styles'

const ListaDeContatos = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const adicionarContato = () => {
    dispatch(
      adicionar({
        nome,
        email,
        telefone
      })
    )
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <main>
      <S.Titulo>Lista de Contatos</S.Titulo>
      <S.Formulario>
        <S.Inputs
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <S.Inputs
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.Inputs
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </S.Formulario>
      <S.Botao type="button" onClick={adicionarContato}>
        Adicionar
      </S.Botao>
    </main>
  )
}

export default ListaDeContatos
