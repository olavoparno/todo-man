import styled from 'styled-components'
import { Button, Input } from '@material-ui/core'

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
    @media (min-width: 1024px) {
      top: -1rem;
      right: -0.5rem;
    }
  }
`

export const STodoForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  margin: 2rem;
  background-color: white;
  ${SBorder(1, 'rgba(189, 186, 186, 0.75)')}
  ${SShadow(1, 1, 0, 'rgba(125, 124, 124, 0.75)')}
  @media (min-width: 1024px) {
    padding: 3rem;
    margin: 3rem;
  }
`

export const STodoInputText = styled(Input)`o
  border-radius: 0.1rem;
  border-style: none;
  padding: 0.5rem;
  margin: 0.5rem 0;
  ${SBorder(1, 'rgba(189, 186, 186, 0.75)')}
  @media (min-width: 1024px) {
    padding: 1.5rem;
    input {
      font-size: 18px;
    }
  }
`

export const STodoInputButton = styled(Button)`
  border-style: none;
  margin: 0.5rem 0 0;
  cursor: pointer;
  background: linear-gradient(45deg, #fb4b71 30%, #ff8e99 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  padding: 0.5rem 0 0.5rem;
  ${SShadow(1, 1, 1, 'rgba(255, 105, 135, 0.3)')}
  svg {
    float: left;
    margin: 0 0.5rem;
    color: white;
    @media (min-width: 1024px) {
      margin-left: 1.5rem;
      font-size: 20px;
    }
  }
  span {
    color: white;
  }
  @media (min-width: 1024px) {
    margin: 1.5rem 0 0 !important;
    height: 5rem;
    span {
      font-size: 18px;
    }
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
  margin-top: 3rem;
  padding: 0.5rem;
  color: white;
  z-index: 1;
  ${SShadow(1, 1, 0, 'rgba(125, 124, 124, 0.75)')}
  &:after {
    content: 'Required'
  }
  @media (min-width: 1024px) {
    padding: 1.5rem;
    margin-top: 5rem;
    left: 10rem;
    font-size: 18px;
    width: 75px;
    height: 20px;
  }
`
