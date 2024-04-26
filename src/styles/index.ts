import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Montserrat", sans-serif;
  }
`

export const Container = styled.div`
  align-items: center;
`

export default EstiloGlobal
