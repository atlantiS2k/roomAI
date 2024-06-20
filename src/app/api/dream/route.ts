import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.NODE_ENV
})

export async function POST(req: NextResponse) {
    const {imageUrl, theme, room} =  await req.json()
}