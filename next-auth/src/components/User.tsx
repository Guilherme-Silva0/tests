'use client'

import { useSession } from 'next-auth/react'

const User = () => {
  const { data } = useSession()
  return <pre className="text-gray-200">{JSON.stringify(data, null, 2)}</pre>
}

export default User
