import { colors } from './colors'

export const components = {
  button: {
    base: {
      backgroundColor: colors.primary,
      elevation: 1,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.primary,
      elevation: 0,
    },
  },

  buttonText: {
    base: {
      color: colors.white,
    },
    outline: {
      color: colors.primary,
    },
  },
}
