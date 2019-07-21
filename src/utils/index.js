import { format, parseISO as parse } from 'date-fns'

export const fixOverflow = (isLoading) => {
  if (typeof document !== 'undefined') {
    const body = document.querySelector('body')

    if (body) {
      const overflowValue = isLoading ? 'hidden' : 'scroll'

      body.scrollIntoView()
      body.style.overflow = overflowValue
    }
  }
}

export const getToday = () => format(new Date(), 'dd-MM-yyyy')

export const parseISO = date => parse(date)
