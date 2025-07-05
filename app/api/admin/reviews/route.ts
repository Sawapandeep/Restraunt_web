import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

const filePath = path.resolve(process.cwd(), 'app/data/reviews.json')

export async function GET() {
  const data = await fs.readFile(filePath, 'utf8')
  return NextResponse.json(JSON.parse(data))
}

export async function POST(req: Request) {
  const body = await req.json()
  await fs.writeFile(filePath, JSON.stringify(body, null, 2))
  return NextResponse.json({ status: 'success' })
}
