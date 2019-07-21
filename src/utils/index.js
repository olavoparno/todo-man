import { format, parseISO as parse } from 'date-fns'

export const fixOverflow = (isLoading) => {
  if (typeof document !== 'undefined') {
    const body = document.querySelector('body')
    if (body) {
      body.scrollIntoView()
      body.style.overflow = isLoading
        ? 'hidden'
        : 'scroll'
    }
  }
}

export const getToday = () => format(new Date(), 'dd-MM-yyyy')

export const parseISO = date => parse(date)
