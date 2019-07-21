import styled from 'styled-components'

import { SBorder, SShadow, SGenericInput } from '../../styles'

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
    margin: 0.5rem;
    padding: 0.5rem;
    ${SBorder(0.2)}
    ${SShadow(1, 1)}
    input {
      border: none;
    }
    @media (min-width: 1024px) {
      margin: 1.5rem;
      input {
        font-size: 18px;
      }
    }
  }
`

export const SModalInputText = styled.input`
  border-radius: 0.1rem;
  border-style: none;
  margin: 0.5rem;
  padding: 0.5rem;
  ${SBorder(0.2)}
  ${SShadow(1, 1)}
  &[disabled] {
    ${SShadow(0, 0)}
  }
  @media (min-width: 1024px) {
    margin: 1.5rem;
    font-size: 18px;
  }
`

export const SModalInputButton = styled.button`
  ${SGenericInput}
  background-color: rgba(147, 98, 245, 0.8);
  color: white;
  cursor: pointer;
  ${SBorder(0.2)}
  ${SShadow(1, 1)}
  svg {
    float: left;
    margin-left: 0.5rem;
    @media (min-width: 1024px) {
      margin-left: 0;
      font-size: 20px;
    }
  }
  &:hover {
    border: 1px 0 0 1px solid black;
    ${SShadow(1, 1, 1, 'rgba(255, 195, 74, 0.3)')}
  }
  &:active {
    ${SShadow(0, 0)}
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`
