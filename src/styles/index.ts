<<<<<<< HEAD
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
=======
import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
>>>>>>> e198a2f8845ed72961a48620ba6294ef4080b9ba

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
<<<<<<< HEAD
    list-style: none;
    font-family: "Montserrat", sans-serif;
  }
`
export const Container = styled.div`
  align-items: center;
=======
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666;
  border-color: #666;
  width: 100%;
`
export const Botao = styled.button`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinzaEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
>>>>>>> e198a2f8845ed72961a48620ba6294ef4080b9ba
`

export default EstiloGlobal