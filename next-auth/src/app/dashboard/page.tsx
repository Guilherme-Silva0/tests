'use client'

import User from '@/components/User'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      router.push('/')
    }
  }, [session.status, router])

  return (
    <main className="flex h-screen w-screen flex-col gap-2 bg-slate-900 p-5">
      <h2 className="text-center text-2xl font-semibold text-gray-200">
        Hi {session.data?.user?.name}
      </h2>
      <User />
      <button
        className="m-auto w-fit rounded-lg bg-red-500 px-5 py-2 font-semibold text-gray-200 hover:opacity-80"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </main>
  )
}
