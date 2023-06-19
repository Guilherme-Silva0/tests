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
        `/posts?_page=${page}&_limit=8`,
      )

      return data
    } catch (error) {
      console.log('Error loading posts:', error)
    }
  },
})

export default useApi
