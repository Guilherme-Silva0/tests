import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = {
    message: "Olá vindo da api!",
  };

  return NextResponse.json(res);
}

export async function POST(request: Request) {
  const res = {
    message: "Olá vindo da api!",
  };

  return NextResponse.json(res);
}
