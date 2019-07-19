import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const SLoadingBackground = styled.div`
  position: fixed;;
  width: 100vw;
  height: 100vh;
  background-color: rgba(194, 194, 194, 0.7);
  z-index: 99;
  justify-content: center;
  align-items: center;
  display: flex;
`

export const SLoading = styled.div`
  border: 0.5rem solid #f3f3f3;
  border-top: 0.5rem solid rgba(87,144,207, 1);
  border-bottom: 0.5rem solid rgba(87,144,207, 1);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  animation: ${rotate} 2s linear infinite;
`
