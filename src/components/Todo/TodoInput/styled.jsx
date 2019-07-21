import styled from 'styled-components'

import { SShadow, SBorder } from '../../../styles'

export const STodoInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color: white;
  .modal-close-button {
    top: -0.5rem;
    right: 0.5rem;
  }
`

export const STodoForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  margin: 2rem;
  background-color: white;
  ${SBorder(0.2)}
  ${SShadow(1, 1)}
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
  background-color: rgba(147, 98, 245, 0.8);
  color: white;
  cursor: pointer;
  ${SBorder(0.2)}
  ${SShadow(1, 1)}
  svg {
    float: left;
    margin-left: 0.5rem;
  }
  &:hover {
    border: 1px 0 0 1px solid black;
    ${SShadow(1, 1, 1, 'rgba(255, 195, 74, 0.3)')}
  }
  &:active {
    ${SShadow(0, 0)}
  }
`

export const SToolTip = styled.div`
  position: absolute;
  border-radius: 0.2rem;
  display: block;
  width: 50px;
  height: 15px;
  background-color: orangered;
  left: 6rem;
  margin-top: 25px;
  padding: 0.5rem;
  color: white;
  &:after {
    content: 'Required'
  }
`
