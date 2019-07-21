import styled from 'styled-components'

import { SShadow, SBorder } from '../../../styles'

export const STodoList = styled.ul`
  background-color: white;
  height: auto;
  width: auto;
  padding: 1.3rem 2rem;
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
    padding: 2.3rem 3rem;
    .modal-close-button {
      top: -1rem;
      right: -0.5rem;
    }
  }
`

export const SErrorServer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 16px 0;
  text-align: center;
  font-size: 11px;
  ${SBorder(1)}
  ${SShadow(0, 1)}
  span {
    padding: 15px;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
  @media (min-width: 1024px) {
    padding: 32px 0;
    span {
      padding: 30px;
      font-size: 18px;
    }
  }
`
