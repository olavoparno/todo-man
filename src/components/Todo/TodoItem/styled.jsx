import styled from 'styled-components'

import { SShadow, SBorder } from '../../../styles'

export const STodoItem = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  list-style: none;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  ${SBorder(1)}
  ${SShadow(0, 1)}
  @media (min-width: 768px) {
    input {
      border: none;
      &:focus {
        transform: scale(1.2);
        margin-left: 1rem;
      }
    }
  }
  @media (min-width: 1024px) {
    padding: 1.5rem;
    margin: 1.5rem;
    input {
      font-size: 18px;
    }
  }
`

export const STodoEdit = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

export const SButton = styled.button`
  padding: 0.2rem 0.3rem;
  background: none;
  color: inherit;
  border: none;
  margin: 0.5rem;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  &:hover {
    transform: scale(1.05);
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`
