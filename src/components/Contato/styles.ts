import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin: 0 auto;
  max-width: 800px;
  border-bottom: 1px solid #000;
  border-radius: 8px;

  &:hover {
    background-color: #dee2e6;
  }
`

export const Dados = styled.div`
  display: flex;
  flex-direction: column;
`

export const Dado = styled.span`
  margin-right: 24px;
  margin-bottom: 4px;
`

export const BotoesContainer = styled.div`
  display: flex;
  align-items: center;
`

export const BotaoEditar = styled.button`
  margin-right: 8px;
  padding: 8px;
  border-radius: 8px;
  border: none;
  background-color: #1282a2;
  color: #fff;
  cursor: pointer;
`

export const BotaoSalvar = styled.button`
  margin-right: 8px;
  padding: 8px;
  border-radius: 8px;
  border: none;
  background-color: #588157;
  color: #fff;
  cursor: pointer;
`

export const BotaoExcluir = styled.button`
  padding: 8px;
  border-radius: 8px;
  border: none;
  background-color: #ef233c;
  color: #fff;
  cursor: pointer;
`
