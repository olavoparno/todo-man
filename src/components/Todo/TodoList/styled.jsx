import styled from 'styled-components'
import { Box, Input } from '@material-ui/core'

import { SShadow, SBorder } from '../../../styles'

export const STodoList = styled.ul`
  background-color: white;
  height: auto;
  width: auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: start;
  align-items: left;
  flex-direction: column;
  ${SShadow(1, -1)}
  .modal-close-button {
    top: -0.5rem;
    right: 0.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 2rem;
    .modal-close-button {
      top: -1rem;
      right: -0.5rem;
    }
  }
`

export const SErrorServer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  list-style: none;
  margin: 0.5rem;
  padding: 1.5rem;
  border-radius: 0.2rem;
  ${SBorder(1, 'rgba(189, 186, 186, 0.75)')}
  ${SShadow(1, 1, 0, 'rgba(255, 105, 135, 0.3)')}
  @media (min-width: 1024px) {
    padding: 2.5rem;
    margin: 1rem;
    span, a {
      font-size: 18px;
      text-decoration: none;
    }
  }
`

export const STodoSearch = styled(Input)`
  border-radius: 0.1rem;
  border-style: none;
  margin: 0 2rem 0.5rem;
  padding: 0.5rem 1.5rem;
  ${SBorder(1, 'rgba(189, 186, 186, 0.75)')}
  @media (min-width: 1024px) {
    margin: 0 3rem 1rem;
    padding: 0.5rem 1.5rem;
    input {
      font-size: 18px;
    }
  }
`

export const STodoSearchBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`
