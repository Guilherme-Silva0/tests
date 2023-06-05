'use client'

import { useSession } from 'next-auth/react'

const User = () => {
  const { data } = useSession()
  return <pre className="text-center text-gray-200">{JSON.stringify(data)}</pre>
}

export default User
