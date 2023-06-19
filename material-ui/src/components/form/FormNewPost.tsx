'use client'

import { Backdrop, Box, IconButton, Paper } from '@mui/material'
import { XIcon } from 'lucide-react'
import { FC } from 'react'

interface IFormNewPostProps {
  open: boolean
  handleOpen: () => void
}

const FormNewPost: FC<IFormNewPostProps> = ({ open, handleOpen }) => {
  return (
    <Backdrop open={open} sx={{ padding: 2 }}>
      <Box component={Paper} elevation={5} padding={2} width="100%">
        <Box component="form" onSubmit={(data: any) => console.log(data)}>
          <IconButton
            onClick={handleOpen}
            sx={{ display: 'block', marginLeft: 'auto' }}
          >
            <XIcon />
          </IconButton>
          Eita
        </Box>
      </Box>
    </Backdrop>
  )
}

export default FormNewPost
