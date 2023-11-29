import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import User from "../../../../models/user";
import microCors from "micro-cors";
import bcrypt from 'bcrypt';

const cors = microCors();
import { generateToken, setTokenCookie } from "../../../../libs/auth"; // Replace with the correct path

// CREATE USER
export async function POST(request) {
      try {
            const { name, surname, phoneNumber, email, password } = await request.json();
            await connectMongoDB();

            // Check if the user with the provided email already exists
            const existingUserEmail = await User.findOne({ email });
            if (existingUserEmail) {
                  return NextResponse.json({ message: 'User with this email already exists' }, { status: 400 });
            }

            // Check if the user with the provided phone number already exists
            const existingUserPhone = await User.findOne({ phoneNumber });
            if (existingUserPhone) {
                  return NextResponse.json({ message: 'User with this phone number already exists' }, { status: 400 });
            }

            // Create a new user
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ name, surname, phoneNumber, email, password: hashedPassword });

            // Generate a JWT token
            // const token = generateToken(newUser);

            // // Pass a callback function to set the token cookie in the response
            // setTokenCookie((header, value) => request.res.setHeader(header, value), token);

            return NextResponse.json({ message: 'User Created' }, { status: 201 });
      } catch (error) {
            console.error('Error creating user:', error);
            return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
      }
}
// GET ALL USERS
export async function GET() {
      try {
            await connectMongoDB();
            const users = await User.find({});
            return NextResponse.json({ users });
      } catch (error) {
            console.error("Error getting users:", error);
            return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
      }
}

// DELETE USER
export async function DELETE(request) {
      try {
            const id = request.nextUrl.searchParams.get("id");
            await connectMongoDB();
            await User.findByIdAndDelete(id);
            return NextResponse.json({ message: "User Deleted" }, { status: 200 });
      } catch (error) {
            console.error("Error deleting user:", error);
            return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
      }
}


