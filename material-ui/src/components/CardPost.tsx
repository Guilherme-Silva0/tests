'use client'

import { IPostData } from '@/libs/api'
import { Grid, Paper, Box, Typography } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

const CardPost: FC<{ post: IPostData }> = ({ post }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
      <Paper elevation={3} sx={{ height: '100%' }}>
        <Box p={2}>
          <Box
            sx={{
              overflow: 'hidden',
              width: '100%',
              height: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
            }}
          >
            <Image
              src={`https://picsum.photos/1080/1080?random=${post.id}`}
              alt="Post Image"
              layout="responsive"
              width={400}
              height={400}
            />
          </Box>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            sx={{
              overflow: 'hidden',
              maxHeight: '3.6em',
              maxWidth: 250,
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {post.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ overflow: 'hidden', maxHeight: 80 }}
          >
            {post.body.length > 80 ? post.body.slice(0, 60) + '...' : post.body}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  )
}

export default CardPost
