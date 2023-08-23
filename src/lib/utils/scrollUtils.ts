const scrollUtils = {
  getScrollPercent: (scrollTop: number) => {
    const docHeight = globalThis.document?.body.offsetHeight
    const winHeight = globalThis.window?.innerHeight
    const scrollPercent = scrollTop / (docHeight - winHeight)
    const scrollPercentRounded = Math.round(scrollPercent * 100)

    return scrollPercentRounded
  }
}

export default scrollUtils
