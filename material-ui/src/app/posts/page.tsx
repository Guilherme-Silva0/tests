'use client'

import Header from '@/components/Header'
import ToolBar from '@/components/ToolBar'
import { Box, Grid, Skeleton } from '@mui/material'
import useApi, { IPostData } from '@/libs/api'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import CardPost from '@/components/CardPost'
import FormNewPost from '@/components/form/FormNewPost'

export default function Products() {
  const [posts, setPosts] = useState<IPostData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [openFormNewPost, setOpenFormNewPost] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const boxRef = useRef<HTMLDivElement>(null)
  const { getPosts } = useApi()

  const loadPosts = useCallback(async () => {
    getPosts(page)
      .then((data) => {
        setPosts((prevPosts) => [...prevPosts, ...data!])
        setPage((prevPage) => prevPage + 1)
      })
      .catch((error) => console.log('Error loading posts:', error))
      .finally(() => setIsLoading(false))
  }, [page, getPosts])

  const handleScroll = useCallback(() => {
    const boxElement = boxRef.current
    if (
      boxElement &&
      boxElement.scrollTop + boxElement.clientHeight >=
        boxElement.scrollHeight &&
      !isLoading
    ) {
      loadPosts()
    }
  }, [isLoading, loadPosts])

  const filteredPosts = useMemo(() => {
    if (searchTerm.trim()) {
      return posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase().trim()),
      )
    }
    return posts
  }, [posts, searchTerm])

  useEffect(() => {
    const boxElement = boxRef.current
    if (boxElement) {
      boxElement.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (boxElement) {
        boxElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [handleScroll])

  useEffect(() => {
    loadPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box height="100vh" display="flex" padding={2} flexDirection="column">
      <Header title="Posts" />
      <ToolBar
        showSearchInput
        searchText={searchTerm}
        onChangeSearchText={setSearchTerm}
        onClickButtonNew={() => setOpenFormNewPost((oldOpen) => !oldOpen)}
      />
      <FormNewPost
        open={openFormNewPost}
        handleOpen={() => setOpenFormNewPost((oldOpen) => !oldOpen)}
      />
      <Box flexGrow={1} overflow="auto" marginY={2} ref={boxRef}>
        <Grid container spacing={2}>
          {isLoading
            ? Array.from(Array(8).keys()).map((index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Skeleton variant="rectangular" height={200} />
                  <Skeleton variant="text" height={30} />
                  <Skeleton variant="text" height={30} />
                  <Skeleton variant="text" height={30} />
                </Grid>
              ))
            : filteredPosts.map((post) => (
                <CardPost post={post} key={post.id} />
              ))}
        </Grid>
      </Box>
    </Box>
  )
}
