import { NextResponse } from "next/server";

export function GET(){
    return new NextResponse(JSON.stringify({msg:"my first backend"}),{status:200})
}