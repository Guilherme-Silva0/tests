'use client'

import { useDrawerContext } from '@/context/DrawerContext'
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { MenuIcon } from 'lucide-react'

interface IHeaderProps {
  title: string
}

const Header = ({ title }: IHeaderProps) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const { toggleDrawerOpen } = useDrawerContext()
  return (
    <Box
      width="100%"
      display="flex"
      paddingBottom={1}
      alignItems="center"
      gap={0.5}
    >
      {smDown && (
        <IconButton onClick={toggleDrawerOpen}>
          <MenuIcon />
        </IconButton>
      )}
      <Typography
        variant={smDown ? 'h6' : mdDown ? 'h5' : 'h4'}
        fontWeight="500"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        component="h2"
      >
        {title}
      </Typography>
    </Box>
  )
}

export default Header
