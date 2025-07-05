import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { password } = await req.json()
  const correct = process.env.ADMIN_PASSWORD

  if (password !== correct) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  const res = NextResponse.json({ success: true })
  res.cookies.set('admin-auth', 'true', {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 8, // 8 minutes
    secure: process.env.NODE_ENV === 'production',
  })

  return res
}
