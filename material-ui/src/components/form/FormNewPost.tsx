'use client'

import {
  Backdrop,
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { NewspaperIcon, TypeIcon, XIcon } from 'lucide-react'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import Input from './Input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import useApi, { IPostData } from '@/libs/api'

interface IFormNewPostProps {
  open: boolean
  handleOpen: () => void
  setPosts: Dispatch<SetStateAction<IPostData[]>>
}

const schema = z.object({
  title: z.string().trim().nonempty('All inputs are required'),
  body: z.string().trim().nonempty('All inputs are required'),
})

export type FormNewPostData = z.infer<typeof schema>

const FormNewPost: FC<IFormNewPostProps> = ({ open, handleOpen, setPosts }) => {
  const [isLoading, setIsLoading] = useState(false)
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const { createPost } = useApi()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormNewPostData>({
    defaultValues: {
      title: '',
      body: '',
    },
    resolver: zodResolver(schema),
  })

  const onSubmitForm = async (data: FormNewPostData) => {
    setIsLoading(true)
    createPost(data)
      .then((data) => {
        setPosts((oldPosts) => [data!, ...oldPosts])
      })
      .finally(() => {
        setIsLoading(false)
        handleOpen()
      })
  }

  return (
    <Backdrop
      open={open}
      sx={{ padding: 2, marginLeft: smDown ? 0 : theme.spacing(28) }}
    >
      <Box
        component={Paper}
        elevation={5}
        padding={theme.spacing(smDown ? 2 : 3)}
        width={smDown ? '100%' : theme.spacing(70)}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant={smDown ? 'h5' : 'h4'}
            component="h2"
            marginLeft={theme.spacing(smDown ? 1 : 2)}
          >
            Create a new post
          </Typography>
          <IconButton onClick={handleOpen}>
            <XIcon />
          </IconButton>
        </Stack>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Stack
            spacing={2}
            marginTop={theme.spacing(4)}
            paddingX={theme.spacing(smDown ? 1 : 2)}
          >
            <Input
              id="title"
              type="Text"
              label="Title"
              disabled={isLoading}
              errors={errors}
              register={register}
              icon={TypeIcon}
            />
            <Input
              id="body"
              type="Text"
              label="Body"
              disabled={isLoading}
              errors={errors}
              register={register}
              multiline
              rows={3}
              icon={NewspaperIcon}
            />
            <Button type="submit" variant="contained" disabled={isLoading}>
              Create
            </Button>
          </Stack>
        </form>
      </Box>
    </Backdrop>
  )
}

export default FormNewPost
