import { NextResponse } from "next/server";
import connect from "@/lib/db";
import User from "@/lib/models/user";
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;

// GET request to fetch the data of the user
export const GET = async () => {
  try {
    // Connect to the database
    await connect();

    // Fetch all users from the User collection
    const users = await User.find();

    // Return the user data as JSON with a 200 status
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    // Return an error response with a 500 status if fetching fails
    return NextResponse.json(
      { message: "Error in fetching users data", error: error.message },
      { status: 500 }
    );
  }
};

// POST request to create a new user
export const POST = async (request: Request) => {
  try {
    // Parse the request body to get the user data
    const body = await request.json();

    // Connect to the database
    await connect();

    // Create a new user instance with the provided data
    const newUser = new User(body);

    // Save the new user to the database
    await newUser.save();

    // Return a success response with the created user
    return NextResponse.json(
      { message: "User is created", user: newUser },
      { status: 200 }
    );
  } catch (error) {
    // Return an error response with a 500 status if creation fails
    return NextResponse.json(
      { message: "Error in creating user", error: error.message },
      { status: 500 }
    );
  }
};

// PATCH request to update a user's username
export const PATCH = async (request: Request) => {
  try {
    // Parse the request body to get the userId and new username
    const body = await request.json();
    const { userId, newUsername } = body;

    // Validate the provided userId
    if (!ObjectId.isValid(userId)) {
      return NextResponse.json(
        { message: "Invalid user ID" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connect();

    // Update the user's username in the database
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username: newUsername },
      { new: true } // Return the updated document
    );

    // If user is not found, return a 404 response
    if (!updatedUser) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // Return a success response with the updated user
    return NextResponse.json(
      { message: "User updated successfully", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    // Return an error response with a 500 status if update fails
    return NextResponse.json(
      { message: "Error in updating user", error: error.message },
      { status: 500 }
    );
  }
};

// DELETE request to delete a user
export const DELETE = async (request: Request) => {
  try {
    // Parse the userId from the query parameters
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    // Validate the provided userId
    if (!ObjectId.isValid(userId)) {
      return NextResponse.json(
        { message: "Invalid user ID" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connect();

    // Delete the user from the database by ID
    const deletedUser = await User.findByIdAndDelete(userId);

    // If user is not found, return a 404 response
    if (!deletedUser) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // Return a success response with the deleted user
    return NextResponse.json(
      { message: "User deleted successfully", user: deletedUser },
      { status: 200 }
    );
  } catch (error) {
    // Return an error response with a 500 status if deletion fails
    return NextResponse.json(
      { message: "Error in deleting user", error: error.message },
      { status: 500 }
    );
  }
};
