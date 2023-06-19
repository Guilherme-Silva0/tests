import { FormNewPostData } from '@/components/form/FormNewPost'
import axios from 'axios'

export interface IPostData {
  userId: number
  id: number
  title: string
  body: string
}

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

const useApi = () => ({
  getPosts: async (page: number) => {
    try {
      const { data }: { data: IPostData[] } = await api.get(
        `/posts?_page=${page}&_limit=12`,
      )

      return data
    } catch (error) {
      console.log('Error loading posts:', error)
    }
  },
  createPost: async (dataForm: FormNewPostData) => {
    try {
      const { data }: { data: IPostData } = await api.post('/posts', {
        userId: 1,
        ...dataForm,
      })

      return data
    } catch (error) {
      console.log('Error create post:', error)
    }
  },
})

export default useApi
