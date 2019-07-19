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
