// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { users } from "@/lib/users";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({ message: "Login successful" });
}
