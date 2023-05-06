import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await res.json();

  return NextResponse.json({ id, users });
}

export async function POST(request: Request) {
  const res = {
    message: "Olá vindo da api!",
  };

  return NextResponse.json(res);
}
