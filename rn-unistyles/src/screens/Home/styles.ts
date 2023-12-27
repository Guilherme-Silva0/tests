import { createStyleSheet } from '../../libs/unistyles'

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    width: '100%',
    height: 184,
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    paddingTop: 48,
  },
  img: {
    height: 232,
    width: 140,
  },
  content: {
    flex: 1,
    marginTop: 72,
    padding: 32,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: theme.colors.black,
  },
  title: {
    fontSize: theme.fontSize.xl,
    fontWeight: '700',
  },
  description: {
    fontSize: theme.fontSize.md,
    lineHeight: 24,
    marginTop: 8,
  },
  product: {
    color: theme.colors.primary,
    fontWeight: '700',
  },
  rating: {
    marginTop: 42,
    flex: 1,
  },
}))
