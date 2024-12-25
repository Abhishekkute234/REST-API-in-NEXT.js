import { NextResponse } from "next/server";
import connect from "@/lib/db";
import User from "@/lib/models/user";

// GET request to fetch the data of the user
export const GET = async () => {
  try {
    // Connect to the database
    await connect();

    // Fetch all users
    const users = await User.find();

    // Return the user data as JSON with a 200 status
    return NextResponse.json(users, { status: 200 });
  } catch (error: any) {
    // Return an error response with a 500 status
    return NextResponse.json(
      { message: "Error in fetching users data", error: error.message },
      { status: 500 }
    );
  }
};
