import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import User from "../../../../../models/user";


//GET USER FROM ID
export async function GET(request, { params }) {
      const { id } = params;
      await connectMongoDB();
      const user = await User.findOne({ _id: id })
      return NextResponse.json({ user }, { statuts: 200 });
}