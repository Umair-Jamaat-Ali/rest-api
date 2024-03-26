import { dbConnection } from "@/config/dbConnectio";
import User from "@/schemas/userSchema/User";
import { NextResponse } from "next/server";



export async function POST(req) {
   try {
    dbConnection();
    let body = await req.json()
    console.log("Received body:",body);
    const newUser = new user(body)
    await newUser.save()
    return NextResponse.json({message:"your request has been post"})
   } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      message: "something went wrong",
      error: "Failed to create user. Please try again.",
    });
   }
}


export async function GET(req) {
    // let body = req.nextUrl.searchParams
    // console.log(body);

    return Response.json("your get request has been received")
}

