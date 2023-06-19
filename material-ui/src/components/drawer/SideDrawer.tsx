'use client'

import { useDrawerContext } from '@/context/DrawerContext'
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { ReactNode, useEffect } from 'react'
import ItemListLink from './ItemListLink'
import { HomeIcon, NewspaperIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useAppThemeContext } from '@/context/ThemeContext'

const SideDrawer = ({ children }: { children: ReactNode }) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const { isDrawerOpen, toggleDrawerOpen, DrawerOptions, SetDrawerOption } =
    useDrawerContext()

  const { themeName, toggleTheme } = useAppThemeContext()

  useEffect(() => {
    SetDrawerOption([
      {
        icon: HomeIcon,
        label: 'Home',
        to: '/',
      },
      {
        icon: NewspaperIcon,
        label: 'Posts',
        to: '/posts',
      },
    ])
  }, [SetDrawerOption])

  return (
    <Box width="100vw" height="100vh">
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{
                height: theme.spacing(12),
                width: theme.spacing(12),
              }}
            />
          </Box>

          <Divider />

          <Box flex="1">
            <List component="nav">
              {DrawerOptions.map((option) => (
                <ItemListLink
                  key={option.to}
                  label={option.label}
                  to={option.to}
                  icon={option.icon}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  {themeName === 'dark' ? <SunIcon /> : <MoonIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={themeName === 'dark' ? 'Light mode' : 'Dark Mode'}
                />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </Box>
  )
}

export default SideDrawer
