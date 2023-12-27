import { createStyleSheet } from '../../libs/unistyles'

export const stylesheet = createStyleSheet(() => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
}))
