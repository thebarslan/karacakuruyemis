import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Product from "../../../../models/product";


// CREATE USER
export async function POST(request) {
      try {
            const { name, price, weight } = await request.json();
            await connectMongoDB();

            // Check if the user with the provided email already exists
            const existingProduct = await Product.findOne({ name });
            if (existingProduct) {
                  return NextResponse.json({ message: 'Product with this name already exists' }, { status: 400 });
            }

            const newProduct = await Product.create({ name, price, weight });

            return NextResponse.json({ message: 'Product Created' }, { status: 201 });
      } catch (error) {
            console.error('Error creating product:', error);
            return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
      }
}
// GET ALL USERS
export async function GET() {
      try {
            await connectMongoDB();
            const products = await Product.find({});
            return NextResponse.json({ products });
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


