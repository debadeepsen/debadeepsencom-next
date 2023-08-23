// export const THEME_COLOR = '#07afde'
// export const THEME_COLOR_DARK = '#02569b'

export const THEME_COLOR = '#01a2a2'
export const THEME_COLOR_DARK = '#008090'

export const LOCAL_STORAGE_KEYS = Object.freeze({
  MAIN: 'debadeepsencom_',
  get COLOR_MODE() {
    return this.MAIN + 'color_mode'
  }
})

export const reValidationObject = Object.freeze({
  next: {
    revalidate: Number(process.env.REVALIDATE_FREQUENCY) || false
  }
} as RequestInit)