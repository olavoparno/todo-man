import { css } from 'styled-components'

export const SShadow = (hLength = 1, vLength = 1) => css`
  -webkit-box-shadow: ${hLength}px ${vLength}px 1px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: ${hLength}px ${vLength}px 1px 0px rgba(0,0,0,0.75);
  box-shadow: ${hLength}px ${vLength}px 1px 0px rgba(0,0,0,0.75);
`

export const SBorder = (thickness = 0.2) => css`
  border: 1px solid rgba(94, 94, 94, ${thickness});
`
