import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { randomInt } from 'crypto'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, password } = body

  if (!name.trim() || !email.trim() || !password.trim()) {
    return new NextResponse('Missing Fields', { status: 400 })
  }

  const existEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (existEmail) {
    return new NextResponse('email already exists', { status: 400 })
  }
  const randomSalt = randomInt(10, 16)
  const hashedPassword = await bcrypt.hash(password, randomSalt)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  })

  return NextResponse.json(user)
}
