// app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import { users, User } from "@/lib/users";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const existing = users.find((user) => user.email === email);
  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }

  const newUser: User = { email, password };
  users.push(newUser);

  return NextResponse.json({ message: "User registered successfully" });
}
