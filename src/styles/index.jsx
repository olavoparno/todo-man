import { css } from 'styled-components'

export const SShadow = (hLength = 1, vLength = 1, radius = 0, rgbaColor = 'rgba(0,0,0,0.75)') => css`
  -webkit-box-shadow: ${hLength}px ${vLength}px ${radius}px ${radius}px ${rgbaColor};
  -moz-box-shadow: ${hLength}px ${vLength}px ${radius}px ${radius}px ${rgbaColor};
  box-shadow: ${hLength}px ${vLength}px ${radius}px ${radius}px ${rgbaColor};
`

export const SBorder = (thickness = 0.2) => css`
  border: 1px solid rgba(94, 94, 94, ${thickness});
`

export const SGenericInput = css`
  border-radius: 0.1rem;
  border-style: none;
  padding: 1rem;
  margin: 0.5rem;
  @media (min-width: 1024px) {
    padding: 2rem;
    margin: 1.5rem;
  }
`
