import styled from 'styled-components'

import { SShadow, SBorder } from '../../../styles'

export const STodoInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color: white;
`

export const STodoForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  margin: 2rem;
  background-color: white;
  ${SBorder(0.2)}
  ${SShadow(0, 1)}
`

export const STodoInputText = styled.input`
  border-radius: 0.1rem;
  border-style: none;
  padding: 0.5rem;
  ${SBorder(0.2)}
  ${SShadow(1, 1)}
`

export const STodoInputButton = styled.button`
  border-radius: 0.1rem;
  border-style: none;
  padding: 0.5rem 0 0.5rem;
  margin: 0.5rem 0 0;
  background-color: rgba(87, 144, 207, 0.8);
  color: white;
  cursor: pointer;
  ${SBorder(0.2)}
`
