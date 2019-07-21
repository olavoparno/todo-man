import styled from 'styled-components'
import { Button, Input } from '@material-ui/core'

import { SBorder, SShadow } from '../../styles'

export const SModal = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  z-index: 1;
  @media (min-width: 1024px) {
    margin: 2rem 0;
  }
`

export const SModalCloseButton = styled.button`
  position: absolute;
  top: -1.1rem;
  right: 1rem;
  width: 15px;
  height: 15px;
  border-radius: 0.1rem;
  cursor: pointer;
  border: none;
  background-color: transparent;
  svg {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    margin: 0 1.5rem;
    svg {
      font-size: 18px;
    }
  }
`

export const SModalInput = styled.div`
  display: flex;
  justify-content: start;
  align-items: left;
  width: 100%;
  height: 100%;
  background-color: white;
  flex-direction: column;
  span {
    margin: 0 0.5rem;
    @media (min-width: 1024px) {
      margin: 0 1.5rem;
      font-size: 18px;
    }
  }
  .react-datepicker-wrapper {
    border-radius: 0.1rem;
    border-style: none;
    padding: 1rem;
    margin: 0.5rem;
    ${SBorder(1, 'rgba(189, 186, 186, 0.75)')}
    border-bottom: 0.14rem solid gray;
    @media (min-width: 1024px) {
      padding: 0.5rem;
      input {
        padding: 1.5rem;
        font-size: 18px;
      }
    }
    input {
      border: none;
    }
    .react-datepicker__input-container {
      display: flex;
      overflow: hidden;
      input {
        flex-grow: 1
      }
    }
    @media (min-width: 1024px) {
      margin: 0.5rem 1.5rem 1.5rem;
      input {
        font-size: 18px;
      }
      
    }
  }
`

export const SModalInputText = styled(Input)`
  border-radius: 0.1rem;
  border-style: none;
  padding: 0.5rem;
  margin: 0.5rem;
  ${SBorder(1, 'rgba(189, 186, 186, 0.75)')}
  @media (min-width: 1024px) {
    input {
      padding: 1.5rem;
      font-size: 18px;
    }
  }
  &[disabled] {
    ${SShadow(0, 0)}
  }
  @media (min-width: 1024px) {
    margin: 0.5rem 1.5rem 1.5rem;
    font-size: 18px;
  }
`

export const SModalInputButton = styled(Button)`
  border-style: none;
  border-radius: 3px;
  border: 0;
  cursor: pointer;
  background: linear-gradient(45deg, #fb4b71 30%, #ff8e99 90%);
  color: white;
  height: 48px;
  padding: 0.5rem;
  margin: 0.5rem !important;
  span {
    color: white;
    svg {
      float: left;
      margin: 0 0.5rem;
      @media (min-width: 1024px) {
        margin-left: 0;
        font-size: 20px;
      }
    }
  }
  ${SShadow(1, 1, 1, 'rgba(255, 105, 135, 0.3)')}    
  &:hover {
    border: 1px 0 0 1px solid black;
    ${SShadow(1, 1, 1, 'rgba(255, 195, 74, 0.3)')}
  }
  &:active {
    ${SShadow(0, 0)}
  }
  @media (min-width: 1024px) {
    font-size: 18px;
    height: 5rem;
    margin: 1.5rem !important;
  }
`
