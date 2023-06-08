import NextAuth from 'next-auth/next'
import prisma from '@/libs/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import { NextAuthOptions } from 'next-auth'
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
        username: { label: 'username', type: 'text' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email?.trim() || !credentials?.password?.trim()) {
          throw new Error('Invalid Credentials')
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        })

        if (!user || !user?.hashedPassword) {
          throw new Error('Invalid Credentials')
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword,
        )

        if (!passwordMatch) {
          throw new Error('Invalid Credentials')
        }

        if (!user) {
          return null
        }
        return user
      },
    }),
  ],
  secret: process.env.NEXT_SECRET,
  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_ENV === 'development',
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
