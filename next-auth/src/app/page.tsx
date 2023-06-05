import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import User from '@/components/User'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main className="flex h-screen w-screen flex-col gap-2 bg-slate-900 p-5">
      <h1 className="text-center text-3xl font-bold text-gray-200">Home</h1>
      <h2 className="text-center text-2xl font-semibold text-gray-200">
        Server side rendered
      </h2>
      <pre className="text-center text-gray-200">{JSON.stringify(session)}</pre>
      <h2 className="text-center text-2xl font-semibold text-gray-200">
        Client side rendered
      </h2>
      <User />
    </main>
  )
}
